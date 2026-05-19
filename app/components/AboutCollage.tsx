'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Réteges kollázs az "about" blokkhoz: egymásra csúsztatott portrék +
// lebegő statisztikák, finom parallax-szal egérre és görgetésre.
// A parallaxot CSS-változókkal vezéreljük (--px/--py/--sy), így a
// dobozmentes elrendezés mélységérzetet kap, nem merev kártyát.
export default function AboutCollage() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) return;

    let raf = 0;
    let px = 0;
    let py = 0;
    let tx = 0;
    let ty = 0;

    const apply = () => {
      raf = 0;
      // lágy követés (lerp), hogy ne ugráljon a mutató után
      px += (tx - px) * 0.12;
      py += (ty - py) * 0.12;
      el.style.setProperty('--px', px.toFixed(4));
      el.style.setProperty('--py', py.toFixed(4));
      if (Math.abs(tx - px) > 0.001 || Math.abs(ty - py) > 0.001) {
        raf = requestAnimationFrame(apply);
      }
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      schedule();
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      schedule();
    };

    let sraf = 0;
    const onScroll = () => {
      if (sraf) return;
      sraf = requestAnimationFrame(() => {
        sraf = 0;
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const sy = (center / window.innerHeight - 0.5) * 2; // -1..1
        el.style.setProperty('--sy', Math.max(-1, Math.min(1, sy)).toFixed(4));
      });
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (sraf) cancelAnimationFrame(sraf);
    };
  }, []);

  return (
    <div className="ac reveal" ref={root}>
      <div className="ac-stage" aria-hidden="true">
        <span className="ac-blob" data-d="9" />
        <svg className="ac-link" viewBox="0 0 220 160" fill="none" data-d="6">
          <path
            d="M30 132 C 70 132, 78 40, 150 34"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeDasharray="2 7"
            strokeLinecap="round"
          />
        </svg>

        <div className="ac-item ac-item--b" data-d="16">
          <figure className="ac-card">
            <div className="ac-photo">
              <Image src="/balazs.black-white.jpg" alt="Egyed Balázs" fill sizes="240px" style={{ objectFit: 'cover' }} />
            </div>
            <figcaption className="ac-cap">
              <b>Balázs</b>
              <span>Fejlesztő</span>
            </figcaption>
          </figure>
        </div>

        <div className="ac-item ac-item--f" data-d="26">
          <figure className="ac-card">
            <div className="ac-photo">
              <Image src="/fanni-small.jpg" alt="Ágoston Fanni" fill sizes="240px" style={{ objectFit: 'cover' }} />
            </div>
            <figcaption className="ac-cap">
              <b>Ágoston Fanni</b>
              <span>Projektmenedzser</span>
            </figcaption>
          </figure>
        </div>

        <span className="ac-chip ac-chip--1" data-d="34">
          <i className="ac-chip-dot" />10+ év tapasztalat
        </span>
        <span className="ac-chip ac-chip--2" data-d="46">Nem tűnünk el</span>
        <span className="ac-chip ac-chip--3" data-d="38">Mérnöki képzettség</span>
      </div>

      <div className="ac-side">
        <p className="ac-lead">
          Balázs kódol, Fanni a kapcsolatot tartja — <em>ugyanaz a két ember</em> a
          tervezéstől a támogatásig. Nincs ügynökségi lánc, nincs junior, akinek
          átadnak a szerződés után.
        </p>
        <div className="ac-tags">
          {['Webfejlesztés', 'WordPress', 'WooCommerce', 'Webshop', 'Design', 'Tervezés', 'Sebesség', 'SEO', 'Ügyfélkapcsolat', 'Onboarding'].map((t) => (
            <span className="ac-tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <Link className="btn btn-primary ac-cta" href="/about">
          Ismerd meg a teljes történetünket <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
}
