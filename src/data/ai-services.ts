/**
 * AI Implementation Services Data
 *
 * Four service categories for one-time AI installations:
 * 1. Marketing Automation - Content and campaign automation
 * 2. Sales & Lead Generation - Lead nurturing and CRM integrations
 * 3. Operations & Workflows - Process automation and internal tools
 * 4. AI Agent Development - Custom chatbots and multi-agent systems
 */

export interface AIService {
  icon: string;
  title: string;
  description: string;
  items: string[];
  href: string;
}

export const aiServices: AIService[] = [
  {
    icon: "Zap",
    title: "Marketing Automation",
    description: "Automate your content creation and distribution with AI-powered systems.",
    items: [
      "AI content pipelines",
      "Social media automation",
      "Email workflow systems",
      "Campaign optimization"
    ],
    href: "/services/marketing-automation"
  },
  {
    icon: "TrendingUp",
    title: "Sales & Lead Generation",
    description: "Qualify leads and nurture prospects automatically with intelligent systems.",
    items: [
      "Lead scoring bots",
      "Automated follow-ups",
      "CRM integrations",
      "Analytics dashboards"
    ],
    href: "/services/sales-automation"
  },
  {
    icon: "Settings",
    title: "Operations & Workflows",
    description: "Streamline internal processes with custom automation solutions.",
    items: [
      "Process automation",
      "Custom internal tools",
      "Data pipelines",
      "Document processing"
    ],
    href: "/services/operations-automation"
  },
  {
    icon: "Bot",
    title: "AI Agent Development",
    description: "Build intelligent agents that work autonomously for your business.",
    items: [
      "Custom chatbots",
      "Knowledge base agents",
      "Multi-agent systems",
      "API integrations"
    ],
    href: "/services/ai-agents"
  }
];
