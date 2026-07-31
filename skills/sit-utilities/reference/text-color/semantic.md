# Text Color — Semantic Colors Reference

Semantic text color tokens carry meaning (brand, status, feedback). Use them when color communicates a specific intent, not just for aesthetic variation.

## Token Pattern

```
sit:text-{variant}-{modifier}
```

**Variants:** `primary`, `accent`, `success`, `danger`, `warning`, `purple`, `cyan`, `neutral`

**Modifiers:** `default`, `emphasis`, `fixed-light`, `fixed-dark`

For modifier definitions see **[`color-semantics`](../color-semantics.md)**.

## Variant Reference

### `primary`
Brand color. Use for callouts, interactive elements, and branded text.

```html
<span class="sit:text-primary-default">Primary brand text</span>
<span class="sit:text-primary-emphasis">Hover or active state</span>
<span class="sit:text-primary-fixed-light">On dark brand background</span>
<span class="sit:text-primary-fixed-dark">On light brand background</span>
```

### `accent`
Secondary brand color. Use for highlights and secondary CTAs.

```html
<span class="sit:text-accent-default">Accent text</span>
<span class="sit:text-accent-emphasis">Emphasized accent</span>
```

### `success`
Positive / completion state.

```html
<span class="sit:text-success-default">Saved successfully</span>
<span class="sit:text-success-emphasis">Strong success emphasis</span>
```

### `danger`
Error / destructive state.

```html
<span class="sit:text-danger-default">This field is required</span>
<span class="sit:text-danger-emphasis">Critical error</span>
```

### `warning`
Cautionary / non-blocking state.

```html
<span class="sit:text-warning-default">Please review before submitting</span>
<span class="sit:text-warning-emphasis">Strong caution</span>
```

### `purple`
Supplementary brand color.

```html
<span class="sit:text-purple-default">Purple label</span>
```

### `cyan`
Supplementary brand color.

```html
<span class="sit:text-cyan-default">Cyan label</span>
```

### `neutral`
Non-semantic grey used for tags, badges, and disabled states.

```html
<span class="sit:text-neutral-default">Neutral label</span>
```

## Common Patterns

### Form Validation States

```html
<!-- Success state -->
<div class="sit:mb-4">
  <label class="sit:text-label-default sit:block sit:mb-2">Email</label>
  <input class="sit:border sit:border-success-default sit:p-2 sit:rounded">
  <p class="sit:text-success-default sit:text-sm sit:mt-1">Valid email address</p>
</div>

<!-- Error state -->
<div class="sit:mb-4">
  <label class="sit:text-label-default sit:block sit:mb-2">Password</label>
  <input class="sit:border sit:border-danger-default sit:p-2 sit:rounded">
  <p class="sit:text-danger-default sit:text-sm sit:mt-1">Password is required</p>
</div>
```

### Alert Messages

```html
<!-- Success alert -->
<div class="sit:bg-success-surface-default sit:p-4 sit:rounded">
  <p class="sit:text-success-default sit:font-semibold sit:mb-1">Success</p>
  <p class="sit:text-success-default sit:text-sm">Your changes have been saved.</p>
</div>

<!-- Warning alert -->
<div class="sit:bg-warning-surface-default sit:p-4 sit:rounded">
  <p class="sit:text-warning-default sit:font-semibold sit:mb-1">Warning</p>
  <p class="sit:text-warning-default sit:text-sm">Please review your input.</p>
</div>

<!-- Error alert -->
<div class="sit:bg-danger-surface-default sit:p-4 sit:rounded">
  <p class="sit:text-danger-default sit:font-semibold sit:mb-1">Error</p>
  <p class="sit:text-danger-default sit:text-sm">Something went wrong.</p>
</div>
```

### Status Indicators

```html
<div class="sit:flex sit:flex-col sit:gap-2">
  <span class="sit:text-success-default">● Online</span>
  <span class="sit:text-warning-default">● Pending</span>
  <span class="sit:text-danger-default">● Offline</span>
  <span class="sit:text-neutral-default">● Unknown</span>
</div>
```

### Hero Section with Fixed Text

```html
<section class="sit:bg-primary-default sit:py-12 sit:px-6">
  <h1 class="sit:text-fixed-light sit:text-4-xl sit:font-bold sit:mb-4">
    Welcome to Canvas
  </h1>
  <p class="sit:text-fixed-light sit:text-xl sit:mb-6">
    Build better government digital services.
  </p>
  <button class="sit:bg-white sit:text-primary-default sit:px-6 sit:py-3 sit:rounded">
    Get Started
  </button>
</section>
```

## Best Practices

- Use `sit:text-{variant}-default` for standard states; `emphasis` for hover or active states — not both simultaneously.
- On colored or fixed-image backgrounds, use `text-fixed-light` or `text-fixed-dark` to guarantee contrast.
- Do not use semantic colors purely for visual variety — each variant carries meaning for assistive technology and users.
- Canvas component library (`<sit-*>`) handles validation colors internally; apply these tokens only when building custom components.

## See Also

- **[base.md](base.md)** — Base text color tokens (default, muted, inverse, fixed)
- **[typography-roles.md](typography-roles.md)** — Role-based text tokens (heading, body, label, link)
- **[color-semantics](../color-semantics.md)** — Modifier definitions (default, emphasis, muted)
- **[background-color/semantic.md](../background-color/semantic.md)** — Matching semantic background tokens
