// Proxy a kapcsolat oldal rövid üzenetküldőjéhez → WordPress Gravity Forms
// Form: gravity-forms/weart-kapcsolat-uzenet.json (4 mező, ID alapértelmezés: 6)
// Form ID beállítás import után: GF admin → Forms → "ID" oszlop → GF_CONTACT_FORM_ID env

const WP_BASE_URL = process.env.WP_BASE_URL ?? 'https://dev.weart.hu';
const GF_FORM_ID = process.env.GF_CONTACT_FORM_ID ?? '6';

const SUBMIT_URL = `${WP_BASE_URL}/wp-json/gf/v2/forms/${GF_FORM_ID}/submissions`;

function authHeaders(): Record<string, string> {
  const ck = process.env.gravity_ck;
  const cs = process.env.gravity_cs;
  if (!ck || !cs) return {};
  return { Authorization: `Basic ${Buffer.from(`${ck}:${cs}`).toString('base64')}` };
}

type Payload = {
  name?: string;
  email?: string;
  message?: string;
  consent?: string;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, message: 'Hibás kérés.' }, { status: 400 });
  }

  const gfInput = {
    input_1: body.name ?? '',
    input_2: body.email ?? '',
    input_3: body.message ?? '',
    input_4_1: body.consent ? '1' : '',
  };

  let gfRes: Response;
  try {
    gfRes = await fetch(SUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'weART-contact-form/1.0 (+https://weart.hu)',
        ...authHeaders(),
      },
      body: JSON.stringify(gfInput),
    });
  } catch {
    return Response.json(
      { ok: false, message: 'Most nem érjük el a szervert. Hívj minket: +36 30 / 195 8114.' },
      { status: 502 },
    );
  }

  const raw = await gfRes.text();
  let data: Record<string, unknown> | null = null;
  try {
    data = JSON.parse(raw);
  } catch {
    data = null;
  }

  if (!gfRes.ok || !data || data.is_valid === false) {
    console.error(`[contact] GF ${gfRes.status} hibás válasz: ` + raw.slice(0, 600));
    const messages = data?.validation_messages
      ? Object.values(data.validation_messages as Record<string, string>).join(' ')
      : 'Nem sikerült elküldeni az üzenetet. Hívj minket: +36 30 / 195 8114.';
    return Response.json({ ok: false, message: messages }, { status: 422 });
  }

  if (data.is_spam === true) {
    console.error('[contact] GF az entryt SPAM-nek jelölte — nincs értesítő.');
    return Response.json(
      {
        ok: false,
        message:
          'A küldést a rendszer nem tudta feldolgozni. Írj közvetlenül az info@weart.hu címre, vagy hívj: +36 30 / 195 8114.',
      },
      { status: 422 },
    );
  }

  return Response.json({ ok: true });
}
