---
name: "sit-theming"
description: "Customising the visual theme of a Canvas application — product brand colours, day/night mode, and font. Use when users ask about changing the primary colour, theming their app, enabling dark mode, night mode, overriding CSS tokens, or customising the font. Apply this skill whenever theming, branding, or CSS token overrides are mentioned."
metadata:
  author: sit-canvas
  version: "0.0.0"
  audience: external
  category: theming
---

# Canvas Theming Skill

How to customise the product theme — brand colours, day/night mode, and font — using Canvas CSS token overrides.

---

## Prerequisites

Import `themes/day.css` before your custom CSS. See **[sit-getting-started](../sit-getting-started/SKILL.md)** for the full import order.

---

## Quick Decision Guide

| What you want to change | Token / mechanism |
|-------------------------|-------------------|
| Product brand colour (custom) | Override `--sit-product-primary-{100–900}` |
| Product brand colour (pre-approved alternate) | Import one `themes/alt/<colour>.css` + map to `--sit-product-primary-*` |
| Enable dark/night mode | Import `themes/night.css` + add `.sit-night-theme` to `<html>` |
| Font typeface | Override `--sit-font-family-brand` |

---

## Changing the Product Brand Colour

The default product colour is SIT red (`--sit-product-primary-*`). Override the full 100–900 scale with your brand colour to retheme all primary UI elements at once.

Create a custom CSS file and override the primitive tokens in `:root`:

```css
/* yourCustomCss.css */
:root {
  --sit-product-primary-100: #F5B6DA;
  --sit-product-primary-200: #F186C0;
  --sit-product-primary-300: #EE4FA6;
  --sit-product-primary-400: #EE0290;
  --sit-product-primary-500: #EF0078;
  --sit-product-primary-600: #DD0074;
  --sit-product-primary-700: #C6006E;
  --sit-product-primary-800: #B0006A;
  --sit-product-primary-900: #880061;
}
```

Import your custom CSS **after** the Canvas theme file so the overrides take effect:

```js
import "@sit-canvas/canvas-web-component/themes/day.css";
import "./yourCustomCss.css";
```

```css
@import "@sit-canvas/canvas-web-component/themes/day.css";
@import "./yourCustomCss.css";
```

The semantic tokens (`--sit-primary-*`) reference the primitive scale, so changing the primitive values automatically flows through to all components that use the primary colour.

---

## Alternate Brand Colours

Canvas products should use one of the pre-approved alternate colour palettes in `themes/alt/` rather than defining custom hex values. Each product picks **exactly one** colour — mixing multiple alternate palettes is not allowed.

### Available colours

| File | Colour |
|------|--------|
| `themes/alt/blue.css` | Blue |
| `themes/alt/cyan.css` | Cyan |
| `themes/alt/magenta.css` | Magenta |
| `themes/alt/pink.css` | Pink |
| `themes/alt/purple.css` | Purple |
| `themes/alt/red.css` | Red |

### How to apply

Each alternate file defines `--alt-color-100` through `--alt-color-900` in `:root`. Map those onto the Canvas product primary scale in your custom CSS file:

```css
/* yourCustomCss.css */
:root {
  --sit-product-primary-100: var(--alt-color-100);
  --sit-product-primary-200: var(--alt-color-200);
  --sit-product-primary-300: var(--alt-color-300);
  --sit-product-primary-400: var(--alt-color-400);
  --sit-product-primary-500: var(--alt-color-500);
  --sit-product-primary-600: var(--alt-color-600);
  --sit-product-primary-700: var(--alt-color-700);
  --sit-product-primary-800: var(--alt-color-800);
  --sit-product-primary-900: var(--alt-color-900);
}
```

Import order — the alternate file must come before your custom CSS so the `--alt-color-*` variables are defined when the mapping runs:

```js
import "@sit-canvas/canvas-web-component/themes/day.css";
import "@sit-canvas/canvas-web-component/themes/alt/blue.css"; // pick one colour only
import "./yourCustomCss.css";
```

```css
@import "@sit-canvas/canvas-web-component/themes/day.css";
@import "@sit-canvas/canvas-web-component/themes/alt/blue.css"; /* pick one colour only */
@import "./yourCustomCss.css";
```

The same flow-through behaviour applies: changing `--sit-product-primary-*` automatically updates all components that use the primary colour.

---

## Day Mode (Default)

Day mode is the default. Importing `themes/day.css` is all that is needed — no extra configuration required.

```css
@import "@sit-canvas/canvas-web-component/themes/day.css";
```

---

## Night Mode (Optional)

Night mode is opt-in. It is applied by adding the class `sit-night-theme` to the `<html>` element, which activates the `:root.sit-night-theme` selector defined in `themes/night.css`.

### Setup

Import both theme files:

```js
import "@sit-canvas/canvas-web-component/themes/day.css";
import "@sit-canvas/canvas-web-component/themes/night.css";
```

```css
@import "@sit-canvas/canvas-web-component/themes/day.css";
@import "@sit-canvas/canvas-web-component/themes/night.css";
```

### Activating night mode

Add the class to the `<html>` element to switch all tokens to their dark equivalents:

```html
<html class="sit-night-theme">
```

Toggle it at runtime via JavaScript:

```js
document.documentElement.classList.toggle("sit-night-theme");
```

### How it works

`themes/night.css` redefines the same semantic tokens as `themes/day.css` but scoped to `:root.sit-night-theme`. All Canvas components read from the same semantic tokens, so toggling the class switches the entire UI without changing any component markup.

---

## Changing the Font

Canvas uses **Inter** by default via `--sit-font-family-brand`. Override this token to use a different typeface:

```css
:root {
  --sit-font-family-brand: "Your Font", system-ui, sans-serif;
}
```

You are responsible for loading the font assets — either via a `<link>` tag or `@font-face`. Canvas does not load custom fonts automatically. See **[sit-getting-started](../sit-getting-started/SKILL.md)** for the optimised Inter Google Fonts URL if you are keeping the default font.

---

## For AI Agents

1. Always tell users to import their custom CSS **after** `themes/day.css` — otherwise the override will be overwritten.
2. Brand colour overrides target **primitive** tokens (`--sit-product-primary-{100–900}`), not semantic tokens. Changing the primitives is the correct approach; do not override individual semantic tokens directly.
3. Night mode requires **both** the `themes/night.css` import **and** the `sit-night-theme` class on `<html>`. Either alone is not enough.
4. Night mode is **optional** — only add `themes/night.css` when the user explicitly needs dark mode support.
5. Day mode is always active by default; there is no `sit-day-theme` class to add.
6. When overriding `--sit-font-family-brand`, remind the user to also load the font file themselves.
7. Custom overrides apply to both day and night mode simultaneously because they target `:root`, which both theme selectors inherit from.
8. Products opting into a pre-approved alternate palette must use a colour from `themes/alt/` — not custom hex values. If a user asks about alternate brand colours, guide them to pick one alternate colour and apply the `--alt-color-*` → `--sit-product-primary-*` mapping pattern. Never let them import more than one alternate colour file.
9. The alternate colour file must be imported **after** `themes/day.css` and **before** the custom mapping CSS so that `--alt-color-*` variables are defined in time.
