import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="logo">
              <Image className="logo-img" src="/logo.png" alt="Weart" width={36} height={36} />
              <b className="logo-word">We<span>art</span></b>
            </Link>
            <p>
              10+ éve építünk egyedi weboldalakat és webshopokat WordPressen — gyorsan,
              biztonságosan, felesleges sablonok nélkül, átlátható áron. Karbantartás, SEO,
              felújítás. Budapesten és a Balaton környékén személyesen is.
            </p>
            <Link href="/ajanlatkeres" className="btn btn-primary foot-cta">
              Ingyenes ajánlat <span className="arrow">→</span>
            </Link>
          </div>
          <div className="foot-col">
            <h5>Szolgáltatások</h5>
            <ul>
              <li><Link href="/#szolgaltatasok">Új weboldal készítés</Link></li>
              <li><Link href="/#szolgaltatasok">Webshop indítás</Link></li>
              <li><Link href="/#szolgaltatasok">Régi oldal felújítása</Link></li>
              <li><Link href="/#szolgaltatasok">Arculat &amp; webdesign</Link></li>
              <li><Link href="/#szolgaltatasok">SEO &amp; Google Ads</Link></li>
              <li><Link href="/#szolgaltatasok">Karbantartás</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Oldalak</h5>
            <ul>
              <li><Link href="/about">Rólunk</Link></li>
              <li><Link href="/portfolio">Munkáink</Link></li>
              <li><Link href="/posts">Tudástár</Link></li>
              <li><Link href="/#faq">Gyakori kérdések</Link></li>
              <li><Link href="/ajanlatkeres">Ingyenes ajánlat</Link></li>
              <li><Link href="/contact">Kapcsolat</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Elérhetőség</h5>
            <ul>
              <li><a href="tel:+36301958114">+36 30 / 195 8114</a></li>
              <li><a href="mailto:info@weart.hu">info@weart.hu</a></li>
              <li className="foot-note">Válasz 2 munkanapon belül</li>
            </ul>
            <div className="foot-social">
              <a href="https://www.facebook.com/weartweb/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://github.com/weartstudio" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© 2017–2026 weart.hu - Egyed Balázs</div>
          <div className="links">
            <Link href="/legal/impresszum">Impresszum</Link>
            <Link href="/adatvedelem">Adatvédelem</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
