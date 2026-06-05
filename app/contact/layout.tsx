import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Kapcsolat – Weart',
  description:
    'Beszéljünk — telefon, e-mail vagy egy 30 perces hívás. Van egy kérdésed? Írj pár sort, két munkanapon belül válaszolunk.',
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
