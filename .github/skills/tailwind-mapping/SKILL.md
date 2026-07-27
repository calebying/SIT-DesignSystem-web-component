---
name: tailwind-mapping
description: Converts Canvas CSS variables to Tailwind v4 utility classes in src/css/utility.css and creates playground documentation in playground/utility/ HTML files. Use when adding Tailwind mappings, creating utility class documentation, or implementing new color/spacing/typography utilities with proper preview examples. IMPORTANT - adding a mapping to utility.css alone is incomplete. Every new token mapping MUST also be accompanied by (1) a playground HTML demo in playground/utility/ and (2) a Storybook story in stories/utilities/.
metadata:
  author: sit-canvas
  version: "0.0.0"
  internal: true
---

# Tailwind Mapping

## Conversion Pattern

```
--sit-{category} → --{property}-{category} → sit:{property}-{category}
```

| Canvas Variable Pattern | Tailwind Property | Generated Class |
|---|---|---|
| `--sit-{v}-bg-{m}` | `--background-color-{v}-{m}` | `sit:bg-{v}-{m}` |
| `--sit-{v}-surface-{m}` | `--background-color-{v}-surface-{m}` | `sit:bg-{v}-surface-{m}` |
| `--sit-{v}-color-{m}` | `--text-color-{v}-{m}` | `sit:text-{v}-{m}` |
| `--sit-{v}-border-color-{m}` | `--border-color-{v}-{m}` | `sit:border-{v}-{m}` |
| `--sit-line-height-{m}` | `--leading-{m}` | `sit:leading-{m}` |
| `--sit-font-size-{m}` | `--text-{m}` | `sit:text-{m}` |
| `--sit-spacer-{m}` | `--spacing-{m}` | `sit:m-{m}`, `sit:p-{m}`, etc. |

See [reference/conversion-rules.md](reference/conversion-rules.md) for full per-category details (form colors, typography types, modifiers).

## Playground HTML Format

Each `playground/utility/*.html` table section follows this structure:

```html
<section class="sit:mb-2-xl">
  <h2>Category Name</h2>
  <sit-table>
    <sit-table-row>
      <sit-table-head>Canvas Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    <sit-table-row>
      <sit-table-cell><code>sit:bg-primary-default</code></sit-table-cell>
      <sit-table-cell><code>--sit-primary-bg-default</code></sit-table-cell>
      <sit-table-cell>
        <div class="sit:bg-primary-default sit:text-fixed-light sit:p-md">
          Primary background
        </div>
      </sit-table-cell>
    </sit-table-row>
  </sit-table>
</section>
```

**Contrast rules:** Fixed-light surfaces → `sit:text-fixed-dark`. Fixed-dark/dark surfaces → `sit:text-fixed-light`. Warning/yellow → `sit:text-fixed-dark`. Borders → use `sit:border-2 sit:border-{color} sit:p-md`.

## Workflow: Adding a New Token Mapping

1. **Add token to theme file** (`root.css`, `day.css`, or `night.css`)
2. **Add mapping to `src/css/utility.css`** inside the correct existing `@theme {}` section — follow the conversion pattern table above
3. **Create/update `playground/utility/[name].html`** with a live preview table
4. **Run `pnpm run utility:dev`** and verify the utility class renders in light and dark mode
5. **Create `stories/utilities/[name].stories.js`** Storybook story

## Commands

| Command | Purpose |
|---------|---------|
| `pnpm run utility:dev` | Tailwind watches `playground/utility/*.html` |
| `pnpm run dev` | Preview playground in browser |
| `pnpm storybook` | Preview Storybook documentation |
- **Storybook:** `pnpm run storybook` (preview Storybook documentation)

### Production
- **Build:** `pnpm build` (production build)

## Related Skills

- **token-workflow** - For high-level token architecture and documentation patterns
