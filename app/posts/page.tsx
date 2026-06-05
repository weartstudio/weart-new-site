import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import Nav from '../components/Nav';
import RevealWrapper from '../components/RevealWrapper';
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

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="big-cta reveal">
            <div>
              <span className="eyebrow"><span className="dot"></span> 2026 Q3-ra még 2 hely van</span>
              <h2 style={{ marginTop: 18 }}>
                Beszéljünk az
                <br />
                <em>oldaladról.</em>
              </h2>
              <p>
                Egy 20 perces, kötetlen telefonbeszélgetés. Megnézzük, mire van
                szükséged, és egy munkanapon belül küldünk egy konkrét
                árajánlatot — csomagolás nélkül.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: 28, display: 'inline-flex' }}>
                Kezdjük el <span className="arrow">→</span>
              </Link>
            </div>
            <div className="contact-card">
              <div className="contact-card-head">
                <div className="contact-avatar">
                  <Image
                    src="/fanni-small.jpg"
                    alt="Ágoston Fanni"
                    fill
                    sizes="56px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <div className="contact-name">Ágoston Fanni</div>
                  <div className="contact-role">A hívásokat fogadja</div>
                </div>
              </div>
              <p className="contact-blurb">
                A megkereséseket elsősorban <b>Fanni</b> kezeli, hogy Balázs minél
                jobban tudjon a weboldalak építésére koncentrálni.
              </p>
              <div className="contact-rows">
                <a className="contact-row" href="tel:+36301958114">
                  <span className="contact-row-ico">
                    <Phone size={14} strokeWidth={1.6} />
                  </span>
                  <span>+36 30 / 195 8114</span>
                </a>
                <a className="contact-row" href="mailto:info@weart.hu">
                  <span className="contact-row-ico">
                    <Mail size={14} strokeWidth={1.6} />
                  </span>
                  <span>info@weart.hu</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RevealWrapper />
      <Footer />
    </>
  );
}
