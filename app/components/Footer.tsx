import Link from 'next/link';

const LogoMark = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M12 2.2c2.4 2.6 3.8 5.9 3.8 9.3v6.2H8.2v-6.2C8.2 8.1 9.6 4.8 12 2.2z"/>
    <circle cx="12" cy="10.2" r="1.7" fill="#0D172E"/>
    <path d="M8.2 14.5L5.6 17.6l3.1-.4z" opacity="0.85"/>
    <path d="M15.8 14.5l2.6 3.1-3.1-.4z" opacity="0.85"/>
    <path d="M11 19.5h2l-.4 2.3h-1.2z" opacity="0.6"/>
  </svg>
);

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="logo">
              <span className="logo-mark" aria-hidden="true"><LogoMark /></span>
              <b>weart.hu</b>
            </Link>
            <p>Weboldalak, webshopok, karbantartás — magyar kkv-knak. Budapesten dolgozunk, az ország bármely pontjáról szívesen fogadunk megkereséseket.</p>
            <div className="foot-newsletter">
              <input type="email" placeholder="email@cim.hu" />
              <button>Feliratkozom</button>
            </div>
          </div>
          <div className="foot-col">
            <h5>Szolgáltatások</h5>
            <ul>
              <li><Link href="/#szolgaltatasok">Új weboldal készítés</Link></li>
              <li><Link href="/#szolgaltatasok">Webshop indítás</Link></li>
              <li><Link href="/#szolgaltatasok">Régi oldal felújítása</Link></li>
              <li><Link href="/#szolgaltatasok">SEO &amp; Google Ads</Link></li>
              <li><Link href="/#szolgaltatasok">Karbantartás</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>A csapat</h5>
            <ul>
              <li><Link href="/about">Rólunk</Link></li>
              <li><Link href="/portfolio">Munkáink</Link></li>
              <li><Link href="/posts">Blog</Link></li>
              <li><Link href="/portfolio">Vélemények</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Kapcsolat</h5>
            <ul>
              <li><a href="tel:+36301958114">+36 30 / 195 8114</a></li>
              <li><a href="mailto:info@weart.hu">info@weart.hu</a></li>
              <li>Király u. 26.<br />1061 Budapest</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© 2017–2026 Weart Kft. · Adószám: 12345678-2-42</div>
          <div className="links">
            <Link href="#">Adatvédelem</Link>
            <Link href="#">ÁSZF</Link>
            <Link href="#">Süti tájékoztató</Link>
            <Link href="#">Akadálymentesség</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
