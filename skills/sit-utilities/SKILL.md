---
name: "sit-utilities"
description: "Complete reference for all Canvas utility classes with the sit: prefix. Use when users ask about setup, background-color, text-color, border-color, border-width, border-radius, typography, spacing, grid, dimension, opacity, color-semantics, or any sit: Tailwind utility class. Also covers Tailwind v4 imports, theme switching, and framework integration for utilities."
metadata:
  author: sit-canvas
  version: "0.0.0"
  audience: external
  category: utilities
---

# Canvas Utilities

The **Utilities API** — a set of atomic classes powered by Tailwind v4, scoped under the `sit:` prefix. Developers apply Canvas design decisions directly in markup using this syntax rather than writing custom CSS.

## Core Concept: sit: Prefix

All Canvas utility classes use the `sit:` prefix (Tailwind v4 @theme syntax):

```html
<!-- ✅ Correct -->
<div class="sit:p-4 sit:bg-primary-default sit:text-white">Content</div>

<!-- ❌ Wrong - missing prefix -->
<div class="p-4 bg-primary-default text-white">Content</div>
```

## Required Setup

### Import Utility CSS

`utility.css` is a **Tailwind source file** — it contains Tailwind v4 directives (`@theme`, `@import "tailwindcss/theme.css"`) that must be processed by Tailwind's build pipeline. It cannot be imported directly in JavaScript.

**Import it inside your project's main CSS file** (the one Tailwind processes):

```css
/* e.g. globals.css, index.css, main.css */
@import "@sit-canvas/canvas-web-component/css/utility.css";
```

Tailwind will resolve and process the nested imports at build time, generating all `sit:` utility classes.

**Without this import, utility classes will not work.**

## Optional: Theme Setup

For theme-aware utilities that adapt to light/dark mode (background colors, text colors, border colors), import the theme files in your project's CSS file:

```css
/* e.g. globals.css, index.css, main.css */
@import "@sit-canvas/canvas-web-component/themes/day.css";
@import "@sit-canvas/canvas-web-component/themes/night.css";
```

### When Theme Setup is Required

Import theme files when using:

- **Background colors**: `sit:bg-surface-default`, `sit:bg-primary-default`, etc.
- **Text colors**: `sit:text-default`, `sit:text-primary-default`, etc.
- **Border colors**: `sit:border-default`, `sit:border-primary-default`, etc.

### When Theme Setup is Optional

Theme files are NOT required for:

- **Spacing**: `sit:p-4`, `sit:m-2`, `sit:gap-6`
- **Typography sizing**: `sit:text-xl`, `sit:font-bold`
- **Border radius**: `sit:rounded-lg`
- **Opacity**: `sit:opacity-50`
- **Layout**: `sit:flex`, `sit:grid`

## Theme Switching

To toggle between light and dark themes programmatically:

```html
<button id="theme-toggle">Toggle Theme</button>

<script>
  const toggleButton = document.getElementById("theme-toggle");
  toggleButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("sit-theme-night");
  });
</script>
```

Classes with theme-aware tokens automatically update when the theme changes.

## Verification

Test that setup is complete:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- processed by your Tailwind build -->
  </head>
  <body class="sit:bg-default sit:p-6">
    <div class="sit:bg-surface-raised sit:p-4 sit:rounded-lg">
      <h1 class="sit:text-heading-default sit:text-2-xl sit:font-bold sit:mb-4">Setup Test</h1>
      <p class="sit:text-body-default sit:mb-4">If this text is styled correctly, your setup is complete.</p>
      <button
        class="sit:bg-primary-default sit:text-white sit:px-4 sit:py-2 sit:rounded"
        onclick="document.documentElement.classList.toggle('sit-theme-night')"
      >
        Toggle Theme
      </button>
    </div>
  </body>
</html>
```

## Framework-Specific Setup

Since Canvas utilities are built on Tailwind v4, you must first set up Tailwind CSS for your framework before importing the Canvas CSS files.

**Step 1**: Follow the Tailwind CSS guide for your framework:

| Framework      | Guide                                                                   |
| -------------- | ----------------------------------------------------------------------- |
| Next.js        | https://tailwindcss.com/docs/installation/framework-guides/nextjs       |
| Nuxt (Vue)     | https://tailwindcss.com/docs/installation/framework-guides/nuxt         |
| Angular        | https://tailwindcss.com/docs/installation/framework-guides/angular      |
| SvelteKit      | https://tailwindcss.com/docs/installation/framework-guides/sveltekit    |
| Astro          | https://tailwindcss.com/docs/installation/framework-guides/astro        |
| Gatsby         | https://tailwindcss.com/docs/installation/framework-guides/gatsby       |
| React Router   | https://tailwindcss.com/docs/installation/framework-guides/react-router |
| Vite (generic) | https://tailwindcss.com/docs/installation/using-vite                    |

Not listed? See the full list at https://tailwindcss.com/docs/installation/framework-guides.

**Step 2**: After Tailwind is set up, add the Canvas `@import` to the same CSS file that Tailwind processes (usually `globals.css`, `main.css`, or `index.css`):

```css
@import "@sit-canvas/canvas-web-component/css/utility.css";

/* Optional: theme-aware color tokens */
@import "@sit-canvas/canvas-web-component/themes/day.css";
@import "@sit-canvas/canvas-web-component/themes/night.css";
```

---

## Available Utilities

| Category       | Utility                                                                          | Theme files required | Reference                                                          |
| -------------- | -------------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------ |
| **Layout**     | Grid system (`.sit-container`, `.sit-grid`, `.sit-col-*`)                     | No                   | [→ reference/grid.md](reference/grid.md)                           |
| **Layout**     | Container dimensions (`sit:w-container`, `sit:max-w-container-*`)              | No                   | [→ reference/dimension.md](reference/dimension.md)                 |
| **Spacing**    | Margin, padding, gap (`sit:p-*`, `sit:m-*`, `sit:gap-*`, semantic tokens)     | No                   | [→ reference/spacing.md](reference/spacing.md)                     |
| **Color**      | Color token suffix semantics (default, emphasis, muted, fixed, etc.)             | —                    | [→ reference/color-semantics.md](reference/color-semantics.md)     |
| **Color**      | Background colors (`sit:bg-*`)                                                  | Yes                  | [→ reference/background-color.md](reference/background-color.md)   |
| **Color**      | Text colors (`sit:text-*`)                                                      | Yes                  | [→ reference/text-color.md](reference/text-color.md)               |
| **Color**      | Border colors (`sit:border-*` color)                                            | Yes                  | [→ reference/border-color.md](reference/border-color.md)           |
| **Border**     | Border width and sides (`sit:border`, `sit:border-2`, `sit:border-l-4`, etc.) | No                   | [→ reference/border-width.md](reference/border-width.md)           |
| **Border**     | Border radius (`sit:rounded-*`, `sit:rounded-form-*`)                          | No                   | [→ reference/border-radius.md](reference/border-radius.md)         |
| **Typography** | Font size, weight, line height, letter spacing, font family                      | No                   | [→ reference/typography.md](reference/typography.md)               |
| **Visual**     | Opacity (`sit:opacity-*`)                                                       | No                   | [→ reference/opacity.md](reference/opacity.md)                     |
| **Visual**     | Elevation / box shadows (`sit:shadow-*`, `sit:shadow-edge-*`)                  | No                   | [→ reference/elevation.md](reference/elevation.md)                 |
| **Responsive** | Breakpoint prefixes (`sit:xs:`, `sit:sm:`, `sit:md:`, `sit:lg:`, `sit:xl:`, `sit:2-xl:`) | No                   | [→ reference/breakpoint.md](reference/breakpoint.md)               |
| **Patterns**   | Cross-category component patterns (card, alert, form, modal)                     | —                    | [→ reference/overview-patterns.md](reference/overview-patterns.md) |

---

## Quick Reference by Use Case

**Page layout, columns, responsive grid** → [reference/grid.md](reference/grid.md)
**Container width, max-width** → [reference/dimension.md](reference/dimension.md)
**Spacing between sections, components, text** → [reference/spacing.md](reference/spacing.md)
**Color token suffixes (default, emphasis, muted, etc.)** → [reference/color-semantics.md](reference/color-semantics.md)
**Card backgrounds, surface colors** → [reference/background-color.md](reference/background-color.md)
**Text content colors** → [reference/text-color.md](reference/text-color.md)
**Borders and rounded corners** → [reference/border-color.md](reference/border-color.md), [reference/border-width.md](reference/border-width.md), [reference/border-radius.md](reference/border-radius.md)
**Headings, body text, font sizes** → [reference/typography.md](reference/typography.md)
**Transparent overlays, disabled states** → [reference/opacity.md](reference/opacity.md)
**Card shadows, modal depth, sticky header/footer edges** → [reference/elevation.md](reference/elevation.md)
**Responsive breakpoints, show/hide at viewport sizes** → [reference/breakpoint.md](reference/breakpoint.md)

---

**For AI Agents**:

1. Always verify users have completed setup (utility CSS import) before suggesting utility classes.
2. Theme files (`day.css`, `night.css`) are only needed for color utilities (background, text, border colors) — not for spacing, typography, border radius, or opacity.
3. When users ask about a specific utility category, read the corresponding reference file before generating output.
4. The grid system (`.sit-container`, `.sit-grid`, `.sit-col-*`) is always preferred over generic Tailwind `sit:grid-cols-*` — see `reference/grid.md`.
5. Prefer semantic spacing utilities (`sit:gap-layout-*`, `sit:p-component-*`) over raw numeric utilities (`sit:p-4`, `sit:gap-6`) — they are responsive and encode design intent.
6. Prefer semantic font-size utilities (`sit:text-display-*`, `sit:text-heading-*`, `sit:text-body-*`) over raw scale utilities — they are responsive.
7. Color suffix modifiers (`default`, `emphasis`, `muted`, `surface`, `fixed-light`, `fixed-dark`, `inverse`) are shared across all color utilities — see `reference/color-semantics.md`.
8. **Never use inline `style` attributes.** If a layout or visual property is needed, find the equivalent `sit:` utility class. If no utility class exists for the exact value, prefer the closest semantic utility. Only resort to a CSS custom property override as a last option, and never via a `style` attribute.
9. **Never use raw `sit:max-w-*` utilities for container sizing.** Raw classes like `sit:max-w-2xl`, `sit:max-w-lg`, `sit:max-w-sm` map to small Tailwind numeric values and are not part of the Canvas design system. Use `sit:max-w-container-*` (md/lg/xl/2-xl/3-xl) for inner containers, or `sit:w-container` for the top-level page wrapper. See `reference/dimension.md`.
