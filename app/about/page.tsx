import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import FoundersCollage from '../components/FoundersCollage';
import RevealWrapper from '../components/RevealWrapper';

export const metadata: Metadata = {
  title: 'Rólunk — Weart | Ketten egy weboldal mögött',
  description:
    'Egy fejlesztő és egy projektmenedzser — Egyed Balázs és Ágoston Fanni. 2017 óta készítünk gyors, egyedi weboldalakat vállalkozásoknak. Nem ügynökség: aki megtervezi, az kódolja, az veszi fel a telefont.',
};

function Hero() {
  return (
    <header className="page-head">
      <div className="container">
        <div className="page-eyebrow">Rólunk · 2017 óta egy csapat</div>
        <h1 className="page-h1">
          Ketten vagyunk — és nálunk nem <span className="underline">sorszám</span> vagy.
        </h1>
        <p className="page-lead">
          Nem ügynökség, nem alvállalkozói lánc. Egy fejlesztő és egy
          projektmenedzser, akikkel végig ugyanaz a két ember beszél — a
          tervezéstől a karbantartásig, évekkel később is, amikor módosítanál
          valamit.
        </p>

        <div className="head-meta">
          <div className="meta-item">
            <div className="num">10+ év</div>
            <div className="lbl">Tapasztalat</div>
          </div>
          <div className="meta-item">
            <div className="num">120+</div>
            <div className="lbl">Leszállított weboldal</div>
          </div>
          <div className="meta-item">
            <div className="num">90+</div>
            <div className="lbl">Elégedett ügyfél</div>
          </div>
          <div className="meta-item">
            <div className="num">3–6 hét</div>
            <div className="lbl">Átlagos átfutás</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Story() {
  return (
    <section className="sec">
      <div className="container">
        <div className="about-story reveal">
          <div className="story-aside">
            <div className="sec-tag">A történet</div>
            <h2>
              Egy emberként indult.
              <br />
              Kettő lett belőle — <em>szándékosan.</em>
            </h2>
            <p className="story-kicker">
              Nem azért nőttünk, hogy ügynökség legyünk. Azért, hogy minden
              ügyfélnek jusson egy valódi ember — és egy mély munka.
            </p>
          </div>

          <div className="story-prose">
            <p>
              A Weart <b>Egyed Balázs</b> egyszemélyes vállalkozásaként indult.
              Az elmúlt közel egy évtizedben dolgozott nagyvállalatoknak,
              reklámügynökségeknek, kiadóknak és vállalkozásoknak — Magyarországon és
              külföldön egyaránt. A saját fejlesztésű WordPress-megoldásait{' '}
              külföldön, több országban is használják.
            </p>
            <p>
              A vállalkozók mégis újra és újra ugyanazzal a két történettel
              érkeztek. Az egyik: egy drága ügynökség sorszámként kezelte őket,
              junior projektmenedzserek váltották egymást, és senki nem értette,
              mit csinál a cégük. A másik: egy olcsó „ismerős srác” félkész
              oldalt hagyott maguk után, és onnantól nem vette fel a telefont.
            </p>
            <p>
              Ahogy nőtt a megkeresések száma, egy ember kevés lett ahhoz, hogy
              mindkét oldal — a kommunikáció és a kód — végig minőségi maradjon.
              Itt lépett be <b>Ágoston Fanni</b>. Nem azért, hogy „skálázzunk”,
              hanem hogy <b>neked legyen egy állandó kapcsolattartód</b>, aki
              érthetően elmondja, hol tart a projekt — miközben Balázs arra
              koncentrálhat, amihez ért: a mérnöki minőségű weboldalra.
            </p>
            <p>
              Tudatosan maradtunk ketten. Aki megtervezi az oldaladat, az is
              kódolja; aki felveszi a telefont, az tudja fejből, hol tart a
              projekt; és <b>ugyanaz a két ember válaszol fél év múlva is</b>,
              amikor módosítanál valamit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Founders() {
  return (
    <section className="sec founders-spread" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <div className="sec-tag">Kivel dolgozol</div>
            <h2 className="sec-h">
              Két ember.
              <br />
              <em>Nincs harmadik a vonalban.</em>
            </h2>
          </div>
        </div>

        <FoundersCollage />
        <TechStack embedded showAside={false} />
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="container-wide">
        <div className="why reveal">
          <div className="why-grid">
            <div>
              <div className="sec-tag">Miben hiszünk</div>
              <h2 className="sec-h">
                Négy elv,
                <br />
                <em>amitől sosem térünk el.</em>
              </h2>
              <p
                style={{
                  marginTop: 24,
                  color: 'rgba(255,255,255,0.65)',
                  fontSize: 17,
                  maxWidth: 480,
                  lineHeight: 1.6,
                }}
              >
                Nem szlogenek. Ezek a döntések, amiket minden projektnél
                ugyanúgy meghozunk — akkor is, ha lassabb vagy nehezebb úton
                visz.
              </p>
              <div
                style={{
                  marginTop: 32,
                  display: 'flex',
                  gap: 14,
                  flexWrap: 'wrap',
                }}
              >
                <Link className="btn btn-primary" href="/portfolio">
                  Nézzük meg a munkáitokat →
                </Link>
                <Link
                  className="btn"
                  style={{
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.18)',
                  }}
                  href="/contact"
                >
                  Van egy kérdésem
                </Link>
              </div>
            </div>
            <div className="why-feat">
              <div className="feat">
                <div className="feat-h">
                  <span className="feat-num">01.</span>
                  <h4>Mérnöki munka, nem sablon.</h4>
                </div>
                <p>
                  Saját, célra szabott kódot írunk minimális bővítménnyel. Ez
                  gyorsabb, biztonságosabb és hosszú távon olcsóbb, mint egy
                  feltuningolt vásárolt téma.
                </p>
              </div>
              <div className="feat">
                <div className="feat-h">
                  <span className="feat-num">02.</span>
                  <h4>Fix ár, fix határidő.</h4>
                </div>
                <p>
                  Az ajánlatban szereplő ár és dátum nem változik menet közben.
                  Ha új igény merül fel, előre szólunk, mennyibe kerül —
                  meglepetés-számla nálunk nincs.
                </p>
              </div>
              <div className="feat">
                <div className="feat-h">
                  <span className="feat-num">03.</span>
                  <h4>A tiéd, és kezelni is tudod.</h4>
                </div>
                <p>
                  Átadáskor betanítunk videóval együtt. Új kép, szöveg, termék
                  — bárki felviszi a csapatodból, nem kell minket hívnod hozzá.
                </p>
              </div>
              <div className="feat">
                <div className="feat-h">
                  <span className="feat-num">04.</span>
                  <h4>Nem tűnünk el az átadás után.</h4>
                </div>
                <p>
                  2017 óta itt vagyunk, és itt is maradunk. A kész oldalhoz is
                  adunk támogatást — ugyanaz a két ember, aki építette.
                </p>
              </div>
            </div>
          </div>
          <Testimonials
            variant="dark"
            quote={<>Állatorvosként nem sok informatikai ismerettel rendelkezem, ezért Balázs <em>egy személyre szabott oktató-videót is készített számomra.</em> Így már könnyedén tudom az oldalt szerkeszteni, az új tartalmakat feltölteni.</>}
            name="dr. Héjja Imre"
            role="Állatorvos · szuri-kata.hu"
          />
        </div>
      </div>
    </section>
  );
}

function Credibility() {
  const items = [
    {
      tag: 'Végzettség',
      title: 'ELTE — Programtervező informatikus',
      sub: 'Eötvös Loránd Tudományegyetem, Informatikai Kar. Nem „összeollózott” tudás: tényleg programozó.',
      source: { label: 'inf.elte.hu', href: 'https://www.inf.elte.hu/' },
    },
    {
      tag: 'Nemzetközi háttér',
      title: 'Külföldön is futnak a fejlesztéseink',
      sub: 'A saját WordPress-megoldásainkat az ausztrál Envato globális piactéren keresztül több országban is használják.',
      source: { label: 'envato.com', href: 'https://themeforest.net/' },
    },
    {
      tag: 'Közösség',
      title: 'Ingyenes pluginek és fordítások',
      sub: 'Nyílt WordPress bővítmények, hivatalos fordítások és GitHubra feltöltött fejlesztői eszközök.',
      source: { label: 'GitHub · WP.org', href: 'https://github.com/' },
    },
    {
      tag: 'Tudásmegosztás',
      title: 'Szakmai blog',
      sub: 'Érthető cikkek vállalkozóknak arról, hogyan működik egy weboldal — nem fejlesztőknek.',
      source: { label: '/posts', href: '/posts' },
    },
  ];

  return (
    <section className="sec">
      <div className="container">
        <div className="cb reveal">
          <aside className="cb-intro">
            <div className="sec-tag">Miért bízhatsz bennünk</div>
            <h2 className="cb-h">
              Nem csak ügyfeleknek dolgozunk —
              <br />
              <em>a szakmának is.</em>
            </h2>
            <p className="cb-lead">
              A hitelesség nem marketingszöveg. Ez a <b>háttér áll a munkánk
              mögött</b> — szakmai diploma, közösségi adás, nemzetközi mérce és
              valódi ügyfelek.
            </p>
            <div className="cb-cite">
              <div className="cb-cite-num">10+ év</div>
              <div>
                <div className="cb-cite-lbl">Megszerzett háttér</div>
                <div className="cb-cite-sub">Szakma · közösség · ügyfél</div>
              </div>
            </div>
          </aside>

          <ol className="cb-list">
            {items.map((it, i) => (
              <li className="cb-row" key={i}>
                <span className="cb-mark" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 8.5 7 12.5 13 4.5" />
                  </svg>
                </span>
                <div className="cb-row-body">
                  <div className="cb-row-tag">{it.tag}</div>
                  <h4 className="cb-row-title">{it.title}</h4>
                  <p className="cb-row-sub">{it.sub}</p>
                  <a
                    className="cb-row-source"
                    href={it.source.href}
                    target={it.source.href.startsWith('http') ? '_blank' : undefined}
                    rel={it.source.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <span className="cb-row-source-lbl">Forrás</span>
                    <span>{it.source.label}</span>
                    <span className="cb-row-source-arrow" aria-hidden="true">→</span>
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function BigCTA() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="big-cta reveal">
          <div>
            <h2>
              Ha eddig tetszett,
              <br />
              <em>így lépsz tovább.</em>
            </h2>
            <p>
              Kötelezettség nélkül — nézd meg a munkáinkat, írj egy kérdést,
              vagy foglalj egy 30 perces, kötetlen beszélgetést. Ha már konkrét
              a terved, két munkanapon belül küldünk tételes árajánlatot is.
            </p>
            <div
              style={{
                marginTop: 28,
                display: 'flex',
                gap: 14,
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <Link href="/portfolio" className="btn btn-primary" style={{ display: 'inline-flex' }}>
                Munkáink <span className="arrow">→</span>
              </Link>
              <Link
                href="/contact"
                className="btn"
                style={{
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.18)',
                  display: 'inline-flex',
                }}
              >
                Írok egy kérdést
              </Link>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card-head">
              <div className="contact-avatar">
                <Image
                  src="/fanni-small.jpg"
                  alt="Ágoston Fanni"
                  fill
                  sizes="56px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <div className="contact-name">Ágoston Fanni</div>
                <div className="contact-role">A hívásokat fogadja</div>
              </div>
            </div>
            <p className="contact-blurb">
              A megkereséseket elsősorban <b>Fanni</b> kezeli, hogy Balázs minél
              jobban tudjon a weboldalak építésére koncentrálni.
            </p>
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

export default function AboutPage() {
  return (
    <>
      <Nav />
      <Hero />
      <Story />
      <Founders />
      <Values />
      <Credibility />
      <BigCTA />
      <Footer />
      <RevealWrapper />
    </>
  );
}
