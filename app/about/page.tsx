import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import RevealWrapper from '../components/RevealWrapper';

export const metadata: Metadata = {
  title: 'Rólunk — Weart | Ketten egy weboldal mögött',
  description:
    'Egy fejlesztő és egy projektmenedzser — Egyed Balázs és Ágoston Fanni. 2017 óta készítünk gyors, egyedi weboldalakat magyar kkv-knak. Nem ügynökség: aki megtervezi, az kódolja, az veszi fel a telefont.',
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
          projektmenedzser, akik nevükkel és telefonszámukkal állnak az
          oldaladért — a tervezéstől a karbantartásig, évekkel később is.
        </p>

        <div className="head-meta">
          <div className="meta-item">
            <div className="num">9 év</div>
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
            <div className="num">50+</div>
            <div className="lbl">Ország, ahol fut a kódunk</div>
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
              reklámügynökségeknek, kiadóknak és kkv-knak — Magyarországon és
              külföldön egyaránt. A saját fejlesztésű WordPress-megoldásai ma{' '}
              <span className="story-mark">
                több mint 50 országban, 700+ élő weboldalon futnak
              </span>
              .
            </p>
            <p>
              A kkv-tulajdonosok mégis újra és újra ugyanazzal a két történettel
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
    <section className="sec" style={{ paddingTop: 0 }}>
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
          <p className="sec-sub">
            Nem kapsz account managert, aki továbbít. Velünk beszélsz —
            azzal, aki a munkát is csinálja.
          </p>
        </div>

        <div className="founders reveal">
          <div className="founder">
            <div className="founder-head">
              <div className="team-photo balazs">B</div>
              <div>
                <div className="team-name">Egyed Balázs</div>
                <div className="team-role">Fejlesztő · Alapító</div>
              </div>
            </div>
            <div className="founder-bio">
              <p>
                Programtervező informatikus (ELTE, Informatikai Kar), aki közel
                egy évtizede a WordPress és WooCommerce köré építi a karrierjét.
                Nem sablonból dolgozik: pontosan azt a funkciót fejleszti le
                kódból, amire a vállalkozásodnak szüksége van — minimális
                bővítménnyel, gyorsan, biztonságosan.
              </p>
              <p>
                Az ausztrál <b>Envato</b> piactéren a sablonjait világszerte
                700+ oldalon használják, 50+ országban. Ingyenes WordPress
                pluginokat ad ki, részt vesz a magyar fordításokban, és
                fejlesztői eszközöket oszt meg nyíltan — mert a szakmai
                közösség neki is sokat adott.
              </p>
            </div>
            <div className="founder-points">
              <div className="founder-point">
                <span className="fp-ico">⚙</span>
                <span>
                  <b>Egyedi WordPress &amp; WooCommerce</b> — saját kód, nem
                  vásárolt téma feltuningolva.
                </span>
              </div>
              <div className="founder-point">
                <span className="fp-ico">⚡</span>
                <span>
                  <b>Sebesség és SEO</b> — Lighthouse 95+ mobilon is, hogy a
                  Google és a látogató is szeresse.
                </span>
              </div>
              <div className="founder-point">
                <span className="fp-ico">↗</span>
                <span>
                  <b>Időtálló alap</b> — évekkel később is bővíthető, nem kell
                  nullról kezdeni.
                </span>
              </div>
            </div>
            <div className="team-tags">
              <span className="team-tag">WordPress</span>
              <span className="team-tag">WooCommerce</span>
              <span className="team-tag">React</span>
              <span className="team-tag">Sebesség</span>
              <span className="team-tag">SEO</span>
            </div>
          </div>

          <div className="founder">
            <div className="founder-head">
              <div className="team-photo fanni">
                <Image
                  src="/fanni-small.jpg"
                  alt="Ágoston Fanni"
                  width={84}
                  height={84}
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <div className="team-name">Ágoston Fanni</div>
                <div className="team-role">Projektmenedzser · Társalapító</div>
              </div>
            </div>
            <div className="founder-bio">
              <p>
                Ő a kapocs közted és a fejlesztés között. Hozzá fut be minden
                megkeresés: visszahív, végigveszi veled, mire van szükséged, és
                egy munkanapon belül konkrét, fix árajánlatot küld — nincs
                sales-folyamat, nincs öt e-mailes „követés”.
              </p>
              <p>
                A projekt alatt ő tartja a határidőket, fordítja érthető
                magyarra a műszaki döntéseket, és gondoskodik róla, hogy ne
                maradjon nyitott kérdés. <b>Te csak szólsz</b> — a többit
                intézi.
              </p>
            </div>
            <div className="founder-points">
              <div className="founder-point">
                <span className="fp-ico">☎</span>
                <span>
                  <b>Egy munkanapon belül válasz</b> — és egy valódi emberi
                  hang, nem automata.
                </span>
              </div>
              <div className="founder-point">
                <span className="fp-ico">◷</span>
                <span>
                  <b>Tartott határidők</b> — tudod, mikor mi készül el, meglepetés
                  nélkül.
                </span>
              </div>
              <div className="founder-point">
                <span className="fp-ico">✎</span>
                <span>
                  <b>Érthető fordítás</b> — a műszaki dolgokat magyarul, nem
                  fejlesztőül kapod.
                </span>
              </div>
            </div>
            <div className="team-tags">
              <span className="team-tag">Ügyfélkapcsolat</span>
              <span className="team-tag">Projektvezetés</span>
              <span className="team-tag">Tervezés</span>
              <span className="team-tag">Copywriting</span>
              <span className="team-tag">Onboarding</span>
            </div>
          </div>
        </div>
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
                <Link className="btn btn-primary" href="/contact">
                  Kérek ajánlatot →
                </Link>
                <Link
                  className="btn"
                  style={{
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.18)',
                  }}
                  href="/portfolio"
                >
                  Munkáink
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
        </div>
      </div>
    </section>
  );
}

function Credibility() {
  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <div className="sec-tag">Miért bízhatsz bennünk</div>
            <h2 className="sec-h">
              Nem csak ügyfeleknek dolgozunk —
              <br />
              <em>a szakmának is.</em>
            </h2>
          </div>
          <p className="sec-sub">
            A hitelesség nem marketingszöveg. Ezek mérhető, ellenőrizhető
            dolgok, amik mögött évek munkája áll.
          </p>
        </div>

        <div className="cred-grid reveal">
          <div className="cred">
            <div className="cred-tag">Végzettség</div>
            <h4>ELTE — Programtervező informatikus</h4>
            <p>
              Az Eötvös Loránd Tudományegyetem Informatikai Karán szerzett
              háttér. Nem „összeollózott” tudás: tényleg programozó.
            </p>
          </div>
          <div className="cred">
            <div className="cred-tag">Nemzetközi</div>
            <div className="cred-num">
              700<em>+</em>
            </div>
            <p>
              Élő weboldal fut a saját WordPress-megoldásaiból, 50+ országban —
              az Envato globális piactéren keresztül.
            </p>
          </div>
          <div className="cred">
            <div className="cred-tag">Közösség</div>
            <h4>Ingyenes pluginek &amp; fordítások</h4>
            <p>
              Nyílt WordPress bővítmények, magyar fordítások és GitHubra
              feltöltött fejlesztői eszközök — vissza a közösségnek.
            </p>
          </div>
          <div className="cred">
            <div className="cred-tag">Tudásmegosztás</div>
            <h4>Szakmai blog, magyarul</h4>
            <p>
              Érthető cikkek kkv-tulajdonosoknak arról, hogyan működik egy
              weboldal, és mit érdemes elvárni egy fejlesztőtől.
            </p>
          </div>
          <div className="cred">
            <div className="cred-tag">Tapasztalat</div>
            <div className="cred-num">
              120<em>+</em>
            </div>
            <p>
              Leszállított weboldal 9 év alatt — bemutatkozók, webshopok,
              felújítások, az ország 14 megyéjéből.
            </p>
          </div>
          <div className="cred">
            <div className="cred-tag">Értékelés</div>
            <div className="cred-num">
              4,9<em> ★</em>
            </div>
            <p>
              Google-értékelés valódi ügyfelektől. A munkáinkat és a
              véleményeket a portfólióoldalon is megnézheted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeStrip() {
  const items = [
    'Egyedi kód',
    'Fix ár',
    'Tartott határidő',
    'Magyar nyelvű támogatás',
    'Te kezeled',
    'Nem tűnünk el',
    'Mérnöki minőség',
    'Kkv-barát',
    'Átlátható',
  ];
  const all = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
    </div>
  );
}

function Quote() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cluster reveal">
          <div className="testimonial-inline">
            <div className="ti-side">
              <div className="ti-mono">Vélemény · AurumMed</div>
              <div className="ti-author">
                <div className="ti-avatar b">D</div>
                <div>
                  <div className="ti-name">Dr. Halász Eszter</div>
                  <div className="ti-role">Klinikaigazgató · AurumMed</div>
                </div>
              </div>
            </div>
            <div className="ti-quote">
              „Két ügynökséget kipróbáltunk előttük. A Weart az első, ahol{' '}
              <em>érzem, hogy értik, mi a klinika</em> — nem csak egy újabb
              projekt nekik.”
            </div>
            <div className="ti-stat">
              <div className="ti-stat-big">
                2<small>fő</small>
              </div>
              <div className="ti-stat-lbl">akivel végig beszéltem, nem 6</div>
            </div>
          </div>
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
            <div className="meta">2026 Q3-ra még 2 hely van</div>
            <h2 style={{ marginTop: 18 }}>
              Beszéljünk az
              <br />
              <em>oldaladról.</em>
            </h2>
            <p>
              Egy 20 perces, kötetlen telefonbeszélgetés. Megnézzük, mire van
              szükséged, és egy munkanapon belül küldünk egy konkrét
              árajánlatot — csomagolás nélkül.
            </p>
            <div className="ctas">
              <Link href="/contact" className="btn btn-primary">
                Ingyenes árajánlat <span className="arrow">→</span>
              </Link>
              <span className="meta">Élő — válasz 1 munkanap</span>
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
      <MarqueeStrip />
      <Credibility />
      <Quote />
      <BigCTA />
      <Footer />
      <RevealWrapper />
    </>
  );
}
