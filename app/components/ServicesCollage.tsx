// Services szakasz réteges kollázs változata.
// Statikus szerver-komponens: nincs egérkövető parallax és nincs scroll-animáció.
// A fő szolgáltatás (weboldal készítés) hangsúlyos kártya, az al-szolgáltatások
// (felújítás, webshop, design, karbantartás, SEO) fanned oszlopként jobbra,
// természetes, kézzel rajzolt vonalként húzott kapcsolatvonallal a kettő között.
export default function ServicesCollage() {
  return (
    <div className="sc">
      <div className="sc-stage">
        <span className="sc-blob" aria-hidden="true" />

        <svg className="sc-link" viewBox="0 0 100 720" fill="none" preserveAspectRatio="none" aria-hidden="true">
          {/* 5 független, természetes ívű vonal — a fő kártya jobb élétől a satellite-ek bal éléig fut, edge-to-edge */}
          <path
            d="M 0 72 C 28 60, 64 80, 100 76 M 0 216 C 32 230, 64 208, 100 220 M 0 360 C 30 354, 70 368, 100 358 M 0 504 C 34 510, 64 496, 100 508 M 0 648 C 28 642, 68 662, 100 654"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeDasharray="2 8"
            strokeLinecap="round"
          />
        </svg>

        <div className="sc-feature">
          <div className="sc-feature-card">
            <div className="sc-feature-shine" aria-hidden="true" />
            <div className="sc-feature-watermark" aria-hidden="true" />

            <div className="sc-feature-head">
              <span className="sc-feature-num">/ 01</span>
              <span className="sc-mark-label">Built on WordPress · saját kód</span>
            </div>

            <div className="sc-badges">
              <span className="b">Fő szolgáltatás</span>
              <span className="b ghost">Egyedi WordPress</span>
            </div>

            <h3 className="sc-feature-h">
              Villámgyors weboldal,
              <br />
              <em>egyedi fejlesztéssel.</em>
            </h3>

            <p className="sc-feature-lead">
              A tervezéstől a tárhelyig — <em>egy helyen, magyarul, érthetően.</em> Saját, célra szabott
              WordPress kódot fejlesztünk, <em>nem sablonokra építünk.</em> Minimális bővítménnyel, gyorsan,
              biztonságosan — pont annyi funkció, amennyire szükséged van.
            </p>

            <div className="sc-benefits">
              <div className="sc-benefit">
                <div className="ico">⚡</div>
                <h5>Villámgyors</h5>
                <p>Egyedi kód, optimalizált betöltés — már mobilon is gyors.</p>
              </div>
              <div className="sc-benefit">
                <div className="ico">✎</div>
                <h5>Egyszerűen kezelhető</h5>
                <p>Saját szerkesztőfelület, kategóriákba rendezve.</p>
              </div>
              <div className="sc-benefit">
                <div className="ico">🛡</div>
                <h5>Biztonságos</h5>
                <p>Minimális bővítmény = kisebb támadási felület.</p>
              </div>
              <div className="sc-benefit">
                <div className="ico">↗</div>
                <h5>Skálázható</h5>
                <p>Mérnöki minőségben — évek múlva is bővíthető.</p>
              </div>
            </div>

            <div className="sc-feature-foot">
              <div className="sc-feature-stats">
                <span><b>10+ év</b>tapasztalat</span>
                <span><b>120+</b>elkészült oldal</span>
                <span><b>3–6 hét</b>átfutás</span>
              </div>
            </div>
          </div>

        </div>

        <div className="sc-sats">
          <article className="sc-sat sc-sat--1">
            <div className="sc-sat-head">
              <span className="sc-sat-num">/ 02</span>
              <span className="sc-sat-tag">Felújítás</span>
            </div>
            <h4 className="sc-sat-title">Régi oldal felújítása</h4>
            <p className="sc-sat-desc">Lassú vagy ronda oldalból modern, gyors verzió — sokszor olcsóbb, mint nullról kezdeni.</p>
            <div className="sc-sat-viz" aria-hidden="true">
              <div className="gauge">
                {[28, 46, 72, 55, 88, 40, 66, 90, 72, 52, 78, 95].map((h, i) => (
                  <i key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </article>

          <article className="sc-sat sc-sat--2">
            <div className="sc-sat-head">
              <span className="sc-sat-num">/ 03</span>
              <span className="sc-sat-tag">Webshop</span>
            </div>
            <h4 className="sc-sat-title">Webshop indítás</h4>
            <p className="sc-sat-desc">WooCommerce + Barion/SimplePay, GLS/Foxpost, NAV-kompatibilis számlázás — kulcsra készen.</p>
            <div className="sc-sat-viz" aria-hidden="true">
              <div className="ssl">
                <div className="ssl-row"><span className="check" />Barion / SimplePay integráció</div>
                <div className="ssl-row"><span className="check" />GLS / Foxpost szállítás</div>
                <div className="ssl-row"><span className="check" />NAV-kompatibilis számlázás</div>
              </div>
            </div>
          </article>

          <article className="sc-sat sc-sat--3">
            <div className="sc-sat-head">
              <span className="sc-sat-num">/ 04</span>
              <span className="sc-sat-tag">Design</span>
            </div>
            <h4 className="sc-sat-title">Arculat &amp; webdesign</h4>
            <p className="sc-sat-desc">Logó, színek, betűk és a teljes webdesign — egységes, profi megjelenés.</p>
            <div className="sc-sat-viz" aria-hidden="true">
              <div className="icon-stack">
                <div className="design-glyph">
                  <svg viewBox="0 0 38 57" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
                    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
                    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
                    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
                    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
                  </svg>
                </div>
                <div className="design-glyph canvas"></div>
                <div className="design-glyph swatch">
                  <i style={{ background: 'var(--primary)' }}></i>
                  <i style={{ background: 'var(--dark)' }}></i>
                  <i style={{ background: 'var(--accent)' }}></i>
                </div>
              </div>
            </div>
          </article>

          <article className="sc-sat sc-sat--4">
            <div className="sc-sat-head">
              <span className="sc-sat-num">/ 05</span>
              <span className="sc-sat-tag">Karbantartás</span>
            </div>
            <h4 className="sc-sat-title">Karbantartás havidíjban</h4>
            <p className="sc-sat-desc">Frissítések, biztonsági mentés, kisebb módosítás. Te csak szólsz — mi megcsináljuk.</p>
            <div className="sc-sat-viz" aria-hidden="true">
              <div className="ssl">
                <div className="ssl-row"><span className="check" />Heti biztonsági mentés</div>
                <div className="ssl-row"><span className="check" />Frissítések, javítások</div>
                <div className="ssl-row"><span className="check" />2 órás módosítás / hó</div>
              </div>
            </div>
          </article>

          <article className="sc-sat sc-sat--5">
            <div className="sc-sat-head">
              <span className="sc-sat-num">/ 06</span>
              <span className="sc-sat-tag">SEO &amp; Ads</span>
            </div>
            <h4 className="sc-sat-title">SEO &amp; Google Ads</h4>
            <p className="sc-sat-desc">Hogy ne csak szép legyen az oldal, hanem találjanak is rá. Optimalizálás, hirdetéskezelés.</p>
            <div className="sc-sat-viz sc-sat-viz--arrow" aria-hidden="true">
              <div className="big-arrow">↗</div>
            </div>
          </article>
        </div>

      </div>
    </div>
  );
}
