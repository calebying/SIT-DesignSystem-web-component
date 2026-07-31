# Base Text Colors Reference

Semantic base tokens provide a content hierarchy that adapts automatically to light/dark themes. Use these for general-purpose text when a specific role (heading, link, label) does not apply.

## Theme-Aware Tokens

### `sit:text-default`
Primary text. Use for main body content and anything that needs to be clearly readable.

```html
<p class="sit:text-default">
  Primary paragraph text that adapts to the active theme.
</p>
```

### `sit:text-subtle`
Secondary/de-emphasised text. Use for captions, helper text, descriptions.

```html
<p class="sit:text-subtle sit:text-sm">
  Last updated 3 hours ago
</p>
```

### `sit:text-muted`
Tertiary/low-contrast text. Use for metadata, timestamps, placeholders, and decorative labels.

```html
<span class="sit:text-muted sit:text-xs">
  Optional
</span>
```

### `sit:text-inverse`
For text displayed on inverted (dark) surfaces rendered by `sit:bg-surface-inverse`.

```html
<div class="sit:bg-surface-inverse sit:p-4 sit:rounded">
  <p class="sit:text-inverse">
    Text on an inverted background.
  </p>
</div>
```

## Fixed Tokens

Fixed tokens do not change with the theme — use them when the background color is also fixed.

### `sit:text-fixed-light`
Always renders as a light color. Use on fixed dark backgrounds (e.g., a brand-colored hero section).

```html
<section class="sit:bg-primary-default sit:py-12 sit:px-6">
  <h1 class="sit:text-fixed-light sit:text-4-xl sit:font-bold">
    Welcome to Canvas
  </h1>
  <p class="sit:text-fixed-light sit:text-xl">
    Build better government digital services.
  </p>
</section>
```

### `sit:text-fixed-dark`
Always renders as a dark color. Use on fixed light backgrounds (e.g., a white card or light image overlay).

```html
<div class="sit:bg-fixed-light sit:p-6">
  <p class="sit:text-fixed-dark">
    Always dark text regardless of active theme.
  </p>
</div>
```

## When to Use Fixed vs Theme-Aware

| Scenario | Token |
|---|---|
| Normal body text on page background | `sit:text-default` |
| Background is `sit:bg-surface-inverse` | `sit:text-inverse` |
| Background is a colored brand fill (`sit:bg-primary-default`) | `sit:text-fixed-light` |
| Background is always white (images, light cards) | `sit:text-fixed-dark` |
| You need it to work in both themes | Avoid `fixed` — use `default` / `subtle` / `muted` |

## Content Hierarchy Pattern

```html
<article class="sit:p-6">
  <h2 class="sit:text-heading-default sit:text-2-xl sit:font-bold sit:mb-2">
    Article Title
  </h2>
  <p class="sit:text-muted sit:text-sm sit:mb-4">
    Published on 1 January 2024
  </p>
  <p class="sit:text-default sit:mb-4">
    Main article body copy rendered in the primary text color.
  </p>
  <p class="sit:text-subtle sit:text-sm">
    Supporting note or footnote content.
  </p>
</article>
```

## Theme Switching

Text colors using theme-aware tokens update automatically:

```html
<button id="theme-toggle">Toggle Theme</button>

<script>
  document.getElementById('theme-toggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('sit-theme-night');
  });
</script>
```

## Best Practices

- Prefer semantic base tokens over hardcoded hex values.
- Use `fixed` variants only when the background is also fixed and guaranteed.
- Do not mix `fixed-light` text with a theme-aware background — contrast is not guaranteed.
- Avoid `sit:text-muted` for important content; it is intentionally low-contrast.

## See Also

- **[semantic.md](semantic.md)** — Semantic text colors (primary, accent, success, danger, warning, purple, cyan, neutral)
- **[typography-roles.md](typography-roles.md)** — Role-based text tokens (heading, body, label, link)
- **[color-semantics](../color-semantics.md)** — Modifier definitions
