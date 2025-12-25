# Austin Crockett Portfolio - Design System

## Overview

This document defines the design system for the Austin Crockett digital marketing portfolio, migrating from custom CSS/Starwind UI to **shadcn/ui** with Astro.

**Reference Site:** [Mach42.ai](https://mach42.ai/)
**Framework:** Astro 5.12.9 + React + Tailwind v4
**Component Library:** shadcn/ui (Default theme)

---

## Color Palette

### Brand Colors

| Token | Hex | OKLCH | Usage |
|-------|-----|-------|-------|
| **Primary (Teal)** | `#12EACB` | `oklch(0.85 0.16 175)` | CTA buttons, highlights, accent |
| **Primary Foreground** | `#1D2B38` | `oklch(0.25 0.02 250)` | Text on primary buttons |

### Light Theme

| Token | Hex | OKLCH | Usage |
|-------|-----|-------|-------|
| `--background` | `#FFFFFF` | `oklch(1 0 0)` | Page background |
| `--foreground` | `#1D2B38` | `oklch(0.25 0.02 250)` | Primary text |
| `--card` | `#FFFFFF` | `oklch(1 0 0)` | Card backgrounds |
| `--card-foreground` | `#1D2B38` | `oklch(0.25 0.02 250)` | Card text |
| `--muted` | `#F8FAFC` | `oklch(0.98 0.005 250)` | Muted backgrounds |
| `--muted-foreground` | `#525E6B` | `oklch(0.50 0.02 250)` | Secondary text |
| `--border` | `rgba(29,43,56,0.1)` | `oklch(0.92 0 0)` | Borders |
| `--input` | `rgba(29,43,56,0.1)` | `oklch(0.92 0 0)` | Input borders |

### Dark Theme

| Token | Hex | OKLCH | Usage |
|-------|-----|-------|-------|
| `--background` | `#0D1117` | `oklch(0.13 0.02 250)` | Page background |
| `--foreground` | `#FFFFFF` | `oklch(0.98 0 0)` | Primary text |
| `--card` | `#151B23` | `oklch(0.18 0.02 250)` | Card backgrounds |
| `--card-foreground` | `#FFFFFF` | `oklch(0.98 0 0)` | Card text |
| `--muted` | `#1D2B38` | `oklch(0.25 0.02 250)` | Muted backgrounds |
| `--muted-foreground` | `#8A929A` | `oklch(0.65 0.01 250)` | Secondary text |
| `--border` | `rgba(255,255,255,0.1)` | `oklch(1 0 0 / 10%)` | Borders |
| `--input` | `rgba(255,255,255,0.15)` | `oklch(1 0 0 / 15%)` | Input borders |

---

## Typography

### Font Stack

```css
--font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

### Type Scale (Mach42 Style)

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| **H1** | `clamp(48px, 6vw, 78px)` | 400 | 1.19 | -0.02em |
| **H2** | `clamp(32px, 4vw, 50px)` | 400 | 1.2 | -0.01em |
| **H3** | `clamp(24px, 2.5vw, 32px)` | 400 | 1.3 | 0 |
| **H4** | `20px` | 500 | 1.4 | 0 |
| **Body** | `16px` | 400 | 1.5 | 0 |
| **Small** | `14px` | 400 | 1.5 | 0 |
| **Nav Links** | `15px` | 400 | 1 | 0 |

---

## Spacing & Layout

### Container

```css
--container-max: 1200px;
--container-padding: 1.5rem; /* 24px */
```

### Section Padding

```css
--section-padding-y: clamp(4rem, 8vw, 8rem);
```

### Border Radius

```css
--radius: 0.75rem;        /* 12px - cards, inputs */
--radius-button: 50px;    /* pill buttons */
--radius-pill: 60px;      /* navigation pill */
```

---

## Component Mapping

### Direct Replacements (shadcn components)

| Current Component | shadcn Replacement | Install Command |
|-------------------|-------------------|-----------------|
| `Button.astro` | `button` | `npx shadcn@latest add button` |
| `Badge.astro` | `badge` | `npx shadcn@latest add badge` |
| `Card.astro` | `card` | `npx shadcn@latest add card` |
| `PostCard.astro` | `card` (customized) | Already included with card |

### Components Needing React Wrappers

These components use React context and must be wrapped in `.tsx` files:

| Current Component | shadcn Base | Wrapper Needed |
|-------------------|-------------|----------------|
| `Header.astro` (mobile menu) | `navigation-menu`, `sheet` | `MobileNav.tsx` |
| `ThemeToggle.astro` | `button` | `ThemeToggle.tsx` |
| Form validation | `form` | `ContactForm.tsx` |

### Keep Custom (No shadcn Equivalent)

| Component | Reason | Notes |
|-----------|--------|-------|
| `HeroSection.astro` | Animated CSS background | Use shadcn buttons inside |
| `Timeline.astro` | Custom timeline design | Use shadcn cards for items |
| `GlowLineSeparator.astro` | Visual effect | Keep as-is |

### Components to Remove

| Component | Replacement |
|-----------|-------------|
| `FeaturedPost.astro` | Compose with shadcn `Card` |
| `ArrowSeparator.astro` | Not needed in new design |
| `Carousel.astro` | Evaluate if needed |

---

## shadcn/ui CSS Variables Configuration

### globals.css Structure

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  /* Teal Accent Theme */
  --background: oklch(1 0 0);
  --foreground: oklch(0.25 0.02 250);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.25 0.02 250);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.25 0.02 250);
  --primary: oklch(0.85 0.16 175);          /* Teal #12EACB */
  --primary-foreground: oklch(0.25 0.02 250);
  --secondary: oklch(0.97 0.005 250);
  --secondary-foreground: oklch(0.25 0.02 250);
  --muted: oklch(0.97 0.005 250);
  --muted-foreground: oklch(0.50 0.02 250);
  --accent: oklch(0.85 0.16 175);           /* Teal */
  --accent-foreground: oklch(0.25 0.02 250);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.98 0 0);
  --border: oklch(0.92 0.005 250);
  --input: oklch(0.92 0.005 250);
  --ring: oklch(0.85 0.16 175);             /* Teal focus ring */
  --radius: 0.75rem;
}

.dark {
  --background: oklch(0.13 0.02 250);
  --foreground: oklch(0.98 0 0);
  --card: oklch(0.18 0.02 250);
  --card-foreground: oklch(0.98 0 0);
  --popover: oklch(0.18 0.02 250);
  --popover-foreground: oklch(0.98 0 0);
  --primary: oklch(0.87 0.17 175);          /* Brighter teal for dark */
  --primary-foreground: oklch(0.15 0.02 250);
  --secondary: oklch(0.25 0.02 250);
  --secondary-foreground: oklch(0.98 0 0);
  --muted: oklch(0.25 0.02 250);
  --muted-foreground: oklch(0.65 0.01 250);
  --accent: oklch(0.87 0.17 175);           /* Brighter teal */
  --accent-foreground: oklch(0.15 0.02 250);
  --destructive: oklch(0.704 0.191 22.216);
  --destructive-foreground: oklch(0.98 0 0);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.87 0.17 175);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

---

## Astro Island Architecture Notes

### When to Use React Wrappers

Components that share React context MUST be wrapped together:

```tsx
// src/components/react/MobileNav.tsx
"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        {/* Nav links */}
      </SheetContent>
    </Sheet>
  )
}
```

Usage in Astro:
```astro
---
import { MobileNav } from "@/components/react/MobileNav"
---

<MobileNav client:load />
```

### Static Components (No Wrapper Needed)

Simple components without context work directly:

```astro
---
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
---

<Button>Click me</Button>
<Badge variant="secondary">Tag</Badge>
```

---

## Button Variants

### Primary (Teal CTA)

```tsx
<Button>Contact Us</Button>
// bg-primary text-primary-foreground
```

### Secondary (Outline)

```tsx
<Button variant="outline">Learn More</Button>
// border border-input bg-background hover:bg-accent
```

### Ghost (Nav Links)

```tsx
<Button variant="ghost">Home</Button>
// hover:bg-accent hover:text-accent-foreground
```

### Link Style

```tsx
<Button variant="link">Read more →</Button>
// text-primary underline-offset-4 hover:underline
```

---

## Card Variants

### Service Card (Mach42 Style)

Clean card without visible border/shadow:

```tsx
<Card className="border-0 shadow-none bg-transparent">
  <CardHeader>
    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
      <IconComponent />
    </div>
    <CardTitle>Service Title</CardTitle>
  </CardHeader>
  <CardContent>
    <CardDescription>Description text...</CardDescription>
  </CardContent>
  <CardFooter>
    <Button variant="link" className="p-0">Learn more →</Button>
  </CardFooter>
</Card>
```

### Blog Post Card

```tsx
<Card className="overflow-hidden">
  <div className="aspect-video relative">
    <img src={heroImage} className="object-cover w-full h-full" />
  </div>
  <CardHeader>
    <div className="text-sm text-muted-foreground">{date}</div>
    <CardTitle className="line-clamp-2">{title}</CardTitle>
  </CardHeader>
  <CardContent>
    <CardDescription className="line-clamp-3">{description}</CardDescription>
  </CardContent>
</Card>
```

---

## Navigation (Floating Pill)

### Structure

```tsx
<nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
  <div className="flex items-center gap-2 px-4 py-2 bg-background/95 backdrop-blur rounded-full border shadow-lg">
    {/* Logo */}
    <a href="/" className="flex items-center gap-2 pr-4">
      <Logo />
      <span className="font-medium">AC</span>
    </a>

    {/* Nav Links */}
    <div className="hidden md:flex items-center gap-1">
      <Button variant="ghost" size="sm" asChild>
        <a href="/">Home</a>
      </Button>
      {/* ... more links */}
    </div>

    {/* CTA */}
    <Button size="sm" className="rounded-full">
      Contact
    </Button>

    {/* Mobile Menu */}
    <MobileNav client:load />
  </div>
</nav>
```

---

## Footer (Dark CTA)

### Structure

```tsx
<footer className="bg-[#1D2B38] text-white">
  {/* CTA Section */}
  <div className="py-20 text-center">
    <h2 className="text-3xl md:text-4xl mb-4">
      Ready to grow your digital presence?
    </h2>
    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
      Contact Us
    </Button>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-white/10 py-6">
    <div className="container flex justify-between items-center">
      <p className="text-sm text-white/60">© Austin Crockett 2025</p>
      <div className="flex gap-4">
        {/* Social Icons */}
      </div>
    </div>
  </div>
</footer>
```

---

## Installation Order

1. **Core utilities:** `npx shadcn@latest add button badge`
2. **Cards:** `npx shadcn@latest add card`
3. **Navigation:** `npx shadcn@latest add navigation-menu sheet`
4. **Forms:** `npx shadcn@latest add input textarea form`
5. **Feedback:** `npx shadcn@latest add toast`

---

## Migration Checklist

- [ ] Initialize shadcn/ui with `npx shadcn@latest init`
- [ ] Configure components.json for Astro
- [ ] Update globals.css with teal theme variables
- [ ] Install core components
- [ ] Migrate Header with floating pill nav
- [ ] Migrate Footer with dark CTA section
- [ ] Migrate homepage sections
- [ ] Migrate blog pages
- [ ] Migrate about/portfolio pages
- [ ] Migrate contact form
- [ ] Remove old Starwind UI code
- [ ] Clean up unused CSS

---

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [shadcn/ui Astro Installation](https://ui.shadcn.com/docs/installation/astro)
- [Tailwind CSS v4](https://tailwindcss.com/docs/v4-beta)
- [Radix UI Primitives](https://www.radix-ui.com)

---

*Last Updated: 2025-12-24*
