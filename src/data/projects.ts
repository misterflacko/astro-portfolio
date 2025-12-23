import GoogleAnalyticsIcon from '../assets/logos/GoogleAnalytics-logo.svg?raw';
import N8nIcon from '../assets/logos/N8n-logo.svg?raw';
import PosthogIcon from '../assets/logos/posthog-logo.svg?raw';
import NotionIcon from '../assets/logos/Notion-logo.svg?raw';
import WordpressIcon from '../assets/logos/Wordpress-logo.svg?raw';
import AstroIcon from '../assets/logos/Astro-logo.svg?raw';

export const projects = [
  {
    title: "SEO Content Hub",
    techStack: "WordPress • Yoast SEO • Ahrefs • Google Search Console",
    description: "Built comprehensive content hub that ranks for 500+ keywords, drives 50K+ monthly organic visits, with pillar pages and topic clusters.",
    ctaText: "View Case Study →",
    ctaLink: "#",
    icon: WordpressIcon
  },
  {
    title: "Marketing Automation System",
    techStack: "n8n • HubSpot • Mailchimp • Zapier",
    description: "Designed automated workflows for lead nurturing, email sequences, and CRM integration that improved conversion rates by 35%.",
    ctaText: "Learn More →",
    ctaLink: "#",
    icon: N8nIcon
  },
  {
    title: "Analytics Dashboard",
    techStack: "Google Analytics 4 • Looker Studio • BigQuery",
    description: "Custom marketing analytics dashboard tracking KPIs, attribution, and ROI across channels with automated reporting.",
    ctaText: "View Demo →",
    ctaLink: "#",
    icon: GoogleAnalyticsIcon
  },
  {
    title: "Content Performance Tracker",
    techStack: "PostHog • Google Analytics • Custom Scripts",
    description: "Content analytics system tracking engagement, scroll depth, conversions, and content attribution for optimization.",
    ctaText: "Read More →",
    ctaLink: "#",
    icon: PosthogIcon
  },
  {
    title: "Editorial Content Calendar",
    techStack: "Notion • Airtable • Content Strategy",
    description: "Comprehensive editorial planning system with content briefs, SEO guidelines, publishing workflows, and performance tracking.",
    ctaText: "View Template →",
    ctaLink: "#",
    icon: NotionIcon
  },
  {
    title: "Marketing Portfolio Site",
    techStack: "Astro • Tailwind CSS • Netlify",
    description: "This portfolio site built with Astro for lightning-fast performance, SEO optimization, and modern design.",
    ctaText: "View Source →",
    ctaLink: "https://github.com/misterflacko/astro-portfolio",
    icon: AstroIcon
  },
];
