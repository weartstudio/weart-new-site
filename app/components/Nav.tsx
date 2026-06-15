'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { href: '/#szolgaltatasok', label: 'Szolgáltatások', isActive: () => false },
  { href: '/about', label: 'Rólunk', isActive: (path: string) => path === '/about' },
  { href: '/portfolio', label: 'Munkáink', isActive: (path: string) => path === '/portfolio' },
  { href: '/posts', label: 'Tudástár', isActive: (path: string) => path.startsWith('/posts') },
  { href: '/contact', label: 'Kapcsolat', isActive: (path: string) => path === '/contact' },
] as const;

export default function Nav() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [pastHeader, setPastHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 8);

      const header = document.querySelector('.page-head, .hero, .a-head');
      if (!header) {
        setPastHeader(window.scrollY > 80);
        return;
      }
      setPastHeader(header.getBoundingClientRect().bottom <= 0);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [path]);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const navClass = [
    'nav',
    scrolled ? 'nav--scrolled' : '',
    pastHeader ? 'nav--stuck' : '',
    menuOpen ? 'nav--menu-open' : '',
  ].filter(Boolean).join(' ');

  return (
    <nav className={navClass}>
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="logo">
            <Image className="logo-img" src="/logo.png" alt="Weart" width={36} height={36} priority />
            <b className="logo-word">We<span>art</span></b>
          </Link>
          <div className="nav-links">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={item.isActive(path) ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="nav-cta">
            <Link href="/ajanlatkeres" className="btn btn-ghost">Ingyenes ajánlat</Link>
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={menuOpen}
              aria-controls="nav-mobile-menu"
              aria-label={menuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="nav-toggle-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
        <div
          id="nav-mobile-menu"
          className={`nav-mobile-menu${menuOpen ? ' nav-mobile-menu--open' : ''}`}
          hidden={!menuOpen}
        >
          <div className="nav-mobile-links">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={item.isActive(path) ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
