import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { getPostBySlug } from '../../lib/wordpress';
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

  return (
    <>
      <Nav />
      <header className="page-head">
        <div className="container">
          <div className="crumbs">
            <Link href="/">Főoldal</Link>
            <span className="sep">/</span>
            <Link href="/posts">Blog</Link>
            <span className="sep">/</span>
            <span>{post.title}</span>
          </div>
          <div className="featured-meta" style={{ marginTop: 24 }}>
            <span className="tag">{post.categoryName}</span>
            <span className="dot"></span>
            <span>{post.formattedDate}</span>
          </div>
          <h1 className="page-h1" style={{ maxWidth: 800 }}>{post.title}</h1>
          <p className="page-lead" style={{ maxWidth: 660 }}>{post.excerpt}</p>
        </div>
      </header>

      {post.featuredImage && (
        <section style={{ padding: '24px 0 0' }}>
          <div className="container">
            <div style={{ position: 'relative', aspectRatio: '16/9', borderRadius: 20, overflow: 'hidden', maxWidth: 980, margin: '0 auto' }}>
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt || post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 980px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </section>
      )}

      <section style={{ padding: '48px 0 80px' }}>
        <div className="container">
          <div
            className="post-content"
            style={{ maxWidth: 740, margin: '0 auto' }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
