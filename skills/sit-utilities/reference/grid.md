# Canvas Grid Utilities Skill

Structures responsive page and content layouts using the Canvas grid system.

**Priority rule**: Always reach for `.sit-container`, `.sit-grid`, and `.sit-col-*` first. Only fall back to Tailwind `sit:grid-cols-*` and `sit:col-span-*` when you have a layout need that the Canvas grid classes cannot express (e.g., a non-standard column count, auto-filling card rows with `sit:grid-cols-[repeat(auto-fill,_minmax(...))]`).

---

## Core Concept

The Canvas grid is a **CSS Grid** layout built from three cooperating layers:

| Layer | Class | Role |
|-------|-------|------|
| Container | `.sit-container` or `.sit-container-sidebar` | Constrains content width and centres horizontally |
| Grid wrapper | `.sit-grid` | Sets column track count and gutter for the breakpoint |
| Column | `.sit-col-{bp}-{n}` | Spans `n` tracks on the grid |

Stack them as `container → grid → col`:

```html
<div class="sit-container">
  <div class="sit-grid">
    <div class="sit-col-4 sit-col-sm-8 sit-col-lg-6">Main content</div>
    <div class="sit-col-4 sit-col-sm-8 sit-col-lg-6">Side content</div>
  </div>
</div>
```

---

## Breakpoints

The grid expands from 4 columns (mobile) → 8 columns (small/medium) → 12 columns (large and above).

| Breakpoint | Min width | Class prefix | Columns | Gutter |
|------------|-----------|--------------|---------|--------|
| Extra Small (default) | — | `.sit-col-*` | 4 | `var(--sit-gap-layout-md)` |
| Small | 512px | `.sit-col-sm-*` | 8 | `var(--sit-gap-layout-md)` |
| Medium | 768px | `.sit-col-md-*` | 8 | `var(--sit-gap-layout-md)` |
| Large | 1024px | `.sit-col-lg-*` | 12 | `var(--sit-gap-layout-md)` |
| Extra Large | 1280px | `.sit-col-xl-*` | 12 | `var(--sit-gap-layout-md)` |
| Extra Extra Large | 1440px | `.sit-col-2-xl-*` | 12 | `var(--sit-gap-layout-md)` |
| 3-XL (sidebar only) | 1680px | `.sit-col-3-xl-*` | 12 | `var(--sit-gap-layout-md)` |

Classes are mobile-first additive — define the XS span first, then override at larger breakpoints.

---

## Layout Guidelines

### Content Width Rules

- Default content should not exceed 8 columns.
- Use the full 12 columns only for:
  - Data tables
  - Dense card layouts (e.g. dashboards)

### Column Behaviour

| Grid | Layout type |
|------|-------------|
| 4-column (XS) | Flexible — fluid layout |
| 8-column (SM/MD) | Flexible — fluid layout |
| 12-column (LG+) | Fixed — structured layout |

### Responsive Behaviour

- Mobile layouts should stack by default (single column).
- Exception: a 2 + 2 split is allowed for small, repeatable content (e.g. cards).

---

## Containers

### `.sit-container` — standard full-page layout

Use for every page that does **not** have a persistent sidebar.

| Breakpoint | Max width |
|------------|-----------|
| XS (default) | `calc(100% - 40px)` — 20px outer margins |
| SM (512px+) | `calc(100% - 48px)` — 24px outer margins |
| MD (768px+) | `calc(100% - 56px)` — 28px outer margins |
| LG (1024px+) | 888px |
| XL (1280px+) | 1168px |
| 2-XL (1440px+) | 1312px |

### `.sit-container-sidebar` — use inside sidebar app layouts

Use when content sits alongside a sticky sidebar (i.e. the Sidebar App Layout from the [Application Shell](../../sit-blocks/reference/application-shell.md)). Narrower max-widths preserve readable line lengths.

The gutter is 16px (`--sit-gap-md`) at XS/SM and 24px (`--sit-gap-xl`) from MD onwards.

| Breakpoint | Max width |
|------------|-----------|
| XS (default) | `calc(100% - 40px)` — 20px margins |
| SM (512px+) | `calc(100% - 48px)` — 24px margins |
| MD (768px+) | auto — 48px margins |
| LG (1024px+) | auto — 48px margins |
| XL (1280px+) | auto — 48px margins |
| 2-XL (1440px+) | auto — 48px margins |
| 3-XL (1680px+) | 1296px |

### Sidebar Behaviour

The sidebar pushes the main content area by offsetting it horizontally. XS and SM screens are unaffected — the sidebar is not shown at those sizes.

| Sidebar state | Offset applied |
|---------------|----------------|
| Collapsed | 72px |
| Expanded | 288px |
| XS / SM screens | No offset (sidebar hidden) |

---

## Column Classes

### XS — 4 columns (default, no breakpoint prefix)

```
.sit-col-1  .sit-col-2  .sit-col-3  .sit-col-4
```

### SM — 8 columns (512px+)

```
.sit-col-sm-1 through .sit-col-sm-8
```

### MD — 8 columns (768px+)

```
.sit-col-md-1 through .sit-col-md-8
```

### LG — 12 columns (1024px+)

```
.sit-col-lg-1 through .sit-col-lg-12
```

### XL — 12 columns (1280px+)

```
.sit-col-xl-1 through .sit-col-xl-12
```

### 2-XL — 12 columns (1440px+)

```
.sit-col-2-xl-1 through .sit-col-2-xl-12
```

### 3-XL — 12 columns (1680px+, sidebar layouts only)

```
.sit-col-3-xl-1 through .sit-col-3-xl-12
```

---

## Column Combinations (12-column grid)

Use only structured, predictable splits. Avoid irregular or uneven layouts unless necessary.

| Split | Typical use |
|-------|-------------|
| 3 + 9 / 9 + 3 | Narrow sidebar + wide content |
| 4 + 8 / 8 + 4 | Standard sidebar + content |
| 6 + 6 | Equal halves |
| 4 + 4 + 4 | Three equal thirds |
| 3 + 3 + 3 + 3 | Four equal quarters |
| 2 + 2 + 2 + 2 + 2 + 2 | Six equal sixths |

---

## Centered Columns

Horizontally centres a column within the grid without offset wrappers. Only even-numbered spans are available. The column starts at the calculated midpoint: `start = (total_cols − span) / 2 + 1`.

| Class | Available at | Span |
|-------|-------------|------|
| `.sit-col-center-2` | XS (4-col grid) | 2 of 4 |
| `.sit-col-sm-center-2` `.sit-col-sm-center-4` `.sit-col-sm-center-6` | SM (8-col) | 2, 4, 6 of 8 |
| `.sit-col-md-center-2` `.sit-col-md-center-4` `.sit-col-md-center-6` | MD (8-col) | 2, 4, 6 of 8 |
| `.sit-col-lg-center-2` through `.sit-col-lg-center-10` | LG (12-col) | 2, 4, 6, 8, 10 of 12 |
| `.sit-col-xl-center-2` through `.sit-col-xl-center-10` | XL (12-col) | 2, 4, 6, 8, 10 of 12 |
| `.sit-col-2-xl-center-2` through `.sit-col-2-xl-center-10` | 2-XL (12-col) | 2, 4, 6, 8, 10 of 12 |
| `.sit-col-3-xl-center-2` through `.sit-col-3-xl-center-10` | 3-XL (12-col, sidebar only) | 2, 4, 6, 8, 10 of 12 |

```html
<!-- Centred 8/12 block on large screens -->
<div class="sit-container">
  <div class="sit-grid">
    <div class="sit-col-4 sit-col-sm-8 sit-col-lg-center-8">
      Centred content
    </div>
  </div>
</div>
```

---

## Visibility Classes

Hide a column at a specific breakpoint. Classes cascade: hiding at XS is revealed at SM; hiding at SM is revealed at MD; and so on.

| Class | Hidden at |
|-------|-----------|
| `.sit-col-none` | XS (default) |
| `.sit-col-sm-none` | SM (512px+) |
| `.sit-col-md-none` | MD (768px+) |
| `.sit-col-lg-none` | LG (1024px+) |
| `.sit-col-xl-none` | XL (1280px+) |
| `.sit-col-2-xl-none` | 2-XL (1440px+) |
| `.sit-col-3-xl-none` | 3-XL (1680px+, sidebar only) |

```html
<!-- Show on desktop only -->
<div class="sit-col-none sit-col-lg-12">Desktop-only content</div>
```

---

## Common Patterns

### Mixed-span rows in one grid (e.g., dashboard charts)

All items — whether they share a row or span the full width — belong in **one** `.sit-grid`. CSS Grid wraps them into rows automatically. Never create a separate `.sit-grid` for each row.

```html
<!-- Row 1: 8/12 + 4/12. Row 2: 12/12. One grid covers everything. -->
<div class="sit-container">
  <div class="sit-grid sit:gap-layout-sm">
    <div class="sit-col-4 sit-col-sm-8 sit-col-lg-8">Wide chart</div>
    <div class="sit-col-4 sit-col-sm-8 sit-col-lg-4">Narrow chart</div>
    <div class="sit-col-4 sit-col-sm-8 sit-col-lg-12">Full-width chart</div>
  </div>
</div>
```

### Full-width single column (mobile) → two halves (desktop)

```html
<div class="sit-container">
  <div class="sit-grid">
    <div class="sit-col-4 sit-col-sm-8 sit-col-lg-6">Left</div>
    <div class="sit-col-4 sit-col-sm-8 sit-col-lg-6">Right</div>
  </div>
</div>
```

### Content (8) + aside (4) on large screens

```html
<div class="sit-container">
  <div class="sit-grid">
    <main class="sit-col-4 sit-col-sm-8 sit-col-lg-8">Main content</main>
    <aside class="sit-col-4 sit-col-sm-8 sit-col-lg-4">Sidebar</aside>
  </div>
</div>
```

### Three-column card grid

```html
<div class="sit-container">
  <div class="sit-grid">
    <div class="sit-col-4 sit-col-sm-4 sit-col-lg-4">Card 1</div>
    <div class="sit-col-4 sit-col-sm-4 sit-col-lg-4">Card 2</div>
    <div class="sit-col-4 sit-col-sm-8 sit-col-lg-4">Card 3</div>
  </div>
</div>
```

### Centred narrow content (e.g., login form, article body)

```html
<div class="sit-container">
  <div class="sit-grid">
    <div class="sit-col-4 sit-col-sm-8 sit-col-lg-center-8">
      <h1>Article title</h1>
      <p>Body copy…</p>
    </div>
  </div>
</div>
```

### Within a sidebar layout

Use `.sit-container-sidebar` instead of `.sit-container` to get the narrower sidebar-aware widths.

```html
<div class="sit-container-sidebar">
  <div class="sit-grid">
    <div class="sit-col-4 sit-col-sm-8 sit-col-lg-12">Full-width within sidebar layout</div>
  </div>
</div>
```

---

## Quick Decision Guide

**Step 1 — Do you need a page container?**
- Full page, no sidebar → `.sit-container`
- Content alongside a sidebar → `.sit-container-sidebar`

**Step 2 — Do you need a column grid inside the container?**
- Yes → add `.sit-grid` as a direct child

**Step 3 — What span does each child need?**
- Works on all screens the same → `.sit-col-{n}` (use the max column count: 4 for XS, 8 for SM/MD, 12 for LG+)
- Changes across breakpoints → stack classes: `sit-col-4 sit-col-sm-8 sit-col-lg-6`
- Needs to be centred → use the `-center-{n}` variant instead of the plain span class

**Step 4 — Need to hide at a breakpoint?**
- Add `.sit-col-{bp}-none` to suppress the element at that width

**When to use Tailwind `sit:grid-cols-*` instead?**
- Auto-filling card rows: `sit:grid-cols-[repeat(auto-fill,_minmax(240px,1fr))]`
- Custom column counts not covered by 4/8/12 (rare)
- Non-grid flex layouts (use `sit:flex` instead)

---

**For AI Agents**

1. **Always use Canvas grid first** — use `.sit-container` → `.sit-grid` → `.sit-col-*` before reaching for any Tailwind utilities.
2. **Container is required** — every layout must start with `.sit-container` (default) or `.sit-container-sidebar` (sidebar layout). Never place `.sit-grid` without a container.
3. **Use one grid per layout region** — do not create multiple `.sit-grid` wrappers for rows. CSS Grid handles wrapping automatically.
4. **Follow mobile-first approach** — define XS spans first, then override upward: XS → 4 columns, SM/MD → 8 columns, LG and above → 12 columns.
5. **Respect column limits** — XS max is 4, SM/MD max is 8, LG+ max is 12. Never exceed the breakpoint's total.
6. **Content width constraint** — default content should not exceed 8 columns. Use 12 columns only for data tables and dense card layouts.
7. **Use structured layouts only** — follow predefined column combinations (e.g. 4+8, 6+6, 4+4+4). Avoid irregular or uneven splits.
8. **Stack on mobile** — default to a single-column stack on XS. Exception: a 2-column layout is allowed for small, repeatable items (e.g. cards).
9. **Centred columns** — only even spans are allowed (2, 4, 6, 8, 10). Works within 8-column (SM/MD) or 12-column (LG+) grids.
10. **Sidebar awareness** — use `.sit-container-sidebar` only when the sidebar is present. Apply correct content width constraints for the sidebar layout.
11. **Do not nest containers** — one container per layout level. Never place `.sit-container` inside another `.sit-container`.
12. **Skip grid if unnecessary** — for full-width content (e.g. hero, header), place the element directly inside the container without `.sit-grid`.
