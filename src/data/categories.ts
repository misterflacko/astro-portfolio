export type CategoryMeta = {
  slug: string;
  title: string;
  description: string;
};

function toSlug(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');
}

function toTitleFromSlug(slug: string): string {
  return slug.replace(/[-_]+/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
}

// Customize category SEO here
const categoryMetaBySlug: Record<string, Partial<CategoryMeta>> = {
  'digital-marketing': {
    title: 'Digital Marketing',
    description: 'Strategies, tactics, and insights for effective digital marketing campaigns.',
  },
  'seo': {
    title: 'SEO',
    description: 'Search engine optimization guides and best practices for organic growth.',
  },
  'content-marketing': {
    title: 'Content Marketing',
    description: 'Content strategy, creation, and optimization for business results.',
  },
  'analytics': {
    title: 'Analytics',
    description: 'Data-driven marketing insights and measurement strategies.',
  },
};

export function getCategoryMeta(slugOrName: string): CategoryMeta {
  const slug = toSlug(slugOrName);
  const custom = categoryMetaBySlug[slug] ?? {};
  const fallbackTitle = toTitleFromSlug(slug);
  return {
    slug,
    title: custom.title ?? fallbackTitle,
    description: custom.description ?? `${fallbackTitle} articles and notes.`,
  };
}

export function slugifyCategory(name: string): string { return toSlug(name); }

