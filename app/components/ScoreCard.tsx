'use client';

import { useState, useEffect, useRef } from 'react';

export default function ScoreCard({ cls, value, label }: { cls: string; value: number; label: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const deg = (value / 100) * 360;
  return (
    <div
      ref={ref}
      className={`score ${cls}`}
      style={{
        '--p': `${deg}deg`,
        opacity: visible ? 1 : 0,
        transition: 'opacity .6s ease',
      } as React.CSSProperties}
    >
      <div className="score-ring"><span>{value}</span></div>
      <div className="lbl">{label}</div>
    </div>
  );
}
