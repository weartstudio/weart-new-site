'use client';

import { useState } from 'react';

const items = [
  { q: 'Mennyi időbe telik egy weboldal elkészítése?', a: 'Egy bemutatkozó oldal általában 3 hét, egy nagyobb céges oldal 4–6 hét, egy webshop 6–8 hét. A pontos időtartam attól függ, hogy mikorra adod le a szövegeket és képeket — ezt előre megbeszéljük.' },
  { q: 'Mi van, ha még nincs logóm vagy szövegem?', a: 'Az is rendben van. Tudunk logót tervezni, és ajánlunk megbízható copywritert is. Ha nincs képanyag, közös fotózást szervezünk a vállalkozásodról — ez sokszor a legjobb döntés.' },
  { q: 'Tudom magam módosítani az oldalt utána?', a: 'Igen — ez nálunk alap. WordPress alapra építünk, és átadáskor kapsz egy 1 órás betanítást videóval együtt. Új termék, új blogbejegyzés, új képek — bárki fel tudja vinni a csapatból.' },
  { q: 'Kell-e havi díjat fizetnem utána?', a: 'A weboldalért egyszer fizetsz, az a tied. Tárhelyet és domaint évente kell megújítani (kb. 30–40 ezer Ft / év). Karbantartást is tudunk havidíjban (29.900 Ft-tól) — ez nem kötelező, de ajánljuk.' },
  { q: 'Számlát adtok ÁFÁ-val?', a: 'Igen, magyar Kft-ként számlát állítunk ki, ÁFA-tartalommal. A munkadíj 30%-a előleg (szerződéskötéskor), a maradék átadáskor.' },
  { q: 'Mi van, ha nem elégedett vagyok?', a: 'Az első egyeztetés és wireframe (vázlat) szakaszban bármikor visszaléphetsz, ekkor csak az addigi munka árát számlázzuk. A kész oldalra 60 nap garancia jár — ha valami nem úgy működik, ahogy kellene, javítjuk.' }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="sec" id="faq">
      <div className="container">
        <div className="faq-grid">
          <div className="reveal">
            <div className="sec-tag">Gyakori kérdések</div>
            <h2 className="sec-h">Amiket a legtöbben<br /><em>megkérdeznek.</em></h2>
            <p style={{ marginTop: 24, color: 'var(--muted)', fontSize: 16, maxWidth: 380, lineHeight: 1.6 }}>
              Nem találod a tiéd? Írj nyugodtan — egy munkanapon belül válaszolunk.
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
