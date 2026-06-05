import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Ingyenes ajánlatkérés – Weart',
  description:
    'Kérj ingyenes, tételes árajánlatot egyedi weboldalra vagy webshopra. Konkrét összeg, konkrét határidő — két munkanapon belül, kötelezettség nélkül.',
};

export default function AjanlatkeresLayout({ children }: { children: ReactNode }) {
  return children;
}
