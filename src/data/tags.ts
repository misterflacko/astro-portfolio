export type TagMeta = {
  slug: string;
  title: string;
  description: string;
};

function toTitleCaseFromSlug(slug: string): string {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase())
    .trim();
}

// Customize specific tags here as needed
const tagMetaBySlug: Record<string, Partial<TagMeta>> = {
  seo: {
    title: 'SEO',
    description: 'Search engine optimization tips, techniques, and strategies.',
  },
  'content-marketing': {
    title: 'Content Marketing',
    description: 'Content strategy and creation for business growth.',
  },
  'social-media': {
    title: 'Social Media',
    description: 'Social media marketing strategies and platform insights.',
  },
  'email-marketing': {
    title: 'Email Marketing',
    description: 'Email marketing best practices and automation strategies.',
  },
  analytics: {
    title: 'Analytics',
    description: 'Marketing analytics, data analysis, and measurement.',
  },
  'keyword-research': {
    title: 'Keyword Research',
    description: 'Finding and targeting the right keywords for SEO success.',
  },
  'on-page-seo': {
    title: 'On-Page SEO',
    description: 'Optimizing web pages for search engine visibility.',
  },
  'technical-seo': {
    title: 'Technical SEO',
    description: 'Technical aspects of search engine optimization.',
  },
  'conversion-optimization': {
    title: 'Conversion Optimization',
    description: 'Improving conversion rates and marketing effectiveness.',
  },
  'content-strategy': {
    title: 'Content Strategy',
    description: 'Planning and executing content marketing initiatives.',
  },
  'brand-building': {
    title: 'Brand Building',
    description: 'Building and growing brand presence online.',
  },
  engagement: {
    title: 'Engagement',
    description: 'Increasing audience engagement across channels.',
  },
  'marketing-strategy': {
    title: 'Marketing Strategy',
    description: 'Strategic marketing planning and execution.',
  },
  automation: {
    title: 'Automation',
    description: 'Marketing automation tools and workflows.',
  },
  'lead-nurturing': {
    title: 'Lead Nurturing',
    description: 'Nurturing leads through the marketing funnel.',
  },
  copywriting: {
    title: 'Copywriting',
    description: 'Writing persuasive marketing copy that converts.',
  },
  'data-driven-marketing': {
    title: 'Data-Driven Marketing',
    description: 'Using data to inform marketing decisions.',
  },
  'google-analytics': {
    title: 'Google Analytics',
    description: 'Google Analytics setup, reporting, and insights.',
  },
  attribution: {
    title: 'Attribution',
    description: 'Marketing attribution models and measurement.',
  },
};

export function getTagMeta(slug: string): TagMeta {
  const baseTitle = toTitleCaseFromSlug(slug);
  const custom = tagMetaBySlug[slug] ?? {};
  return {
    slug,
    title: custom.title ?? `#${baseTitle}`,
    description: custom.description ?? `Articles tagged ${baseTitle}.`,
  } as TagMeta;
}


