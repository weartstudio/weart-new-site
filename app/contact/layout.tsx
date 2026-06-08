import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Kapcsolat – Weart',
  description:
    'Beszéljünk — telefonon vagy e-mailben. Van egy kérdésed? Írj pár sort, két munkanapon belül visszajelzünk.',
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
