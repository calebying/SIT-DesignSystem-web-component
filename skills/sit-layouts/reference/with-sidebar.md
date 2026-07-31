# With Sidebar Layouts

With Sidebar layouts are for dashboards, internal tools, admin portals, and transactional apps that need persistent side navigation alongside the main content.

**Content container:** `.sit-container-sidebar` — narrower than `.sit-container` to account for the sidebar column

| Breakpoint | `.sit-container-sidebar` max-width |
|---|---|
| < 512px | `calc(100% - 40px)` |
| >= 512px (sm) | `calc(100% - 48px)` |
| >= 768px (md) | `auto` (48px margins) |
| >= 1024px (lg) | `auto` (48px margins) |
| >= 1280px (xl) | `auto` (48px margins) |
| >= 1440px (2xl) | `auto` (48px margins) |
| >= 1680px (3xl) | `1296px` |

**Grid gutter:** `.sit-grid` inside `.sit-container-sidebar` uses `var(--sit-gap-md)` (16px) at XS/SM and `var(--sit-gap-xl)` (24px) from MD (768px) onwards. No gap utility class is needed.

## Common Structure

All With Sidebar layouts share this viewport-contained structure:

```html
<div class="sit:h-screen sit:flex sit:flex-col sit:overflow-hidden">
  <!-- Sticky top bar -->
  <div class="sit:flex-none">
    <sit-masthead fluid></sit-masthead>
    <sit-mainnav fluid>...</sit-mainnav>
  </div>
  <!-- Two-column body -->
  <div class="sit:flex sit:flex-row sit:flex-1 sit:overflow-hidden">
    <sit-sidebar>...</sit-sidebar>
    <div class="sit:flex sit:flex-col sit:flex-1 sit:overflow-y-auto">
      <div class="sit-container-sidebar sit:py-layout-md sit:flex-1">
        <div class="sit-grid">
          <!-- Content goes here using sit-col-* classes -->
        </div>
      </div>
      <sit-footer tone="neutral" layout="sidebar"></sit-footer>
    </div>
  </div>
</div>
```

**Key differences from Full Width:**
- `fluid` attribute on `<sit-masthead>` and `<sit-mainnav>`
- Viewport containment with `sit:h-screen` + `sit:overflow-hidden`
- `<sit-sidebar>` provides persistent navigation
- Footer uses `tone="neutral"` and `layout="sidebar"`
- Content scrolls independently via `sit:overflow-y-auto`

---

## Default

Basic sidebar layout with a single full-width content area. Uses `.sit-grid` with a 12-column span.

```
+----------------------------------------------+
| sit-masthead (fluid)                         |
+----------------------------------------------+
| sit-mainnav (fluid)                          |
+----------+-----------------------------------+
|          |  .sit-container-sidebar           |
| sit-     |  .sit-grid                        |
| sidebar  |  [  main content col-12  ]         |
|          |                                   |
|          +-----------------------------------+
|          | sit-footer (neutral, sidebar)     |
+----------+-----------------------------------+
```

Grid classes: `sit-col-4 sit-col-sm-8 sit-col-lg-12` (full width at all breakpoints)

### Raw Content Link

| Layout | Raw URL |
|---|---|

---

## Aside Left

Sidebar layout with an additional left aside panel inside the content area. Uses `.sit-grid` with a 4/8 column split.

```
+----------------------------------------------+
| sit-masthead (fluid)                         |
+----------------------------------------------+
| sit-mainnav (fluid)                          |
+----------+-----------------------------------+
|          |  .sit-container-sidebar           |
| sit-     |  +-------+------------------+     |
| sidebar  |  | aside |  main content    |     |
|          |  | col-4 |    col-8         |     |
|          |  +-------+------------------+     |
|          +-----------------------------------+
|          | sit-footer (neutral, sidebar)     |
+----------+-----------------------------------+
```

Grid classes: `sit-col-4 sit-col-sm-8 sit-col-lg-4` (aside) + `sit-col-8 sit-col-sm-8 sit-col-lg-8` (main)

### Raw Content Link

| Layout | Raw URL |
|---|---|

---

## Aside Right

Sidebar layout with an additional right aside panel inside the content area. Same grid ratios as Aside Left but reversed.

```
+----------------------------------------------+
| sit-masthead (fluid)                         |
+----------------------------------------------+
| sit-mainnav (fluid)                          |
+----------+-----------------------------------+
|          |  .sit-container-sidebar           |
| sit-     |  +------------------+-------+     |
| sidebar  |  |  main content    | aside |     |
|          |  |    col-8         | col-4 |     |
|          |  +------------------+-------+     |
|          +-----------------------------------+
|          | sit-footer (neutral, sidebar)     |
+----------+-----------------------------------+
```

Grid classes: `sit-col-8 sit-col-sm-8 sit-col-lg-8` (main) + `sit-col-4 sit-col-sm-8 sit-col-lg-4` (aside)

### Raw Content Link

| Layout | Raw URL |
|---|---|

---

## Overlay

Collapsible overlay sidebar with a breadcrumb bar and toggle button. The sidebar uses `variant="overlay"` and sits above the content rather than beside it. Uses `.sit-grid` with a 12-column span.

```
+----------------------------------------------+
| sit-masthead (fluid)                         |
+----------------------------------------------+
| sit-mainnav (fluid)                          |
+----------------------------------------------+
| [toggle] breadcrumb bar (border-b)           |
+----------------------------------------------+
|  (overlay)  |                                |
|  sit-       |  .sit-container-sidebar         |
|  sidebar    |  .sit-grid                     |
|             |  [  main content col-12  ]      |
|             |                                |
|             +--------------------------------+
|             | sit-footer (neutral)           |
+-------------+--------------------------------+
```

Grid classes: `sit-col-4 sit-col-sm-8 sit-col-lg-12` (full width at all breakpoints)

**Key differences from other sidebar layouts:**
- Sidebar uses `variant="overlay"` and `scrim` attribute
- Breadcrumb bar includes an `<sit-icon-button>` toggler with `data-sidebar-toggler="true"`
- Content uses `.sit-container-sidebar` with `.sit-grid` for consistent grid gutter
- Footer uses `tone="neutral"` without `layout="sidebar"`
- Root wrapper includes `sit:relative` for overlay positioning

### Raw Content Link

| Layout | Raw URL |
|---|---|

---

## Split

Sidebar layout with two equal content panels side by side. Uses `.sit-grid` with a 6/6 column split.

```
+----------------------------------------------+
| sit-masthead (fluid)                         |
+----------------------------------------------+
| sit-mainnav (fluid)                          |
+----------+-----------------------------------+
|          |  .sit-container-sidebar           |
| sit-     |  .sit-grid                        |
| sidebar  |  +-------------+------------+     |
|          |  |   panel 1   |  panel 2   |     |
|          |  |   col-6     |  col-6     |     |
|          |  +-------------+------------+     |
|          +-----------------------------------+
|          | sit-footer (neutral, sidebar)     |
+----------+-----------------------------------+
```

Grid classes: `sit-col-4 sit-col-sm-8 sit-col-lg-6` (each panel stacks full-width on XS/SM, splits 6-6 on LG+)

### Raw Content Link

| Layout | Raw URL |
|---|---|

---

## All Raw Content Links

| Layout | Raw URL |
|---|---|
