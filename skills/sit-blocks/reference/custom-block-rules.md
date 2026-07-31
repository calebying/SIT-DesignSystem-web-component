# Custom Block Rules

This file defines the guardrails for building custom UI blocks with Canvas. Users have full creative freedom over layout, composition, and visual hierarchy — these rules define the *implementation layer* that must stay consistent.

---

## The five non-negotiables

### 1. Use Canvas web components

When a Canvas component exists for a UI pattern, use it. Do not hand-roll equivalents.

| Pattern | Use this | Not this |
|---|---|---|
| Status label / chip | `<sit-badge variant="success">` | `<span class="...">` |
| Dismissible notification | `<sit-alert>` | `<div role="alert">` |
| Separator line | `<sit-divider>` | `<hr>` |
| Navigation link | `<sit-link>` | `<a class="...">` |
| Accessible button | `<sit-button>` | `<button class="...">` |
| Icon | `<sit-icon name="...">` | inline SVG or FontAwesome |
| Checkbox | `<sit-checkbox>` | `<input type="checkbox">` |

For the full list of available components, see the [component index in the sit-components skill](../../sit-components/SKILL.md#available-components).

Plain HTML elements (`<div>`, `<section>`, `<article>`, `<p>`, `<h1>`–`<h6>`, `<ul>`, `<img>`) are fine for layout and semantic structure where no Canvas component applies.

### 2. Style exclusively with `sit:` Tailwind utilities

All colours, spacing, sizing, and layout must use the `sit:` prefixed utilities. Do not write:
- Inline `style=""` attributes for values that tokens cover (colour, spacing, font size)
- Raw Tailwind classes without the `sit:` prefix
- Custom CSS that duplicates token values

```html
<!-- Correct -->
<div class="sit:flex sit:gap-xl sit:bg-surface-default sit:p-layout-sm">

<!-- Wrong — raw Tailwind, no sit: prefix -->
<div class="flex gap-6 bg-white p-8">

<!-- Wrong — inline style for token-covered values -->
<div style="display:flex; gap:24px; background:#ffffff; padding:32px;">
```

Inline `style=""` is acceptable only for values the token system genuinely doesn't cover, such as a specific `width` or `aspect-ratio` that has no token equivalent.

### 3. Use semantic typography role tokens

Typography must use semantic role tokens, not raw scale tokens.

**Correct tokens:**

| Role | Classes |
|---|---|
| Page/section heading | `sit:text-heading-md sit:font-semibold sit:leading-md sit:tracking-tight` on `<h3>` |
| Sub-heading | `sit:text-heading-sm sit:font-semibold sit:leading-sm sit:tracking-tight` on `<h4>` |
| Card/item title | `sit:text-subtitle-md sit:font-semibold sit:leading-xs sit:tracking-normal` on `<h5>` |
| Body copy | `sit:text-body-md sit:font-regular sit:leading-xs sit:tracking-normal` on `<p>` |
| Secondary / caption | `sit:text-body-sm sit:font-regular sit:leading-xs sit:tracking-normal` on `<p>` |
| Overline / label above heading | `sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase` on `<div>` |
| UI label / button text | `sit:text-label-md sit:font-semibold sit:leading-2-xs sit:tracking-normal` |

**Wrong — do not use:**
```html
<!-- Raw scale tokens are not in the public API -->
<p class="sit:text-base">...</p>
<p class="sit:text-sm">...</p>
<h2 class="sit:text-2xl">...</h2>
```

See **[sit-utilities typography](../../sit-utilities/reference/typography.md)** for the complete typography reference.

### 4. Use semantic colour tokens

Always use semantic colour utilities, not primitive colour aliases.

```html
<!-- Correct — semantic tokens adapt to theme changes -->
<p class="sit:text-body-default">...</p>
<p class="sit:text-body-subtle">...</p>
<h2 class="sit:text-heading-default">...</h2>
<div class="sit:bg-surface-default">...</div>
<div class="sit:bg-surface-raised">...</div>
<span class="sit:text-primary-default">...</span>
```

See **[sit-utilities text-color](../../sit-utilities/reference/text-color.md)** and **[sit-utilities background-color](../../sit-utilities/reference/background-color.md)**.

### 5. Icons via `<sit-icon>` only

```html
<!-- Correct -->
<sit-icon name="arrow-right" size="sm"></sit-icon>
<sit-icon name="chevron-up" size="md"></sit-icon>

<!-- Wrong -->
<svg>...</svg>
<i class="bi bi-arrow-right"></i>
<span class="material-icons">arrow_forward</span>
```

The `size` attribute accepts `xs`, `sm`, `md`, `lg`, `xl`. For icon names, reference the Canvas icon registry or the `<sit-icon>` component skill.

---

## Using external design references

You're encouraged to draw inspiration from external block libraries:

- [shadcnblocks.com](https://www.shadcnblocks.com/blocks/about)
- [Tailwind UI](https://tailwindui.com)
- [HyperUI](https://www.hyperui.dev)
- Figma Community, Dribbble, etc.

**The process:**

1. Find a layout or composition you like
2. Re-implement the *structure* (flexbox/grid, spacing, hierarchy) using `sit:` utilities
3. Replace any UI elements (badges, buttons, links, icons) with their `<sit-*>` equivalents
4. Apply Canvas semantic colour and typography tokens — do not copy hex values or font sizes from the source

Do not copy-paste the source site's HTML or CSS directly. The only things that transfer are design decisions (layout, visual hierarchy, spacing proportions).

---

## Block checklist

Before considering a custom block complete, verify:

- [ ] No inline styles for colours, font sizes, spacing that tokens cover
- [ ] No raw Tailwind classes (without `sit:` prefix) for design-system-owned properties
- [ ] No raw scale typography tokens (`sit:text-base`, `sit:text-sm`, `sit:text-2xl`)
- [ ] No hand-rolled HTML where a Canvas component exists
- [ ] No inline SVG or third-party icon library — icons use `<sit-icon>`
- [ ] Block has no page chrome (`<sit-masthead>`, `<sit-mainnav>`, `<sit-footer>`)
- [ ] Semantic HTML elements used for structure (`<article>`, `<section>`, `<h2>`–`<h6>`, `<p>`, `<ul>`)
