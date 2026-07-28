---
name: sit-typography
description: Teaches AI agents how to help developers use Canvas typography utilities (font-size, font-weight, line-height, letter-spacing) with the sit: prefix. Use when users ask about text sizing, font weights, line spacing, or typography styling in Canvas designs.
metadata:
  author: singapore-design-system
  version: "0.0.0"
  audience: external
  category: typography
---

# Canvas Typography Utilities Skill

Helps developers use Canvas typography utilities for consistent text sizing, weights, spacing, and formatting.

## Prerequisites

**Required**: Complete setup from **sit-utilities-setup** skill first.

Typography utilities require the utility CSS import but do NOT require theme files.

## Core Concept

All Canvas typography utilities use the `sit:` prefix for font sizes, weights, line heights, and letter spacing.

## Font Size

Apply text sizes using `sit:text-{size}` where the number matches the pixel value:

```html
<p class="sit:text-12">12px — captions, fine print</p>
<p class="sit:text-14">14px — labels, helper text</p>
<p class="sit:text-16">16px — default body text</p>
<p class="sit:text-20">20px — lead paragraphs, intro text</p>
<h4 class="sit:text-24">24px — H4 / card headings</h4>
<h3 class="sit:text-28">28px — H3</h3>
<h2 class="sit:text-32">32px — H2</h2>
<h1 class="sit:text-40">40px — H1</h1>
<h1 class="sit:text-48">48px — page titles</h1>
<h1 class="sit:text-56">56px — hero display</h1>
```

### Font Size Scale

- `12` = 12px
- `14` = 14px
- `16` = 16px (default)
- `20` = 20px
- `24` = 24px
- `28` = 28px
- `32` = 32px
- `40` = 40px
- `48` = 48px
- `56` = 56px

Sizes outside this base scale (18, 22, 26, 30, 36, 44, 52) are available for responsive use only.

## Font Weight

Apply font weights using `sit:font-{weight}`:

```html
<p class="sit:font-light">Light weight (300)</p>
<p class="sit:font-regular">Regular weight (400) - default</p>
<p class="sit:font-semibold">Semibold weight (600)</p>
<p class="sit:font-bold">Bold weight (700)</p>
```

### Font Weight Scale

- `light` = 300
- `regular` = 400 (default)
- `semibold` = 600
- `bold` = 700

## Line Height

Apply line heights using `sit:leading-{scale}`:

```html
<!-- Body text (default) -->
<p class="sit:leading-normal">Normal line height (1.5)</p>

<!-- Display, headings, and subheadings -->
<h1 class="sit:leading-tight">Tight line height (1.2)</h1>
```

### Line Height Scale

- `normal` = 1.5 (default — body text)
- `tight` = 1.2 (display, headings, subheadings)

## Letter Spacing

Apply letter spacing using `sit:tracking-{size}`:

```html
<!-- Tighter spacing -->
<p class="sit:tracking-tighter">Tighter letter spacing (-0.05em)</p>
<p class="sit:tracking-tight">Tight letter spacing (-0.025em)</p>

<!-- Normal spacing -->
<p class="sit:tracking-normal">Normal letter spacing (0em)</p>

<!-- Wider spacing -->
<p class="sit:tracking-wide">Wide letter spacing (0.025em)</p>
<p class="sit:tracking-wider">Wider letter spacing (0.05em)</p>
<p class="sit:tracking-widest">Widest letter spacing (0.1em)</p>
```

### Letter Spacing Scale

- `tighter` = -0.0625em
- `tight` = -0.025em
- `normal` = 0em (default)
- `wide` = 0.0625em
- `wider` = 0.125em

## Font Family

Apply font families using `sit:font-{family}`:

```html
<!-- Sans-serif (default) -->
<p class="sit:font-sans">
  System sans-serif font stack
</p>

<!-- Monospace (code) -->
<code class="sit:font-mono">
  Monospace font for code
</code>
```

### Font Families

- `sans` - System sans-serif stack (Inter, system-ui, etc.)
- `mono` - Monospace stack (jetbrainsmono, 'Courier New', etc.)

## Common Use Cases

### Display Headings (Hero Text)

```html
<h1 class="sit:text-display-default sit:text-48 sit:font-bold sit:leading-tight sit:tracking-tight">
  Hero Display Heading
</h1>

<h1 class="sit:text-display-default sit:text-56 sit:font-bold sit:leading-tight">
  Extra Large Hero
</h1>
```

### Section Headings

```html
<!-- H2 -->
<h2 class="sit:text-heading-default sit:text-32 sit:font-semibold sit:leading-tight sit:mb-6">
  Section Heading
</h2>

<!-- H3 -->
<h3 class="sit:text-heading-default sit:text-24 sit:font-semibold sit:leading-tight sit:mb-4">
  Subsection Heading
</h3>

<!-- H4 -->
<h4 class="sit:text-heading-default sit:text-20 sit:font-semibold sit:leading-tight sit:mb-3">
  Minor Heading
</h4>
```

### Body Text

```html
<!-- Large body text (lead paragraph) -->
<p class="sit:text-body-default sit:text-20 sit:leading-normal sit:mb-4">
  Lead paragraph with larger text for better readability.
</p>

<!-- Standard body text -->
<p class="sit:text-body-default sit:text-16 sit:leading-normal sit:mb-4">
  Regular body text for main content.
</p>

<!-- Small body text (captions, metadata) -->
<p class="sit:text-body-subtle sit:text-14 sit:leading-normal">
  Caption or metadata text.
</p>

<!-- Extra small (fine print) -->
<p class="sit:text-body-subtle sit:text-12 sit:leading-normal">
  Fine print or legal text.
</p>
```

### Form Labels

```html
<label class="sit:text-label-default sit:text-14 sit:font-semibold sit:block sit:mb-2">
  Form Field Label
</label>

<label class="sit:text-label-default sit:text-16 sit:font-semibold sit:block sit:mb-2">
  Larger Form Label
</label>
```

### Links

```html
<a href="#" class="sit:text-link-default sit:text-16 sit:font-regular">
  Standard link
</a>

<a href="#" class="sit:text-link-default sit:text-16 sit:font-semibold">
  Semibold weight link
</a>
```

### Code Blocks

```html
<!-- Inline code -->
<p class="sit:text-body-default">
  Use the <code class="sit:font-mono sit:text-14 sit:bg-surface-raised sit:px-1">import</code> statement.
</p>

<!-- Code block -->
<pre class="sit:font-mono sit:text-14 sit:leading-normal sit:bg-surface-raised sit:p-4 sit:rounded">
  function hello() {
    console.log('Hello, world!');
  }
</pre>
```

### Emphasized Text

```html
<p class="sit:text-body-default sit:text-16 sit:leading-normal">
  This is <strong class="sit:font-semibold">important text</strong> that needs emphasis.
</p>

<p class="sit:text-body-default sit:text-16 sit:leading-normal">
  This is <em class="sit:font-regular sit:italic">emphasized text</em> with style.
</p>
```

### Uppercase/Lowercase Text

```html
<!-- Uppercase (e.g., labels, badges) -->
<span class="sit:text-12 sit:font-semibold sit:uppercase sit:tracking-wider">
  Badge Label
</span>

<!-- Capitalize -->
<h3 class="sit:text-20 sit:font-semibold sit:capitalize">
  capitalize each word
</h3>

<!-- Lowercase -->
<p class="sit:text-14 sit:lowercase">
  ALL LOWERCASE TEXT
</p>
```

### Blockquotes

```html
<blockquote class="sit:text-body-default sit:text-20 sit:font-regular sit:leading-normal sit:italic sit:border-l-4 sit:border-primary-default sit:pl-6 sit:my-6">
  "This is an inspiring quote that stands out from the main content."
</blockquote>
```

### Statistics/Numbers

```html
<div class="sit:text-center">
  <p class="sit:text-primary-default sit:text-48 sit:font-bold sit:leading-tight sit:mb-2">
    1,234
  </p>
  <p class="sit:text-body-subtle sit:text-14 sit:font-semibold sit:uppercase sit:tracking-wide">
    Active Users
  </p>
</div>
```

### Buttons

```html
<!-- Standard button -->
<button class="sit:bg-primary-default sit:text-white sit:text-16 sit:font-semibold sit:px-6 sit:py-3 sit:rounded">
  Button Text
</button>

<!-- Small button -->
<button class="sit:bg-primary-default sit:text-white sit:text-14 sit:font-semibold sit:px-4 sit:py-2 sit:rounded">
  Small Button
</button>

<!-- Large button -->
<button class="sit:bg-primary-default sit:text-white sit:text-20 sit:font-semibold sit:px-8 sit:py-4 sit:rounded">
  Large Button
</button>
```

### Card with Typography Hierarchy

```html
<div class="sit:bg-surface-raised sit:p-6 sit:rounded-lg">
  <h3 class="sit:text-heading-default sit:text-24 sit:font-semibold sit:leading-tight sit:mb-2">
    Card Title
  </h3>
  <p class="sit:text-body-subtle sit:text-14 sit:leading-normal sit:mb-4">
    Updated 2 hours ago
  </p>
  <p class="sit:text-body-default sit:text-16 sit:leading-normal sit:mb-4">
    Main card description with good readability.
  </p>
  <a href="#" class="sit:text-link-default sit:text-14 sit:font-regular">
    Read more →
  </a>
</div>
```

## Responsive Typography

Combine with responsive prefixes for adaptive sizing:

```html
<!-- Mobile: 24px, Tablet: 32px, Desktop: 40px -->
<h1 class="sit:text-24 md:sit:text-32 lg:sit:text-40 sit:font-bold">
  Responsive Heading
</h1>

<!-- Adjust line height at different breakpoints -->
<p class="sit:text-16 sit:leading-normal md:sit:text-20">
  Responsive body text
</p>
```

## Best Practices

### DO: Use Semantic Text Size Pairings

```html
<!-- ✅ Good - appropriate size hierarchy -->
<h2 class="sit:text-32 sit:font-semibold sit:mb-4">Section Title</h2>
<p class="sit:text-16 sit:leading-relaxed">Body content</p>

<!-- ❌ Avoid - poor hierarchy -->
<h2 class="sit:text-16 sit:font-regular">Section Title</h2>
<p class="sit:text-32">Body content</p>
```

### DO: Pair Font Size with Line Height

```html
<!-- ✅ Good - headings with tight leading (1.2) -->
<h1 class="sit:text-48 sit:leading-tight">Display Heading</h1>

<!-- ✅ Good - body text with normal leading (1.5) -->
<p class="sit:text-16 sit:leading-normal">Body text</p>

<!-- ❌ Avoid - heading without tight leading -->
<h1 class="sit:text-48 sit:leading-normal">Poor heading spacing</h1>
```

### DO: Use Appropriate Weights for Emphasis

```html
<!-- ✅ Good - clear visual hierarchy -->
<h2 class="sit:font-bold">Bold Heading</h2>
<p class="sit:font-regular">Regular body text</p>

<!-- ❌ Avoid - everything too bold -->
<h2 class="sit:font-bold">Bold Heading</h2>
<p class="sit:font-bold">Bold body text (too heavy)</p>
```

### DO: Use Monospace for Code

```html
<!-- ✅ Good - monospace for code -->
<code class="sit:font-mono sit:text-14">const foo = 'bar';</code>

<!-- ❌ Avoid - sans-serif for code -->
<code class="sit:font-sans sit:text-14">const foo = 'bar';</code>
```

### DO: Adjust Tracking for Large Text

```html
<!-- ✅ Good - tighter tracking for display text -->
<h1 class="sit:text-56 sit:font-bold sit:tracking-tight">
  Hero Heading
</h1>

<!-- ✅ Good - wider tracking for small caps -->
<span class="sit:text-12 sit:font-semibold sit:uppercase sit:tracking-wider">
  Label
</span>
```

## Troubleshooting

### Font Size Not Applied

**Problem**: A font size class has no effect

**Solutions**:
1. Only base sizes are utility classes: 12, 14, 16, 20, 24, 28, 32, 40, 48, 56
2. Check that `sit:` prefix is included
3. Verify no CSS specificity conflicts from other stylesheets
4. Check for `!important` rules overriding the utility

### Line Height Issues

**Problem**: Line height appears incorrect

**Solutions**:
1. Remember font size utilities include default line heights
2. Override with explicit `sit:leading-*` classes if needed
3. Check for inherited line-height values from parent elements

### Font Weight Not Changing

**Problem**: Font weight utilities don't change weight

**Solutions**:
1. Ensure the font family supports the weight you're using
2. Verify font files are loaded correctly
3. Check browser font rendering settings
4. Try a different weight to test if font supports it

### Text Too Tight/Loose

**Problem**: Letter spacing looks wrong

**Solutions**:
1. Use `sit:tracking-tight` for large headings
2. Use `sit:tracking-wider` for small uppercase text
3. Leave normal tracking for body text
4. Avoid extreme tracking values

## Quick Reference

### Font Size
```html
sit:text-12   /* 12px */
sit:text-14   /* 14px */
sit:text-16   /* 16px (default) */
sit:text-20   /* 20px */
sit:text-24   /* 24px */
sit:text-28   /* 28px */
sit:text-32   /* 32px */
sit:text-40   /* 40px */
sit:text-48   /* 48px */
sit:text-56   /* 56px */
```

### Font Weight
```html
sit:font-light        /* 300 */
sit:font-regular      /* 400 (default) */
sit:font-semibold     /* 600 */
sit:font-bold         /* 700 */
```

### Line Height
```html
sit:leading-normal    /* 1.5 (default — body text) */
sit:leading-tight     /* 1.2 (display, headings, subheadings) */
```

### Letter Spacing
```html
sit:tracking-tighter  /* -0.05em */
sit:tracking-tight    /* -0.025em */
sit:tracking-normal   /* 0em (default) */
sit:tracking-wide     /* 0.025em */
sit:tracking-wider    /* 0.05em */
sit:tracking-widest   /* 0.1em */
```

### Font Family
```html
sit:font-sans  /* System sans-serif */
sit:font-mono  /* Monospace */
```

---

**For AI Agents**: Use only the 10 base font sizes — 12, 14, 16, 20, 24, 28, 32, 40, 48, 56. Use `sit:text-16` for body, `sit:text-32` for H2, `sit:text-40`–`sit:text-48` for H1, `sit:text-56` for hero display. Use `sit:leading-tight` (1.2) for display text and all headings; use `sit:leading-normal` (1.5) for all body text. Use semibold (600) or bold (700) for headings, regular (400) for body text. Always use monospace font for code.
