# Border Color — Semantic Colors Reference

Semantic border color tokens carry meaning (brand, state, feedback). Use them when color communicates a specific intent, not just for structure.

All semantic border tokens apply at **component and container level only** — there is no page-level distinction for borders.

## Token Pattern

```
sit:border-{variant}-{modifier}
```

**Variants:** `primary`, `accent`, `success`, `danger`, `warning`, `purple`, `cyan`, `neutral`

**Modifiers:** `default`, `emphasis`, `muted`

For modifier definitions see **[`color-semantics`](../color-semantics.md)**.

## Quick Reference

| Variant | Meaning | Tokens |
|---------|---------|--------|
| `primary` | Brand color | `border-primary-default/emphasis/muted` |
| `accent` | Informational, no urgency | `border-accent-default/emphasis/muted` |
| `success` | Positive feedback | `border-success-default/emphasis/muted` |
| `danger` | Error / destructive | `border-danger-default/emphasis/muted` |
| `warning` | Caution | `border-warning-default/emphasis/muted` |
| `purple` | Visual variety (no semantic meaning) | `border-purple-default/emphasis/muted` |
| `cyan` | Visual variety (no semantic meaning) | `border-cyan-default/emphasis/muted` |
| `neutral` | Equal importance, no differentiation | `border-neutral-default/emphasis/muted` |

---

## Variant Reference

> **Note**: Use library components like `<sit-button>`, `<sit-alert>`, `<sit-badge>`, `<sit-input>` when available. These tokens are for custom components when library components don't meet your needs.

### `primary`
Brand color. Use for active/selected states, brand-accented components, and focus indicators.

```html
<div class="sit:border-2 sit:border-primary-default">Active or selected component</div>
<div class="sit:border-2 sit:border-primary-emphasis">Strong brand border</div>
<div class="sit:border sit:border-primary-muted">Soft brand presence</div>
```

**Common patterns:**
```html
<!-- Selected/active component -->
<div class="sit:border-2 sit:border-primary-default">Selected card</div>

<!-- Active tab indicator -->
<button class="sit:border-b-2 sit:border-primary-default">Active Tab</button>

<!-- Left-accent callout -->
<div class="sit:border-l-4 sit:border-primary-default">Important callout</div>
```

---

### `accent`
Informational, no urgency. Use for info badges, informational callouts, and link-adjacent components.

```html
<div class="sit:border sit:border-accent-default">Informational container</div>
<div class="sit:border-2 sit:border-accent-emphasis">Prominent info container</div>
<div class="sit:border sit:border-accent-muted">Subtle info border</div>
```

**Common patterns:**
```html
<!-- Info badge -->
<span class="sit:border sit:border-accent-default">Info</span>

<!-- Info callout -->
<div class="sit:border-l-4 sit:border-accent-default">Informational callout text</div>
```

---

### `success`
Positive feedback. Use for success alerts, valid input states, and completion indicators.

```html
<div class="sit:border sit:border-success-default">Success state container</div>
<div class="sit:border-2 sit:border-success-emphasis">Prominent success container</div>
<div class="sit:border sit:border-success-muted">Subtle success border</div>
```

**Common patterns:**
```html
<!-- Success alert -->
<div class="sit:border-l-4 sit:border-success-default">Your submission was successful.</div>

<!-- Success badge -->
<span class="sit:border sit:border-success-default">Completed</span>
```

---

### `danger`
Error or destructive state. Use for error alerts, invalid input states, and destructive action borders.

```html
<div class="sit:border sit:border-danger-default">Error state container</div>
<div class="sit:border-2 sit:border-danger-emphasis">Critical error container</div>
<div class="sit:border sit:border-danger-muted">Soft danger border</div>
```

**Common patterns:**
```html
<!-- Error alert -->
<div class="sit:border-l-4 sit:border-danger-default">Something went wrong. Please try again.</div>

<!-- Error badge -->
<span class="sit:border sit:border-danger-default">Failed</span>
```

---

### `warning`
Caution or attention needed. Use for warning alerts, fields requiring review, and non-critical issue indicators.

```html
<div class="sit:border sit:border-warning-default">Caution state container</div>
<div class="sit:border-2 sit:border-warning-emphasis">Prominent warning container</div>
<div class="sit:border sit:border-warning-muted">Soft warning border</div>
```

**Common patterns:**
```html
<!-- Warning alert -->
<div class="sit:border-l-4 sit:border-warning-default">Please review before proceeding.</div>

<!-- Warning badge -->
<span class="sit:border sit:border-warning-default">Pending</span>
```

---

### `purple`
Visual variety, no semantic meaning. Use when primary and accent are visually similar and you need a third distinguishable color.

```html
<div class="sit:border sit:border-purple-default">Purple-bordered component</div>
<div class="sit:border-2 sit:border-purple-emphasis">Prominent purple container</div>
<div class="sit:border sit:border-purple-muted">Subtle purple border</div>
```

**Common patterns:**
```html
<!-- Category tag -->
<span class="sit:border sit:border-purple-default">Category A</span>

<!-- Left-accent variety -->
<div class="sit:border-l-4 sit:border-purple-default">Featured section</div>
```

---

### `cyan`
Visual variety, no semantic meaning. Use alongside `purple` for alternating color differentiation.

```html
<div class="sit:border sit:border-cyan-default">Cyan-bordered component</div>
<div class="sit:border-2 sit:border-cyan-emphasis">Prominent cyan container</div>
<div class="sit:border sit:border-cyan-muted">Subtle cyan border</div>
```

**Common patterns:**
```html
<!-- Category tags alternating with purple -->
<span class="sit:border sit:border-purple-default">Category A</span>
<span class="sit:border sit:border-cyan-default">Category B</span>
```

---

### `neutral`
Equal importance, no differentiation. Use for tags, badges, and components where all items carry equal visual weight.

```html
<span class="sit:border sit:border-neutral-default">Tag</span>
<div class="sit:border-2 sit:border-neutral-emphasis">Prominent neutral container</div>
<div class="sit:border sit:border-neutral-muted">Very subtle neutral border</div>
```

**Common patterns:**
```html
<!-- Uniform tags (equal importance) -->
<span class="sit:border sit:border-neutral-default">Tag 1</span>
<span class="sit:border sit:border-neutral-default">Tag 2</span>
<span class="sit:border sit:border-neutral-default">Tag 3</span>
```

## See Also

- **[base.md](base.md)** — Base border color tokens (default, inverse, transparent, fixed)
- **[form.md](form.md)** — Form input border tokens
- **[border-width](../border-width.md)** — Border thickness utilities
- **[color-semantics](../color-semantics.md)** — Modifier definitions (default, emphasis, muted)
