# Background Color — Semantic Colors Reference

Semantic background color tokens carry meaning (brand, state, feedback). Use them when color communicates a specific intent, not just structure.

Each semantic color has two scopes — **page level** (sections, full-width areas) and **component level** (cards, badges, panels). See **[`color-semantics`](../color-semantics.md)** for modifier definitions.

## Token Pattern

```
sit:bg-{variant}-{modifier}           ← page level
sit:bg-{variant}-surface-{modifier}   ← component level
```

**Variants:** `primary`, `accent`, `success`, `danger`, `warning`, `purple`, `cyan`, `neutral`

**Page modifiers:** `default`, `muted`, `translucent` (primary only)

**Component modifiers:** `surface-default`, `surface-emphasis`, `surface-muted`, `surface-translucent` (primary and danger only)

> **Note**: `neutral` has no page-level tokens — component level only.

## Quick Reference

| Variant | Meaning | Page tokens | Component tokens |
|---------|---------|-------------|-----------------|
| `primary` | Brand color | `bg-primary-default/muted/translucent` | `bg-primary-surface-default/emphasis/muted/translucent` |
| `accent` | Informational, no urgency | `bg-accent-default/muted` | `bg-accent-surface-default/emphasis/muted` |
| `success` | Positive feedback | `bg-success-default/muted` | `bg-success-surface-default/emphasis/muted` |
| `danger` | Error / destructive | `bg-danger-default/muted` | `bg-danger-surface-default/emphasis/muted/translucent` |
| `warning` | Caution | `bg-warning-default/muted` | `bg-warning-surface-default/emphasis/muted` |
| `purple` | Visual variety (no semantic meaning) | `bg-purple-default/muted` | `bg-purple-surface-default/emphasis/muted` |
| `cyan` | Visual variety (no semantic meaning) | `bg-cyan-default/muted` | `bg-cyan-surface-default/emphasis/muted` |
| `neutral` | Equal importance, no differentiation | — | `bg-neutral-surface-default/emphasis/muted` |

> **Note**: Use library components like `<sit-card>`, `<sit-button>`, `<sit-alert>`, `<sit-badge>` when available. Component-level (`surface`) tokens are for custom components when library components don't meet your needs.

---

## Variant Reference

### `primary`
Brand color. Use for hero sections, CTAs, and brand-emphasis components.

**Page level:**
```html
<!-- Hero / CTA section -->
<section class="sit:bg-primary-default">
  <h2>Hero Section</h2>
  <p>Emphasized with brand color</p>
</section>

<!-- Subtle brand presence -->
<div class="sit:bg-primary-muted">Subtle primary background</div>

<!-- Overlay over image -->
<div class="sit:bg-primary-translucent">Content over image with primary tint</div>
```

**Component level:**
```html
<div class="sit:bg-primary-surface-default">Standard primary component</div>
<div class="sit:bg-primary-surface-emphasis">Strong primary emphasis</div>
<div class="sit:bg-primary-surface-muted">Subtle primary component</div>
<div class="sit:bg-primary-surface-translucent">Translucent primary component</div>
```

---

### `accent`
Informational, no urgency. Use for info banners, link-related elements, and neutral informational content.

**Page level:**
```html
<section class="sit:bg-accent-default">Informational page section</section>
<div class="sit:bg-accent-muted">Subtle informational message</div>
```

**Component level:**
```html
<div class="sit:bg-accent-surface-default">Info card or badge</div>
<div class="sit:bg-accent-surface-emphasis">Emphasized info component</div>
<div class="sit:bg-accent-surface-muted">Subtle info badge</div>
```

**Common patterns:**
```html
<!-- Info callout card -->
<div class="sit:bg-accent-surface-default">
  <h3>Did You Know?</h3>
  <p>Informational content that doesn't require urgency</p>
</div>

<!-- Link button -->
<a href="/docs" class="sit:bg-accent-surface-default">Read Documentation</a>
```

---

### `success`
Positive feedback. Use for success alerts, valid form states, and completion indicators.

**Page level:**
```html
<section class="sit:bg-success-default">Full-width success section</section>
<div class="sit:bg-success-muted">Subtle success message</div>
```

**Component level:**
```html
<div class="sit:bg-success-surface-default">Success alert container</div>
<div class="sit:bg-success-surface-emphasis">Strongly emphasized success</div>
<span class="sit:bg-success-surface-muted">Completed</span>
```

**Common patterns:**
```html
<!-- Success alert -->
<div class="sit:bg-success-surface-default">
  <p>Success! Your changes have been saved.</p>
</div>

<!-- Success badge -->
<span class="sit:bg-success-surface-default">Completed</span>
```

---

### `danger`
Error or destructive state. Use for error alerts, invalid input states, and destructive action confirmations.

**Page level:**
```html
<section class="sit:bg-danger-default">Full-width error section</section>
<div class="sit:bg-danger-muted">Subtle error indicator</div>
```

**Component level:**
```html
<div class="sit:bg-danger-surface-default">Error alert container</div>
<div class="sit:bg-danger-surface-emphasis">Critical error — immediate attention</div>
<span class="sit:bg-danger-surface-muted">Failed</span>
<div class="sit:bg-danger-surface-translucent">Translucent danger overlay</div>
```

**Common patterns:**
```html
<!-- Error alert -->
<div class="sit:bg-danger-surface-default">
  <p>Something went wrong. Please try again.</p>
</div>

<!-- Destructive action confirmation -->
<div class="sit:bg-danger-surface-default">
  <h3>Delete Account</h3>
  <p>This action cannot be undone.</p>
</div>
```

---

### `warning`
Caution or attention needed. Use for warning alerts, important notices, and non-critical issues.

**Page level:**
```html
<section class="sit:bg-warning-default">Full-width warning section</section>
<div class="sit:bg-warning-muted">Subtle warning message</div>
```

**Component level:**
```html
<div class="sit:bg-warning-surface-default">Warning alert container</div>
<div class="sit:bg-warning-surface-emphasis">Important — action required</div>
<span class="sit:bg-warning-surface-muted">Pending</span>
```

**Common patterns:**
```html
<!-- Warning alert -->
<div class="sit:bg-warning-surface-default">
  <p>Please review your input before proceeding.</p>
</div>

<!-- System maintenance banner -->
<div class="sit:bg-warning-surface-default">
  <p>⚠ Scheduled maintenance on Sunday. Service may be interrupted.</p>
</div>
```

---

### `purple`
Visual variety, no semantic meaning. Use for non-semantic tags, category labels, and decorative accents. Good alternative when primary and accent colors are visually similar.

**Page level:**
```html
<section class="sit:bg-purple-default">Featured page section</section>
<div class="sit:bg-purple-muted">Subtle purple accent</div>
```

**Component level:**
```html
<div class="sit:bg-purple-surface-default">Purple component</div>
<div class="sit:bg-purple-surface-emphasis">Emphasized purple</div>
<span class="sit:bg-purple-surface-muted">Tag</span>
```

**Common patterns:**
```html
<!-- Category tags alternating with cyan -->
<span class="sit:bg-purple-surface-default">Design</span>
<span class="sit:bg-cyan-surface-default">Development</span>
```

---

### `cyan`
Visual variety, no semantic meaning. Use alongside `purple` for alternating color differentiation.

**Page level:**
```html
<section class="sit:bg-cyan-default">Featured page section</section>
<div class="sit:bg-cyan-muted">Subtle cyan accent</div>
```

**Component level:**
```html
<div class="sit:bg-cyan-surface-default">Cyan component</div>
<div class="sit:bg-cyan-surface-emphasis">Emphasized cyan</div>
<span class="sit:bg-cyan-surface-muted">Tag</span>
```

**Common patterns:**
```html
<!-- Category tags alternating with purple -->
<span class="sit:bg-purple-surface-default">Category A</span>
<span class="sit:bg-cyan-surface-default">Category B</span>
```

---

### `neutral`
Equal importance, no differentiation. Component level only — no page-level tokens. Use for tags, badges, and items where all carry equal visual weight.

**Component level only:**
```html
<span class="sit:bg-neutral-surface-default">Tag</span>
<div class="sit:bg-neutral-surface-emphasis">Prominent neutral</div>
<span class="sit:bg-neutral-surface-muted">Metadata</span>
```

**Common patterns:**
```html
<!-- Uniform tags (equal importance) -->
<span class="sit:bg-neutral-surface-default">JavaScript</span>
<span class="sit:bg-neutral-surface-default">Python</span>
<span class="sit:bg-neutral-surface-default">TypeScript</span>

<!-- Attribute badges -->
<span class="sit:bg-neutral-surface-default">Full-time</span>
<span class="sit:bg-neutral-surface-default">Remote</span>
```

## See Also

- **[base.md](base.md)** — Page-level background tokens (default, alternate, overlay, translucent)
- **[surface.md](surface.md)** — Component surface tokens (surface-default, surface-raised, surface-inverse)
- **[form.md](form.md)** — Form input background tokens
- **[color-semantics](../color-semantics.md)** — Modifier definitions (default, emphasis, muted, translucent)
