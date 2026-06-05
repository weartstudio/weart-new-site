'use client';

import { useRef, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';

type Props = {
  trigger: ReactNode;
};

export default function NewsletterModal({ trigger }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const open = () => {
    setStatus('idle');
    setEmail('');
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setStatus('sending');
    try {
      await new Promise((r) => setTimeout(r, 600));
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const onBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) close();
  };

  return (
    <>
      <button type="button" className="newsletter-trigger" onClick={open}>
        {trigger}
      </button>
      <dialog ref={dialogRef} className="newsletter-dialog" onClick={onBackdropClick}>
        <div className="newsletter-dialog-inner">
          <button type="button" className="dialog-close" onClick={close} aria-label="Bezárás">×</button>
          {status === 'sent' ? (
            <div className="newsletter-success">
              <div className="success-ico" aria-hidden="true">✓</div>
              <h3>Sikeres feliratkozás!</h3>
              <p>Köszi! Hamarosan érkezik az első cikk a megadott címre.</p>
              <button type="button" className="btn btn-primary" onClick={close}>Rendben</button>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={submit}>
              <div className="aside-label">Hírlevél</div>
              <h3>Iratkozz fel a <em>Weart Blogra</em></h3>
              <p>Havonta egy cikk vállalkozóknak — érthetően, marketingduma nélkül. Bármikor leiratkozhatsz.</p>
              <label className="newsletter-field">
                <span>Email cím</span>
                <input
                  type="email"
                  required
                  placeholder="email@cimed.hu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'sending'}
                  autoFocus
                />
              </label>
              <div className="newsletter-actions">
                <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Küldés…' : 'Feliratkozom'}
                </button>
                <button type="button" className="btn btn-ghost" onClick={close}>Mégse</button>
              </div>
              {status === 'error' && <p className="newsletter-error">Valami félrement, próbáld újra.</p>}
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
