'use client';

import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import Image from 'next/image';

type Person = {
  id: string;
  name: string;
  initial: string;
  role: string;
  accent: 'balazs' | 'fanni';
  photo?: string;
  summary: string;
  bio: ReactNode;
  points: { ico: string; text: ReactNode }[];
};

const PEOPLE: Person[] = [
  {
    id: 'balazs',
    name: 'Egyed Balázs',
    initial: 'B',
    role: 'Fejlesztő · Alapító',
    accent: 'balazs',
    summary:
      'Programtervező informatikus, aki kódból építi pontosan azt, amire a vállalkozásodnak szüksége van.',
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
          Az ausztrál <b>Envato</b> piactéren a sablonjait világszerte 700+
          oldalon használják, 50+ országban. Ingyenes WordPress pluginokat ad
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
            <b>Sebesség és SEO</b> — Lighthouse 95+ mobilon is, hogy a Google és
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
    initial: 'F',
    role: 'Projektmenedzser · Társalapító',
    accent: 'fanni',
    photo: '/fanni-small.jpg',
    summary:
      'A te állandó kapcsolattartód — a tervezéstől a karbantartásig, érthető magyarul.',
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

export default function FoundersTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = PEOPLE.length - 1;
    let next = active;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = active === last ? 0 : active + 1;
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = active === 0 ? last : active - 1;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = last;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const person = PEOPLE[active];

  return (
    <div className="ft reveal">
      <div
        className="ft-tabs"
        role="tablist"
        aria-orientation="vertical"
        aria-label="Csapattagok"
        onKeyDown={onKeyDown}
      >
        {PEOPLE.map((p, i) => (
          <button
            key={p.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`ft-tab-${p.id}`}
            aria-selected={i === active}
            aria-controls={`ft-panel-${p.id}`}
            tabIndex={i === active ? 0 : -1}
            className={`ft-tab${i === active ? ' is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="ft-tab-head">
              <span className={`ft-thumb ${p.accent}`}>
                {p.photo ? (
                  <Image src={p.photo} alt="" fill sizes="56px" />
                ) : (
                  p.initial
                )}
              </span>
              <span className="ft-tab-meta">
                <span className="ft-tab-name">{p.name}</span>
                <span className="ft-tab-role">{p.role}</span>
              </span>
            </span>
            <span className="ft-tab-summary">{p.summary}</span>
          </button>
        ))}
      </div>

      <div
        className="ft-panel"
        role="tabpanel"
        id={`ft-panel-${person.id}`}
        aria-labelledby={`ft-tab-${person.id}`}
        key={person.id}
      >
        <div className={`ft-portrait${person.photo ? '' : ` mono ${person.accent}`}`}>
          {person.photo ? (
            <Image
              src={person.photo}
              alt={person.name}
              fill
              sizes="(max-width: 1024px) 320px, 300px"
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <span className="pmono" aria-hidden="true">
              {person.initial}
            </span>
          )}
          <span className="ptag">{person.role}</span>
        </div>

        <div className="ft-content">
          <div className="ft-name">{person.name}</div>
          <div className="ft-role">{person.role}</div>
          <div className="pf-bio">{person.bio}</div>
          <ul className="pf-list">
            {person.points.map((pt, idx) => (
              <li className="pf-item" key={idx}>
                <span className="pf-mark" aria-hidden="true">
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
