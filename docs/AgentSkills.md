# Agent Skills <sit-badge outlined variant="warning">beta</sit-badge>

Canvas ships a set of **agent skills**: structured knowledge files that teach AI coding assistants (GitHub Copilot, Claude Code, Cursor, Windsurf, and others) how to build with Canvas correctly.

Once installed, your AI assistant can answer questions like:

- *"Build a sidebar dashboard layout using Canvas"*
- *"What spacing utility class should I use between these cards?"*
- *"How to prevent modal from closing when clicking on the background panel?"

…and produce idiomatic, design-system-correct code without hallucinating component names or guessing token values.

---

## Installation

Run the following command in your project root:

```bash
npx skills add calebying/SIT-DesignSystem-web-component --yes
```

Select all existing skills from the list. This pulls the latest skills from the `skills/` folder of this repository into your local `.agents/` directory, where compatible AI tools automatically pick them up.

---

## Add Canvas to your agent instructions file

The most reliable way to ensure your agent always uses Canvas skills is to add it to your project's agent instructions file, so the rule is persistent across every session without needing to repeat it.

Depending on your agent or IDE, add the following to the relevant file:

| Agent / Tool | File |
|---|---|
| Claude Code | `CLAUDE.md` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Cursor | `.cursor/rules` |
| Other agents | `agents.md` or equivalent |

Add a line like:

```
When building any UI, always use the Canvas web component library and Canvas Tailwind utilities for styling. Consult the Canvas skills for correct component usage, slot structure, design patterns, and utility classes.
```

This means every new session automatically inherits the Canvas constraint. You never have to remind the agent to use Canvas, and it will consult the skills before reaching for non-Canvas patterns.

---

## Available skills

| Skill | What it covers |
|---|---|
| **sit-workflow** | Start here when unsure. Maps all Canvas skills and the order to use them: new app path and existing app navigation. |
| **sit-getting-started** | Technical setup: Inter font, CSS import order, component registration, and app layout templates. |
| **sit-components** | All 46 `<sit-*>` web components (accordion through tooltip) with attributes, slots, events, and usage examples. |
| **sit-utilities** | All `sit:` Tailwind utility classes: grid, spacing, typography, colour semantics, backgrounds, borders, opacity, and more. |
| **sit-theming** | Brand colour overrides, day/night mode setup, and font customisation via CSS token overrides. |
| **sit-forms** | Form validation using `ElementInternals`, `hasFeedback`, constraint validation, `FormData`, and `setInvalid`. |
| **sit-blocks** | Application shell (masthead, mainnav, footer) and self-contained UI blocks: filter sidebar, session detail, and more. |
| **sit-templates** | Full-page layouts: dashboard, login, list page, form page, settings. |
| **sit-data-visualisation** | Charts and data dashboards with ECharts and the Canvas colour palette. |

---

## Recommended workflow

For a **new application**, work through skills in this order:

1. **sit-getting-started**: complete project setup before writing any component code
2. **sit-components** + **sit-utilities**: your day-to-day references while building
3. **sit-templates** + **sit-blocks**: when assembling full pages
4. **sit-forms**: when any `<form>` element is involved
5. **sit-data-visualisation**: only when charts or dashboards are needed

For an **existing application** with sit v3 setup done, skip setup skills and go directly to the relevant skill using the table above.

If unsure where to start, ask your AI assistant to read the **sit-workflow** skill first.

---

## How it works

Skills are plain Markdown files structured for AI consumption. Each skill contains:

- A **Quick Decision Guide**: decision trees for choosing the right token or component variant
- An **API Summary**: compact attribute/property tables
- **Usage examples**: idiomatic HTML the AI can produce and adapt
- **For AI Agents** section: explicit rules and common mistakes to avoid

Skills are read by the agent at query time. They do not add runtime dependencies to your project.

---

## Keeping skills up to date

Run the following command to pull the latest skill updates:

```bash

npx skills add calebying/SIT-DesignSystem-web-component

```

Skills follow the latest library version. After upgrading `@sit-canvas/canvas-web-component`, update skills to ensure the AI agent's knowledge matches the installed version.
