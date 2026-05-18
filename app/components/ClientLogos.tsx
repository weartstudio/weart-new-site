import type { ReactNode } from 'react';

const clientLogos: { name: string; tag: string; mark: ReactNode }[] = [
  { name: 'Kovács Lakatos', tag: 'kisipar', mark: <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 30 L18 6 L30 30"/><path d="M11 22 L25 22"/><circle cx="18" cy="14" r="2" fill="currentColor"/></svg> },
  { name: 'Zöldkert Bt.', tag: 'kertészet', mark: <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 30 V14"/><path d="M18 18 C12 18 8 14 8 8 C14 8 18 12 18 18 Z" fill="currentColor" fillOpacity=".15"/><path d="M18 22 C24 22 28 18 28 12 C22 12 18 16 18 22 Z" fill="currentColor" fillOpacity=".15"/></svg> },
  { name: 'Bódi Fogászat', tag: 'egészségügy', mark: <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6 C9 6 8 9 8 13 C8 18 10 22 10 26 C10 28 11 30 12.5 30 C14 30 14.5 28 15 24 C15.5 21 16 19 18 19 C20 19 20.5 21 21 24 C21.5 28 22 30 23.5 30 C25 30 26 28 26 26 C26 22 28 18 28 13 C28 9 27 6 24 6 C21 6 20 8 18 8 C16 8 15 6 12 6 Z"/></svg> },
  { name: 'Mátra Panzió', tag: 'vendéglátás', mark: <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 26 L13 14 L18 20 L23 10 L31 26 Z"/><circle cx="25" cy="9" r="2.2" fill="currentColor"/></svg> },
  { name: 'Szabó Könyvelő', tag: 'könyvelő iroda', mark: <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="7" width="22" height="22" rx="3"/><path d="M12 14 H24"/><path d="M12 19 H20"/><path d="M12 24 H22"/></svg> },
  { name: 'Holló Pékség', tag: 'kézműves pékség', mark: <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="18" cy="20" rx="12" ry="7"/><path d="M10 16 C10 12 14 10 18 10 C22 10 26 12 26 16"/><path d="M14 21 L14 24"/><path d="M18 21 L18 25"/><path d="M22 21 L22 24"/></svg> },
  { name: 'Tóth Ügyvédi', tag: 'jogi iroda', mark: <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 V30"/><path d="M10 30 H26"/><path d="M11 12 L18 9 L25 12"/><path d="M7 20 L11 12 L15 20 Z"/><path d="M21 20 L25 12 L29 20 Z"/></svg> },
  { name: 'NagyAuto Kft.', tag: 'autószerviz', mark: <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 22 L8 14 H28 L31 22 V26 H5 Z"/><circle cx="11" cy="26" r="2.5" fill="currentColor"/><circle cx="25" cy="26" r="2.5" fill="currentColor"/><path d="M9 18 H27"/></svg> },
];

export default function ClientLogos() {
  return (
    <>
      {clientLogos.map((c, i) => (
        <div className="client-logo" key={i}>
          <span className="client-logo-mark">{c.mark}</span>
          <span className="client-logo-text">
            <b>{c.name}</b>
            <small>{c.tag}</small>
          </span>
        </div>
      ))}
    </>
  );
}
