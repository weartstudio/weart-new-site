'use client';

import { useState, useEffect, useRef } from 'react';

export default function ScoreCard({ cls, value, label }: { cls: string; value: number; label: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let i = 0;
        const t = setInterval(() => {
          i += 2;
          if (i >= value) { i = value; clearInterval(t); }
          setN(i);
        }, 18);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  const deg = (n / 100) * 360;
  return (
    <div ref={ref} className={`score ${cls}`} style={{ '--p': `${deg}deg` } as React.CSSProperties}>
      <div className="ring"><span>{n}</span></div>
      <div className="lbl">{label}</div>
    </div>
  );
}
