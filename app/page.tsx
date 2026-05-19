import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import RevealWrapper from './components/RevealWrapper';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import { getPosts, getProjects, type WPPost, type WPProject, type WPImage } from './lib/wordpress';

// A kezdőlap a WordPress-ből élő projekt- és cikklistát mutat,
// ezért kérésenként rendereljük (lásd Next 16 docs:
// guides/caching-without-cache-components → route segment config `dynamic`).
export const dynamic = 'force-dynamic';

const clientLogos = [
  { name: 'Kovács Lakatos', tag: 'kisipar', mark: <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 30 L18 6 L30 30"/><path d="M11 22 L25 22"/><circle cx="18" cy="14" r="2" fill="currentColor"/></svg> },
  { name: 'Zöldkert Bt.', tag: 'kertészet', mark: <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 30 V14"/><path d="M18 18 C12 18 8 14 8 8 C14 8 18 12 18 18 Z" fill="currentColor" fillOpacity=".15"/><path d="M18 22 C24 22 28 18 28 12 C22 12 18 16 18 22 Z" fill="currentColor" fillOpacity=".15"/></svg> },
  { name: 'Bódi Fogászat', tag: 'egészségügy', mark: <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6 C9 6 8 9 8 13 C8 18 10 22 10 26 C10 28 11 30 12.5 30 C14 30 14.5 28 15 24 C15.5 21 16 19 18 19 C20 19 20.5 21 21 24 C21.5 28 22 30 23.5 30 C25 30 26 28 26 26 C26 22 28 18 28 13 C28 9 27 6 24 6 C21 6 20 8 18 8 C16 8 15 6 12 6 Z"/></svg> },
  { name: 'Mátra Panzió', tag: 'vendéglátás', mark: <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 26 L13 14 L18 20 L23 10 L31 26 Z"/><circle cx="25" cy="9" r="2.2" fill="currentColor"/></svg> },
  { name: 'Szabó Könyvelő', tag: 'könyvelő iroda', mark: <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="7" width="22" height="22" rx="3"/><path d="M12 14 H24"/><path d="M12 19 H20"/><path d="M12 24 H22"/></svg> },
  { name: 'Holló Pékség', tag: 'kézműves pékség', mark: <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="18" cy="20" rx="12" ry="7"/><path d="M10 16 C10 12 14 10 18 10 C22 10 26 12 26 16"/><path d="M14 21 L14 24"/><path d="M18 21 L18 25"/><path d="M22 21 L22 24"/></svg> },
  { name: 'Tóth Ügyvédi', tag: 'jogi iroda', mark: <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 V30"/><path d="M10 30 H26"/><path d="M11 12 L18 9 L25 12"/><path d="M7 20 L11 12 L15 20 Z"/><path d="M21 20 L25 12 L29 20 Z"/></svg> },
  { name: 'NagyAuto Kft.', tag: 'autószerviz', mark: <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 22 L8 14 H28 L31 22 V26 H5 Z"/><circle cx="11" cy="26" r="2.5" fill="currentColor"/><circle cx="25" cy="26" r="2.5" fill="currentColor"/><path d="M9 18 H27"/></svg> },
];

function ClientLogos() {
  return (
    <>
      {clientLogos.map((c, i) => (
        <div className="client-logo" key={i}>
          <span className="client-logo-mark">{c.mark}</span>
          <span className="client-logo-text">
            <b>{c.name}</b>
            <small>{c.tag}</small>
          </span>
        </div>
      ))}
    </>
  );
}

function WorkCard({ img, project }: { img: WPImage; project: WPProject }) {
  return (
    <figure className="ww-card">
      <div className="ww-shot">
        <Image
          src={img.url}
          alt={img.alt || project.title}
          fill
          sizes="(max-width: 1024px) 0px, 300px"
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
        />
      </div>
      {project.clientName && <figcaption className="ww-cap">{project.clientName}</figcaption>}
    </figure>
  );
}

// Mindkét oszlop önmagában is hosszabb legyen a látható sávnál, hogy
// a duplikált sáv -50%-os görgetése sehol ne hagyjon rést.
function fill<T>(arr: T[], min: number): T[] {
  if (arr.length === 0) return arr;
  const out = [...arr];
  while (out.length < min) out.push(...arr);
  return out;
}

function Hero({ projects }: { projects: WPProject[] }) {
  const shots = projects.flatMap((p) => {
    const out: { img: WPImage; project: WPProject }[] = [];
    if (p.image) out.push({ img: p.image, project: p });
    if (p.imageSecondary) out.push({ img: p.imageSecondary, project: p });
    return out;
  });
  const colA = fill(shots.filter((_, i) => i % 2 === 0), 6);
  const colB = fill(shots.filter((_, i) => i % 2 === 1), 6);

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
            <Link href="/contact" className="btn btn-primary">Ingyenes árajánlat <span className="arrow">→</span></Link>
            <Link href="#folyamat" className="btn btn-ghost">Hogyan dolgozunk?</Link>
          </div>
          <div className="hero-meta">
            <div className="meta-item"><div className="num">9 év</div><div className="lbl">tapasztalat</div></div>
            <div className="meta-item"><div className="num">120+</div><div className="lbl">elkészült weboldal</div></div>
            <div className="meta-item"><div className="num">4,9 ★</div><div className="lbl">Google értékelés</div></div>
            <div className="meta-item"><div className="num">3–6 hét</div><div className="lbl">átlagos átfutás</div></div>
          </div>
        </div>

        {shots.length > 0 && (
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-glow"></div>
            <div className="ww-col ww-col-up">
              <div className="ww-track">
                {[...colA, ...colA].map((s, i) => (
                  <WorkCard key={`a${i}`} img={s.img} project={s.project} />
                ))}
              </div>
            </div>
            <div className="ww-col ww-col-down">
              <div className="ww-track">
                {[...colB, ...colB].map((s, i) => (
                  <WorkCard key={`b${i}`} img={s.img} project={s.project} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
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
              <div className="mini-feat"><div className="ico">⚡</div><h5>Villámgyors</h5><p>Lighthouse 95+ pontszám minden oldalon, már mobilon is.</p></div>
              <div className="mini-feat"><div className="ico">✎</div><h5>Egyszerű, mint a Word</h5><p>Saját szerkesztőfelület, kategóriába rendezett mezőkkel.</p></div>
              <div className="mini-feat"><div className="ico">🛡</div><h5>Biztonságos</h5><p>Minimális bővítmény = minimális támadási felület.</p></div>
              <div className="mini-feat"><div className="ico">↗</div><h5>Skálázható</h5><p>Évek múlva is bővíthető, nem kell nullról kezdeni.</p></div>
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
              <div className="design-glyph" style={{ background: '#fff', border: '1px solid rgba(13,23,46,0.1)', borderRadius: 12, width: 60, height: 60, display: 'grid', placeItems: 'center' }}>
                <svg viewBox="0 0 38 57" width="28" height="28" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/></svg>
              </div>
              <div className="design-glyph canvas"></div>
              <div className="design-glyph swatch">
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
    </section>
  );
}

function Team() {
  return (
    <section className="sec" id="about">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <div className="sec-tag">Rólunk</div>
            <h2 className="sec-h">Ketten vagyunk —<br /><em>és ez pont elég.</em></h2>
          </div>
          <p className="sec-sub">Egy fejlesztő, egy projektmenedzser. Aki megtervezi az oldaladat, az is fogja kódolni; aki felveszi a telefont, az tudja, hol tart a projekt.</p>
        </div>
        <div className="team-panel reveal">
          <div className="team-people">
            <article className="team-card">
              <span className="team-idx">01</span>
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
            </article>
            <article className="team-card">
              <span className="team-idx">02</span>
              <div className="team-photo fanni">
                <Image src="/fanni-small.jpg" alt="Ágoston Fanni" width={92} height={92} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="team-info">
                <div className="team-name">Ágoston Fanni</div>
                <div className="team-role">Projektmenedzser · Társalapító</div>
                <p className="team-bio">Ő a kapocs közted és a fejlesztés között. Tartja a határidőket, magyarázza érthetően a műszaki dolgokat, és gondoskodik róla, hogy ne maradjon nyitott kérdés.</p>
                <div className="team-tags">
                  <span className="team-tag">Ügyfélkapcsolat</span>
                  <span className="team-tag">Tervezés</span>
                  <span className="team-tag">Copywriting</span>
                  <span className="team-tag">Onboarding</span>
                </div>
              </div>
            </article>
          </div>
          <div className="trust trust-team">
            <div className="trust-label">Akiknek már dolgoztunk</div>
            <div className="trust-marquee">
              <div className="trust-track">
                <ClientLogos />
                <ClientLogos />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
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
                Ketten vagyunk. Magyarul beszélünk veled, gyorsan válaszolunk, és nem adunk át téged egy junior projektmenedzsernek a szerződés után. Aki megtervezi az oldalt, az kódolja, az válaszol fél év múlva is.
              </p>
              <div style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link className="btn btn-primary" href="/contact">Kérek ajánlatot →</Link>
                <Link className="btn" style={{ color: '#fff', border: '1px solid rgba(255,255,255,0.18)' }} href="/portfolio">Munkáink</Link>
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
    </section>
  );
}

function MarqueeStrip() {
  const items = ['Gyors', 'Mobilbarát', 'SEO-ra optimalizált', 'Magyar nyelvű támogatás', 'Fix ár', 'Átlátható', 'Kkv-barát', 'Egyedi', 'Karbantartott'];
  const all = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.map((w, i) => <span key={i}>{w}</span>)}
      </div>
    </div>
  );
}

function Insights({ posts }: { posts: WPPost[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="sec" id="tudastar">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <div className="sec-tag">Blog</div>
            <h2 className="sec-h">Cikkek, ami segít,<br />hogy <em>jobban dönts.</em></h2>
          </div>
          <p className="sec-sub">Magyar nyelven, kkv-tulajdonosoknak — érthetően arról, hogyan működik egy weboldal, és mit érdemes elvárni egy fejlesztőtől.</p>
        </div>
        <div className="insights reveal">
          {posts.map((p) => (
            <article key={p.databaseId} className="insight">
              <Link href={`/posts/${p.slug}`} className={`insight-img ${p.imgClass}`} aria-label={p.title}>
                {p.featuredImage ? (
                  <Image
                    src={p.featuredImage.url}
                    alt={p.featuredImage.alt || p.title}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div className="glyph">{p.glyph}</div>
                )}
              </Link>
              <div className="insight-body">
                <div className="insight-meta">
                  <span className="tag">{p.categoryName}</span>
                  <span className="dot"></span>
                  <span>{p.formattedDate}</span>
                </div>
                <h3 className="insight-title">
                  <Link href={`/posts/${p.slug}`}>{p.title}</Link>
                </h3>
                <p className="insight-excerpt">{p.excerpt}</p>
                <div className="insight-foot">
                  <Link href={`/posts/${p.slug}`}>Tovább →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
          <Link href="/posts" className="btn btn-primary">Összes cikk megtekintése <span className="arrow">→</span></Link>
        </div>
      </div>
    </section>
  );
}

function BigCTA() {
  return (
    <section className="sec" id="kapcsolat" style={{ paddingTop: 0, padding: '0px' }}>
      <div className="container">
        <div className="big-cta reveal">
          <div>
            <div className="meta">2026 Q3-ra még 2 hely van</div>
            <h2 style={{ marginTop: 18 }}>Beszéljünk az<br /><em>oldaladról.</em></h2>
            <p>Egy 20 perces, kötetlen telefonbeszélgetés. Megnézzük, mire van szükséged, és egy munkanapon belül küldünk egy konkrét árajánlatot — csomagolás nélkül.</p>
          </div>
          <div className="contact-card">
            <div className="contact-card-head">
              <div className="contact-avatar">
                <Image src="/fanni-small.jpg" alt="Ágoston Fanni" fill sizes="56px" style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <div className="contact-name">Ágoston Fanni</div>
                <div className="contact-role">A hívásokat fogadja</div>
              </div>
            </div>
            <p className="contact-blurb">A megkereséseket elsősorban a feleségem és a jobbkezem, <b>Fanni</b> kezeli, hogy minél jobban tudjak koncentrálni a weboldalak építésére.</p>
            <div className="contact-rows">
              <a className="contact-row" href="tel:+36301958114">
                <span className="contact-row-ico">
                  <Phone size={14} strokeWidth={1.6} />
                </span>
                <span>+36 30 / 195 8114</span>
              </a>
              <a className="contact-row" href="mailto:info@weart.hu">
                <span className="contact-row-ico">
                  <Mail size={14} strokeWidth={1.6} />
                </span>
                <span>info@weart.hu</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function Home() {
  const [allPosts, projects] = await Promise.all([getPosts(), getProjects()]);
  const latestPosts = allPosts.slice(0, 3);
  const projectsWithImage = projects.filter((p) => p.image || p.imageSecondary);

  return (
    <>
      <Nav />
      <Hero projects={projectsWithImage} />
      <Services />
      <Team />
      <WhyUs />
      <MarqueeStrip />
      <Insights posts={latestPosts} />
      <FAQ />
      <BigCTA />
      <Footer />
      <RevealWrapper />
    </>
  );
}
