import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Digital Marketing Manager",
    company: "Growth Agency",
    region: "United States",
    description:
      "Led full-funnel digital marketing strategies, managed SEO and content teams, increased organic traffic by 150%, and optimized conversion funnels resulting in 40% improvement in lead quality.",
    technologies: [
      "SEO",
      "Google Analytics",
      "Content Strategy",
      "HubSpot",
      "Ahrefs",
      "Google Ads",
      "Meta Ads",
      "Email Marketing",
    ],
  },
  {
    title: "SEO Specialist",
    company: "E-Commerce Brand",
    region: "Remote",
    description:
      "Developed and executed SEO strategies that doubled organic search traffic, improved technical SEO performance, built high-quality backlink profiles, and optimized product pages for conversions.",
    technologies: [
      "Technical SEO",
      "Keyword Research",
      "Link Building",
      "Screaming Frog",
      "SEMrush",
      "Google Search Console",
      "Schema Markup",
    ],
  },
  {
    title: "Content Marketing Lead",
    company: "SaaS Startup",
    region: "Austin, TX",
    description:
      "Built content marketing program from ground up, created editorial calendar, managed team of writers, and established thought leadership that generated 500+ qualified leads monthly.",
    technologies: [
      "Content Strategy",
      "WordPress",
      "Copywriting",
      "Marketing Automation",
      "Mailchimp",
      "Social Media",
      "Analytics",
    ],
  },
  {
    title: "Marketing Coordinator",
    company: "Digital Agency",
    region: "Texas",
    description:
      "Supported multi-channel marketing campaigns, managed social media accounts, created email campaigns, and analyzed campaign performance to optimize marketing spend.",
    technologies: [
      "Social Media",
      "Email Marketing",
      "Google Analytics",
      "Canva",
      "Hootsuite",
      "Campaign Management",
    ],
  },
];

export type WorkItem = (typeof work)[number];
