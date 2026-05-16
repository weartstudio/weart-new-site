const WP_GRAPHQL_URL = 'https://dev.weart.hu/graphql';

const IMG_CLASSES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

async function fetchGraphQL(query: string, variables: Record<string, unknown> = {}) {
  const res = await fetch(WP_GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) throw new Error(`GraphQL hiba: ${res.status}`);

  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);

  return json.data;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#8230;/g, '…').trim();
}

function formatHunDate(isoDate: string): string {
  const months = ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'];
  const d = new Date(isoDate);
  return `${d.getFullYear()}. ${months[d.getMonth()]} ${d.getDate()}.`;
}

export type WPImage = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type WPPost = {
  databaseId: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  formattedDate: string;
  imgClass: string;
  glyph: string;
  categoryName: string;
  categorySlug: string;
  featuredImage: WPImage | null;
};

export type WPSinglePost = WPPost & {
  content: string;
};

export type WPCategory = {
  name: string;
  slug: string;
};

type RawPost = {
  databaseId: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  categories: { nodes: { name: string; slug: string }[] };
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
      mediaDetails: { width: number; height: number } | null;
    };
  } | null;
};

function mapFeaturedImage(raw: RawPost['featuredImage']): WPImage | null {
  if (!raw?.node?.sourceUrl) return null;
  return {
    url: raw.node.sourceUrl,
    alt: raw.node.altText || '',
    width: raw.node.mediaDetails?.width ?? 1200,
    height: raw.node.mediaDetails?.height ?? 750,
  };
}

export async function getPosts(first = 100): Promise<WPPost[]> {
  const data = await fetchGraphQL(
    `query GetPosts($first: Int) {
      posts(first: $first, where: { status: PUBLISH }) {
        nodes {
          databaseId
          slug
          title
          excerpt
          date
          categories { nodes { name slug } }
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails { width height }
            }
          }
        }
      }
    }`,
    { first }
  );

  return (data.posts.nodes as RawPost[]).map((node, i) => ({
    databaseId: node.databaseId,
    slug: node.slug,
    title: node.title,
    excerpt: stripHtml(node.excerpt),
    date: node.date,
    formattedDate: formatHunDate(node.date),
    imgClass: IMG_CLASSES[i % IMG_CLASSES.length],
    glyph: String(i + 1).padStart(2, '0'),
    categoryName: node.categories.nodes[0]?.name ?? 'Egyéb',
    categorySlug: node.categories.nodes[0]?.slug ?? 'egyeb',
    featuredImage: mapFeaturedImage(node.featuredImage),
  }));
}

export async function getCategories(): Promise<WPCategory[]> {
  const data = await fetchGraphQL(
    `query GetCategories {
      categories(where: { hideEmpty: true }) {
        nodes { name slug }
      }
    }`
  );

  return (data.categories.nodes as WPCategory[]).filter(c => c.slug !== 'uncategorized');
}

export async function getPostBySlug(slug: string): Promise<WPSinglePost | null> {
  const data = await fetchGraphQL(
    `query GetPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        databaseId
        slug
        title
        excerpt
        content
        date
        categories { nodes { name slug } }
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails { width height }
          }
        }
      }
    }`,
    { slug }
  );

  if (!data.post) return null;

  const node = data.post as RawPost & { content: string };

  return {
    databaseId: node.databaseId,
    slug: node.slug,
    title: node.title,
    excerpt: stripHtml(node.excerpt),
    content: node.content,
    date: node.date,
    formattedDate: formatHunDate(node.date),
    imgClass: 'a',
    glyph: '01',
    categoryName: node.categories.nodes[0]?.name ?? 'Egyéb',
    categorySlug: node.categories.nodes[0]?.slug ?? 'egyeb',
    featuredImage: mapFeaturedImage(node.featuredImage),
  };
}
