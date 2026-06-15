'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Search } from 'lucide-react';
import type { WPPost, WPCategory } from '../lib/wordpress';

const ALL = 'Összes';

export default function BlogList({ posts, categories }: { posts: WPPost[]; categories: WPCategory[] }) {
  const [activeCat, setActiveCat] = useState(ALL);
  const [search, setSearch] = useState('');

  const catNames = [ALL, ...categories.map(c => c.name)];

  const filtered = posts.slice(1).filter(a => {
    const matchCat = activeCat === ALL || a.categoryName === activeCat;
    const matchSearch = !search || a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section className="sec sec--flush-top">
      <div className="container">
        <div className="blog-toolbar">
          <div className="filter-bar">
            <div className="chips">
              {catNames.map(cat => (
                <button key={cat} className={`chip${activeCat === cat ? ' active' : ''}`} onClick={() => setActiveCat(cat)}>{cat}</button>
              ))}
            </div>
            <label className="search-bar">
              <Search size={14} strokeWidth={1.8} />
              <input type="text" placeholder="Keresés a cikkek között…" value={search} onChange={e => setSearch(e.target.value)} />
            </label>
          </div>
        </div>

        <h2 className="blog-list-title">Összes cikk</h2>
        {filtered.length === 0 ? (
          <p className="blog-empty">Nincs találat a keresési feltételekre.</p>
          ) : (
            <div className="insights">
              {filtered.map((a) => (
                <article key={a.databaseId} className="insight">
                  <Link href={`/posts/${a.slug}`} className={`insight-img ${a.imgClass}`} aria-label={a.title}>
                    {a.featuredImage ? (
                      <Image
                        src={a.featuredImage.url}
                        alt={a.featuredImage.alt || a.title}
                        fill
                        sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <div className="glyph">{a.glyph}</div>
                    )}
                  </Link>
                  <div className="insight-body">
                    <div className="insight-meta">
                      <span className="tag">{a.categoryName}</span>
                    </div>
                    <h3 className="insight-title">
                      <Link href={`/posts/${a.slug}`}>{a.title}</Link>
                    </h3>
                    <p className="insight-excerpt">{a.excerpt}</p>
                    <div className="insight-foot">
                      <Link href={`/posts/${a.slug}`}>Tovább →</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
  );
}
