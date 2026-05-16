const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "#FF6B4A",
  "primary": "#00C2CB",
  "showMarquee": true,
  "showFloatingScores": true
} /*EDITMODE-END*/;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) {e.target.classList.add('in');io.unobserve(e.target);}});
    }, { threshold: 0.1 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" className="logo">
          <span className="logo-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M12 2.2c2.4 2.6 3.8 5.9 3.8 9.3v6.2H8.2v-6.2C8.2 8.1 9.6 4.8 12 2.2z"/>
              <circle cx="12" cy="10.2" r="1.7" fill="#0D172E"/>
              <path d="M8.2 14.5L5.6 17.6l3.1-.4z" opacity="0.85"/>
              <path d="M15.8 14.5l2.6 3.1-3.1-.4z" opacity="0.85"/>
              <path d="M11 19.5h2l-.4 2.3h-1.2z" opacity="0.6"/>
            </svg>
          </span>
          <b>weart<span style={{ color: 'var(--primary)' }}>.</span>hu</b>
        </a>
        <div className="nav-links">
          <a href="#szolgaltatasok" className="has-arrow">Szolgáltatások</a>
          <a href="Weart Rolunk.html">Rólunk</a>
          <a href="#munkaink">Munkáink</a>
          <a href="#araink">Áraink</a>
          <a href="Weart Blog.html">Tudástár</a>
          <a href="#kapcsolat">Kapcsolat</a>
        </div>
        <div className="nav-cta">
          <a href="#kapcsolat" className="btn btn-ghost">Kérek ajánlatot</a>
        </div>
      </div>
    </nav>);

}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow"><span className="dot"></span> 2026 Q3-ra még 2 hely van</span>
          <h1 className="h1">
            Weboldal, ami<br />
            tényleg <span className="underline">vevőket hoz.</span>
          </h1>
          <p className="lead">Magyar kkv-knak készítünk gyors, jól kereshető, könnyen kezelhető weboldalakat — a tervezéstől a karbantartásig. Nincs marketing duma, csak tiszta munka.</p>
          <div className="hero-ctas">
            <a href="#kapcsolat" className="btn btn-primary">Ingyenes árajánlat <span className="arrow">→</span></a>
            <a href="#folyamat" className="btn btn-ghost">Hogyan dolgozunk?</a>
          </div>
          <div className="hero-meta">
            <div className="meta-item"><div className="num">9 év</div><div className="lbl">tapasztalat</div></div>
            <div className="meta-item"><div className="num">120+</div><div className="lbl">elkészült weboldal</div></div>
            <div className="meta-item"><div className="num">4,9 ★</div><div className="lbl">Google értékelés</div></div>
            <div className="meta-item"><div className="num">3–6 hét</div><div className="lbl">átlagos átfutás</div></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" aria-hidden="true"></div>
          <div className="hero-grid-bg" aria-hidden="true"></div>
          <div className="browser browser-main">
            <div className="browser-bar">
              <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              <span className="url"><span className="url-typing">weart.hu/munkaink/kovacs-kft</span></span>
              <span className="url-loader" aria-hidden="true"></span>
            </div>
            <div className="browser-body">
              <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
                <div className="mock-pill ghost mock-anim-pill">Rólunk</div>
                <div className="mock-pill ghost mock-anim-pill">Szolgáltatás</div>
                <div className="mock-pill ghost mock-anim-pill">Kapcsolat</div>
              </div>
              <div className="mock-h mock-h-anim">Megbízható szakember,<br /><em>otthon és nálad is.</em></div>
              <p className="mock-p mock-p-anim">Lakatos- és vasszerkezet készítés Pest megyében. Több mint 18 éve.</p>
              <div className="mock-row mock-row-anim">
                <div className="mock-pill mock-cta-pulse">Kérek árajánlatot</div>
                <div className="mock-pill ghost">Munkáink</div>
              </div>
              <div className="mock-stripe mock-stripe-anim"></div>
              <div className="mock-stripe short mock-stripe-anim"></div>
              <div className="mock-stripe shorter mock-stripe-anim"></div>
              <div className="mock-cursor" aria-hidden="true">
                <svg viewBox="0 0 16 18" width="18" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l13 7-6 1.5L5 16z" fill="#fff" stroke="#0D172E" strokeWidth="1.2" strokeLinejoin="round"/></svg>
              </div>
              <div className="mock-toast" aria-hidden="true">
                <div className="mock-toast-ico">✓</div>
                <div>
                  <div className="mock-toast-h">Új ajánlatkérés</div>
                  <div className="mock-toast-p">Kovács István · most</div>
                </div>
              </div>
            </div>
          </div>

          <ScoreCard cls="score-1" value={100} label="Sebesség" />
          <ScoreCard cls="score-2" value={100} label="Jó gyakorlat" />
          <ScoreCard cls="score-3" value={98} label="SEO" />
          <ScoreCard cls="score-4" value={100} label="Akadálymentesség" />
        </div>
      </div>

      <div className="container">
        <div className="trust">
          <div className="trust-label">Akiknek már dolgoztunk</div>
          <div className="trust-marquee" aria-hidden="false">
            <div className="trust-track">
              <ClientLogos />
              <ClientLogos />
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function ClientLogos() {
  const items = [
    { name: 'Kovács Lakatos', tag: 'kisipar', mark: (
        <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 30 L18 6 L30 30"/><path d="M11 22 L25 22"/><circle cx="18" cy="14" r="2" fill="currentColor"/></svg>
      ) },
    { name: 'Zöldkert Bt.', tag: 'kertészet', mark: (
        <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 30 V14"/><path d="M18 18 C12 18 8 14 8 8 C14 8 18 12 18 18 Z" fill="currentColor" fillOpacity=".15"/><path d="M18 22 C24 22 28 18 28 12 C22 12 18 16 18 22 Z" fill="currentColor" fillOpacity=".15"/></svg>
      ) },
    { name: 'Bódi Fogászat', tag: 'egészségügy', mark: (
        <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6 C9 6 8 9 8 13 C8 18 10 22 10 26 C10 28 11 30 12.5 30 C14 30 14.5 28 15 24 C15.5 21 16 19 18 19 C20 19 20.5 21 21 24 C21.5 28 22 30 23.5 30 C25 30 26 28 26 26 C26 22 28 18 28 13 C28 9 27 6 24 6 C21 6 20 8 18 8 C16 8 15 6 12 6 Z"/></svg>
      ) },
    { name: 'Mátra Panzió', tag: 'vendéglátás', mark: (
        <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 26 L13 14 L18 20 L23 10 L31 26 Z"/><circle cx="25" cy="9" r="2.2" fill="currentColor"/></svg>
      ) },
    { name: 'Szabó Könyvelő', tag: 'könyvelő iroda', mark: (
        <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="7" width="22" height="22" rx="3"/><path d="M12 14 H24"/><path d="M12 19 H20"/><path d="M12 24 H22"/></svg>
      ) },
    { name: 'Holló Pékség', tag: 'kézműves pékség', mark: (
        <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="18" cy="20" rx="12" ry="7"/><path d="M10 16 C10 12 14 10 18 10 C22 10 26 12 26 16"/><path d="M14 21 L14 24"/><path d="M18 21 L18 25"/><path d="M22 21 L22 24"/></svg>
      ) },
    { name: 'Tóth Ügyvédi', tag: 'jogi iroda', mark: (
        <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 V30"/><path d="M10 30 H26"/><path d="M11 12 L18 9 L25 12"/><path d="M7 20 L11 12 L15 20 Z"/><path d="M21 20 L25 12 L29 20 Z"/></svg>
      ) },
    { name: 'NagyAuto Kft.', tag: 'autószerviz', mark: (
        <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 22 L8 14 H28 L31 22 V26 H5 Z"/><circle cx="11" cy="26" r="2.5" fill="currentColor"/><circle cx="25" cy="26" r="2.5" fill="currentColor"/><path d="M9 18 H27"/></svg>
      ) }
  ];
  return (
    <>
      {items.map((c, i) => (
        <div className="client-logo" key={i}>
          <span className="client-logo-mark">{c.mark}</span>
          <span className="client-logo-text">
            <b>{c.name}</b>
            <small>{c.tag}</small>
          </span>
        </div>
      ))}
    </>);
}

function ScoreCard({ cls, value, label }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let i = 0;
        const t = setInterval(() => {i += 2;if (i >= value) {i = value;clearInterval(t);}setN(i);}, 18);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  const deg = n / 100 * 360;
  return (
    <div ref={ref} className={`score ${cls}`} style={{ '--p': `${deg}deg` }}>
      <div className="ring"><span>{n}</span></div>
      <div className="lbl">{label}</div>
    </div>);

}

function Services() {
  return (
    <section className="sec" id="szolgaltatasok">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <div className="sec-tag">Mit csinálunk</div>
            <h2 className="sec-h">Mindent, ami a weboldalad<br /><em>jól működéséhez kell.</em></h2>
          </div>
          <p className="sec-sub">A tervezéstől a tárhelyig. Egy helyen, magyarul, érthetően. Nem kell több beszállítóval levelezned — mi mindent megoldunk.</p>
        </div>

        <div className="bento reveal">
          <div className="tile tile-1">
            <div className="wp-mark" aria-hidden="true">
              <svg viewBox="0 0 122 122" width="122" height="122" xmlns="http://www.w3.org/2000/svg">
                <circle cx="61" cy="61" r="59" fill="none" stroke="currentColor" strokeWidth="3"/>
                <path fill="currentColor" d="M12.5 61c0-7 1.5-13.7 4.2-19.7L39.6 104A48.5 48.5 0 0 1 12.5 61zm81.4-2.5c0 3-1.2 6.5-2.7 11.5l-3.6 12-13-38.7c2.2-.1 4.1-.3 4.1-.3 2-.2 1.7-3.1-.2-3 0 0-5.8.5-9.6.5-3.5 0-9.5-.5-9.5-.5-2-.1-2.2 2.9-.2 3 0 0 1.9.2 3.8.3l5.5 15.1L60.7 81 47.8 42.3c2.2-.1 4.1-.3 4.1-.3 2-.2 1.7-3.1-.2-3 0 0-5.8.5-9.6.5-.7 0-1.5 0-2.3 0A48.5 48.5 0 0 1 109.5 61c0 17.4-9.2 32.7-23 41.2L101 61.4c2.7-6.7 3.6-12.1 3.6-16.9 0-1.7-.1-3.4-.3-5 3.7 6.8 5.8 14.6 5.8 22.9zM62.4 65.5l11 30c.1.2.2.3.3.5a48.4 48.4 0 0 1-29.9-.7l.5-1.6L62.4 65.5zM104 35.4c0 .2.1.4.1.7 0 6.5-1.2 13.8-4.9 23l-19.8-58.9A48.6 48.6 0 0 1 104 35.4zM61 12.5c14.7 0 28 5.6 38.1 14.7-.2 0-.5 0-.8 0-3.6 0-6.2 3.2-6.2 6.5 0 3 1.7 5.6 3.6 8.7 1.4 2.5 3 5.7 3 10.3 0 3.2-1.2 6.9-2.9 12L91 75.4 78.3 38.7c2.1-.1 4-.3 4-.3 1.9-.3 1.7-3.2-.3-3.1 0 0-5.7.5-9.4.5-3.5 0-9.5-.5-9.5-.5-1.9-.1-2.2 2.9-.2 3 0 0 1.8.2 3.8.3l5.5 14.9-7.7 23-12.7-37.9c2.1-.1 4-.3 4-.3 1.9-.3 1.7-3.2-.3-3.1 0 0-5.7.5-9.4.5-.7 0-1.4 0-2.2 0a48.5 48.5 0 0 1 27.1-22.2C71.4 12.7 66.3 12.5 61 12.5z"/>
              </svg>
              <span className="wp-mark-label">Built on WordPress</span>
            </div>
            <div>
              <div className="badge-row">
                <span className="b">Fő szolgáltatás</span>
                <span className="b ghost">Egyedi WordPress</span>
              </div>
              <h3 className="hero-tile-h">Villámgyors weboldal,<br /><em>egyedi fejlesztéssel.</em></h3>
              <p className="hero-tile-desc">Nem sablonokra építünk. Saját, célra szabott WordPress kódot fejlesztünk — ami minimális bővítményt használ, gyors, biztonságos, és pont annyi funkciót tud, amennyire szükséged van. Hosszú távra tervezett, mérnöki minőségű weboldal.</p>
            </div>
            <div className="visual"></div>
            <div className="feat-row">
              <div className="mini-feat">
                <div className="ico">⚡</div>
                <h5>Villámgyors</h5>
                <p>Lighthouse 95+ pontszám minden oldalon, már mobilon is.</p>
              </div>
              <div className="mini-feat">
                <div className="ico">✎</div>
                <h5>Egyszerű, mint a Word</h5>
                <p>Saját szerkesztőfelület, kategóriába rendezett mezőkkel.</p>
              </div>
              <div className="mini-feat">
                <div className="ico">🛡</div>
                <h5>Biztonságos</h5>
                <p>Minimális bővítmény = minimális támadási felület.</p>
              </div>
              <div className="mini-feat">
                <div className="ico">↗</div>
                <h5>Skálázható</h5>
                <p>Évek múlva is bővíthető, nem kell nullról kezdeni.</p>
              </div>
            </div>
          </div>

          <div className="tile tile-2">
            <div>
              <div className="tile-num">/ 02</div>
              <h3 className="tile-title">Régi oldal felújítása.</h3>
              <p className="tile-desc">Megvan az oldal, de lassú, csúnya, vagy nem hoz érdeklődőt? Átnézzük, modernizáljuk — sokszor olcsóbb, mint nullról kezdeni.</p>
            </div>
            <div className="gauge">
              {[28, 46, 72, 55, 88, 40, 66, 90, 72, 52, 78, 95].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}
            </div>
          </div>

          <div className="tile tile-3">
            <div>
              <div className="tile-num">/ 03</div>
              <h3 className="tile-title">Webshop indítás.</h3>
              <p className="tile-desc">WooCommerce alapú webáruház magyar fizetési megoldásokkal (Barion, SimplePay), GLS/Foxpost integrációval, NAV-kompatibilis számlázással.</p>
            </div>
            <div className="pulse">
              <div className="bar-row"><span>Betöltés</span><span>1,2 mp</span></div>
              <div className="bar"><i style={{ width: '88%' }} /></div>
              <div className="bar-row"><span>Mobil pontszám</span><span>96/100</span></div>
              <div className="bar"><i style={{ width: '96%' }} /></div>
              <div className="bar-row"><span>Konverzió</span><span>+34%</span></div>
              <div className="bar"><i style={{ width: '78%' }} /></div>
            </div>
          </div>

          <div className="tile tile-4">
            <div>
              <div className="tile-num">/ 04</div>
              <h3 className="tile-title">Arculat, logó &amp; webdesign tervezés.</h3>
              <p className="tile-desc">Logó, névjegykártya, színek, betűtípusok — és persze a weboldal teljes vizuális tervezése. Egységes megjelenés, ami profi vállalkozás benyomását kelti.</p>
            </div>
            <div className="icon-stack">
              <div className="design-glyph figma" title="Figma">
                <svg viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" /><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" /><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" /><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" /><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" /></svg>
              </div>
              <div className="design-glyph canvas" title="Webdesign"></div>
              <div className="design-glyph swatch" title="Színpaletta">
                <i style={{ background: 'var(--primary)' }}></i>
                <i style={{ background: 'var(--dark)' }}></i>
                <i style={{ background: 'var(--accent)' }}></i>
              </div>
            </div>
          </div>

          <div className="tile tile-5">
            <div>
              <div className="tile-num">/ 05</div>
              <h3 className="tile-title">Karbantartás havidíjban.</h3>
              <p className="tile-desc">Frissítések, biztonsági mentés, kisebb módosítások. Te csak szólsz — mi megcsináljuk.</p>
            </div>
            <div className="ssl">
              <div className="ssl-row"><span className="check" />Heti biztonsági mentés</div>
              <div className="ssl-row"><span className="check" />Frissítések, javítások</div>
              <div className="ssl-row"><span className="check" />2 órás módosítás / hó</div>
            </div>
          </div>

          <div className="tile tile-6">
            <div>
              <div className="tile-num">/ 06</div>
              <h3 className="tile-title">SEO &amp; Google Ads.</h3>
              <p className="tile-desc">Hogy ne csak szép legyen az oldal, hanem találjanak is rá. Google-be való optimalizálás, hirdetések kezelése.</p>
              <div className="tile-link">Részletek</div>
            </div>
            <div className="big-arrow">↗</div>
          </div>
        </div>
      </div>
    </section>);

}

function Team() {
  return (
    <section className="sec" id="rolunk">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <div className="sec-tag">Rólunk</div>
            <h2 className="sec-h">Ketten vagyunk —<br /><em>és ez pont elég.</em></h2>
          </div>
          <p className="sec-sub">Egy fejlesztő, egy projektmenedzser. Aki megtervezi az oldaladat, az is fogja kódolni; aki felveszi a telefont, az tudja, hol tart a projekt.</p>
        </div>
        <div className="team-grid reveal">
          <div className="team-card">
            <div className="team-photo balazs">B</div>
            <div className="team-info">
              <div className="team-name">Balázs</div>
              <div className="team-role">Fejlesztő · Társalapító</div>
              <p className="team-bio">9 éve foglalkozik weboldalakkal. WordPress, WooCommerce és modern frontend a szakterülete. Hisz benne, hogy a gyors weboldal nem luxus, hanem alap.</p>
              <div className="team-tags">
                <span className="team-tag">WordPress</span>
                <span className="team-tag">WooCommerce</span>
                <span className="team-tag">Sebesség</span>
                <span className="team-tag">SEO</span>
              </div>
            </div>
          </div>
          <div className="team-card">
            <div className="team-photo fanni">F</div>
            <div className="team-info">
              <div className="team-name">Fanni</div>
              <div className="team-role">Projektmenedzser · Társalapító</div>
              <p className="team-bio">Ő a kapocs közted és a fejlesztés között. Tartja a határidőket, magyarázza érthetően a műszaki dolgokat, és gondoskodik róla, hogy ne maradjon nyitott kérdés.</p>
              <div className="team-tags">
                <span className="team-tag">Ügyfélkapcsolat</span>
                <span className="team-tag">Tervezés</span>
                <span className="team-tag">Copywriting</span>
                <span className="team-tag">Onboarding</span>
              </div>
            </div>
          </div>
        </div>
        <div className="reveal" style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
          <a href="Weart Rolunk.html" className="btn btn-primary">Ismerjük meg egymást jobban <span className="arrow">→</span></a>
        </div>
      </div>
    </section>);

}

function WhyUs() {
  return (
    <section className="sec" id="folyamat">
      <div className="container-wide">
        <div className="why reveal">
          <div className="why-grid">
            <div>
              <div className="sec-tag">Miért a Weart</div>
              <h2 className="sec-h">Nem ügynökség.<br /><em>Egy csapat, aki felveszi a telefont.</em></h2>
              <p style={{ marginTop: 24, color: 'rgba(255,255,255,0.65)', fontSize: 17, maxWidth: 480, lineHeight: 1.6 }}>
                Hárman vagyunk. Magyarul beszélünk veled, gyorsan válaszolunk, és nem adunk át téged egy junior projektmenedzsernek a szerződés után. Aki megtervezi az oldalt, az kódolja, az válaszol fél év múlva is.
              </p>
              <div style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a className="btn btn-primary" href="#kapcsolat">Kérek ajánlatot →</a>
                <a className="btn" style={{ color: '#fff', border: '1px solid rgba(255,255,255,0.18)' }} href="#munkaink">Munkáink</a>
              </div>
            </div>
            <div className="why-feat">
              <div className="feat">
                <div className="feat-h"><span className="feat-num">01.</span><h4>Fix árak, fix határidő.</h4></div>
                <p>Az ajánlatban szereplő ár nem változik menet közben. Ha mégis új igény merül fel, előre szólunk, mennyibe kerül — meglepetés-számlák nálunk nincsenek.</p>
              </div>
              <div className="feat">
                <div className="feat-h"><span className="feat-num">02.</span><h4>Te kezelhetsz mindent magad.</h4></div>
                <p>Átadáskor 1 órás betanítást kapsz videóval együtt. Új kép, új szöveg, új termék — bárki fel tudja vinni a csapatból, nem kell minket hívni.</p>
              </div>
              <div className="feat">
                <div className="feat-h"><span className="feat-num">03.</span><h4>Mindenkivel külön foglalkozunk.</h4></div>
                <p>Nincs sablon. Megbeszéljük, mit csinálsz, ki a vevőd, mire van szükséged. Az oldal arra lesz szabva, nem fordítva.</p>
              </div>
            </div>
          </div>

          <Testimonials />
        </div>
      </div>
    </section>);

}

function Testimonials() {
  const items = [
    {
      quote: <>Sokakkal egyeztettem az új honlap miatt, de itt éreztem először, hogy <em>tényleg értik, mit csinálok.</em> Két hónap után már egyértelműen több ajánlatkérés érkezik.</>,
      initial: 'K',
      name: 'Kovács István',
      role: 'Tulajdonos · Kovács Lakatos Kft.'
    },
    {
      quote: <>Korábban három fejlesztővel próbálkoztunk, mind <em>elszúrta a határidőt.</em> Itt pontosan azt kaptuk, amiben megállapodtunk — és ami fontosabb, határidőre.</>,
      initial: 'N',
      name: 'Nagy Eszter',
      role: 'Ügyvezető · Eszter Cukrászda'
    },
    {
      quote: <>A webshopunk az indulás óta <em>háromszor annyi rendelést hoz,</em> mint a régi. A betanítás után a feleségem is magabiztosan kezeli a termékeket.</>,
      initial: 'S',
      name: 'Szabó Tamás',
      role: 'Alapító · Bortrezor.hu'
    },
    {
      quote: <>Nem ígértek csodát, hanem <em>elmagyarázták, mit miért javasolnak.</em> Ez ritka manapság. Az oldal gyors, szép, és tényleg hozza az ügyfeleket.</>,
      initial: 'H',
      name: 'Horváth Andrea',
      role: 'Tulajdonos · Andrea Bútor Stúdió'
    }
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % items.length), 6500);
    return () => clearInterval(t);
  }, []);
  const t = items[i];
  return (
    <div className="testimonial testimonial-rotator" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)', color: '#fff' }}>
      <div className="quote-mark" aria-hidden="true">&ldquo;</div>
      <div className="testimonial-slide" key={i}>
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
          <button key={n} className={"t-dot" + (n === i ? ' active' : '')} onClick={() => setI(n)} aria-label={`Vélemény ${n + 1}`} />
        ))}
      </div>
    </div>);

}

function Marquee({ show }) {
  if (!show) return null;
  const items = ['Gyors', 'Mobilbarát', 'SEO-ra optimalizált', 'Magyar nyelvű támogatás', 'Fix ár', 'Átlátható', 'Kkv-barát', 'Egyedi', 'Karbantartott'];
  const all = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.map((w, i) => <span key={i}>{w}</span>)}
      </div>
    </div>);

}

function Pricing() {
  return (
    <section className="sec" id="araink">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <div className="sec-tag">Áraink</div>
            <h2 className="sec-h">Tiszta árak,<br /><em>nincs rejtett költség.</em></h2>
          </div>
          <p className="sec-sub">Három csomag a legtöbb kkv igényre. Nem biztos, melyik passzol? Hívj fel, 15 perc alatt eldöntjük együtt.</p>
        </div>
        <div className="pricing-grid reveal">
          {[
          { tier: 'Bemutatkozó', price: '380.000', desc: 'Egyoldalas, mobilbarát weboldal vállalkozóknak — minden, ami a megjelenéshez kell.', feats: ['1 oldal, max. 6 szekció', 'Mobilbarát megjelenés', 'Kapcsolatfelvételi űrlap', 'Google Térkép, alapszintű SEO', '3 hét alatt készen'], cta: 'Megrendelem' },
          { tier: 'Üzleti', price: '780.000', desc: 'A legtöbb kkv-nak ezt javasoljuk. Több aloldal, blog, könnyen kezelhető admin felület.', feats: ['Akár 8 aloldal', 'Egyedi tervezés', 'Blog / hírek modul', 'Magyar fizetésimód-támogatás', '60 nap garancia + betanítás', 'Lighthouse 95+ pontszám'], cta: 'Ezt választom', featured: true, badge: 'Ezt választják legtöbben' },
          { tier: 'Webshop', price: '1.450.000', desc: 'WooCommerce alapú webáruház — Barion/SimplePay, GLS/Foxpost, számlázás, raktárkezelés.', feats: ['Akár 100 termék betöltése', 'Magyar fizetési modulok', 'Csomagküldő integráció', 'Számlázz.hu / Billingo', 'GDPR + ÁSZF dokumentumok', 'Karbantartás 3 hónapig'], cta: 'Egyeztetek' }].
          map((p, i) =>
          <div key={i} className={`price-card ${p.featured ? 'featured' : ''}`}>
              {p.badge && <div className="pc-badge">{p.badge}</div>}
              <div className="pc-tier">{p.tier}</div>
              <div className="pc-price">{p.price}<small>Ft + áfa</small></div>
              <div className="pc-desc">{p.desc}</div>
              <div className="pc-feats">
                {p.feats.map((f, j) => <div key={j} className="pc-feat">{f}</div>)}
              </div>
              <a href="#kapcsolat" className={`btn ${p.featured ? 'btn-accent' : 'btn-ghost'}`}>{p.cta}</a>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Insights() {
  const items = [
  { tag: 'Stratégia', read: '7 perc', title: 'Mennyibe kerül egy weboldal Magyarországon 2026-ban?', excerpt: 'Őszinte árkalkuláció: mit kapsz 200 ezerért, és mit egy millióért — kkv-tulajdonosoknak.', cls: 'a', glyph: '01' },
  { tag: 'SEO', read: '9 perc', title: 'Hogyan kerülj a Google első oldalára helyi vállalkozóként?', excerpt: '7 konkrét lépés, amit ma elkezdhetsz — Google Cégem, helyi keresőszavak, vélemények.', cls: 'b', glyph: '02' },
  { tag: 'Karbantartás', read: '5 perc', title: '3 dolog, amit minden vállalkozónak ellenőriznie kell havonta a weboldalán.', excerpt: 'Egyszerű ellenőrzőlista — frissítések, biztonsági mentés, betöltési idő. 10 perc alatt megvan.', cls: 'c', glyph: '03' }];

  return (
    <section className="sec" id="tudastar">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <div className="sec-tag">Tudástár</div>
            <h2 className="sec-h">Cikkek, ami segít,<br />hogy <em>jobban dönts.</em></h2>
          </div>
          <p className="sec-sub">Magyar nyelven, kkv-tulajdonosoknak — érthetően arról, hogyan működik egy weboldal, és mit érdemes elvárni egy fejlesztőtől.</p>
        </div>
        <div className="insights reveal">
          {items.map((it, i) =>
          <article key={i} className="insight">
              <div className={`insight-img ${it.cls}`}>
                <div className="glyph">{it.glyph}</div>
              </div>
              <div className="insight-body">
                <div className="insight-meta">
                  <span className="tag">{it.tag}</span>
                  <span className="dot"></span>
                  <span>{it.read} olvasás</span>
                </div>
                <h3 className="insight-title">{it.title}</h3>
                <p className="insight-excerpt">{it.excerpt}</p>
                <div className="insight-foot">
                  <span>2026. május 6.</span>
                  <a href="#">Tovább →</a>
                </div>
              </div>
            </article>
          )}
        </div>
        <div className="reveal" style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
          <a href="Weart Blog.html" className="btn btn-primary">Összes cikk megtekintése <span className="arrow">→</span></a>
        </div>
      </div>
    </section>);

}

function FAQ() {
  const [open, setOpen] = useState(0);
  const items = [
  { q: 'Mennyi időbe telik egy weboldal elkészítése?', a: 'Egy bemutatkozó oldal általában 3 hét, egy nagyobb céges oldal 4–6 hét, egy webshop 6–8 hét. A pontos időtartam attól függ, hogy mikorra adod le a szövegeket és képeket — ezt előre megbeszéljük.' },
  { q: 'Mi van, ha még nincs logóm vagy szövegem?', a: 'Az is rendben van. Tudunk logót tervezni, és ajánlunk megbízható copywritert is. Ha nincs képanyag, közös fotózást szervezünk a vállalkozásodról — ez sokszor a legjobb döntés.' },
  { q: 'Tudom magam módosítani az oldalt utána?', a: 'Igen — ez nálunk alap. WordPress alapra építünk, és átadáskor kapsz egy 1 órás betanítást videóval együtt. Új termék, új blogbejegyzés, új képek — bárki fel tudja vinni a csapatból.' },
  { q: 'Kell-e havi díjat fizetnem utána?', a: 'A weboldalért egyszer fizetsz, az a tied. Tárhelyet és domaint évente kell megújítani (kb. 30–40 ezer Ft / év). Karbantartást is tudunk havidíjban (29.900 Ft-tól) — ez nem kötelező, de ajánljuk.' },
  { q: 'Számlát adtok ÁFÁ-val?', a: 'Igen, magyar Kft-ként számlát állítunk ki, ÁFA-tartalommal. A munkadíj 50%-a foglaló (szerződéskötéskor), a maradék átadáskor.' },
  { q: 'Mi van, ha nem elégedett vagyok?', a: 'Az első egyeztetés és wireframe (vázlat) szakaszban bármikor visszaléphetsz, ekkor csak az addigi munka árát számlázzuk. A kész oldalra 60 nap garancia jár — ha valami nem úgy működik, ahogy kellene, javítjuk.' }];

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
            {items.map((it, i) =>
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`} onClick={() => setOpen(open === i ? -1 : i)}>
                <div className="faq-q">{it.q}<span className="pls"></span></div>
                <div className="faq-a">{it.a}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

function BigCTA() {
  return (
    <section className="sec" id="kapcsolat" style={{ paddingTop: 0, padding: "0px" }}>
      <div className="container">
        <div className="big-cta reveal">
          <div>
            <div className="meta">2026 Q3-ra még 2 hely van</div>
            <h2 style={{ marginTop: 18 }}>Beszéljünk az<br /><em>oldaladról.</em></h2>
            <p>Egy 20 perces, kötetlen telefonbeszélgetés. Megnézzük, mire van szükséged, és egy munkanapon belül küldünk egy konkrét árajánlatot — csomagolás nélkül.</p>
          </div>
          <div className="contact-card">
            <div className="contact-card-head">
              <div className="contact-avatar" aria-hidden="true">
                <svg viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="fanniStripe" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                      <rect width="6" height="6" fill="rgba(13,23,46,0.18)"/>
                      <rect width="3" height="6" fill="rgba(13,23,46,0.28)"/>
                    </pattern>
                  </defs>
                  <rect width="64" height="64" fill="url(#fanniStripe)"/>
                </svg>
                <span className="contact-avatar-label">FÁ</span>
              </div>
              <div>
                <div className="contact-name">Ágoston Fanni</div>
                <div className="contact-role">A hívásokat fogadja</div>
              </div>
            </div>
            <p className="contact-blurb">
              A megkereséseket elsősorban a feleségem és a jobbkezem, <b>Fanni</b> kezeli, hogy minél jobban tudjak koncentrálni a weboldalak építésére.
            </p>
            <div className="contact-rows">
              <a className="contact-row" href="tel:+36301958114">
                <span className="contact-row-ico" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3.5C3 2.7 3.7 2 4.5 2h1.7c.4 0 .8.3.9.7l.7 2.6c.1.4-.1.9-.5 1.1l-1.1.7c.9 1.7 2.3 3.1 4 4l.7-1.1c.2-.4.7-.6 1.1-.5l2.6.7c.4.1.7.5.7.9v1.7c0 .8-.7 1.5-1.5 1.5C7.6 14.3 1.7 8.4 1.7 3.5"/></svg>
                </span>
                <span>+36 30 / 195 8114</span>
              </a>
              <a className="contact-row" href="mailto:info@weart.hu">
                <span className="contact-row-ico" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3.5" width="12" height="9" rx="1.5"/><path d="M2.5 4.5l5.5 4 5.5-4"/></svg>
                </span>
                <span>info@weart.hu</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#" className="logo">
              <span className="logo-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M12 2.2c2.4 2.6 3.8 5.9 3.8 9.3v6.2H8.2v-6.2C8.2 8.1 9.6 4.8 12 2.2z"/>
                  <circle cx="12" cy="10.2" r="1.7" fill="#0D172E"/>
                  <path d="M8.2 14.5L5.6 17.6l3.1-.4z" opacity="0.85"/>
                  <path d="M15.8 14.5l2.6 3.1-3.1-.4z" opacity="0.85"/>
                  <path d="M11 19.5h2l-.4 2.3h-1.2z" opacity="0.6"/>
                </svg>
              </span>
              <b>weart.hu</b>
            </a>
            <p>Weboldalak, webshopok, karbantartás — magyar kkv-knak. Budapesten dolgozunk, az ország bármely pontjáról szívesen fogadunk megkereséseket.</p>
            <div className="foot-newsletter">
              <input type="email" placeholder="email@cim.hu" />
              <button>Feliratkozom</button>
            </div>
          </div>
          <div className="foot-col">
            <h5>Szolgáltatások</h5>
            <ul>
              <li><a href="#">Új weboldal készítés</a></li>
              <li><a href="#">Webshop indítás</a></li>
              <li><a href="#">Régi oldal felújítása</a></li>
              <li><a href="#">SEO &amp; Google Ads</a></li>
              <li><a href="#">Karbantartás</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>A csapat</h5>
            <ul>
              <li><a href="Weart Rolunk.html">Rólunk</a></li>
              <li><a href="#">Munkáink</a></li>
              <li><a href="#">Tudástár</a></li>
              <li><a href="#">Áraink</a></li>
              <li><a href="#">Vélemények</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Kapcsolat</h5>
            <ul>
              <li><a href="#">+36 1 555 0142</a></li>
              <li><a href="#">hello@weart.hu</a></li>
              <li>Király u. 26.<br />1061 Budapest</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© 2017–2026 Weart Kft. · Adószám: 12345678-2-42</div>
          <div className="links">
            <a href="#">Adatvédelem</a>
            <a href="#">ÁSZF</a>
            <a href="#">Süti tájékoztató</a>
            <a href="#">Akadálymentesség</a>
          </div>
        </div>
      </div>
    </footer>);

}

function Tweaks({ tweaks, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Téma">
        <TweakRadio value={tweaks.theme} options={[{ value: 'light', label: 'Világos' }, { value: 'dark', label: 'Sötét' }]} onChange={(v) => setTweak('theme', v)} />
      </TweakSection>
      <TweakSection title="Elsődleges szín">
        <TweakColor value={tweaks.primary} options={['#00C2CB', '#0D172E', '#FF6B4A', '#7B5BFF']} onChange={(v) => setTweak('primary', v)} />
      </TweakSection>
      <TweakSection title="Kiemelő szín (CTA)">
        <TweakColor value={tweaks.accent} options={['#FF6B4A', '#FFC857', '#7B5BFF', '#0D172E']} onChange={(v) => setTweak('accent', v)} />
      </TweakSection>
      <TweakSection title="Lighthouse pontok">
        <TweakToggle value={tweaks.showFloatingScores} onChange={(v) => setTweak('showFloatingScores', v)} label="Lebegő pontkártyák" />
      </TweakSection>
      <TweakSection title="Futószalag csík">
        <TweakToggle value={tweaks.showMarquee} onChange={(v) => setTweak('showMarquee', v)} label="Futó szavak megjelenítése" />
      </TweakSection>
    </TweaksPanel>);

}

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();

  useEffect(() => {
    document.body.classList.toggle('theme-dark', tweaks.theme === 'dark');
    document.documentElement.style.setProperty('--primary', tweaks.primary);
    document.documentElement.style.setProperty('--accent', tweaks.accent);
  }, [tweaks]);

  useEffect(() => {
    const id = 'hide-scores-style';
    let s = document.getElementById(id);
    if (!s) {s = document.createElement('style');s.id = id;document.head.appendChild(s);}
    s.textContent = !tweaks.showFloatingScores ? `.score{display:none!important}` : '';
  }, [tweaks.showFloatingScores]);

  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Services />
      <Team />
      <WhyUs />
      <Marquee show={tweaks.showMarquee} />
      {/* <Pricing/> -- talonba téve, nem jelenik meg */}
      <Insights />
      <FAQ />
      <BigCTA />
      <Footer />
      <Tweaks tweaks={tweaks} setTweak={setTweak} />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);