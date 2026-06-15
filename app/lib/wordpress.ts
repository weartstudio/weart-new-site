import { BALAZS_PHOTO, FANNI_PHOTO } from './site-assets';

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

export type TocItem = {
  id: string;
  text: string;
  num: string;
};

export type WPAuthor = {
  name: string;
  initial: string;
  role: string;
  bio: string;
  avatarUrl: string | null;
};

export type WPSinglePost = WPPost & {
  content: string;
  readingMinutes: number;
  toc: TocItem[];
  tagNames: string[];
  author: WPAuthor | null;
};

export type WPCategory = {
  name: string;
  slug: string;
};

export type WPProject = {
  databaseId: number;
  slug: string;
  title: string;
  date: string;
  year: number;
  description: string;
  website: string | null;
  clientName: string | null;
  clientRole: string | null;
  image: WPImage | null;
  imageSecondary: WPImage | null;
};

type RawPost = {
  databaseId: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  categories: { nodes: { name: string; slug: string }[] };
  tags?: { nodes: { name: string; slug: string }[] };
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
      mediaDetails: { width: number; height: number } | null;
    };
  } | null;
};

function slugify(text: string): string {
  const map: Record<string, string> = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ö': 'o', 'ő': 'o', 'ú': 'u', 'ü': 'u', 'ű': 'u' };
  return text
    .toLowerCase()
    .replace(/[áéíóöőúüű]/g, (c) => map[c] ?? c)
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 80);
}

function processArticleContent(html: string): { content: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  const used = new Set<string>();
  let idx = 0;

  const hasH2 = /<h2[\s>]/i.test(html);
  const tag = hasH2 ? 'h2' : 'h3';
  const pattern = new RegExp(`<${tag}(\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'gi');

  const processed = html.replace(pattern, (_, attrs: string | undefined, inner: string) => {
    const text = stripHtml(inner);
    if (!text) return `<h2${attrs ?? ''}>${inner}</h2>`;
    let id = slugify(text);
    if (!id) id = `section-${idx + 1}`;
    let unique = id;
    let n = 2;
    while (used.has(unique)) unique = `${id}-${n++}`;
    used.add(unique);

    idx += 1;
    const num = String(idx).padStart(2, '0');
    toc.push({ id: unique, text, num });

    const existingAttrs = attrs ?? '';
    const hasId = /\sid\s*=/i.test(existingAttrs);
    const cleanedAttrs = hasId ? existingAttrs.replace(/\sid\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/i, '') : existingAttrs;
    return `<h2${cleanedAttrs} id="${unique}"><span class="num">${num} / ${text}</span>${inner}</h2>`;
  });

  return { content: processed, toc };
}

function estimateReadingMinutes(html: string): number {
  const text = stripHtml(html);
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

type RawAuthor = {
  name: string | null;
  firstName: string | null;
  lastName: string | null;
  description: string | null;
  avatar: { url: string | null } | null;
} | null;

function localAuthorPhoto(name: string, first: string, last: string): string | null {
  const hay = `${name} ${first} ${last}`.toLowerCase();
  if (hay.includes('fanni') || hay.includes('ágoston') || hay.includes('agoston')) {
    return FANNI_PHOTO;
  }
  if (hay.includes('balázs') || hay.includes('balazs') || hay.includes('egyed')) {
    return BALAZS_PHOTO;
  }
  return null;
}

async function mapAuthor(raw: RawAuthor): Promise<WPAuthor | null> {
  if (!raw) return null;
  const name = (raw.name ?? '').trim();
  if (!name) return null;

  const first = (raw.firstName ?? '').trim();
  const last = (raw.lastName ?? '').trim();
  const initial = first ? first.charAt(0).toUpperCase()
    : (last ? last.charAt(0).toUpperCase()
    : name.charAt(0).toUpperCase());

  const description = (raw.description ?? '').trim();
  let role = '';
  let bio = description;
  if (description) {
    const m = description.match(/^([^.!?]+[.!?])\s*([\s\S]*)$/);
    if (m && m[1].length <= 80) {
      role = m[1].replace(/[.!?]\s*$/, '').trim();
      bio = m[2].trim();
    }
  }

  return {
    name,
    initial,
    role,
    bio,
    avatarUrl: localAuthorPhoto(name, first, last),
  };
}

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

type RawAcfImage = {
  node: {
    sourceUrl: string;
    altText: string;
    mediaDetails: { width: number; height: number } | null;
  };
} | null;

type RawProject = {
  databaseId: number;
  slug: string;
  title: string;
  date: string;
  proejctsData: {
    leiras: string | null;
    weboldal: string | null;
    merendelo: string | null;
    merendeloCopy: string | null;
    image1: RawAcfImage;
    image2: RawAcfImage;
  } | null;
};

function mapAcfImage(raw: RawAcfImage): WPImage | null {
  if (!raw?.node?.sourceUrl) return null;
  return {
    url: raw.node.sourceUrl,
    alt: raw.node.altText || '',
    width: raw.node.mediaDetails?.width ?? 1200,
    height: raw.node.mediaDetails?.height ?? 900,
  };
}

// The ACF field group is exposed under the (misspelled) GraphQL name `proejctsData`.
export async function getProjects(first = 50): Promise<WPProject[]> {
  const data = await fetchGraphQL(
    `query GetProjects($first: Int) {
      projects(first: $first) {
        nodes {
          databaseId
          slug
          title
          date
          proejctsData {
            leiras
            weboldal
            merendelo
            merendeloCopy
            image1 { node { sourceUrl altText mediaDetails { width height } } }
            image2 { node { sourceUrl altText mediaDetails { width height } } }
          }
        }
      }
    }`,
    { first }
  );

  const trimOrNull = (v: string | null | undefined): string | null => {
    const t = (v ?? '').trim();
    return t ? t : null;
  };

  return (data.projects.nodes as RawProject[]).map((node) => {
    const pd = node.proejctsData;
    return {
      databaseId: node.databaseId,
      slug: node.slug,
      title: node.title,
      date: node.date,
      year: new Date(node.date).getFullYear(),
      description: stripHtml(pd?.leiras ?? ''),
      website: trimOrNull(pd?.weboldal),
      clientName: trimOrNull(pd?.merendelo),
      clientRole: trimOrNull(pd?.merendeloCopy),
      image: mapAcfImage(pd?.image1 ?? null),
      imageSecondary: mapAcfImage(pd?.image2 ?? null),
    };
  });
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
        tags { nodes { name slug } }
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails { width height }
          }
        }
        author {
          node {
            name
            firstName
            lastName
            description
            avatar(size: 200) { url }
          }
        }
      }
    }`,
    { slug }
  );

  if (!data.post) return null;

  const node = data.post as RawPost & {
    content: string;
    author?: { node: RawAuthor } | null;
  };
  const { content, toc } = processArticleContent(node.content);

  return {
    databaseId: node.databaseId,
    slug: node.slug,
    title: node.title,
    excerpt: stripHtml(node.excerpt),
    content,
    toc,
    readingMinutes: estimateReadingMinutes(node.content),
    tagNames: node.tags?.nodes.map((t) => t.name) ?? [],
    author: await mapAuthor(node.author?.node ?? null),
    date: node.date,
    formattedDate: formatHunDate(node.date),
    imgClass: 'a',
    glyph: '01',
    categoryName: node.categories.nodes[0]?.name ?? 'Egyéb',
    categorySlug: node.categories.nodes[0]?.slug ?? 'egyeb',
    featuredImage: mapFeaturedImage(node.featuredImage),
  };
}
