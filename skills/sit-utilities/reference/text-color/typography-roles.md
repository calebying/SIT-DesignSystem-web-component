# Text Color — Typography Role Tokens Reference

Typography role tokens assign color specifically by content role. They are more semantically precise than the base tokens (`text-default`, `text-subtle`) and should be the first choice for structured document content.

## Available Tokens

| Token | Role | When to use |
|---|---|---|
| `sit:text-display-default` | Hero headlines | Page-level display title, above H1 scale |
| `sit:text-heading-default` | Section headings | H1–H4 section titles |
| `sit:text-body-default` | Primary body copy | Paragraphs, descriptions |
| `sit:text-body-subtle` | Secondary body copy | Captions, metadata, footnotes |
| `sit:text-label-default` | UI labels | Form labels, field names, table headers |
| `sit:text-link-default` | Link default state | `<a>` elements at rest |
| `sit:text-link-emphasis` | Link hover/active | `<a>` elements on hover or focus |

## Token Details

### `sit:text-display-default`
Hero-level headline, typically displayed at the largest scale (`sit:text-5-xl` or `sit:text-4-xl`).

```html
<h1 class="sit:text-display-default sit:text-5-xl sit:font-bold sit:leading-tight">
  SIT Canvas Design System
</h1>
```

### `sit:text-heading-default`
Standard heading for section and sub-section titles.

```html
<h2 class="sit:text-heading-default sit:text-2-xl sit:font-semibold">
  Section Heading
</h2>

<h3 class="sit:text-heading-default sit:text-xl sit:font-semibold">
  Sub-section Heading
</h3>

<h4 class="sit:text-heading-default sit:text-lg sit:font-medium">
  Group Heading
</h4>
```

### `sit:text-body-default`
Primary body copy.

```html
<p class="sit:text-body-default sit:leading-relaxed">
  Main article or panel text. Used wherever the reading experience is the primary goal.
</p>
```

### `sit:text-body-subtle`
Secondary body copy. Lower visual weight than `body-default`.

```html
<p class="sit:text-body-subtle sit:text-sm">
  Published on 1 January 2024 — 5 min read
</p>

<figcaption class="sit:text-body-subtle sit:text-sm sit:mt-2">
  Figure 1: System architecture overview.
</figcaption>
```

### `sit:text-label-default`
UI label for form fields, table column headers, and identifiers.

```html
<label class="sit:text-label-default sit:block sit:font-medium sit:mb-2">
  Full name
</label>

<th class="sit:text-label-default sit:font-semibold sit:text-sm">
  Date submitted
</th>
```

### `sit:text-link-default` / `sit:text-link-emphasis`
Link text colors. Use `default` at rest and `emphasis` for hover and focus states.

```html
<!-- Inline link -->
<a href="#" class="sit:text-link-default hover:sit:text-link-emphasis sit:underline">
  View full report
</a>

<!-- Navigation link -->
<nav>
  <a href="#" class="sit:text-link-default hover:sit:text-link-emphasis">
    About
  </a>
</nav>
```

## Content Hierarchy Pattern

Combines all typography role tokens in a realistic page structure:

```html
<main>
  <!-- Page hero -->
  <section class="sit:mb-12">
    <h1 class="sit:text-display-default sit:text-5-xl sit:font-bold sit:leading-tight sit:mb-4">
      Digital Services for Singapore
    </h1>
    <p class="sit:text-body-default sit:text-xl sit:leading-relaxed">
      A unified design language for all government digital products.
    </p>
  </section>

  <!-- Article section -->
  <article class="sit:mb-8">
    <h2 class="sit:text-heading-default sit:text-2-xl sit:font-semibold sit:mb-2">
      Getting Started
    </h2>
    <p class="sit:text-body-subtle sit:text-sm sit:mb-4">
      Updated 15 March 2024
    </p>
    <p class="sit:text-body-default sit:leading-relaxed sit:mb-4">
      Install Canvas and configure your Tailwind setup to start using components and utilities.
    </p>
    <a href="#" class="sit:text-link-default hover:sit:text-link-emphasis sit:underline sit:text-sm">
      Read the setup guide →
    </a>
  </article>
</main>
```

## Card Pattern

```html
<div class="sit:bg-surface-raised sit:p-6 sit:rounded-lg">
  <h3 class="sit:text-heading-default sit:text-xl sit:font-semibold sit:mb-2">
    Card Title
  </h3>
  <p class="sit:text-body-subtle sit:text-sm sit:mb-4">
    Updated 2 hours ago
  </p>
  <p class="sit:text-body-default sit:mb-4">
    Main card description providing the key information at a glance.
  </p>
  <a href="#" class="sit:text-link-default hover:sit:text-link-emphasis sit:text-sm">
    Read more →
  </a>
</div>
```

## Form Pattern

```html
<form class="sit:flex sit:flex-col sit:gap-4">
  <div>
    <label class="sit:text-label-default sit:block sit:font-medium sit:mb-2">
      Email address
    </label>
    <input type="email" class="sit:border sit:p-2 sit:rounded sit:w-full">
  </div>
  <div>
    <label class="sit:text-label-default sit:block sit:font-medium sit:mb-2">
      Password
    </label>
    <input type="password" class="sit:border sit:p-2 sit:rounded sit:w-full">
    <p class="sit:text-body-subtle sit:text-xs sit:mt-1">
      Minimum 8 characters
    </p>
  </div>
  <p class="sit:text-body-subtle sit:text-sm">
    By signing in you agree to our
    <a href="#" class="sit:text-link-default hover:sit:text-link-emphasis sit:underline">Terms of Use</a>.
  </p>
</form>
```

## Best Practices

- Use `sit:text-heading-default` for ALL heading levels (H1–H4) — differentiate by font size and weight, not by colour.
- Prefer `sit:text-body-subtle` over `sit:text-muted` for secondary body copy: `subtle` is designed for readable supporting text while `muted` is for decorative / non-essential labels.
- Always pair `text-link-default` with `hover:sit:text-link-emphasis` to provide a clear interactive state.
- Canvas components (`<sit-*>`) apply typography role tokens internally — use these utilities only for custom HTML structures.

## See Also

- **[base.md](base.md)** — Base text color tokens (default, muted, inverse, fixed)
- **[semantic.md](semantic.md)** — Semantic text colors for state and feedback
- **[typography](../typography.md)** — Font size, weight, and leading utilities
