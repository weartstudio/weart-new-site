import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import RevealWrapper from './components/RevealWrapper';
import AboutCollage from './components/AboutCollage';
import ServicesCollage from './components/ServicesCollage';
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
      {project.title && <figcaption className="ww-cap">{project.title}</figcaption>}
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
            <Link href="/portfolio" className="btn btn-ghost">Munkáink</Link>
          </div>
          <div className="hero-meta">
            <div className="meta-item"><div className="num">10+ év</div><div className="lbl">tapasztalat</div></div>
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
        <div className="sec-head sec-head--solo reveal">
          <div>
            <div className="sec-tag">Mit csinálunk</div>
            <h2 className="sec-h">Mindent, ami a weboldalad<br /><em>jól működéséhez kell.</em></h2>
          </div>
        </div>

        <ServicesCollage />
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
        </div>
        <AboutCollage />
        <div className="ac-trust reveal">
          <div className="trust-label">Akiknek már dolgoztunk</div>
          <div className="trust-marquee">
            <div className="trust-track">
              <ClientLogos />
              <ClientLogos />
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
      <div className="container">
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
                <Link className="btn" href="/portfolio">Munkáink</Link>
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
          <Testimonials
            variant="dark"
            quote={<>Sokakkal egyeztettem az új honlap miatt, de itt éreztem először, hogy <em>tényleg értik, mit csinálok.</em> Két hónap után már egyértelműen több ajánlatkérés érkezik.</>}
            name="Kovács István"
            role="Tulajdonos · Kovács Lakatos Kft."
            stat={<><b>10+ év</b> ugyanaz a két ember</>}
          />
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
        <div className="sec-head sec-head--solo reveal">
          <div>
            <div className="sec-tag">Blog</div>
            <h2 className="sec-h">Cikkek, amik segítenek,<br />hogy <em>jobban dönts</em></h2>
          </div>
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
        <div className="reveal" style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
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
            <span className="eyebrow"><span className="dot"></span> 2026 Q3-ra még 2 hely van</span>
            <h2 style={{ marginTop: 18 }}>Beszéljünk az<br /><em>oldaladról.</em></h2>
            <p>Egy 20 perces, kötetlen telefonbeszélgetés. Megnézzük, mire van szükséged, és egy munkanapon belül küldünk egy konkrét árajánlatot — csomagolás nélkül.</p>
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: 28, display: 'inline-flex' }}>Kezdjük el <span className="arrow">→</span></Link>
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
