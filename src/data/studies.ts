export const studies = [
  {
    title: "B.S. in Marketing",
    institution: "University of Texas",
    description:
      "Foundation in marketing principles, consumer behavior, market research, and digital marketing fundamentals with focus on data-driven strategies.",
    tags: [
      "Marketing Strategy",
      "Consumer Behavior",
      "Market Research",
      "Digital Marketing",
      "Analytics",
    ],
  },
  {
    title: "Google Analytics Certification",
    institution: "Google",
    description:
      "Advanced certification in Google Analytics 4, including data collection, reporting, analysis, and conversion tracking for marketing optimization.",
    tags: [
      "Google Analytics 4",
      "Data Analysis",
      "Conversion Tracking",
      "Reporting",
    ],
  },
  {
    title: "HubSpot Content Marketing Certification",
    institution: "HubSpot Academy",
    description:
      "Comprehensive training in content strategy, creation, promotion, and analysis for inbound marketing success.",
    tags: [
      "Content Strategy",
      "Inbound Marketing",
      "SEO",
      "Content Creation",
    ],
  },
];

export type StudyItem = (typeof studies)[number];
