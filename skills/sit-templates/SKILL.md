---
name: "sit-templates"
description: "Complete ready-to-use page templates built with Canvas components and utilities. Use this skill whenever a user asks to build a page, dashboard, login page, form page, settings page, list page, or any full-page UI — even if they don't say 'template'. Apply when starting a new app, building internal tools, dashboards, admin portals, authentication flows, or data table views."
metadata:
  author: sit-canvas
  version: "0.0.0"
  audience: external
  category: pattern
---

# Canvas Page Templates

Ready-to-use full-page templates using Canvas components and utilities — adapted from the visual patterns of shadcn Blocks. Each template gives a beautiful starting point without writing layout code from scratch.

## Prerequisites

> **Every page must include the Application Shell.** Read **[sit-blocks → reference/application-shell.md](../sit-blocks/reference/application-shell.md)** before generating any page. The shell provides mandatory `<sit-masthead>`, `<sit-mainnav>`, and `<sit-footer>` on every page, plus container class selection (`.sit-container` vs `.sit-container-sidebar`) and sticky-header conventions. Never generate a page template without all three shell components.

```javascript
import "@sit-canvas/canvas-web-component/themes/day.css";
import "@sit-canvas/canvas-web-component/css/sit.css";
import "@sit-canvas/canvas-web-component/css/utility.css";
```

See **[sit-getting-started](../sit-getting-started/SKILL.md)** and **[sit-components](../sit-components/SKILL.md)** for full installation.

For container width and max-width utilities used in these templates, see **[sit-utilities](../sit-utilities/reference/dimension.md)**.

---

## Quick Decision Guide

| What you're building | Template to use |
|---|---|
| Admin dashboard with filters & data table | [Application Management](reference/application-management.md) |
| Public catalogue with search & filtering | [Catalogue / Search & Filter](reference/catalogue.md) |
| Internal tool, admin portal, analytics dashboard | [Dashboard](reference/dashboard.md) |
| Login / sign-in page | [Login](reference/login.md) |
| Multi-field settings or data-entry form | [Form Page](reference/form.md) |
| Company/agency profile, team intro, achievements | [About Us](reference/about-us.md) |
| Product or service landing page | [Landing Page](reference/landing.md) |
| Blog post, news article, or case study | [Blog / Content Page](reference/blog.md) |

---

## → Read [reference/application-management.md](reference/application-management.md)
Sidebar filters + search + data table + pagination. Use for admin dashboards, application registries, management portals.

## → Read [reference/catalogue.md](reference/catalogue.md)
Search + sidebar multi-group filters + sort dropdown + results grid + empty state. Use for product catalogues, event listings, content browsing.

## → Read [reference/dashboard.md](reference/dashboard.md)
Sidebar navigation + stat cards row + data table. Use for dashboards, admin portals, internal tools with metrics.

> **Note**: The dashboard template uses `sit-sidebar` (RC component). Load the CDN script before other Canvas imports — see **[sit-components sidebar reference](../sit-components/reference/sidebar.md)** for the CDN tag and framework setup.

## → Read [reference/login.md](reference/login.md)
Centered card with email/password form. Use for authentication, sign-in, sign-up pages.

## → Read [reference/form.md](reference/form.md)
Two-column settings layout with labelled form sections. Use for settings pages, profile pages, multi-section data entry.

## → Read [reference/about-us.md](reference/about-us.md)
Two-column headline + image grid + logo strip + achievements stats panel. Use for agency profiles, product about pages, team introductions.

## → Read [reference/landing.md](reference/landing.md)
Hero section + feature cards + CTA sections. Use for product launches, service introductions, campaign pages.

## → Read [reference/blog.md](reference/blog.md)
Featured image + article header + body content + author card. Use for blog posts, news articles, case studies, testimonials.

---

## Raw Content Links — Copy & Paste Ready

All page templates have working implementations in the `stories/templates/` directory. Use these raw GitHub links to fetch the complete source:

| Template | Story Folder | Story File | Raw URL |
|---|---|---|---|

Each reference page (e.g., [reference/dashboard.md](reference/dashboard.md)) includes the relevant raw content links for that specific template.

---

## How to Extract HTML from Raw GitHub Links

All templates have working story implementations in the `stories/templates/` directory. To extract the HTML template:

### Step 1: Fetch the raw file

Copy the raw GitHub URL from the table above and fetch it:

```bash
```

Example:
```bash
```

### Step 2: Extract the HTML from the template literal

Story files export a `Template` function that returns an `html` template literal. Locate the section that looks like:

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

1. **Remove the `html\`` wrapper** — delete the leading `html\`` and trailing closing backtick
2. **Remove Lit-specific syntax** — delete any `${variable}` interpolations; replace with placeholder text if needed
3. **Remove `<style>` blocks** — move CSS to the reference file's "Customisation notes" section if notable
4. **Preserve all Canvas components and utility classes** — keep every `sit-*` element and `sit:` class exactly as-is
5. **Format the HTML** — use consistent indentation (2 spaces per level)

### Step 4: Structure the reference file

Follow the sit-blocks pattern:

```markdown
# [Template Name] Page Template

[1-2 sentence description of what this template is for]

## When to use

- Use case 1
- Use case 2
- Use case 3

## Block anatomy

\`\`\`
[ASCII diagram of the layout structure]
\`\`\`

---

## Complete template

\`\`\`html
[CLEANED HTML FROM STEP 3]
\`\`\`

## Customisation notes

- Update [element] to [purpose]
- Modify [component] by [how]
- [More notes...]

---

## Raw Content Link

| File | GitHub Raw URL |
|------|---|
| [Template Name] | [raw GitHub URL] |
```

### Example: About Us template

The raw file at:
```
```

Contains:
```javascript
const Template = () => html`
  <style>...</style>
  <sit-masthead></sit-masthead>
  ...
`;
```

**Extract** → remove `html\`` and backtick → clean up `<style>` → result is the HTML in [reference/about-us.md](reference/about-us.md).

---

## Visual Hierarchy Principles (apply to all templates)

These are the rules that make Canvas UIs look polished — the same principles shadcn/Mantine use:

**1. Layer backgrounds to create depth**
- Page background: `sit:bg-surface-default` (the base canvas)
- Cards / panels: `sit:bg-surface-raised` (lifts content off the page)
- Nested content areas: `sit:bg-surface-overlay` sparingly

**2. Use semantic spacing, not raw numbers**
Prefer `sit:p-layout-md`, `sit:gap-layout-md`, `sit:p-component-md` over `sit:p-4`. Semantic tokens are responsive and encode intent. **Always apply whitespace between sections and elements — never render blocks without spacing.** See **sit-utilities-spacing** for the full defaults table.

**3. Consistent card anatomy**
Every card: padding inside (`sit:p-component-lg`), gap between card rows (`sit:gap-layout-md`), border-radius (`sit:rounded-lg`), subtle shadow (`sit:shadow-card`).

**4. Action hierarchy in forms**
Primary action → `<sit-button variant="primary">`. Secondary / cancel → `<sit-button variant="outline">`. Destructive → `<sit-button variant="ghost" tone="danger">`.

**5. Subtle labels, prominent values**
In stat cards and description lists: label in `sit:text-body-subtle sit:text-sm`, value in `sit:text-default sit:text-2xl sit:font-semibold`.
