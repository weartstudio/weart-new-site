// A Next.js kapcsolat-űrlap szerveroldali proxyja a WordPress Gravity Forms
// REST API v2 felé. Így nincs CORS-gond, és a WP-cím nem kerül a kliensbe.
//
// A GF form ID-t az import UTÁN állítsd be: GF admin → Forms → a forma
// "ID" oszlopa. Felülírható a GF_FORM_ID / WP_BASE_URL env változóval.

const WP_BASE_URL = process.env.WP_BASE_URL ?? 'https://dev.weart.hu';
const GF_FORM_ID = process.env.GF_FORM_ID ?? '5';

const SUBMIT_URL = `${WP_BASE_URL}/wp-json/gf/v2/forms/${GF_FORM_ID}/submissions`;

// A /submissions végpont publikus, auth nélkül is működik. De ha a REST
// API mindenhez kulcsot kér (pl. security plugin), opcionálisan Basic
// Auth-tal hívjuk — csak ha mindkét kulcs megvan az env-ben.
function authHeaders(): Record<string, string> {
  const ck = process.env.gravity_ck;
  const cs = process.env.gravity_cs;
  if (!ck || !cs) return {};
  return { Authorization: `Basic ${Buffer.from(`${ck}:${cs}`).toString('base64')}` };
}

type Payload = {
  topic?: string;
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  budget?: string;
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

  // A kulcsok a weart-kapcsolat-form.json mező-ID-jaihoz igazodnak.
  const gfInput = {
    input_1: body.topic ?? '',
    input_2: body.name ?? '',
    input_3: body.company ?? '',
    input_4: body.email ?? '',
    input_5: body.phone ?? '',
    input_6: body.budget ?? '',
    input_7: body.message ?? '',
    input_8_1: body.consent ? '1' : '',
  };

  let gfRes: Response;
  try {
    gfRes = await fetch(SUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Tisztességes, azonosító UA — az undici alapértelmezett UA-ja
        // bot-gyanús egyes spam-szűrőknek.
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

  // A GF submissions végpont 200-at ad is_valid:false-szal is, ha a
  // form-validáció elbukik — a mezőnkénti üzeneteket összefűzzük.
  if (!gfRes.ok || !data || data.is_valid === false) {
    console.error(`[kapcsolat] GF ${gfRes.status} hibás válasz: ` + raw.slice(0, 600));
    const messages = data?.validation_messages
      ? Object.values(data.validation_messages as Record<string, string>).join(' ')
      : 'Nem sikerült elküldeni az űrlapot. Ellenőrizd a mezőket, vagy hívj: +36 30 / 195 8114.';
    return Response.json({ ok: false, message: messages }, { status: 422 });
  }

  // is_spam: az entry létrejött, de a GF spamnek jelölte → NEM megy ki
  // értesítő, a lead elveszne. Inkább ne mutassunk hamis sikert.
  if (data.is_spam === true) {
    console.error('[kapcsolat] GF az entryt SPAM-nek jelölte — nincs értesítő.');
    return Response.json(
      {
        ok: false,
        message:
          'A küldést a rendszer nem tudta feldolgozni. Kérlek írj közvetlenül az info@weart.hu címre, vagy hívj: +36 30 / 195 8114.',
      },
      { status: 422 },
    );
  }

  return Response.json({ ok: true });
}
