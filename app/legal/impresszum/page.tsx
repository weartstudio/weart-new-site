import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import RevealWrapper from '../../components/RevealWrapper';

export const metadata: Metadata = {
  title: 'Impresszum – Weart',
  description:
    'A weart.hu oldal üzemeltetőjének céges és elérhetőségi adatai.',
};

export default function ImpresszumPage() {
  return (
    <>
      <Nav />

      <header className="page-head">
        <div className="container">
          <div className="page-eyebrow">Impresszum</div>
          <h1 className="page-h1">Impresszum<span className="underline">.</span></h1>
          <p className="page-lead">A weart.hu oldal üzemeltetőjének adatai és elérhetőségei. Bármilyen kérdésben szívesen állunk rendelkezésre.</p>
        </div>
      </header>

      <section className="sec sec--flush-top">
        <div className="container">
          <div className="legal reveal">
            <p className="legal-meta">Utolsó frissítés: 2026. június 1.</p>

            <h2>A szolgáltató adatai</h2>
            <ul>
              <li><strong>Név:</strong> Egyed Balázs e.v.</li>
              <li><strong>Székhely:</strong> [kitöltendő]</li>
              <li><strong>Adószám:</strong> [kitöltendő]</li>
              <li><strong>Nyilvántartási szám:</strong> [kitöltendő]</li>
              <li><strong>E-mail:</strong> <a href="mailto:info@weart.hu">info@weart.hu</a></li>
              <li><strong>Telefon:</strong> <a href="tel:+36301958114">+36 30 / 195 8114</a></li>
              <li><strong>Weboldal:</strong> <a href="https://weart.hu">weart.hu</a></li>
            </ul>

            <h2>Tárhelyszolgáltató</h2>
            <ul>
              <li><strong>Név / cég:</strong> [kitöltendő]</li>
              <li><strong>Elérhetőség:</strong> [kitöltendő]</li>
            </ul>

            <h2>Kapcsolat</h2>
            <p>
              Kérdésed van? Írj az <a href="mailto:info@weart.hu">info@weart.hu</a>
              {' '}címre, vagy nézd meg a <Link href="/contact">kapcsolat oldalt</Link>.
              Az adataid kezeléséről az <Link href="/adatvedelem">adatkezelési
              tájékoztatóban</Link> olvashatsz.
            </p>

            <p className="legal-note">
              Vissza a <Link href="/legal">jogi információkhoz</Link>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <RevealWrapper />
    </>
  );
}
