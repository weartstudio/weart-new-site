'use client';

import { useState, useEffect } from 'react';

const items = [
  {
    quote: (<>Sokakkal egyeztettem az új honlap miatt, de itt éreztem először, hogy <em>tényleg értik, mit csinálok.</em> Két hónap után már egyértelműen több ajánlatkérés érkezik.</>),
    initial: 'K', name: 'Kovács István', role: 'Tulajdonos · Kovács Lakatos Kft.'
  },
  {
    quote: (<>Korábban három fejlesztővel próbálkoztunk, mind <em>elszúrta a határidőt.</em> Itt pontosan azt kaptuk, amiben megállapodtunk — és ami fontosabb, határidőre.</>),
    initial: 'N', name: 'Nagy Eszter', role: 'Ügyvezető · Eszter Cukrászda'
  },
  {
    quote: (<>A webshopunk az indulás óta <em>háromszor annyi rendelést hoz,</em> mint a régi. A betanítás után a feleségem is magabiztosan kezeli a termékeket.</>),
    initial: 'S', name: 'Szabó Tamás', role: 'Alapító · Bortrezor.hu'
  },
  {
    quote: (<>Nem ígértek csodát, hanem <em>elmagyarázták, mit miért javasolnak.</em> Ez ritka manapság. Az oldal gyors, szép, és tényleg hozza az ügyfeleket.</>),
    initial: 'H', name: 'Horváth Andrea', role: 'Tulajdonos · Andrea Bútor Stúdió'
  }
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % items.length), 6500);
    return () => clearInterval(t);
  }, []);
  const t = items[i];
  return (
    <div className="testimonial testimonial-rotator" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)', color: '#fff' }}>
      <div className="quote-mark" aria-hidden="true">&ldquo;</div>
      <div className="testimonial-slide" key={i} style={{ animation: 'tFade .6s ease both', display: 'contents' }}>
        <div className="quote" style={{ color: '#fff' }}>{t.quote}</div>
        <div className="author">
          <div className="avatar">{t.initial}</div>
          <div>
            <div className="author-name" style={{ color: '#fff' }}>{t.name}</div>
            <div className="author-role" style={{ color: 'rgba(255,255,255,0.5)' }}>{t.role}</div>
          </div>
        </div>
      </div>
      <div className="testimonial-dots" role="tablist">
        {items.map((_, n) => (
          <button key={n} className={`t-dot${n === i ? ' active' : ''}`} onClick={() => setI(n)} aria-label={`Vélemény ${n + 1}`} />
        ))}
      </div>
    </div>
  );
}
