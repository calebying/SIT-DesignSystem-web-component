# Canvas Spacing Utilities Skill

Helps developers use Canvas spacing utilities (margin, padding, gap) based on the 4px scale system.

## Core Concept

**Base Unit**: Every spacing value = **multiplier × 4px**

All Canvas spacing utilities use the `sit:` prefix (Tailwind v4 @theme syntax).

**Always prefer semantic spacing utilities over raw numeric utilities.** Canvas provides purpose-named spacing tokens defined in `responsive.css` — they adapt across breakpoints and encode design intent. Only fall back to raw numeric utilities (`sit:p-4`, `sit:gap-6`, `sit:mb-3`, etc.) when no semantic token fits.

## Semantic Spacing Utilities (Always Prefer These)

All semantic tokens are **responsive** — their values change at mobile, tablet (≥1024px), and desktop (≥1440px) breakpoints.

### Text Gap — spacing between text/content elements

Use for gaps between paragraphs, headings, and inline text groups.

| Class | Token | Mobile / Tablet / Desktop |
|-------|--------|--------------------------|
| `sit:gap-text-2-xs` | `--sit-text-gap-2-xs` | 4px / 4px / 4px |
| `sit:gap-text-xs` | `--sit-text-gap-xs` | 8px / 8px / 8px |
| `sit:gap-text-sm` | `--sit-text-gap-sm` | 8px / 12px / 12px |
| `sit:gap-text-md` | `--sit-text-gap-md` | 12px / 16px / 16px |
| `sit:gap-text-lg` | `--sit-text-gap-lg` | 16px / 20px / 20px |
| `sit:gap-text-xl` | `--sit-text-gap-xl` | 20px / 24px / 24px |
| `sit:gap-text-2-xl` | `--sit-text-gap-2-xl` | 24px / 32px / 32px |

### Layout Gap — spacing between layout sections

Use for gaps between page sections, grid columns, and layout areas.

| Class | Token | Mobile / Tablet / Desktop |
|-------|-------|--------------------------|
| `sit:gap-layout-2-xs` | `--sit-layout-gap-2-xs` | 4px / 12px / 16px |
| `sit:gap-layout-xs` | `--sit-layout-gap-xs` | 8px / 16px / 20px |
| `sit:gap-layout-sm` | `--sit-layout-gap-sm` | 12px / 20px / 24px |
| `sit:gap-layout-md` | `--sit-layout-gap-md` | 16px / 24px / 32px |
| `sit:gap-layout-lg` | `--sit-layout-gap-lg` | 20px / 32px / 48px |
| `sit:gap-layout-xl` | `--sit-layout-gap-xl` | 24px / 48px / 64px |

### Layout Padding — padding for layout/page areas

Use for section padding, page padding, and container insets. Supports `sit:p-layout-*`, `sit:px-layout-*`, and `sit:py-layout-*`.

| Class | Token | Mobile / Tablet / Desktop |
|-------|-------|--------------------------|
| `sit:p-layout-xs` | `--sit-layout-padding-xs` | 16px / 20px / 24px |
| `sit:p-layout-sm` | `--sit-layout-padding-sm` | 20px / 24px / 32px |
| `sit:p-layout-md` | `--sit-layout-padding-md` | 24px / 32px / 48px |
| `sit:p-layout-lg` | `--sit-layout-padding-lg` | 32px / 48px / 64px |
| `sit:p-layout-xl` | `--sit-layout-padding-xl` | 48px / 64px / 96px |

### Component Gap — spacing inside custom components

Use for gaps between internal elements when building a custom component.

| Class | Token | Mobile / Tablet / Desktop |
|-------|-------|--------------------------|
| `sit:gap-component-xs` | `--sit-component-gap-xs` | 8px / 16px / 20px |
| `sit:gap-component-sm` | `--sit-component-gap-sm` | 12px / 20px / 24px |
| `sit:gap-component-md` | `--sit-component-gap-md` | 16px / 24px / 32px |
| `sit:gap-component-lg` | `--sit-component-gap-lg` | 20px / 32px / 48px |
| `sit:gap-component-xl` | `--sit-component-gap-xl` | 24px / 48px / 64px |

### Component Padding — padding inside custom components

Use for internal padding when building a custom component. Supports `sit:p-component-*`, `sit:px-component-*`, and `sit:py-component-*`.

| Class | Token | Mobile / Tablet / Desktop |
|-------|-------|--------------------------|
| `sit:p-component-xs` | `--sit-component-padding-xs` | 16px / 20px / 24px |
| `sit:p-component-sm` | `--sit-component-padding-sm` | 20px / 24px / 32px |
| `sit:p-component-md` | `--sit-component-padding-md` | 24px / 32px / 48px |
| `sit:p-component-lg` | `--sit-component-padding-lg` | 32px / 48px / 64px |
| `sit:p-component-xl` | `--sit-component-padding-xl` | 48px / 64px / 96px |

### Container Width

Use `sit:w-container` for the standard responsive container width. It maps to `--sit-container-width` which changes from 360px (mobile) → 888px (tablet) → 1312px (desktop).

```html
<div class="sit:mx-auto sit:w-container">
  <!-- responsive-width page container -->
</div>
```

### List Spacing — vertical spacing between list items

Use for `margin-top` / `margin-bottom` on `<li>` elements. These are **static** (non-responsive).

| Class | Token | Value |
|-------|-------|-------|
| `sit:my-list-sm` | `--sit-list-spacing-sm` | 8px (0.5rem) |
| `sit:my-list-md` | `--sit-list-spacing-md` | 12px (0.75rem) |
| `sit:my-list-lg` | `--sit-list-spacing-lg` | 16px (1rem) |

Also available as `sit:mt-list-*` and `sit:mb-list-*` for one-sided margin. Use `sit:mt-list-*` on the last `<li>` to avoid extra bottom whitespace.

---

## Raw Numeric Utilities (Fallback Only)

Only use raw multiplier-based utilities when no semantic token above fits the use case. Base unit: **n × 4px**.

- `sit:p-{n}` / `sit:px-{n}` / `sit:py-{n}` / `sit:pt/pr/pb/pl-{n}` — padding
- `sit:m-{n}` / `sit:mx-{n}` / `sit:my-{n}` / `sit:mt/mr/mb/ml-{n}` — margin
- `sit:mx-auto` — horizontal centering
- `sit:gap-{n}` / `sit:gap-x-{n}` / `sit:gap-y-{n}` — flex/grid gap
- Negative: `sit:-mt-{n}`, `sit:-ml-{n}`, etc.

## Common Use Cases

### Page Layout (layout gap + layout padding + container width)

```html
<!-- Responsive container with layout-appropriate padding -->
<div class="sit:mx-auto sit:w-container sit:px-layout-md">
  <!-- Sections separated by layout gap -->
  <div class="sit:flex sit:flex-col sit:gap-layout-sm">
    <section>
      <h2>Section Title</h2>
      <!-- Text elements separated by text gap -->
      <div class="sit:flex sit:flex-col sit:gap-text-md">
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </div>
    </section>
    <section>
      <h2>Another Section</h2>
    </section>
  </div>
</div>
```

### Custom Card Component (component gap + component padding)

```html
<div class="sit:bg-surface-raised sit:p-component-xs sit:rounded-md">
  <div class="sit:flex sit:flex-col sit:gap-component-sm">
    <h3>Card Title</h3>
    <p>Card description text</p>
    <button class="sit:p-component-xs">Action</button>
  </div>
</div>
```

### Custom Form Component (component gap + component padding)

```html
<form class="sit:flex sit:flex-col sit:gap-component-sm">
  <div class="sit:flex sit:flex-col sit:gap-text-xs">
    <label>Name</label>
    <input class="sit:p-component-xs">
  </div>
  <div class="sit:flex sit:flex-col sit:gap-text-xs">
    <label>Email</label>
    <input class="sit:p-component-xs">
  </div>
  <button class="sit:px-component-sm sit:py-component-xs">Submit</button>
</form>
```

### Grid Layout (layout gap)

```html
<div class="sit:grid sit:grid-cols-3 sit:gap-layout-sm sit:p-layout-md">
  <div class="sit:p-component-xs">Item 1</div>
  <div class="sit:p-component-xs">Item 2</div>
  <div class="sit:p-component-xs">Item 3</div>
</div>
```

### Text Content Block (text gap)

```html
<article class="sit:flex sit:flex-col sit:gap-text-lg">
  <h1>Article Title</h1>
  <p class="sit:flex sit:flex-col sit:gap-text-sm">Lead paragraph</p>
  <p>Body paragraph 1</p>
  <p>Body paragraph 2</p>
</article>
```

---

## Spacing Defaults

When building any UI — pages, sections, or custom components — always apply whitespace between blocks, sections, and elements. Never render content without spacing.

| Context | Default class |
|---|---|
| Gap between page sections / layout areas | `sit:gap-layout-md` |
| Padding on page / section containers | `sit:p-layout-md` |
| Gap inside a custom component | `sit:gap-component-sm` |
| Padding inside a custom component | `sit:p-component-xs` |
| Gap between text / content elements | `sit:gap-text-md` |

Scale up (`-lg`, `-xl`) for more breathing room, scale down (`-sm`, `-xs`) for denser UIs. **Never omit spacing entirely.**

---

**For AI Agents**: Always prefer semantic spacing utilities over raw numeric ones. **Always add whitespace between sections and elements — never render blocks without spacing.** **Default tokens to reach for first**: component padding → `sit:p-component-xs` (`--sit-component-padding-xs`); component gap → `sit:gap-component-sm` (`--sit-component-gap-sm`); layout gap → `sit:gap-layout-md` (`--sit-layout-gap-md`); layout padding → `sit:p-layout-md` (`--sit-layout-padding-md`). Scale up or down from these defaults only when the design explicitly requires it. Decision guide: text between text elements → `sit:gap-text-*`; spacing between layout sections or grid areas → `sit:gap-layout-*` (default `md`); padding on page/section areas → `sit:p-layout-*` / `sit:px-layout-*` / `sit:py-layout-*`; building a custom component (gap inside) → `sit:gap-component-*` (default `sm`); building a custom component (padding inside) → `sit:p-component-*` / `sit:px-component-*` / `sit:py-component-*` (default `xs`); responsive container width → `sit:w-container`. Only use raw numeric utilities (`sit:p-4`, `sit:gap-6`, `sit:mb-3`, etc.) when no semantic token fits the context. All semantic tokens are responsive — they adapt across mobile, tablet, and desktop breakpoints.
