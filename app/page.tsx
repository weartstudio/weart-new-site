import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import RevealWrapper from './components/RevealWrapper';
import AboutCollage from './components/AboutCollage';
import ServicesCollage from './components/ServicesCollage';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import ClientLogoMarquee from './components/ClientLogoMarquee';
import { getPosts, getProjects, type WPPost, type WPProject, type WPImage } from './lib/wordpress';

// A kezdőlap a WordPress-ből élő projekt- és cikklistát mutat,
// ezért kérésenként rendereljük (lásd Next 16 docs:
// guides/caching-without-cache-components → route segment config `dynamic`).
export const dynamic = 'force-dynamic';

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
          <h1 className="h1">
            Egyedi weboldal és webshop fejlesztés <span className="underline">vállalkozásoknak.</span>
          </h1>
          <p className="lead">
            10+ éve egyedi weboldalakat és webshopokat fejlesztünk WordPressen és WooCommerce-en — saját
            kóddal, gyorsan és könnyen kezelhetően. A tervezés és fejlesztés egy kézben van: nem csak
            szép, hanem működik is.
          </p>
          <div className="hero-ctas">
            <Link href="/ajanlatkeres" className="btn btn-primary">Ingyenes ajánlat <span className="arrow">→</span></Link>
            <Link href="/portfolio" className="btn btn-ghost">Munkáink</Link>
          </div>
          <div className="hero-meta">
            <div className="meta-item"><div className="num">10+ év</div><div className="lbl">tapasztalat</div></div>
            <div className="meta-item"><div className="num">90+</div><div className="lbl">elkészült weboldal</div></div>
            <div className="meta-item"><div className="num">80+</div><div className="lbl">elégedett ügyfél</div></div>
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
    <section className="sec sec--flush-top" id="szolgaltatasok">
      <div className="container">
        <div className="sec-head sec-head--solo reveal">
          <div>
            <div className="sec-tag">Szolgáltatások</div>
            <h2 className="sec-h">Egyedi WordPress fejlesztés —<br /><em>weboldal, webshop, karbantartás.</em></h2>
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
            <h2 className="sec-h">Ketten vagyunk —<br /><em>szándékosan.</em></h2>
          </div>
        </div>
        <AboutCollage />
        <ClientLogoMarquee className="reveal" />
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
              <h2 className="sec-h">Egy fejlesztő gondolja végig.<br /><em>Egy projektmenedzser tartja a fonalat.</em></h2>
              <p className="why-lead">
                Nem ügynökségi lánc, ahol junior dolgozik rajtad. Balázs végig kódol — a specifikációtól a telepítésig. Fanni koordinál, egyeztet, és elérhető marad, ha kérdésed van. Ketten vagyunk szándékosan: így marad a minőség és a személyes kapcsolat is.
              </p>
              <div className="why-actions">
                <Link className="btn btn-primary" href="/ajanlatkeres">Ingyenes ajánlat →</Link>
                <Link className="btn" href="/portfolio">Munkáink</Link>
              </div>
            </div>
            <div className="why-feat">
              <div className="feat">
                <div className="feat-h"><span className="feat-num">01.</span><h4>Specifikáció előre, nem meglepetés utána.</h4></div>
                <p>Az ajánlatban fix ár és határidő szerepel. Új igény esetén előre számolunk — rejtett költség és meglepetés-számla nincs.</p>
              </div>
              <div className="feat">
                <div className="feat-h"><span className="feat-num">02.</span><h4>Egyedi kód, nem bővítmény-halmaz.</h4></div>
                <p>Csak iparági szintű plugint használunk, ha muszáj. A többit magunk írjuk — stabilabb, gyorsabb, biztonságosabb alap.</p>
              </div>
              <div className="feat">
                <div className="feat-h"><span className="feat-num">03.</span><h4>Átadás után is te kezeled.</h4></div>
                <p>Saját szerkesztőfelület, 1 órás betanítás videóval. Új tartalom feltöltése fejlesztő nélkül — bárki a csapatodból.</p>
              </div>
              <div className="feat">
                <div className="feat-h"><span className="feat-num">04.</span><h4>Nem tűnünk el az átadás után.</h4></div>
                <p>Frissítések, mentés, kisebb módosítások havidíjban — opcionális. Te csak szólsz, mi megcsináljuk.</p>
              </div>
            </div>
          </div>
          <Testimonials
            variant="dark"
            quote={<>Ha kérdésre választ vagy kérésemre megoldást kérek, azt megkapom. <em>Az elképzeléseim kezdenek megjelenni</em> — és ezt Balázsnak köszönöm.</>}
            name="Lázár László"
            role="Tulajdonos · szerszamot.eu"
          />
        </div>
      </div>
    </section>
  );
}


function Insights({ posts }: { posts: WPPost[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="sec" id="tudastar">
      <div className="container">
        <div className="sec-head sec-head--solo reveal">
          <div>
            <div className="sec-tag">Tudástár</div>
            <h2 className="sec-h">Segítünk dönteni —<br /><em>mielőtt weboldalba fektetsz.</em></h2>
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
        <div className="reveal sec-actions">
          <Link href="/posts" className="btn btn-primary">Összes cikk megtekintése <span className="arrow">→</span></Link>
        </div>
      </div>
    </section>
  );
}

function BigCTA() {
  return (
    <section className="sec sec--cta" id="kapcsolat">
      <div className="container">
        <div className="big-cta reveal">
          <div>
            <h2>Beszéljünk az<br /><em>oldaladról.</em></h2>
            <p>Egy 30 perces, kötelezettség nélküli konzultáció — megnézzük, mire van szükséged, és két munkanapon belül küldünk egy konkrét, fix áras ajánlatot.</p>
            <div className="ctas">
              <Link href="/ajanlatkeres" className="btn btn-primary">Ingyenes ajánlat <span className="arrow">→</span></Link>
            </div>
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
            <p className="contact-blurb">A megkereséseket <b>Fanni</b>, projektmenedzserünk kezeli — hogy Balázs a fejlesztésre koncentrálhasson, és minden kérdésedre gyorsan válasz érkezzen.</p>
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
      <Insights posts={latestPosts} />
      <FAQ />
      <BigCTA />
      <Footer />
      <RevealWrapper />
    </>
  );
}
