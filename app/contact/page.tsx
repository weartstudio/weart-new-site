'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Phone, Mail, Calendar, Check, MapPin, Clock, Briefcase } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import RevealWrapper from '../components/RevealWrapper';

const faqItems = [
  { q: 'Mi történik az ajánlatkérés után?', a: 'Fanni egy munkanapon belül e-mailben válaszol, és felajánl 2-3 időpontot egy 30 perces hívásra. A híváson végigmegyünk azon, mire van szükséged. 2-3 nappal később kapsz egy fix árajánlatot tételesen — nincs „kb. ennyibe kerül", konkrét számot adunk.' },
  { q: 'Tényleg ingyenes a konzultáció? Nincs sales?', a: 'Igen, és nem. A 30 perc tényleg ingyenes és kötelezettségmentes. Sem a hívás után, sem azt követően nem kapsz „követő" e-maileket — egy ajánlatot küldünk, és ha érdekel, te jelentkezel vissza.' },
  { q: 'Mennyi idő mire elkészül egy oldal?', a: 'Egyszerűbb bemutatkozó oldal 3-4 hét, komplexebb cégoldal vagy webshop 5-8 hét, ha minden tartalom időben rendelkezésre áll. A pontos határidőt mindig az ajánlatban garantáljuk, és kötbérezzük is.' },
  { q: 'Milyen tartalmakra lesz szükségem?', a: 'Általában: logó (vagy csak ötlet — mi is csinálunk), pár fotó a cégről/munkáidról, és a szövegekhez egy kezdő vázlat. Ha nincs még semmi, ne aggódj — a konzultáción végigvesszük, és segítünk összeszedni.' },
  { q: 'Vidékről is dolgoztok ügyfelekkel?', a: 'Természetesen. Az ország bármely pontjáról szívesen fogadunk megkereséseket, az egész folyamat online is megy: konzultáció Meet-en, anyagok e-mailben, közös wireframe a böngészőben. Eddig 14 megyéből volt ügyfelünk.' },
  { q: 'Mi van, ha közben meggondolom magam?', a: 'Az ajánlat ingyenes és nem köt semmihez. Ha az ajánlat után nemet mondasz, az teljesen rendben van — nem zaklatunk vele utólag. A szerződés aláírása után 14 napig még díjmentesen visszaléphetsz.' },
];

export default function KapcsolatPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTopic, setActiveTopic] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Nav />

      <header className="page-head">
        <div className="container">
          <div className="sec-tag">Kapcsolat</div>
          <h1 className="page-h1">Beszéljünk az<br/><span className="underline">oldaladról.</span></h1>
          <p className="page-lead">Mondd el pár mondatban, mire van szükséged — egy munkanapon belül válaszolunk, és időpontot egyeztetünk egy díjmentes konzultációra. Nincs kötelezettség, nincs marketing duma.</p>

          <div className="head-meta">
            <div className="meta-item">
              <div className="num"><span className="pulse"></span>1 munkanap</div>
              <div className="lbl">Válaszadási idő</div>
            </div>
            <div className="meta-item">
              <div className="num">30 perc</div>
              <div className="lbl">Ingyenes konzultáció</div>
            </div>
            <div className="meta-item">
              <div className="num">2026 Q3</div>
              <div className="lbl">Még 2 szabad hely</div>
            </div>
            <div className="meta-item">
              <div className="num">100%</div>
              <div className="lbl">Magyarul, érthetően</div>
            </div>
          </div>
        </div>
      </header>

      <section className="sec" id="form">
        <div className="container">
          <div className="contact-grid">

            {/* Fanni card */}
            <aside className="fanni-card reveal">
              <div className="fanni-head">
                <div className="fanni-photo">
                  <Image src="/fanni-small.jpg" alt="Fanni" width={84} height={84} style={{ borderRadius: '50%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div className="fanni-name">Ágoston Fanni</div>
                  <div className="fanni-role">Ügyfélkapcsolat · Társalapító</div>
                </div>
              </div>

              <p className="fanni-bio">Hozzám fut be minden megkeresés. <b>Te csak szólsz</b> — én visszahívlak, megbeszéljük, mire van szükséged, és <b>egy munkanapon belül</b> küldök egy reális, fix árajánlatot. Nincs sales-folyamat, nincs „felfedező hívás" után 5 emailes követés.</p>

              <div className="availability">
                <span className="avail-dot"></span>
                <span><b>Most elérhető</b> · H–P 9:00–17:00 között veszem fel a telefont</span>
              </div>

              <div className="channels">
                <a className="channel" href="tel:+36301958114">
                  <span className="ch-ico">
                    <Phone size={18} />
                  </span>
                  <div className="ch-meta">
                    <div className="ch-lbl">Telefon · leggyorsabb</div>
                    <div className="ch-val">+36 30 / 195 8114</div>
                  </div>
                  <span className="ch-arrow">→</span>
                </a>
                <a className="channel" href="mailto:info@weart.hu">
                  <span className="ch-ico">
                    <Mail size={18} />
                  </span>
                  <div className="ch-meta">
                    <div className="ch-lbl">E-mail · részletek</div>
                    <div className="ch-val">info@weart.hu</div>
                  </div>
                  <span className="ch-arrow">→</span>
                </a>
                <a className="channel" href="https://cal.com" target="_blank" rel="noopener noreferrer">
                  <span className="ch-ico">
                    <Calendar size={18} />
                  </span>
                  <div className="ch-meta">
                    <div className="ch-lbl">Naptár · 30 perces hívás</div>
                    <div className="ch-val">Időpont foglalása</div>
                  </div>
                  <span className="ch-arrow">→</span>
                </a>
              </div>
            </aside>

            {/* Form */}
            <div className="form-card reveal">
              <div className="form-head">
                <div>
                  <h3>Mondd el, <em>mire van szükséged.</em></h3>
                  <p>Minél több részletet írsz, annál pontosabb lesz az ajánlat. Pár mondat is elég.</p>
                </div>
                <span className="step-pill">≈ 2 perc</span>
              </div>

              {!submitted ? (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} noValidate>
                  <div className="form-grid">
                    <div className="field full">
                      <label>Mivel tudunk segíteni? <span className="req">*</span></label>
                      <div className="topic-chips">
                        {['Új weboldal', 'Webshop indítás', 'Régi oldal felújítása', 'SEO & Google Ads', 'Karbantartás', 'Egyéb / nem tudom még'].map(t => (
                          <button type="button" key={t} className={`topic-chip${activeTopic === t ? ' active' : ''}`} onClick={() => setActiveTopic(t)}>{t}</button>
                        ))}
                      </div>
                    </div>

                    <div className="field">
                      <label htmlFor="name">Neved <span className="req">*</span></label>
                      <input type="text" id="name" name="name" placeholder="Kovács István" required />
                    </div>
                    <div className="field">
                      <label htmlFor="company">Cégnév</label>
                      <input type="text" id="company" name="company" placeholder="Kovács Lakatos Kft." />
                    </div>
                    <div className="field">
                      <label htmlFor="email">E-mail cím <span className="req">*</span></label>
                      <input type="email" id="email" name="email" placeholder="istvan@cegnev.hu" required />
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Telefonszám</label>
                      <input type="tel" id="phone" name="phone" placeholder="+36 30 123 4567" />
                    </div>

                    <div className="field full">
                      <label>Tervezett keret</label>
                      <div className="budget-row">
                        <label><input type="radio" name="budget" value="500-" /><span>500e Ft alatt</span></label>
                        <label><input type="radio" name="budget" value="500-1500" /><span>500e – 1,5M</span></label>
                        <label><input type="radio" name="budget" value="1500-3000" /><span>1,5M – 3M</span></label>
                        <label><input type="radio" name="budget" value="3000+" /><span>3M felett / nem tudom</span></label>
                      </div>
                    </div>

                    <div className="field full">
                      <label htmlFor="message">Pár sor arról, mire gondolsz <span className="req">*</span></label>
                      <textarea id="message" name="message" placeholder="Pl.: Lakatos cég vagyunk Pest megyében, szükségünk lenne egy egyszerű bemutatkozó oldalra árajánlatkérővel és galériával." required></textarea>
                    </div>
                  </div>

                  <div className="form-foot">
                    <label className="consent">
                      <input type="checkbox" required />
                      <span>Elolvastam és elfogadom az <a href="#">adatkezelési tájékoztatót</a>. Az adataimat kizárólag a megkeresésem megválaszolására használjátok.</span>
                    </label>
                    <button type="submit" className="submit">Küldöm az ajánlatkérést <span className="arrow">→</span></button>
                  </div>
                </form>
              ) : (
                <div className="success-msg show">
                  <span className="success-ico">
                    <Check size={22} strokeWidth={2.5} />
                  </span>
                  <div>
                    <h4>Megkaptuk. Köszi!</h4>
                    <p>Egy munkanapon belül válaszol Fanni a megadott e-mail címre. Ha sürgős, hívd nyugodtan: <b>+36 30 / 195 8114</b>.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mi történik ezután */}
      <section className="next-section">
        <div className="container">
          <div className="next-card reveal">
            <div>
              <div className="sec-tag">Mi történik most?</div>
              <h2>Nem tűnünk el<br/>az „Érdeklődöm" gomb után — <em>4 lépés, ennyi.</em></h2>
            </div>
            <div className="steps">
              <div className="step">
                <div className="step-num">/ 01</div>
                <div className="step-title">Visszahívunk</div>
                <div className="step-desc">Fanni felveszi a kapcsolatot 1 munkanapon belül, megbeszélünk egy 30 perces időpontot.</div>
                <div className="step-time">~ 1 munkanap</div>
              </div>
              <div className="step">
                <div className="step-num">/ 02</div>
                <div className="step-title">Konzultáció</div>
                <div className="step-desc">30 perc telefon vagy Meet — végigvesszük, mit szeretnél, milyen tartalmaid vannak.</div>
                <div className="step-time">30 perc · ingyenes</div>
              </div>
              <div className="step">
                <div className="step-num">/ 03</div>
                <div className="step-title">Fix árajánlat</div>
                <div className="step-desc">Konkrét összeg, konkrét határidő, tételes lebontás. Nem ár-tól, nem becslés.</div>
                <div className="step-time">2-3 munkanap</div>
              </div>
              <div className="step">
                <div className="step-num">/ 04</div>
                <div className="step-title">Indul a munka</div>
                <div className="step-desc">Aláírjuk, kifizeted a 30%-os előleget, és pár napon belül elküldjük az első wireframe-eket.</div>
                <div className="step-time">3–6 hét átfutás</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Address + FAQ */}
      <section className="sec">
        <div className="container">
          <div className="sec-tag">Iroda &amp; gyakori kérdések</div>
          <h2 className="sec-h">Megtalálsz minket <em>Budapesten</em> — vagy bárhonnan online.</h2>

          <div className="info-grid">
            <div className="address-card reveal">
              <div className="map" aria-hidden="true">
                <div className="map-grid"></div>
                <div className="map-roads">
                  <div className="map-road" style={{ left: 0, right: 0, top: '42%', height: 6 }}></div>
                  <div className="map-road" style={{ left: '38%', top: 0, bottom: 0, width: 5 }}></div>
                  <div className="map-road" style={{ left: 0, right: 0, top: '72%', height: 3, background: 'rgba(255,255,255,0.7)' }}></div>
                  <div className="map-road" style={{ left: '18%', top: 0, bottom: 0, width: 2, background: 'rgba(255,255,255,0.6)' }}></div>
                  <div className="map-road" style={{ left: '72%', top: 0, bottom: 0, width: 3, background: 'rgba(255,255,255,0.7)' }}></div>
                </div>
                <div className="map-park" style={{ left: '60%', top: '8%', width: '32%', height: '28%' }}></div>
                <div className="map-park" style={{ left: '6%', top: '78%', width: '24%', height: '18%' }}></div>
                <div className="map-pin">
                  <div className="ring"></div>
                  <div className="pin"></div>
                </div>
              </div>

              <div className="address-meta">
                <div className="addr-row">
                  <span className="addr-ico">
                    <MapPin size={18} />
                  </span>
                  <div className="addr-text">
                    <small>Iroda</small>
                    <b>Király u. 26.</b>
                    <span>1061 Budapest, Magyarország</span>
                  </div>
                </div>
                <div className="addr-row">
                  <span className="addr-ico">
                    <Clock size={18} />
                  </span>
                  <div className="addr-text">
                    <small>Nyitvatartás</small>
                    <b>H–P · 9:00 – 17:00</b>
                    <span>Hétvégén csak előre egyeztetett időpontban</span>
                  </div>
                </div>
                <div className="addr-row">
                  <span className="addr-ico">
                    <Briefcase size={18} />
                  </span>
                  <div className="addr-text">
                    <small>Cégadatok</small>
                    <b>Weart Kft.</b>
                    <span>Adószám: 12345678-2-42 · Cgj.: 01-09-123456</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="faq reveal">
              {faqItems.map((it, idx) => (
                <div key={idx} className={`faq-item${openFaq === idx ? ' open' : ''}`} onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}>
                  <div className="faq-q">{it.q}<span className="pls" /></div>
                  <div className="faq-a">{it.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <RevealWrapper />
    </>
  );
}
