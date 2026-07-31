# Base Border Colors Reference

**Meaning**: Foundational, no semantic color
**Usage**: Standard container and component borders

## Design Semantics

- **Base = Neutral structural borders**
- No semantic color meaning
- Used for separating layout areas, container edges, dividers
- Applied to **containers and components only** — not page-level backgrounds

## Available Tokens

### `sit:border-default`
**Standard container or component border.**

**When to use:**
- Cards, panels, tables, list items
- Any visible border with no special meaning

```html
<div class="sit:border sit:border-default">
  Standard bordered container
</div>
```

### `sit:border-emphasis`
**Strong, prominent border.**

**When to use:**
- Separators that need to stand out
- Table headers, section dividers
- Active states, selected elements

```html
<div class="sit:border-t-2 sit:border-emphasis">
  Section with emphasized top border
</div>
```

### `sit:border-muted`
**Lighter, softer border.**

**When to use:**
- Subtle separations, internal structure lines
- Low-emphasis visual separation
- Row separators in tables

```html
<div class="sit:border-b sit:border-muted">
  Row with soft bottom border
</div>
```

### `sit:border-fixed-light`
**Always light border, never switches theme.**

**When to use:**
- Borders over dark/image backgrounds
- Containers that are always displayed on dark surfaces

```html
<div class="sit:border sit:border-fixed-light">
  Border always appears light
</div>
```

### `sit:border-fixed-dark`
**Always dark border, never switches theme.**

**When to use:**
- Borders over light/white backgrounds
- Containers that are always displayed on light surfaces

```html
<div class="sit:border sit:border-fixed-dark">
  Border always appears dark
</div>
```

### `sit:border-translucent`
**Semi-transparent border.**

**When to use:**
- Borders over image or gradient backgrounds
- Overlapping elements where transparency is needed

```html
<div class="sit:border sit:border-translucent">
  Semi-transparent border
</div>
```

### `sit:border-transparent`
**Invisible border — preserves box model spacing.**

**When to use:**
- Maintaining consistent element dimensions when toggling border visibility
- Buttons that need border space but no visible border by default

```html
<button class="sit:border sit:border-transparent">
  No visible border but space is reserved
</button>
```

## Common Patterns

> **Note**: Use library components like `<sit-card>`, `<sit-table>`, `<sit-divider>` when available. Base border tokens are for creating custom containers when library components don't meet your needs.

### Card Container

```html
<div class="sit:border sit:border-default">
  Card with standard border
</div>
```

### Section Divider

```html
<section class="sit:border-t sit:border-emphasis">
  Section below emphasized divider
</section>
```

### Internal Row Separator

```html
<ul>
  <li class="sit:border-b sit:border-muted">Row item</li>
  <li class="sit:border-b sit:border-muted">Row item</li>
  <li>Last row item</li>
</ul>
```

### Transparent Border for Alignment

```html
<button class="sit:border sit:border-primary-default">Primary</button>
<button class="sit:border sit:border-transparent">Ghost — same height</button>
```

## See Also

- **[semantic.md](semantic.md)** — Semantic border colors (primary, accent, success, danger, warning, purple, cyan, neutral)
- **[form.md](form.md)** — Form input border tokens
- **[border-width](../border-width.md)** — Border thickness utilities
- **[border-radius](../border-radius.md)** — Rounded corner utilities
