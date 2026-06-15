'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Nav() {
  const path = usePathname();
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const update = () => {
      const header = document.querySelector('.page-head, .hero, .a-head');
      if (!header) {
        setStuck(window.scrollY > 12);
        return;
      }
      setStuck(header.getBoundingClientRect().bottom <= 0);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [path]);

  return (
    <nav className={`nav${stuck ? ' nav--stuck' : ''}`}>
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
