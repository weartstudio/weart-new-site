import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import ArticleProgress from '../../components/ArticleProgress';
import { getPostBySlug, getPosts } from '../../lib/wordpress';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} – Weart`, description: post.excerpt };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = await getPosts(8);
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const tags = post.tagNames.length ? post.tagNames : [post.categoryName];
  const heroGlyph = post.title.charAt(0).toUpperCase();
  const tocIds = post.toc.map((t) => t.id);
  const author = post.author;

  return (
    <>
      <Nav />

      <div className="progress" aria-hidden="true"><i id="progressBar"></i></div>

      <header className="a-head">
        <div className="container">
          <div className="a-meta-top">
            <span className="pill-cat">{post.categoryName}</span>
            <span className="dot"></span>
            <span className="item">{post.readingMinutes} perc olvasás</span>
          </div>

          <h1 className="a-title">{post.title}</h1>
          {post.excerpt && <p className="a-deck">{post.excerpt}</p>}

          <div className="a-byline">
            {author && (
              <div className="a-author">
                <div className="a-avatar">
                  {author.avatarUrl ? (
                    <Image src={author.avatarUrl} alt={author.name} width={46} height={46} />
                  ) : (
                    author.initial
                  )}
                </div>
                <div className="a-author-info">
                  <b>{author.name}</b>
                  {author.role && <small>{author.role}</small>}
                </div>
              </div>
            )}
            <div className="a-share">
              <a className="share-btn" title="Megosztás Facebookon" href="#" aria-label="Megosztás Facebookon">f</a>
              <a className="share-btn" title="Megosztás LinkedIn-en" href="#" aria-label="Megosztás LinkedIn-en">in</a>
              <a className="share-btn" title="Link másolása" href="#" aria-label="Link másolása">↗</a>
            </div>
          </div>

          {post.featuredImage ? (
            <div className="hero-image hero-image-photo">
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt || post.title}
                fill
                sizes="(max-width: 1240px) 100vw, 1176px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          ) : (
            <div className="hero-image" aria-hidden="true">
              <div className="grid-bg"></div>
              <div className="glyph">{heroGlyph}</div>
              <div className="corner-stamp">
                <b>{post.categoryName} · {new Date(post.date).getFullYear()}</b>
                <span className="lbl">Weart Tudástár</span>
              </div>
              <div className="score-pop">
                <b>{post.readingMinutes} perc</b>
                <small>becsült olvasási idő</small>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="container">
        <div className="a-body-wrap">
          <aside className="toc-side" aria-hidden={post.toc.length < 2 ? 'true' : undefined}>
            {post.toc.length >= 2 && (
              <>
                <div className="toc-label">Tartalomjegyzék</div>
                <nav className="toc" id="toc">
                  {post.toc.map((t) => (
                    <a key={t.id} href={`#${t.id}`} data-target={t.id}>
                      <span className="num">{t.num}</span>{t.text}
                    </a>
                  ))}
                </nav>
              </>
            )}
          </aside>

          <article className="a-body" id="article">
            <div className="wp-content" dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="a-end">
              <div>
                <h3>Szeretnéd, hogy <em>mi csináljuk meg</em> helyetted?</h3>
                <p>Weboldal, webshop, SEO — két munkanapon belül kapsz árajánlatot.</p>
              </div>
              <Link href="/ajanlatkeres" className="btn btn-primary">Kérek árajánlatot <span className="arrow">→</span></Link>
            </div>

            <div className="a-foot">
              <div className="tag-row">
                {tags.map((t) => (
                  <Link key={t} className="tag" href="/posts">#{t.toLowerCase().replace(/\s+/g, '-')}</Link>
                ))}
              </div>
              <div className="a-share">
                <a className="share-btn" href="#" aria-label="Megosztás Facebookon">f</a>
                <a className="share-btn" href="#" aria-label="Megosztás LinkedIn-en">in</a>
                <a className="share-btn" href="#" aria-label="Link másolása">↗</a>
              </div>
            </div>

            {author && (
              <div className="a-author-bio">
                <div className="photo">
                  {author.avatarUrl ? (
                    <Image src={author.avatarUrl} alt={author.name} width={72} height={72} />
                  ) : (
                    author.initial
                  )}
                </div>
                <div className="bio-info">
                  <b>{author.name}</b>
                  {author.role && <div className="role">{author.role}</div>}
                  {author.bio && <p>{author.bio}</p>}
                </div>
              </div>
            )}
          </article>

          <aside className="aside-side">
            <div className="aside-card">
              <div className="label">Ajánlat</div>
              <h4>Új weboldal vállalkozásoknak</h4>
              <p>Tervezés, fejlesztés, tartalomtöltés — egy árban. Két munkanapon belül árajánlat.</p>
              <Link href="/ajanlatkeres">Egyeztetést kérek →</Link>
            </div>
            {related[0] && (
              <div className="aside-card">
                <div className="label">Kapcsolódó</div>
                <h4>{related[0].title}</h4>
                <p>{related[0].excerpt}</p>
                <Link href={`/posts/${related[0].slug}`}>Tovább a cikkre →</Link>
              </div>
            )}
          </aside>
        </div>
      </main>

      {related.length > 0 && (
        <section className="sec">
          <div className="container">
            <div className="related">
            <div className="related-head">
              <div>
                <div className="sec-tag">Folytasd az olvasást</div>
                <h2 className="sec-h">Hasonló cikkek</h2>
              </div>
              <Link href="/posts" className="btn btn-ghost">Összes cikk →</Link>
            </div>
            <div className="related-grid">
              {related.map((r) => (
                <article key={r.slug} className="insight">
                  <Link href={`/posts/${r.slug}`} className={`insight-img ${r.imgClass}`} aria-label={r.title}>
                    {r.featuredImage ? (
                      <Image
                        src={r.featuredImage.url}
                        alt={r.featuredImage.alt || r.title}
                        fill
                        sizes="(max-width: 1024px) 50vw, 380px"
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <div className="glyph">{r.glyph}</div>
                    )}
                  </Link>
                  <div className="insight-body">
                    <div className="insight-meta">
                      <span className="tag-x">{r.categoryName}</span>
                    </div>
                    <h3 className="insight-title">
                      <Link href={`/posts/${r.slug}`}>{r.title}</Link>
                    </h3>
                    <p className="insight-excerpt">{r.excerpt}</p>
                    <div className="insight-foot">
                      <Link href={`/posts/${r.slug}`}>Tovább →</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            </div>
          </div>
        </section>
      )}

      <ArticleProgress tocIds={tocIds} />
      <Footer />
    </>
  );
}
