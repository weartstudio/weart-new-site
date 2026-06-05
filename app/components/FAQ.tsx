'use client';

import { useState } from 'react';
import Link from 'next/link';

const items = [
  {
    q: 'Mennyibe kerül egy weboldal vagy webshop?',
    a: 'Egy bemutatkozó weboldal általában 300–350 ezer Ft-tól, egy céges oldal 500–600 ezer Ft-tól, egy átlagos webshop 700–900 ezer Ft-tól indul. Átalányadós formában számlázunk — ÁFA nélkül, az ajánlatban látott összeg a fizetendő. A pontos árat az ingyenes konzultáció után, két munkanapon belül küldjük, tételes lebontással.',
  },
  {
    q: 'Mi a különbség köztetek és egy ügynökség / Wix / ismerős között?',
    a: 'Ügynökségnél gyakran junior dolgozik rajtad, és változik a kapcsolattartó. Wix-nél sablon és korlátok — nehezen skálázható, lassabb alap. Ismerősnél nincs garancia és határidő. Nálunk Balázs végig kódol egyedi WordPress alapon, Fanni koordinál, fix árat és 60 nap garanciát kapsz.',
  },
  {
    q: 'Mennyi időbe telik egy weboldal elkészítése?',
    a: 'Egy bemutatkozó oldal általában 3 hét, egy nagyobb céges oldal 4–6 hét, egy webshop 6–8 hét. A pontos időtartam attól függ, hogy mikorra adod le a szövegeket és képeket — ezt előre megbeszéljük.',
  },
  {
    q: 'Mi van, ha még nincs logóm vagy szövegem?',
    a: 'Az is rendben van. Tudunk logót tervezni, és ajánlunk megbízható copywritert is. Képanyag hiányában segítünk összeszedni, mit érdemes beszerezni — a konzultáción végigvesszük, mire van szükség.',
  },
  {
    q: 'Tudom magam módosítani az oldalt utána?',
    a: 'Igen — ez nálunk alap. Egyedi WordPress szerkesztőfelületre építünk, és átadáskor kapsz egy 1 órás betanítást videóval együtt. Új termék, blogbejegyzés vagy kép feltöltése fejlesztő nélkül, bárki a csapatodból.',
  },
  {
    q: 'Megtartjátok a meglévő domaint és e-maileket?',
    a: 'Igen. Átköltöztetjük az oldalt az új rendszerre — a domain és az e-mail működése közben nem áll le. Ha nincs még domainod, segítünk a regisztrációban és a beállításban is.',
  },
  {
    q: 'Kell-e havi díjat fizetnem utána?',
    a: 'A weboldalért egyszer fizetsz, az a tied. A tárhely nálunk 25–35 ezer Ft / év (a domaint külön kell megújítani). Karbantartást havidíjban 10 ezer Ft-ért vállalunk — frissítés, mentés, kisebb módosítások. Nem kötelező, de ajánljuk.',
  },
  {
    q: 'Kiállítotok számlát? Van rajta ÁFA?',
    a: 'Igen, számlát állítunk ki átalányadó szerint — ÁFA nélkül. Az ajánlatban szereplő összeg a végösszeg, nincs rá felszámítandó ÁFA. A munkadíj 30%-a előleg (szerződéskötéskor), a maradék átadáskor.',
  },
  {
    q: 'Mi van, ha nem elégedett vagyok?',
    a: 'Az első egyeztetés és wireframe (vázlat) szakaszban bármikor visszaléphetsz, ekkor csak az addigi munka árát számlázzuk. A kész oldalra 60 nap garancia jár — ha valami nem úgy működik, ahogy kellene, javítjuk.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="sec" id="faq">
      <div className="container">
        <div className="faq-grid">
          <div className="reveal">
            <div className="sec-tag">Gyakori kérdések</div>
            <h2 className="sec-h">Árak, határidők, technika —<br /><em>őszintén válaszolunk.</em></h2>
            <p style={{ marginTop: 24, color: 'var(--muted)', fontSize: 16, maxWidth: 380, lineHeight: 1.6 }}>
              Nem találod a tiéd? <Link href="/contact" style={{ color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: 3 }}>Írj nekünk</Link> — két munkanapon belül válaszolunk.
            </p>
          </div>
          <div className="faq reveal">
            {items.map((it, idx) => (
              <div key={idx} className={`faq-item${open === idx ? ' open' : ''}`} onClick={() => setOpen(open === idx ? -1 : idx)}>
                <div className="faq-q">{it.q}<span className="pls" /></div>
                <div className="faq-a">{it.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
