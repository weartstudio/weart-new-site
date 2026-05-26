import Link from 'next/link';
import Image from 'next/image';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BlogList from '../components/BlogList';
import { getPosts, getCategories } from '../lib/wordpress';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog – Weart',
  description: 'Magyar nyelven, kkv-tulajdonosoknak — érthetően arról, hogyan működik egy weboldal.',
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getPosts(), getCategories()]);
  const featured = posts[0];

  return (
    <>
      <Nav />
      <header className="page-head">
        <div className="container">
          <div className="page-eyebrow">Blog</div>
          <h1 className="page-h1">Cikkek, amik segítenek, hogy <span className="underline">jobban dönts</span></h1>
          <p className="page-lead">Magyar nyelven, kkv-tulajdonosoknak — érthetően arról, hogyan működik egy weboldal, mit érdemes elvárni egy fejlesztőtől, és hogyan hozhatsz ki belőle több vevőt.</p>
        </div>
      </header>

      {featured && (
        <section style={{ padding: '48px 0' }}>
          <div className="container">
            <div className="sec-tag">Kiemelt cikk</div>
            <article className="featured">
              <Link href={`/posts/${featured.slug}`} className="featured-img" aria-label={featured.title}>
                <span className="corner-tag">Kiemelt</span>
                {featured.featuredImage ? (
                  <Image
                    src={featured.featuredImage.url}
                    alt={featured.featuredImage.alt || featured.title}
                    fill
                    sizes="(max-width: 1100px) 100vw, 55vw"
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                ) : (
                  <div className="big-glyph">{featured.glyph}</div>
                )}
              </Link>
              <div className="featured-body">
                <div className="featured-meta">
                  <span className="tag">{featured.categoryName}</span>
                  <span className="dot"></span>
                  <span>{featured.formattedDate}</span>
                </div>
                <h2 className="featured-title">
                  <Link href={`/posts/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p className="featured-excerpt">{featured.excerpt}</p>
                <Link href={`/posts/${featured.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 600, color: 'var(--primary)' }}>
                  Elolvasom →
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      <BlogList posts={posts} categories={categories} />

      <div className="container">
        <div className="news">
          <div>
            <h3>Iratkozz fel a<br /><em>Weart Blogra.</em></h3>
            <p>Havonta egyszer küldünk hasznos cikkeket, tippeket és kkv-knak szóló weboldal-tanácsokat. Spam nincs, leiratkozni bármikor lehet.</p>
          </div>
          <div>
            <div className="news-form">
              <input type="email" placeholder="email@cimed.hu" />
              <button>Feliratkozom</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
