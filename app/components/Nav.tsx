'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LogoMark = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M12 2.2c2.4 2.6 3.8 5.9 3.8 9.3v6.2H8.2v-6.2C8.2 8.1 9.6 4.8 12 2.2z"/>
    <circle cx="12" cy="10.2" r="1.7" fill="#1E2D47"/>
    <path d="M8.2 14.5L5.6 17.6l3.1-.4z" opacity="0.85"/>
    <path d="M15.8 14.5l2.6 3.1-3.1-.4z" opacity="0.85"/>
    <path d="M11 19.5h2l-.4 2.3h-1.2z" opacity="0.6"/>
  </svg>
);

export default function Nav() {
  const path = usePathname();
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-inner">
        <Link href="/" className="logo">
          <span className="logo-mark" aria-hidden="true"><LogoMark /></span>
          <b>weart<span style={{ color: 'var(--primary)' }}>.</span>hu</b>
        </Link>
        <div className="nav-links">
          <Link href="/#szolgaltatasok">Szolgáltatások</Link>
          <Link href="/about" className={path === '/about' ? 'active' : ''}>Rólunk</Link>
          <Link href="/portfolio" className={path === '/portfolio' ? 'active' : ''}>Munkáink</Link>
          <Link href="/posts" className={path.startsWith('/posts') ? 'active' : ''}>Tudástár</Link>
          <Link href="/contact" className={path === '/contact' ? 'active' : ''}>Kapcsolat</Link>
        </div>
        <div className="nav-cta">
          <Link href="/contact" className="btn btn-ghost">Ingyenes ajánlat</Link>
        </div>
        </div>
      </div>
    </nav>
  );
}
