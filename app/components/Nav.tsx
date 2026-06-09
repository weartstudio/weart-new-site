'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const path = usePathname();
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-inner">
        <Link href="/" className="logo">
          <Image className="logo-img" src="/logo.png" alt="Weart" width={36} height={36} priority />
          <b className="logo-word">We<span>art</span></b>
        </Link>
        <div className="nav-links">
          <Link href="/#szolgaltatasok">Szolgáltatások</Link>
          <Link href="/about" className={path === '/about' ? 'active' : ''}>Rólunk</Link>
          <Link href="/portfolio" className={path === '/portfolio' ? 'active' : ''}>Munkáink</Link>
          <Link href="/posts" className={path.startsWith('/posts') ? 'active' : ''}>Tudástár</Link>
          <Link href="/contact" className={path === '/contact' ? 'active' : ''}>Kapcsolat</Link>
        </div>
        <div className="nav-cta">
          <Link href="/ajanlatkeres" className="btn btn-ghost">Ingyenes ajánlat</Link>
        </div>
        </div>
      </div>
    </nav>
  );
}
