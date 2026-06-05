'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { ReactNode } from 'react';

type Id = 'balazs' | 'fanni';

type Person = {
  id: Id;
  name: string;
  role: string;
  shortRole: string;
  photo: string;
  bio: ReactNode;
  points: { ico: string; text: ReactNode }[];
};

const PEOPLE: Person[] = [
  {
    id: 'balazs',
    name: 'Egyed Balázs',
    role: 'Fejlesztő',
    shortRole: 'Fejlesztő',
    photo: '/balazs.black-white.jpg',
    bio: (
      <>
        <p>
          Programtervező informatikus (ELTE, Informatikai Kar), aki közel egy
          évtizede a WordPress és WooCommerce köré építi a karrierjét. Nem
          sablonból dolgozik: pontosan azt a funkciót fejleszti le kódból, amire
          a vállalkozásodnak szüksége van — minimális bővítménnyel, gyorsan,
          biztonságosan.
        </p>
        <p>
          Az ausztrál <b>Envato</b> piactéren a saját fejlesztéseit külföldön,
          több országban is használják. Ingyenes WordPress pluginokat ad
          ki, részt vesz a magyar fordításokban, és fejlesztői eszközöket oszt
          meg nyíltan — mert a szakmai közösség neki is sokat adott.
        </p>
      </>
    ),
    points: [
      {
        ico: '⚙',
        text: (
          <>
            <b>Egyedi WordPress &amp; WooCommerce</b> — saját kód, nem vásárolt
            téma feltuningolva.
          </>
        ),
      },
      {
        ico: '⚡',
        text: (
          <>
            <b>Sebesség és SEO</b> — gyors betöltés mobilon is, hogy a Google és
            a látogató is szeresse.
          </>
        ),
      },
      {
        ico: '↗',
        text: (
          <>
            <b>Időtálló alap</b> — évekkel később is bővíthető, nem kell nullról
            kezdeni.
          </>
        ),
      },
    ],
  },
  {
    id: 'fanni',
    name: 'Ágoston Fanni',
    role: 'Projektmenedzser',
    shortRole: 'Projektmenedzser',
    photo: '/fanni-small.jpg',
    bio: (
      <>
        <p>
          Ő a kapocs közted és a fejlesztés között. Hozzá fut be minden
          megkeresés: visszahív, végigveszi veled, mire van szükséged, és egy
          munkanapon belül konkrét, fix árajánlatot küld — nincs sales-folyamat,
          nincs öt e-mailes „követés”.
        </p>
        <p>
          A projekt alatt ő tartja a határidőket, fordítja érthető magyarra a
          műszaki döntéseket, és gondoskodik róla, hogy ne maradjon nyitott
          kérdés. <b>Te csak szólsz</b> — a többit intézi.
        </p>
      </>
    ),
    points: [
      {
        ico: '☎',
        text: (
          <>
            <b>Egy munkanapon belül válasz</b> — és egy valódi emberi hang, nem
            automata.
          </>
        ),
      },
      {
        ico: '◷',
        text: (
          <>
            <b>Tartott határidők</b> — tudod, mikor mi készül el, meglepetés
            nélkül.
          </>
        ),
      },
      {
        ico: '✎',
        text: (
          <>
            <b>Érthető fordítás</b> — a műszaki dolgokat magyarul, nem
            fejlesztőül kapod.
          </>
        ),
      },
    ],
  },
];

export default function FoundersCollage() {
  const root = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<Id>('balazs');

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
        const sy = (center / window.innerHeight - 0.5) * 2;
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

  const active = PEOPLE.find((p) => p.id === activeId)!;
  const activeIndex = PEOPLE.findIndex((p) => p.id === activeId);

  return (
    <div className="fc reveal" ref={root} data-active={activeId}>
      <div className="fc-stage">
        <span className="fc-blob" data-d="9" aria-hidden="true" />
        <svg
          className="fc-link"
          viewBox="0 0 240 180"
          fill="none"
          aria-hidden="true"
          data-d="6"
        >
          <path
            d="M30 148 C 80 148, 95 40, 210 32"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeDasharray="2 7"
            strokeLinecap="round"
          />
        </svg>

        {PEOPLE.map((p) => {
          const isActive = p.id === activeId;
          return (
            <button
              key={p.id}
              type="button"
              className={`fc-portrait fc-portrait--${p.id}${
                isActive ? ' is-active' : ''
              }`}
              data-d={p.id === 'balazs' ? '16' : '26'}
              onClick={() => setActiveId(p.id)}
              aria-pressed={isActive}
              aria-label={`${p.name} bemutatkozása`}
            >
              <span className="fc-card">
                <span className="fc-photo">
                  <Image
                    src={p.photo}
                    alt={p.name}
                    fill
                    sizes="(max-width: 920px) 180px, 280px"
                    style={{ objectFit: 'cover' }}
                  />
                </span>
                <span className="fc-cap">
                  <b>{p.name}</b>
                  <span>{p.shortRole}</span>
                </span>
                <span className="fc-pin" aria-hidden="true">
                  <i className="fc-pin-dot" />
                  Bemutatkozik
                </span>
              </span>
            </button>
          );
        })}

        <span className="fc-chip fc-chip--1" data-d="34" aria-hidden="true">
          <i className="fc-chip-dot" />
          10+ év együtt
        </span>
        <span className="fc-chip fc-chip--2" data-d="46" aria-hidden="true">
          Nincs alvállalkozó
        </span>
      </div>

      <div className="fc-side">
        <div
          className="fc-switch"
          role="tablist"
          aria-label="Csapattagok közti váltás"
        >
          {PEOPLE.map((p) => {
            const isActive = p.id === activeId;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`fc-switch-btn${isActive ? ' is-active' : ''}`}
                onClick={() => setActiveId(p.id)}
              >
                <span className="fc-switch-name">{p.name}</span>
                <span className="fc-switch-role">{p.shortRole}</span>
              </button>
            );
          })}
        </div>

        <div className="fc-panel" key={active.id} role="tabpanel">
          <div className="fc-panel-meta">
            <span className="fc-panel-num">{`0${activeIndex + 1} / 0${PEOPLE.length}`}</span>
            <span className="fc-panel-role">{active.role}</span>
          </div>
          <h3 className="fc-panel-name">{active.name}</h3>
          <div className="fc-panel-bio">{active.bio}</div>
          <ul className="fc-panel-list">
            {active.points.map((pt, i) => (
              <li key={i}>
                <span className="fc-panel-mark" aria-hidden="true">
                  {pt.ico}
                </span>
                <span>{pt.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
