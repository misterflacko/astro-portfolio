# Changelog

All notable changes to this project will be documented in this file.

## [2.1.0] - 2025-12-26

### SEO Services Grid Enhancement & Homepage Cleanup

**Live URL**: https://ac-seo-marketing-portfolio.netlify.app

### Added

- **SEOServicesGridV2 Light/Dark Mode Support**
  - Theme-aware gradient backgrounds using CSS custom properties
  - Light mode: White/off-white cards with subtle shadows
  - Dark mode: Transparent cards with glow effects
  - Uses `:global([data-theme="light"])` scoped selectors

- **Tools & Platforms Slider on About Page**
  - Reintroduced Carousel component under Expertise section
  - Displays technology and platform logos (Supabase, Tailwind, WordPress, Astro, etc.)
  - Responsive spacing with mt-12 md:mt-16

### Changed

- **SEOServicesGridV2 Content Update** (20 → 26 items)
  - Editorial (7 items): Topical Authority, Persona Mapping & Strategy, User Intent Research, Market Gap Analysis, High-Intent Topics, High-Impact Briefs, Premium Copywriting
  - Programmatic (5 items): Scalable Page Templates, High-Volume Page Generation, Indexation Logic, Unique & Quality Content, Title Tag Optimization
  - AEO (4 items): Question Research, Earned & Owned Strategy, Citation Optimization, Brand Reputation
  - Technical (5 items): Visibility Audits, Internal Linking, Architecture & Crawlability, International SEO, Site Migrations & Revamps
  - Performance (5 items): Growth Forecasting, Custom Reporting Dashboard, KPI Tracking & Reporting, Cohort Analysis, CRO Audits & Optimization

- **Animation Delay Calculation**
  - Updated to support variable item counts per column
  - Cumulative index calculation for smooth staggered wave effect

- **Grid Layout**
  - Added `align-items: start` for natural variable column heights

### Removed

- **Homepage Latest Insights Section** (NewsGrid component)
  - Removed to reduce distraction from core content

- **Homepage Skills & Tools Section** (SkillsSection component)
  - Removed duplicate of ServiceCards already shown in first section
  - Cleaned up unused imports (NewsGrid, SkillsSection, recentPosts)

### Commits

- `add07e8` - SEOServicesGridV2 content update + theme support
- `c191be8` - Remove Latest Insights and Skills sections from homepage
- `8855ae4` - Add Tools & Platforms slider to About page

---

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
