# Canvas Dimension Utilities

Helps developers constrain content area widths using Canvas container dimension tokens.

## Quick Decision Guide

| Situation | Use |
|-----------|-----|
| First-level content wrapper on a page or route | `sit:w-container` |
| Inner section, card body, modal content, or any nested container | `sit:max-w-container-*` |

---

## `sit:w-container` — Responsive container

It is a responsive width token — the max-width value changes automatically across breakpoints.

| Breakpoint | Width |
|------------|-------|
| Mobile (default) | 360px |
| ≥ 1024px (lg) | 888px |
| ≥ 1440px (2xl) | 1312px |

```html
<!-- Correct: top-level page content container -->
<div class="sit:w-container sit:mx-auto sit:py-2-xl">
  <!-- page content -->
</div>
```

Always pair with `sit:mx-auto` to centre the container horizontally.

---

## `sit:max-w-container-*` — Static max-width for nested containers

| Class | CSS Variable | Value |
|-------|-------------|-------|
| `sit:max-w-container-md` | `--sit-container-max-width-md` | 768px |
| `sit:max-w-container-lg` | `--sit-container-max-width-lg` | 888px |
| `sit:max-w-container-xl` | `--sit-container-max-width-xl` | 1168px |
| `sit:max-w-container-2-xl` | `--sit-container-max-width-2-xl` | 1312px |
| `sit:max-w-container-3-xl` | `--sit-container-max-width-3-xl` | 1440px |

**Default: use `sit:max-w-container-md`** unless the design explicitly calls for a wider inner area.

```html
<!-- Correct: nested container inside a page section -->
<section class="sit:py-2-xl">
  <div class="sit:max-w-container-md sit:mx-auto">
    <!-- section content -->
  </div>
</section>
```

---

## Common Patterns

### Page layout with responsive top-level container
```html
<div class="sit:w-container sit:mx-auto sit:py-2-xl">
  <h1>Page title</h1>
  <p>Page content</p>
</div>
```

### Narrow form or dialog panel inside a wider layout
```html
<div class="sit:w-container sit:mx-auto sit:py-2-xl">
  <div class="sit:max-w-container-md sit:mx-auto">
    <form>...</form>
  </div>
</div>
```

### Login / sign-in page (narrow centred card)
```html
<div class="sit:w-container sit:mx-auto sit:py-2-xl sit:flex sit:justify-center">
  <div class="sit:max-w-container-md sit:w-full">
    <!-- login card -->
  </div>
</div>
```

---

## Rules

1. **`sit:max-w-container-*` default is `md` (768px)** unless the design calls for a wider inner area.
2. Pair both with `sit:mx-auto` if needed to centre them.
3. Do not apply both on the same element.
4. **Never use raw `sit:max-w-*` utilities** (`sit:max-w-sm`, `sit:max-w-lg`, `sit:max-w-2xl`, etc.) for container sizing. These map to small Tailwind numeric values (e.g. `max-w-2xl` = 672px) that are not part of the Canvas design system and will produce undersized containers.
