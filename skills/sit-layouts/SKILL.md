---
name: "sit-layouts"
description: "Complete catalog of page layout patterns for Canvas applications. Use this skill whenever a user asks about page layouts, content arrangement, aside panels, split views, sidebar layouts, breadcrumb layouts, or viewport-height layouts — even if they just say 'how should I lay out my page' or 'I need a two-column layout'. Covers Full Width layouts (public-facing pages with sit-container) and With Sidebar layouts (dashboards/internal tools with sit-container-sidebar). Trigger on: layout, aside, split view, sidebar layout, two-column, three-column, content arrangement, page structure with aside."
metadata:
  author: sit-canvas
  version: "0.0.0"
  audience: external
  category: pattern
---

# Canvas Layouts

Production-ready page layout patterns that define how content areas are arranged within the Application Shell. Each layout combines Canvas components and utilities to provide a structural starting point — drop in your content blocks and you have a complete page.

## What is a layout?

A layout defines the spatial arrangement of content regions on a page:

- How many content columns exist (single, split, aside + main)
- Where navigation lives (top-only vs sidebar)
- How the page scrolls (document flow vs viewport-contained)

Layouts sit between the **Application Shell** (mandatory page chrome) and **Blocks/Templates** (the actual content). The shell wraps the layout; blocks fill the layout's content areas.

## Prerequisites

Before implementing any layout, ensure you have:

1. **sit-getting-started**: Initial application setup (Inter font, foundation CSS imports, component registration)
2. **sit-utilities**: Understanding of Canvas utility classes (grid, spacing, flex, etc.)
3. **sit-components**: Knowledge of Canvas web components (masthead, mainnav, footer, sidebar)

```javascript
import "@sit-canvas/canvas-web-component/themes/day.css";
import "@sit-canvas/canvas-web-component/css/sit.css";
import "@sit-canvas/canvas-web-component/css/utility.css";
```

See **[sit-getting-started](../sit-getting-started/SKILL.md)** and **[sit-components](../sit-components/SKILL.md)** for full installation.

---

## Quick Decision Guide

| What you're building | Layout category | Layout to use |
|---|---|---|
| Simple public-facing page, single content area | Full Width | [Default](reference/full-width.md#default) |
| Page with a left sidebar/aside panel (4/8 split) | Full Width | [Aside Left](reference/full-width.md#aside-left) |
| Page with a right sidebar/aside panel (8/4 split) | Full Width | [Aside Right](reference/full-width.md#aside-right) |
| Page with both left and right aside panels (3/6/3) | Full Width | [Aside Both](reference/full-width.md#aside-both) |
| Two equal content panels side by side | Full Width | [Split](reference/full-width.md#split) |
| Page with breadcrumb navigation bar | Full Width | [Breadcrumb](reference/full-width.md#breadcrumb) |
| Dashboard/internal tool, single content area | With Sidebar | [Default](reference/with-sidebar.md#default) |
| Dashboard with left aside panel | With Sidebar | [Aside Left](reference/with-sidebar.md#aside-left) |
| Dashboard with right aside panel | With Sidebar | [Aside Right](reference/with-sidebar.md#aside-right) |
| Collapsible overlay sidebar with breadcrumb | With Sidebar | [Overlay](reference/with-sidebar.md#overlay) |
| Dashboard with two equal content panels | With Sidebar | [Split](reference/with-sidebar.md#split) |

---

## Two Layout Categories

### Full Width — Public-facing pages

For general-purpose applications, public-facing digital services, and pages without persistent side navigation.

**Key characteristics:**
- Uses `.sit-container` for centred, responsive content
- Standard `<sit-masthead>`, `<sit-mainnav>`, `<sit-footer>`
- Content flows with the document (no viewport containment)
- Grid-based aside panels use `.sit-grid` with `sit-col-*` classes

**→ Read [reference/full-width.md](reference/full-width.md)** for all 6 Full Width layout variants.

---

### With Sidebar — Dashboards and internal tools

For internal tools, dashboards, admin portals, and transactional apps that need persistent side navigation alongside the main content.

**Key characteristics:**
- Uses `.sit-container-sidebar` for narrower content (accounts for sidebar width)
- `fluid` attribute on `<sit-masthead>` and `<sit-mainnav>`
- `<sit-sidebar>` component for persistent navigation
- `<sit-footer tone="neutral" layout="sidebar">` for sidebar-aware footer
- Viewport-height containment: `sit:h-screen sit:flex sit:flex-col sit:overflow-hidden`
- Main content area scrolls independently: `sit:overflow-y-auto`

**→ Read [reference/with-sidebar.md](reference/with-sidebar.md)** for all 5 With Sidebar layout variants.

---

## How to Extract HTML from Story Files

All layouts have working story implementations in this repo's `stories/layouts/` directory. To use them:

### Step 1: Read the story file

Read the relevant `.stories.js` file directly from `stories/layouts/` in this repo.

### Step 2: Extract the HTML from the template literal

Story files export a `Template` function that returns an `html` template literal:

```javascript
const Template = () => html`
  <!-- YOUR HTML STARTS HERE -->
  <sit-masthead></sit-masthead>
  ...
  <sit-footer></sit-footer>
  <!-- YOUR HTML ENDS HERE -->
`;
```

### Step 3: Clean the HTML

1. Remove the `html\`` wrapper and trailing backtick
2. Remove Lit-specific syntax (`${variable}` interpolations) — replace with inline HTML
3. Remove `<style>` blocks (these are just for Storybook placeholders)
4. Preserve all Canvas components and utility classes exactly as-is (they are already `sit-*`/`sit:` in this repo's story files)
5. Format with consistent indentation (2 spaces)

---

## For AI agents

### Workflow

1. Load `sit-utilities` skill (for utility class reference)
2. Load `sit-components` skill (for component APIs)
3. Load this skill
4. Read the appropriate reference file based on the user's needs
5. Fetch the raw GitHub story file if you need the complete implementation
6. Adapt the layout to the user's content

### Guidelines

- Every layout includes the mandatory Application Shell (`<sit-masthead>`, `<sit-mainnav>`, `<sit-footer>`)
- Do not mix Full Width and With Sidebar patterns — pick one based on the use case
- For sidebar layouts, always include the viewport-containment classes on the root wrapper
- Populate aside panels and content areas with blocks from **[sit-blocks](../sit-blocks/SKILL.md)** or templates from **[sit-templates](../sit-templates/SKILL.md)**
