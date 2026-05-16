'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import RevealWrapper from '../components/RevealWrapper';

const cats = ['Mind', 'Webshop', 'Bemutatkozó', 'Felújítás', 'Foglalási rendszer'];

export default function MunkainkPage() {
  const [activeCat, setActiveCat] = useState('Mind');

  return (
    <>
      <Nav />

      <header className="page-head">
        <div className="container">
          <div className="crumbs">
            <Link href="/">Főoldal</Link>
            <span className="sep">/</span>
            <span>Munkáink</span>
          </div>
          <div className="page-eyebrow">Portfólió · 2018 — 2026</div>
          <h1 className="page-h1">Magyar kkv-k weboldalai, amiket <em>tényleg</em> szeretnek a <span className="underline">megrendelőink.</span></h1>

          <div className="page-head-row">
            <p className="page-lead">Kilenc év, <b>120+ leszállított</b> oldal — webshopok, bemutatkozó oldalak, felújítások. Itt válogatva azok, amikre a legbüszkébbek vagyunk. Mindegyik mögött egy mester és egy elégedett ügyfél.</p>
            <div className="head-stats">
              <div className="head-stat"><b><em>120</em>+</b><small>Leszállított oldal</small></div>
              <div className="head-stat"><b><em>9</em> év</b><small>Tapasztalat</small></div>
              <div className="head-stat"><b><em>96</em>/100</b><small>Átlagos PageSpeed</small></div>
            </div>
          </div>

          <div className="filter-bar">
            <div className="chips">
              {cats.map((cat, i) => {
                const counts = [12, 4, 5, 2, 1];
                return (
                  <button key={cat} className={`chip${activeCat === cat ? ' active' : ''}`} onClick={() => setActiveCat(cat)}>
                    {cat} <span className="count">/{counts[i]}</span>
                  </button>
                );
              })}
            </div>
            <div className="filter-meta"><span className="live-dot"></span>Frissítve: 2026 május</div>
          </div>
        </div>
      </header>

      {/* Trust logo strip */}
      <div className="trust-wrap">
        <div className="container">
          <div className="trust-grid reveal">
            <div className="trust-head">
              <h3>12 ügyfél, akik <em>velünk dolgoznak</em>.</h3>
              <p>Lakatos, fogorvos, étterem, pékség, könyvelő — mindenki, aki nem ügynökséget akar, hanem megbízható mestert.</p>
            </div>
            <div className="logo-row">
              <div className="lg lg-style-2">
                <span className="glyph-mark">K</span>
                <div><div className="lg-name">Kovács<br/>Lakatos</div></div>
              </div>
              <div className="lg lg-style-1">
                <span className="lg-glyph">N&amp;F</span>
                <span className="lg-mono">Fogászat</span>
              </div>
              <div className="lg lg-style-3">
                <span className="lg-name" style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 13, letterSpacing: '0.05em' }}>VARGA &amp; FIA</span>
                <span className="pill-tag">Pékség</span>
              </div>
              <div className="lg lg-style-1">
                <span className="lg-name" style={{ fontSize: 16 }}>Borsos<span style={{ color: 'var(--primary)' }}>.</span>könyv</span>
                <span className="lg-mono">Könyvelőiroda</span>
              </div>
              <div className="lg lg-style-2">
                <span className="glyph-mark" style={{ background: 'var(--primary)', color: 'var(--dark)' }}>D</span>
                <div><div className="lg-name">Dombóvári<br/>Étterem</div></div>
              </div>
              <div className="lg lg-style-1">
                <span className="lg-glyph" style={{ fontStyle: 'italic' }}>tilia</span>
                <span className="lg-mono">Gyógynövény bolt</span>
              </div>
              <div className="lg lg-style-3">
                <span className="lg-name">Aurum<span style={{ color: 'var(--primary)' }}>★</span>Med</span>
                <span className="pill-tag" style={{ background: 'var(--dark)', color: 'var(--primary)' }}>Klinika</span>
              </div>
              <div className="lg lg-style-2">
                <span className="glyph-mark">B</span>
                <div><div className="lg-name">Bekes<br/>Optika</div></div>
              </div>
              <div className="lg lg-style-1">
                <span className="lg-glyph">M/82</span>
                <span className="lg-mono">Műhely</span>
              </div>
              <div className="lg lg-style-3">
                <span className="lg-name" style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 12, letterSpacing: '0.08em' }}>SZÉPVÖLGYI</span>
                <span className="pill-tag">Panzió</span>
              </div>
              <div className="lg lg-style-1">
                <span className="lg-name" style={{ fontSize: 18 }}>Halász<em>kert</em></span>
                <span className="lg-mono">Kertészet</span>
              </div>
              <div className="lg lg-style-2">
                <span className="glyph-mark" style={{ background: 'var(--accent)', color: '#fff' }}>R</span>
                <div><div className="lg-name">Reflex<br/>Autósiskola</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Showcase */}
      <section className="showcase">
        <div className="container">
          <div className="showcase-head">
            <div>
              <div className="sec-tag">Esettanulmányok</div>
              <h2 className="sec-h">Minden oldal mögött <em>egy konkrét probléma</em><br/>és egy mérhető eredmény.</h2>
            </div>
            <p className="sec-sub">Időrendben visszafelé. Minden kártya egy esettanulmányra visz, ahol leírjuk: mi volt a kihívás, mit csináltunk, és mi lett az eredménye.</p>
          </div>

          {/* Cluster 01 */}
          <div className="cluster reveal">
            <article className="work work-featured dark-body">
              <div className="work-img dark tilt-left">
                <span className="corner-tag">Esettanulmány</span>
                <span className="year-tag">2025 · 04</span>
                <span className="work-glyph">K</span>
                <div className="mini-mock">
                  <div className="mb"><i></i><i></i><i></i><span className="url">kovacslakatos.hu</span></div>
                  <div className="mbody">
                    <div className="mh">Vasszerkezet, ami<br/><em>30 évig áll.</em></div>
                    <div className="mp"></div><div className="mp s"></div>
                    <div className="mr"><i></i><i className="g"></i></div>
                    <div className="mgrid"><i></i><i></i><i></i><i></i></div>
                  </div>
                </div>
              </div>
              <div className="work-body">
                <div className="work-meta">
                  <span className="tag">Bemutatkozó</span><span className="dot"></span><span>9 oldal</span><span className="dot"></span><span>4 hét</span>
                </div>
                <h3 className="work-title">Kovács <em>Lakatos</em> Kft.</h3>
                <p className="work-desc">Egy 18 éves családi műhely, amit végre vett észre a Google. Régi oldal, lassú, mobilon olvashatatlan. Nullról építettünk egy gyors, jól kereshető oldalt — érkezett ajánlatkérésekkel együtt.</p>
                <div className="work-stats">
                  <div className="ws"><b><em>+4×</em></b><small>Ajánlatkérés / hó</small></div>
                  <div className="ws"><b><em>96</em>/100</b><small>PageSpeed</small></div>
                  <div className="ws"><b><em>4</em> hét</b><small>Átfutás</small></div>
                </div>
                <div className="work-foot">
                  <span>2025 / 04</span>
                  <span className="open">Esettanulmány</span>
                </div>
              </div>
            </article>

            <article className="work work-std">
              <div className="work-img light">
                <span className="corner-tag" style={{ background: 'var(--dark)', color: 'var(--primary)' }}>Webshop</span>
                <span className="year-tag">2025 · 09</span>
                <span className="work-glyph" style={{ fontSize: 140 }}>V</span>
              </div>
              <div className="work-body">
                <div className="work-meta"><span className="tag">Webshop</span><span className="dot"></span><span>WooCommerce</span></div>
                <h4 className="work-title" style={{ fontSize: 18 }}>Varga &amp; Fia <em>Pékség</em></h4>
                <p className="work-desc" style={{ fontSize: 13 }}>Friss kenyér online rendelés, körzeti kiszállítás. SimplePay + NAV számla.</p>
                <div className="work-foot"><span>2025 / 09</span><span className="open">Részletek</span></div>
              </div>
            </article>

            <article className="work work-std">
              <div className="work-img cream">
                <span className="corner-tag" style={{ background: 'var(--accent)', color: '#fff' }}>Új</span>
                <span className="year-tag">2026 · 02</span>
                <span className="work-glyph" style={{ fontStyle: 'italic', fontSize: 140, color: 'rgba(13,23,46,0.18)' }}>tilia</span>
              </div>
              <div className="work-body">
                <div className="work-meta"><span className="tag">Bemutatkozó</span><span className="dot"></span><span>WordPress</span></div>
                <h4 className="work-title" style={{ fontSize: 18 }}>Tilia <em>Gyógynövény</em></h4>
                <p className="work-desc" style={{ fontSize: 13 }}>Kis bolt Pesterzsébeten. Termékkatalógus, blog, foglalható konzultáció.</p>
                <div className="work-foot"><span>2026 / 02</span><span className="open">Részletek</span></div>
              </div>
            </article>
          </div>

          {/* Cluster 02 */}
          <div className="cluster reveal">
            <article className="work work-wide">
              <div className="work-img accent tilt-right">
                <span className="corner-tag" style={{ background: 'var(--dark)', color: 'var(--primary)' }}>Felújítás</span>
                <span className="year-tag">2025 · 06</span>
                <span className="work-glyph">N&amp;F</span>
                <div className="mini-mock" style={{ inset: 'auto 22% 0 22%', height: '75%' }}>
                  <div className="mb"><i></i><i></i><i></i><span className="url">nagyfogaszat.hu</span></div>
                  <div className="mbody">
                    <div className="mh"><em>Időpont</em> 30 mp alatt.</div>
                    <div className="mp"></div><div className="mp s"></div>
                    <div className="mgrid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}><i></i><i></i><i></i></div>
                  </div>
                </div>
              </div>
              <div className="work-body">
                <div className="work-meta"><span className="tag">Felújítás + Foglalás</span><span className="dot"></span><span>14 oldal</span><span className="dot"></span><span>5 hét</span></div>
                <h3 className="work-title">Nagy &amp; Fia <em>Fogászat</em></h3>
                <p className="work-desc">Régi WordPress oldal, ami havonta összeomlott. Átköltöztettük, beépítettünk egy online időpontfoglalást — most a páciensek 60%-a a weben foglal.</p>
                <div className="work-stats">
                  <div className="ws"><b><em>60</em>%</b><small>Online foglalás</small></div>
                  <div className="ws"><b><em>0</em></b><small>Leállás 12 hónap</small></div>
                  <div className="ws"><b><em>5</em> hét</b><small>Átfutás</small></div>
                </div>
                <div className="work-foot"><span>2025 / 06</span><span className="open">Esettanulmány</span></div>
              </div>
            </article>

            <article className="work work-wide">
              <div className="work-img deep tilt-left">
                <span className="corner-tag">Webshop</span>
                <span className="year-tag">2024 · 11</span>
                <span className="work-glyph">B<span style={{ color: 'var(--primary)' }}>.</span></span>
                <div className="mini-mock" style={{ inset: 'auto 22% 0 22%', height: '75%' }}>
                  <div className="mb"><i></i><i></i><i></i><span className="url">borsoskonyv.hu</span></div>
                  <div className="mbody">
                    <div className="mh">Online <em>könyvelés</em>.</div>
                    <div className="mp"></div><div className="mp s"></div>
                    <div className="mr"><i></i><i className="g"></i></div>
                  </div>
                </div>
              </div>
              <div className="work-body">
                <div className="work-meta"><span className="tag">Bemutatkozó</span><span className="dot"></span><span>11 oldal</span><span className="dot"></span><span>3 hét</span></div>
                <h3 className="work-title">Borsos<em>.könyv</em> Iroda</h3>
                <p className="work-desc">Pesti könyvelőiroda, akinek kellett egy tisztább, „nem 2008-as" megjelenés. Két hét alatt új arculat, plus blog SEO-szerkesztővel.</p>
                <div className="work-stats">
                  <div className="ws"><b><em>+180</em>%</b><small>Organikus forgalom</small></div>
                  <div className="ws"><b><em>3</em> hét</b><small>Átfutás</small></div>
                  <div className="ws"><b><em>11</em></b><small>Oldal</small></div>
                </div>
                <div className="work-foot"><span>2024 / 11</span><span className="open">Esettanulmány</span></div>
              </div>
            </article>
          </div>

          {/* Testimonial 1 */}
          <div className="cluster reveal">
            <div className="testimonial-inline">
              <div className="ti-side">
                <div className="ti-mono">Vélemény · Kovács Lakatos</div>
                <div className="ti-author">
                  <div className="ti-avatar">K</div>
                  <div>
                    <div className="ti-name">Kovács Tibor</div>
                    <div className="ti-role">Tulajdonos · Kovács Lakatos Kft.</div>
                  </div>
                </div>
              </div>
              <div className="ti-quote">
                „A régi oldalt 2014-ben csinálta valaki. <em>4 hét alatt</em> új lett — nincs marketing duma, megbeszéltük mit kell, megcsinálták. Azóta nyugi van."
              </div>
              <div className="ti-stat">
                <div className="ti-stat-big">+4<small>×</small></div>
                <div className="ti-stat-lbl">ajánlatkérés / hó az új oldal után</div>
              </div>
            </div>
          </div>

          {/* Cluster 03 */}
          <div className="cluster reveal">
            <article className="work work-std">
              <div className="work-img" style={{ background: 'linear-gradient(135deg,#7d4f2a 0%, #9c6b3f 100%)' }}>
                <span className="corner-tag" style={{ background: 'var(--dark)', color: 'var(--primary)' }}>Bemutatkozó</span>
                <span className="year-tag" style={{ background: 'rgba(0,0,0,0.3)', color: 'rgba(255,255,255,0.85)' }}>2024 · 08</span>
                <span className="work-glyph" style={{ color: 'rgba(255,255,255,0.18)', fontSize: 160 }}>D</span>
              </div>
              <div className="work-body">
                <div className="work-meta"><span className="tag">Bemutatkozó</span><span className="dot"></span><span>8 oldal</span></div>
                <h4 className="work-title" style={{ fontSize: 18 }}>Dombóvári <em>Étterem</em></h4>
                <p className="work-desc" style={{ fontSize: 13 }}>Étlap, terem-galéria, online asztalfoglalás. Mobilon villámgyors.</p>
                <div className="work-foot"><span>2024 / 08</span><span className="open">Részletek</span></div>
              </div>
            </article>

            <article className="work work-std">
              <div className="work-img" style={{ background: 'linear-gradient(135deg, #2a4a3a 0%, #1a2f26 100%)' }}>
                <span className="corner-tag">Webshop</span>
                <span className="year-tag">2024 · 05</span>
                <span className="work-glyph" style={{ color: 'rgba(255,255,255,0.18)', fontSize: 140 }}>★H</span>
              </div>
              <div className="work-body">
                <div className="work-meta"><span className="tag">Webshop</span><span className="dot"></span><span>200+ termék</span></div>
                <h4 className="work-title" style={{ fontSize: 18 }}>Halász<em>kert</em></h4>
                <p className="work-desc" style={{ fontSize: 13 }}>Kertészeti webshop GLS-szel, szezonális készlet-management.</p>
                <div className="work-foot"><span>2024 / 05</span><span className="open">Részletek</span></div>
              </div>
            </article>

            <article className="work work-std">
              <div className="work-img" style={{ background: 'linear-gradient(135deg, #f0e3c8 0%, #e3d2a8 100%)' }}>
                <span className="corner-tag" style={{ background: 'var(--accent)', color: '#fff' }}>Felújítás</span>
                <span className="year-tag" style={{ background: 'rgba(255,255,255,0.5)', color: 'var(--dark)' }}>2024 · 03</span>
                <span className="work-glyph" style={{ fontSize: 140, color: 'rgba(13,23,46,0.18)' }}>Sz</span>
              </div>
              <div className="work-body">
                <div className="work-meta"><span className="tag">Felújítás</span><span className="dot"></span><span>WordPress</span></div>
                <h4 className="work-title" style={{ fontSize: 18 }}>Szépvölgyi <em>Panzió</em></h4>
                <p className="work-desc" style={{ fontSize: 13 }}>10 éves oldal újraépítése, foglalási rendszer, többnyelvű (HU/EN/DE).</p>
                <div className="work-foot"><span>2024 / 03</span><span className="open">Részletek</span></div>
              </div>
            </article>
          </div>

          {/* Process band */}
          <div className="band reveal">
            <div className="band-num">03</div>
            <div className="band-text">
              <h4>Mindig ugyanaz a <em>négy lépés.</em></h4>
              <p>Beszélgetés → wireframe → design → fejlesztés. Az első kettő ingyen, csak a harmadiknál kérünk pénzt — addigra te is, mi is tudjuk, érdemes-e együtt dolgozni.</p>
            </div>
            <Link href="/contact" className="band-cta">Hogyan dolgozunk</Link>
          </div>

          {/* Cluster 04 */}
          <div className="cluster reveal">
            <article className="work work-tall dark-body">
              <div className="work-img deep tilt-right">
                <span className="corner-tag">Klinika</span>
                <span className="year-tag">2023 · 11</span>
                <span className="work-glyph" style={{ fontSize: 160 }}>A★</span>
                <div className="mini-mock" style={{ height: '65%' }}>
                  <div className="mb"><i></i><i></i><i></i><span className="url">aurummed.hu</span></div>
                  <div className="mbody">
                    <div className="mh"><em>Magán-</em>klinika.</div>
                    <div className="mp"></div><div className="mp s"></div>
                    <div className="mgrid"><i></i><i></i></div>
                  </div>
                </div>
              </div>
              <div className="work-body">
                <div className="work-meta"><span className="tag">Bemutatkozó</span><span className="dot"></span><span>22 oldal · 5 orvos</span></div>
                <h3 className="work-title">Aurum<em>Med</em> Klinika</h3>
                <p className="work-desc">Magánklinika 5 orvossal, mindegyiküknek külön profil, online időpontfoglalás, bevezető magazin (12 cikk SEO-ra).</p>
                <div className="work-stats">
                  <div className="ws"><b><em>22</em></b><small>Aloldal</small></div>
                  <div className="ws"><b><em>2.1</em>s</b><small>Mobil betöltés</small></div>
                </div>
                <div className="work-foot"><span>2023 / 11</span><span className="open">Esettanulmány</span></div>
              </div>
            </article>

            <article className="work work-std">
              <div className="work-img" style={{ background: 'linear-gradient(135deg, #14334a 0%, #0a1d2c 100%)' }}>
                <span className="corner-tag">Bemutatkozó</span>
                <span className="year-tag">2023 · 06</span>
                <span className="work-glyph" style={{ color: 'rgba(0,194,203,0.22)', fontSize: 130 }}>B/O</span>
              </div>
              <div className="work-body">
                <div className="work-meta"><span className="tag">Bemutatkozó</span><span className="dot"></span><span>2 üzlet</span></div>
                <h4 className="work-title" style={{ fontSize: 18 }}>Békés <em>Optika</em></h4>
                <p className="work-desc" style={{ fontSize: 13 }}>Két üzlet egy oldalon, szemvizsgálat-foglalás, akciós keret-katalógus.</p>
                <div className="work-foot"><span>2023 / 06</span><span className="open">Részletek</span></div>
              </div>
            </article>

            <article className="work work-std">
              <div className="work-img" style={{ background: 'linear-gradient(135deg, #f6dcd0 0%, #f0c4b0 100%)' }}>
                <span className="corner-tag" style={{ background: 'var(--dark)', color: 'var(--primary)' }}>Webshop</span>
                <span className="year-tag" style={{ background: 'rgba(255,255,255,0.5)', color: 'var(--dark)' }}>2023 · 02</span>
                <span className="work-glyph" style={{ fontSize: 130, color: 'rgba(13,23,46,0.16)' }}>M/82</span>
              </div>
              <div className="work-body">
                <div className="work-meta"><span className="tag">Webshop</span><span className="dot"></span><span>Bőrdíszmű</span></div>
                <h4 className="work-title" style={{ fontSize: 18 }}>Műhely<em>/82</em></h4>
                <p className="work-desc" style={{ fontSize: 13 }}>Egyedi bőrtáska műhely. Kis termékkatalógus, instagrammos történetmesélés.</p>
                <div className="work-foot"><span>2023 / 02</span><span className="open">Részletek</span></div>
              </div>
            </article>
          </div>

          {/* Testimonial 2 — light */}
          <div className="cluster reveal">
            <div className="testimonial-inline light">
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
                „Két ügynökséget kipróbáltunk előttük. A Weart az első, ahol <em>érzem, hogy értik, mi a klinika</em> — nem csak egy újabb projekt nekik."
              </div>
              <div className="ti-stat">
                <div className="ti-stat-big">2.1<small>s</small></div>
                <div className="ti-stat-lbl">mobil betöltés a régi 7.4s helyett</div>
              </div>
            </div>
          </div>

          {/* Cluster 05 */}
          <div className="cluster reveal">
            <article className="work work-wide">
              <div className="work-img" style={{ background: 'linear-gradient(135deg, #1f3530 0%, #0f1d1a 100%)' }}>
                <span className="corner-tag" style={{ background: 'var(--primary)', color: 'var(--dark)' }}>Webshop</span>
                <span className="year-tag">2022 · 09</span>
                <span className="work-glyph" style={{ color: 'rgba(0,194,203,0.18)', fontSize: 170 }}>D</span>
                <div className="mini-mock" style={{ inset: 'auto 22% 0 22%', height: '70%' }}>
                  <div className="mb"><i></i><i></i><i></i><span className="url">dombetterem.hu</span></div>
                  <div className="mbody">
                    <div className="mh">Asztal<em>foglalás</em>.</div>
                    <div className="mp"></div><div className="mp s"></div>
                    <div className="mr"><i></i><i className="g"></i></div>
                  </div>
                </div>
              </div>
              <div className="work-body">
                <div className="work-meta"><span className="tag">Foglalási rendszer</span><span className="dot"></span><span>4 termes étterem</span><span className="dot"></span><span>6 hét</span></div>
                <h3 className="work-title">Dombóvári <em>Étterem 2.0</em></h3>
                <p className="work-desc">Második kör — ehhez már külön termenkénti asztalfoglalás kellett, magyar SimplePay előleggel, és egy admin felület a séfnek (nem a fejlesztőnek).</p>
                <div className="work-stats">
                  <div className="ws"><b><em>+38</em>%</b><small>Hétvégi foglaltság</small></div>
                  <div className="ws"><b><em>4</em></b><small>Terem külön</small></div>
                  <div className="ws"><b><em>6</em> hét</b><small>Átfutás</small></div>
                </div>
                <div className="work-foot"><span>2022 / 09</span><span className="open">Esettanulmány</span></div>
              </div>
            </article>

            <article className="work work-wide">
              <div className="work-img" style={{ background: 'linear-gradient(135deg, #d8e4d2 0%, #b8c9b0 100%)' }}>
                <span className="corner-tag" style={{ background: 'var(--accent)', color: '#fff' }}>Felújítás</span>
                <span className="year-tag" style={{ background: 'rgba(255,255,255,0.5)', color: 'var(--dark)' }}>2022 · 04</span>
                <span className="work-glyph" style={{ fontSize: 160, color: 'rgba(13,23,46,0.18)' }}>R★</span>
                <div className="mini-mock" style={{ inset: 'auto 22% 0 22%', height: '70%' }}>
                  <div className="mb"><i></i><i></i><i></i><span className="url">reflexiskola.hu</span></div>
                  <div className="mbody">
                    <div className="mh"><em>B kategória</em>, 3 hónap.</div>
                    <div className="mp"></div><div className="mp s"></div>
                    <div className="mgrid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}><i></i><i></i><i></i></div>
                  </div>
                </div>
              </div>
              <div className="work-body">
                <div className="work-meta"><span className="tag">Felújítás</span><span className="dot"></span><span>Vezetésem.hu átállás</span></div>
                <h3 className="work-title">Reflex <em>Autósiskola</em></h3>
                <p className="work-desc">Régi rendszer kiváltása, online tanfolyam-jelentkezés, vizsgaidőpont-naptár, oktatói profilok. Költözés adatvesztés nélkül.</p>
                <div className="work-stats">
                  <div className="ws"><b><em>+62</em>%</b><small>Online jelentkezés</small></div>
                  <div className="ws"><b><em>0</em></b><small>Adat elveszett</small></div>
                </div>
                <div className="work-foot"><span>2022 / 04</span><span className="open">Esettanulmány</span></div>
              </div>
            </article>
          </div>

          {/* Testimonial 3 — primary */}
          <div className="cluster reveal">
            <div className="testimonial-inline primary">
              <div className="ti-side">
                <div className="ti-mono">Vélemény · Reflex Autósiskola</div>
                <div className="ti-author">
                  <div className="ti-avatar c">B</div>
                  <div>
                    <div className="ti-name">Bencze László</div>
                    <div className="ti-role">Igazgató · Reflex Autósiskola</div>
                  </div>
                </div>
              </div>
              <div className="ti-quote">
                „A régi rendszerből 8 évnyi diák-adatot vittünk át, <em>egy elveszett sor sem volt</em>. Ezt csak az csinálja meg, aki tényleg dolgozott már ilyennel."
              </div>
              <div className="ti-stat">
                <div className="ti-stat-big">+62<small>%</small></div>
                <div className="ti-stat-lbl">online jelentkezés a felújítás óta</div>
              </div>
            </div>
          </div>

          {/* Cluster 06 */}
          <div className="cluster reveal">
            <article className="work work-std">
              <div className="work-img light">
                <span className="corner-tag">Bemutatkozó</span>
                <span className="year-tag" style={{ background: 'rgba(255,255,255,0.5)', color: 'var(--dark)' }}>2021 · 10</span>
                <span className="work-glyph" style={{ fontSize: 140, color: 'rgba(13,23,46,0.16)' }}>SzV</span>
              </div>
              <div className="work-body">
                <div className="work-meta"><span className="tag">Bemutatkozó</span><span className="dot"></span><span>Kis projekt</span></div>
                <h4 className="work-title" style={{ fontSize: 18 }}>Szigligeti <em>Vendégház</em></h4>
                <p className="work-desc" style={{ fontSize: 13 }}>Egyoldalas, tiszta vendégházi prospektus, foglalás emailre.</p>
                <div className="work-foot"><span>2021 / 10</span><span className="open">Részletek</span></div>
              </div>
            </article>
            <article className="work work-std">
              <div className="work-img" style={{ background: 'linear-gradient(135deg, #2a3450 0%, #161d2f 100%)' }}>
                <span className="corner-tag">Webshop</span>
                <span className="year-tag">2020 · 06</span>
                <span className="work-glyph" style={{ color: 'rgba(255,255,255,0.18)', fontSize: 130 }}>P&amp;K</span>
              </div>
              <div className="work-body">
                <div className="work-meta"><span className="tag">Webshop</span><span className="dot"></span><span>Műszaki</span></div>
                <h4 className="work-title" style={{ fontSize: 18 }}>Pál&amp;Kéz <em>Műszaki</em></h4>
                <p className="work-desc" style={{ fontSize: 13 }}>B2B műszaki webshop, ÁFA-mentes export-rendelés EU-ba.</p>
                <div className="work-foot"><span>2020 / 06</span><span className="open">Részletek</span></div>
              </div>
            </article>
            <article className="work work-std">
              <div className="work-img cream">
                <span className="corner-tag" style={{ background: 'var(--accent)', color: '#fff' }}>Bemutatkozó</span>
                <span className="year-tag" style={{ background: 'rgba(255,255,255,0.5)', color: 'var(--dark)' }}>2019 · 03</span>
                <span className="work-glyph" style={{ fontSize: 140, color: 'rgba(13,23,46,0.16)' }}>Hk</span>
              </div>
              <div className="work-body">
                <div className="work-meta"><span className="tag">Bemutatkozó</span><span className="dot"></span><span>Egyéni vállalkozó</span></div>
                <h4 className="work-title" style={{ fontSize: 18 }}>Horváth <em>Kovácsműhely</em></h4>
                <p className="work-desc" style={{ fontSize: 13 }}>Kovács-mester első weboldala. Galéria, ár-jelzés, kapcsolat.</p>
                <div className="work-foot"><span>2019 / 03</span><span className="open">Részletek</span></div>
              </div>
            </article>
          </div>

          {/* Big CTA */}
          <section className="big-cta reveal" id="cta">
            <div>
              <h2>Tied lehet a <em>következő</em><br/>esettanulmány.</h2>
              <p>Most még van 2 hely 2026 Q3-ra. Ha érdekel, írj egy mondatot: mi a vállalkozásod, mit hiányzik a mostani oldaladból. Egy munkanapon belül válaszolunk konkrét számmal.</p>
              <div className="ctas">
                <Link href="/contact" className="btn btn-primary">Ingyenes árajánlat <span className="arrow">→</span></Link>
                <span className="meta">Élő — válasz 1 munkanap</span>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-head">
                <div className="contact-avatar">
                  <Image src="/fanni-small.jpg" alt="Ágoston Fanni" fill sizes="56px" style={{ objectFit: 'cover' }} />
                </div>
                <div>
                  <div className="contact-name">Ágoston Fanni</div>
                  <div className="contact-role">Ügyfélkapcsolat</div>
                </div>
              </div>
              <p className="contact-blurb">Engem hívj — <b>nem értékesítő vagyok</b>, csak segítek megérteni, mi az, ami neked kell, és reális-e az időkeret.</p>
              <div className="contact-rows">
                <a className="contact-row" href="tel:+36301958114">
                  <span className="contact-row-ico">
                    <Phone size={14} />
                  </span>+36 30 / 195 8114
                </a>
                <a className="contact-row" href="mailto:info@weart.hu">
                  <span className="contact-row-ico">
                    <Mail size={14} />
                  </span>info@weart.hu
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
      <RevealWrapper />
    </>
  );
}
