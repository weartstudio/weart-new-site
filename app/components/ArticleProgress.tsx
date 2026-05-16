'use client';

import { useEffect } from 'react';

export default function ArticleProgress({ tocIds }: { tocIds: string[] }) {
  useEffect(() => {
    const bar = document.getElementById('progressBar');
    const article = document.getElementById('article');
    const tocLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('#toc a'));
    const headings = tocIds.map((id) => document.getElementById(id)).filter((h): h is HTMLElement => !!h);

    const onScroll = () => {
      if (bar && article) {
        const r = article.getBoundingClientRect();
        const total = r.height - window.innerHeight + 200;
        const scrolled = Math.max(0, -r.top + 100);
        const pct = total > 0 ? Math.max(0, Math.min(100, (scrolled / total) * 100)) : 0;
        bar.style.width = pct + '%';
      }
      if (headings.length) {
        let active = headings[0];
        for (const h of headings) {
          if (h.getBoundingClientRect().top < 160) active = h;
        }
        tocLinks.forEach((a) => {
          a.classList.toggle('active', a.dataset.target === active.id);
        });
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [tocIds]);

  return null;
}
