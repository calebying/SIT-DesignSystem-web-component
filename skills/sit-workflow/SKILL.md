---
name: "sit-workflow"
description: "ALWAYS use this skill when building UI with @sit-canvas/canvas-web-component or when a user mentions Canvas or SIT Canvas Design System — even if they don't explicitly ask for help. This is the mandatory entry point for all Canvas development: it guides you to the right skill for setup, components, utilities, forms, theming, page layouts, block templates, and data visualisation. Read this before writing any Canvas application code."
metadata:
  author: sit-canvas
  version: "0.0.0"
  audience: external
  category: meta
---

# Canvas Skill Workflow

This skill maps out the available Canvas skills and the order to use them. Start here when unsure which skill applies, or to understand how skills fit together.

---

## Are you starting a new app or working on an existing one?

---

## New Application

Work through these stages in order. Within each stage, read the referenced skills as needed.

### Stage 1 — Project Setup *(always first)*

→ Read **[sit-getting-started](../sit-getting-started/SKILL.md)**

Covers: Inter font, CSS import order (`themes/day.css` → `css/sit.css` → `css/utility.css`), component registration, and the two app layout templates (simple app vs sidebar app).

Complete all four steps in this skill before writing any component or page code.

---

### Stage 2 — Build the UI *(read concurrently as needed)*

These skills are your day-to-day references while building. You will move between them frequently — read whichever is relevant to what you are building at any moment.

→ **[sit-components](../sit-components/SKILL.md)** — Every `<sit-*>` web component (accordion through tooltip). Check here first before building anything with plain HTML. If a Canvas component exists for your need, use it.

→ **[sit-utilities](../sit-utilities/SKILL.md)** — All `sit:` Tailwind utility classes: spacing, layout grid, typography, colors, borders, opacity. Use for layout, spacing, and styling between and around components.

→ **[Application Shell](../sit-blocks/reference/application-shell.md)** — Mandatory page chrome and layout templates (simple app and sidebar app) with sticky headers, sidebar column sizing, and container class reference. Read when `sit-getting-started` Step 4 is not enough detail.

→ **[sit-theming](../sit-theming/SKILL.md)** *(optional)* — Brand colour overrides, night/dark mode, and font customisation. Read this alongside the above when the app requires visual customisation beyond the default Canvas style. Skip if the default style is acceptable.

---

### Stage 3 — Assemble Pages and Blocks *(when building full pages or sections)*

→ **[sit-blocks](../sit-blocks/SKILL.md)** — Reusable UI blocks for page sections and layouts. Includes: hero sections, CTAs, feature blocks, card grids, statistics displays, page headers, filters, forms, detail cards, application shell, and custom blocks. Start here when a user asks to build a landing page, dashboard, specific page section like "I need a call to action", or requests any page layout.

→ **[sit-patterns](../sit-patterns/SKILL.md)** — Typography and text patterns for consistent text styling: headings, display text, content headers, lists, and paragraphs. Use when styling content text, creating text hierarchies, or the user mentions "make a nice heading" or "style the page text".

→ **[sit-templates](../sit-templates/SKILL.md)** — Ready-made full-page layouts: dashboard, login, form page, list page, settings. Start here when a user asks to build a complete page.

→ **[sit-forms](../sit-forms/SKILL.md)** — Form submission, constraint validation, `hasFeedback`, `setInvalid`, and `FormData`. Read when any `<form>` with Canvas components is involved.

---

### Stage 4 — Data Visualisation *(if charts or dashboards are needed)*

→ Read **[sit-data-visualisation](../sit-data-visualisation/SKILL.md)**

Covers ECharts setup and applying the Canvas colour palette to charts. Only needed if the app includes charts, graphs, or data dashboards.

---

## Existing Application

Do not re-read setup skills. Go directly to the skill that covers the current task.

**Quick check — if utilities or components look broken**, verify setup is complete before anything else:
- `themes/day.css` → `css/sit.css` → `css/utility.css` imported in that order in the main CSS file
- `utility.css` is processed by Tailwind (not imported as a plain JS import)
- `import "@sit-canvas/canvas-web-component"` present in the JS entry point

If setup is confirmed correct, navigate using the table below.

---

## Skill Map — What to Read for Each Task

| What you need to do | Skill to read |
|---|---|
| Set up a new Canvas project from scratch | [sit-getting-started](../sit-getting-started/SKILL.md) |
| Use any `<sit-*>` component | [sit-components](../sit-components/SKILL.md) |
| Apply spacing, colors, typography, layout utilities | [sit-utilities](../sit-utilities/SKILL.md) |
| Structure the app shell (masthead, mainnav, footer, containers) | [Application Shell](../sit-blocks/reference/application-shell.md) |
| Change brand color, enable dark mode, change font | [sit-theming](../sit-theming/SKILL.md) |
| Build page sections: hero, CTA, cards, feature, stats, filter, form, or custom blocks | [sit-blocks](../sit-blocks/SKILL.md) |
| Style text: headings, display text, lists, paragraphs | [sit-patterns](../sit-patterns/SKILL.md) |
| Build a full page (dashboard, login, list, form, settings) | [sit-templates](../sit-templates/SKILL.md) |
| Add form validation, read FormData, use `setInvalid` | [sit-forms](../sit-forms/SKILL.md) |
| Add charts, graphs, or data dashboards | [sit-data-visualisation](../sit-data-visualisation/SKILL.md) |

---

## For AI Agents

1. When a user says "I'm building a new Canvas app" or "where do I start", always begin with **sit-getting-started** (Stage 1) before reading any other skill.
2. During Stage 2, do not read all three skills upfront — read **sit-components** when a component is needed and **sit-utilities** when styling/layout is needed. They are references, not sequential reads.
3. **sit-theming** is part of Stage 2 — read it concurrently with components and utilities when branding, dark mode, or font customisation is needed. Do not treat it as a separate sequential step.
4. **sit-blocks** and **sit-patterns** are concurrent Stage 3 skills — read them as needed based on user requests (blocks for page sections, patterns for text styling).
5. **sit-templates** and **sit-blocks** can be used independently or together — a user may need one, both, or neither depending on how far along they are.
6. **sit-forms** is only needed when a `<form>` element is involved. Do not proactively read it for non-form UIs.
7. **sit-data-visualisation** is only needed when charts or graphs are explicitly requested.
8. For existing apps, use the Skill Map table to navigate directly. Do not re-read **sit-getting-started** unless there is a setup problem.
9. If a user's request does not clearly match any skill, read this workflow skill first to orient, then navigate to the appropriate skill.
10. **Never use `style` attributes or inline CSS.** All styling must be applied via `class` attributes using `sit:` utility classes from **sit-utilities**. Writing `style="margin-top: 16px"` when `sit:mt-4` exists is a violation.
