'use client';

import type { ReactNode } from 'react';
import { selectFounder, type FounderId } from '../lib/founder-nav';

type Props = {
  id: FounderId;
  children: ReactNode;
};

export default function FounderAnchorLink({ id, children }: Props) {
  return (
    <a
      href={`#${id}`}
      className="story-mark"
      onClick={(e) => {
        e.preventDefault();
        selectFounder(id);
      }}
    >
      {children}
    </a>
  );
}
