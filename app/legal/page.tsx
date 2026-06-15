import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import RevealWrapper from '../components/RevealWrapper';
import HeroAtmosphere from '../components/HeroAtmosphere';

export const metadata: Metadata = {
  title: 'Jogi információk – Weart',
  description:
    'Impresszum és adatkezelési tájékoztató egy helyen — céges adatok és az, hogyan kezeljük a megadott adataidat.',
};

export default function LegalPage() {
  return (
    <>
      <Nav />

      <header className="page-head">
        <HeroAtmosphere />
        <div className="container">
          <div className="page-eyebrow">Jogi információk</div>
          <h1 className="page-h1">Jogi <span className="underline">információk.</span></h1>
          <p className="page-lead">Itt találod a céges adatainkat és azt, hogyan kezeljük a megadott adataidat. Minden röviden, érthetően — válassz, melyik érdekel.</p>
        </div>
      </header>

      <section className="sec">
        <div className="container">
          <div className="legal reveal">
            <h2>Impresszum</h2>
            <p>
              Üzemeltetői és céges adatok: ki áll a weart.hu mögött, és hogyan
              érsz el minket.
            </p>
            <p>
              <Link className="btn btn-primary" href="/legal/impresszum">
                Impresszum megnyitása <span className="arrow">→</span>
              </Link>
            </p>

            <h2>Adatkezelési tájékoztató</h2>
            <p>
              Mit, miért és meddig tárolunk, kinek adjuk át, és milyen jogaid
              vannak — ha felveszed velünk a kapcsolatot.
            </p>
            <p>
              <Link className="btn btn-primary" href="/adatvedelem">
                Adatkezelési tájékoztató megnyitása <span className="arrow">→</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <RevealWrapper />
    </>
  );
}
