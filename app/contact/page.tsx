'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, type SubmitEvent } from 'react';
import { Phone, Mail, Calendar, Check } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import RevealWrapper from '../components/RevealWrapper';

export default function KapcsolatPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    const fd = new FormData(e.currentTarget);
    const payload = {
      topic: 'Általános megkeresés',
      name: String(fd.get('name') ?? ''),
      email: String(fd.get('email') ?? ''),
      message: String(fd.get('message') ?? ''),
      consent: fd.get('consent') ? '1' : '',
    };

    setLoading(true);
    try {
      const res = await fetch('/api/kapcsolat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) {
        setError(data?.message ?? 'Hiba történt a küldés során. Hívj minket: +36 30 / 195 8114.');
        return;
      }
      setSubmitted(true);
    } catch {
      setError('Nem sikerült elküldeni. Ellenőrizd a netkapcsolatot, vagy hívj: +36 30 / 195 8114.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Nav />

      <header className="page-head">
        <div className="container">
          <div className="page-eyebrow">Kapcsolat</div>
          <h1 className="page-h1">Beszéljünk —<br/><span className="underline">emberi nyelven.</span></h1>
          <p className="page-lead">Van egy kérdésed, vagy csak tájékozódnál? Hívj, írj, vagy foglalj egy időpontot — nem értékesítő vesz fel, hanem aki a munkát csinálja. Két munkanapon belül válaszolunk.</p>

          <div className="head-meta">
            <div className="meta-item">
              <div className="num">2 munkanap</div>
              <div className="lbl">Válaszadási idő</div>
            </div>
            <div className="meta-item">
              <div className="num">H–P 9–17</div>
              <div className="lbl">Telefonon elérhető</div>
            </div>
            <div className="meta-item">
              <div className="num">30 perc</div>
              <div className="lbl">Ingyenes konzultáció</div>
            </div>
          </div>
        </div>
      </header>

      <section className="sec" id="form">
        <div className="container">
          <div className="contact-grid">

            {/* Direct channels */}
            <aside className="fanni-card reveal">
              <div className="fanni-head">
                <div className="fanni-photo">
                  <Image src="/fanni-small.jpg" alt="Ágoston Fanni" width={84} height={84} style={{ borderRadius: '50%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div className="fanni-name">Ágoston Fanni</div>
                  <div className="fanni-role">Ügyfélkapcsolat · Társalapító</div>
                </div>
              </div>

              <p className="fanni-bio">Hozzám fut be minden megkeresés. <b>Te csak szólsz</b> — visszahívlak, és megbeszéljük, mire van szükséged. Nincs sales-folyamat, nincs nyomulás.</p>

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
                <a className="channel" href="https://cal.eu/weart" target="_blank" rel="noopener noreferrer">
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

            {/* Short message + quote pointer */}
            <div className="form-card reveal">
              <div className="form-head">
                <div>
                  <h3>Írj <em>pár sort.</em></h3>
                  <p>Csak egy kérdés? Küldd el — két munkanapon belül válaszolunk.</p>
                </div>
                <span className="step-pill">≈ 1 perc</span>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="name">Neved <span className="req">*</span></label>
                      <input type="text" id="name" name="name" placeholder="Kovács István" required />
                    </div>
                    <div className="field">
                      <label htmlFor="email">E-mail cím <span className="req">*</span></label>
                      <input type="email" id="email" name="email" placeholder="istvan@cegnev.hu" required />
                    </div>
                    <div className="field full">
                      <label htmlFor="message">Miben segíthetünk? <span className="req">*</span></label>
                      <textarea id="message" name="message" placeholder="Pl.: Van egy WordPress oldalam, ami lassú — meg tudnátok nézni?" required></textarea>
                    </div>
                  </div>

                  <div className="form-foot">
                    <label className="consent">
                      <input type="checkbox" name="consent" required />
                      <span>Elolvastam és elfogadom az <a href="#">adatkezelési tájékoztatót</a>. Az adataimat kizárólag a megkeresésem megválaszolására használjátok.</span>
                    </label>
                    <button type="submit" className="submit" disabled={loading}>
                      {loading ? 'Küldés…' : <>Üzenet küldése <span className="arrow">→</span></>}
                    </button>
                  </div>
                  {error && <p className="form-error" role="alert">{error}</p>}
                </form>
              ) : (
                <div className="success-msg show">
                  <span className="success-ico">
                    <Check size={22} strokeWidth={2.5} />
                  </span>
                  <div>
                    <h4>Megkaptuk. Köszi!</h4>
                    <p>Két munkanapon belül válaszol Fanni a megadott e-mail címre. Ha sürgős, hívd nyugodtan: <b>+36 30 / 195 8114</b>.</p>
                  </div>
                </div>
              )}

              <div className="contact-quote-cta">
                <div>
                  <b>Konkrét árajánlatra van szükséged?</b>
                  <span>Töltsd ki a részletes ajánlatkérőt — két munkanapon belül tételes árat kapsz.</span>
                </div>
                <Link href="/ajanlatkeres" className="btn btn-primary">
                  Ajánlatkérés <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <RevealWrapper />
    </>
  );
}
