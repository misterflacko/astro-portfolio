# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2025-12-24

### shadcn/ui Migration & Visual Enhancement

**Live URL**: https://ac-seo-marketing-portfolio.netlify.app

### Added

- **shadcn/ui Components**
  - Button, Badge, Card, Sheet, Input, Textarea (React/TypeScript)
  - MobileNav and ThemeToggle as React components with client hydration
  - ServiceCards and NewsGrid section components
  - Proper TypeScript path aliases (@/components, @/lib)

- **Visual Enhancements**
  - Micro-interactions: button scale effects, card hover lift
  - Reduced-motion support for accessibility
  - Consistent typography hierarchy (H1: 700, H2: 600, H3: 600)
  - Responsive section padding with clamp() functions

- **Documentation**
  - DESIGN_BRIEF.md - UI improvement specifications
  - BASELINE_METRICS.md - Initial measurements
  - VISUAL_AUDIT_REPORT.md - Component analysis
  - Phase screenshots in /screenshots/

### Changed

- Brand logo from orange favicon to teal (#12EACB) inline SVG component
- Typography: font-weight 400 → 600/700 for headings
- Section spacing: py-16 → responsive clamp values
- Cards: added transition-all, hover:shadow-lg, hover:-translate-y-1
- Buttons: added hover:scale-[1.02], active:scale-[0.98]

### Performance

- LCP: 351ms (Excellent)
- CLS: 0.00 (Perfect)
- 33 pages built successfully
- All components hydrate with client:load

### Tech Stack Updates

- Added: @radix-ui/react-slot, class-variance-authority, clsx, tailwind-merge
- Added: lucide-react for icons
- TypeScript path aliases configured

---

## [1.0.0] - 2025-12-23

### Initial Deployment

**Live URL**: https://ac-seo-marketing-portfolio.netlify.app
**GitHub**: https://github.com/misterflacko/astro-portfolio

### Added

- **5 SEO-Optimized Blog Posts** (digital marketing topics)
  - `seo-fundamentals-beginners-guide.md` - SEO basics, keyword research, on-page optimization
  - `content-marketing-strategy-conversions.md` - Content planning, user intent, CTAs
  - `social-media-marketing-2025.md` - Platform strategies, engagement, algorithms
  - `email-marketing-best-practices.md` - Subject lines, segmentation, automation
  - `data-driven-marketing-analytics.md` - KPIs, GA4, attribution models

- **Digital Marketing Skills** (replaced software engineering)
  - SEO & Search Marketing
  - Content Marketing
  - Social Media Marketing
  - Email Marketing
  - Analytics & Data
  - Digital Strategy

- **Marketing Work Experience**
  - Digital Marketing Manager at Growth Digital Agency
  - SEO Specialist at SearchFirst Marketing
  - Content Marketing Lead at ContentPro Media
  - Marketing Coordinator at LocalBiz Solutions

- **Marketing Projects Portfolio**
  - SEO Content Hub Strategy
  - Marketing Automation System
  - Analytics Dashboard Implementation
  - Social Media Growth Campaign
  - Email Marketing Optimization
  - Local SEO Domination

- **Education & Certifications**
  - B.S. Marketing from University of Texas at Austin
  - Google Analytics Certification
  - HubSpot Inbound Marketing Certification

### Changed

- Site title to "Austin's Portfolio"
- Site description for digital marketing focus
- Author name to "Austin"
- Hero section: "Digital Marketing Expert"
- All blog post dates updated to December 2025
- Categories and tags updated for digital marketing taxonomy

### Configuration

- **Site URL**: `https://ac-seo-marketing-portfolio.netlify.app`
- **Netlify Site ID**: `034f420a-b95a-4290-a608-c8f8eb5a67e3`
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

### Tech Stack

- Astro 5.12.9
- Tailwind CSS v4
- Starwind UI
- MDX for blog content
- Netlify for deployment
