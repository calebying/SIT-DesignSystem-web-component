---
name: sit-patterns
description: |
  Complete catalog of reusable typography and text patterns for Canvas applications. Use this skill whenever the user needs to style text, create typography hierarchies, format headings, style lists, or needs consistent text layouts. Also use when the user mentions headings, page titles, body text, lists, paragraphs, display text, content headers, or any typography styling — even if they just say "make a nice heading" or "style my text". Current patterns include headings (H1-H6), display typography (large prominent text), content headers, lists (ordered and unordered), and paragraphs. Each pattern links directly to the raw HTML template for implementation.
compatibility: Requires sit-utilities and sit-components skills for prerequisite setup
---

# Canvas Patterns

This skill catalogs all reusable UI patterns available in Canvas. Patterns are production-ready templates that combine Canvas components and utilities to solve common UI needs.

## When to Use This Skill

Use this skill whenever you need to:
- Implement a **typography pattern** (page headings, content headers, lists, paragraphs with specific sizing/weight)
- Build a **form pattern** (multi-field forms, validation patterns, input groupings)
- Create **page layouts** (login page, empty states, data tables, search interfaces)
- Display **notifications, reviews, or data visualizations** with Canvas
- Find the exact HTML markup and Canvas utility classes for a UI pattern

## Prerequisites

Before implementing any pattern, ensure you have:

1. **sit-getting-started**: Initial application setup (Inter font, foundation CSS imports, component registration)
2. **sit-utilities**: Understanding of Canvas utility classes (spacing, typography, color, grid, etc.)
3. **sit-components**: Knowledge of Canvas web components used within patterns

Refer to these skills before asking how to implement a pattern.

## Current Patterns: Typography

Typography patterns define semantic, reusable layouts for text content. All patterns use Canvas utilities for consistent styling and respect the design token hierarchy.

Use the category links below to find specific patterns:

- **[Heading](./references/typography/heading.md)** - Page and section headings with optional overlines (6 patterns)
- **[Display](./references/typography/display.md)** - Large, prominent display typography (12 patterns)
- **[Content](./references/typography/content.md)** - Card titles and subsection headings (6 patterns)
- **[List](./references/typography/list.md)** - Ordered and unordered lists in three sizes (6 patterns)
- **[Paragraph](./references/typography/paragraph.md)** - Body text styles for longer-form content (3 patterns)

## How to Use a Pattern

1. **Find the pattern** you need using the category links above or the specific pattern reference files
2. **Get the raw HTML template** from the GitHub URL in the reference file
3. **Extract the template** (the `const XxxTemplate = () => html\`....\`` part) — this is the markup to implement
4. **Adapt to your content** — replace placeholder text and adjust Canvas utility classes as needed for your use case
5. **Combine with sit-components** if the pattern includes interactive elements (buttons, forms, dropdowns, etc.)


## Pattern Naming Convention

Pattern files follow this naming scheme:

```
stories/patterns/[Category]/[Subcategory]/[PatternName]-[variant].stories.js
```

Examples:
- `Typography/Heading/h1.stories.js` → H1 pattern (default weight)
- `Typography/Heading/h1-light.stories.js` → H1 pattern (light weight)
- `Typography/Display/display-lg-center.stories.js` → Large display, center-aligned
- `Typography/List/ul-body-md.stories.js` → Unordered list, body-medium size

Variants indicate:
- **Weight**: `-light` suffix for light font-weight variants
- **Alignment**: `-center` suffix for center-aligned variants
- **Size**: Built into the name (e.g., `display-sm`, `body-md`)

---

## Integration Example

Here's a quick example of how to use a typography pattern:

```html
<!-- Import Canvas foundation styles and components -->
<link rel="stylesheet" href="@sit-canvas/canvas-web-component/lib/index.css" />
<script type="module" src="@sit-canvas/canvas-web-component/lib/index.js"></script>

<!-- Use the H1 pattern template -->
<div class="sit:flex sit:flex-col sit:items-start sit:text-left" style="max-width: var(--sit-text-max-width);">
  <div class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-label-default sit:mb-xs">
    Overline Label
  </div>
  <h1 class="sit:text-heading-xl sit:font-bold sit:leading-xl sit:tracking-tight sit:text-heading-default">
    Page Heading Goes Here
  </h1>
  <p class="sit:text-body-lg sit:leading-md sit:tracking-normal sit:text-body-subtle">
    Supporting body text that provides context and detail for the page or section above.
  </p>
</div>
```

Copy the template, substitute your content, and the pattern is ready to use.

---

## Accessing Pattern Files

All patterns are stored in the repository at `stories/patterns/` and available on GitHub. Use the typography category links above to find the exact URL for any pattern:

```
```

Each category reference file contains a table with direct links to all patterns in that category.
