# Canvas Table Component Skill

`<sit-table>` renders structured tabular data. **Always use the slot-based sub-components** — `<sit-table-row>`, `<sit-table-head>`, and `<sit-table-cell>` — for full structural control. The legacy array-based properties (`tableData`, `columnHeader`, `rowHeader`) exist but must not be used.

No CSS styling modifications — custom properties and CSS parts are not exposed on this component.

## Usage Guideline

### When to use

- When presenting structured data with a clear relationship between rows and columns (e.g. records, reports, listings).
- When users need to scan, compare, or reference multiple data points across multiple items.
- For admin dashboards, data management interfaces, and any feature involving lists of records with multiple attributes per item.
- When cells need to contain rich content like action buttons, status badges, or links alongside data.

### When NOT to use

- For layout purposes — use CSS grid or flexbox utilities instead.
- When there is only one column of data — a simple list is more appropriate.
- For displaying key–value pairs of a single item — use `<sit-description-list>` instead.
- When the data volume is very small (1–2 rows with 1–2 columns) — a plain prose format may be clearer.
- **Inside a narrow grid column, or beside other elements sharing the same row** — a table must always span the full 12-column grid width. Placing it in a split layout (e.g. 6 + 6 columns) compresses columns and harms readability.

## Behaviour

- `<sit-table>` is a container that wraps `<sit-table-row>`, `<sit-table-head>`, and `<sit-table-cell>` sub-components.
- The first `<sit-table-row>` should contain `<sit-table-head>` cells; all subsequent rows use `<sit-table-cell>`.
- `headerBackground` on `<sit-table>` applies a background shade to all `<sit-table-head>` cells automatically.
- `tableBorder` on `<sit-table>` renders visible borders on all cells.
- `responsive` on `<sit-table>` enables horizontal scrolling at the specified breakpoint (`sm`, `md`, `lg`, `xl`, or `always`).
- `<sit-table-cell>` accepts any HTML content — use for badges, buttons, links, or mixed content.
- No custom events or public methods on any sub-component.

## Advanced Considerations

- **Always use slot-based sub-components**: the legacy array-based properties (`tableData`, `columnHeader`, `rowHeader`) exist on `<sit-table>` but must never be used — use `<sit-table-row>`, `<sit-table-head>`, and `<sit-table-cell>` exclusively.
- **`headerBackground` and `tableBorder` cascade**: these attributes are set on `<sit-table>` only and automatically affect all descendant header and cell elements — do not set them on individual sub-components.
- **`responsive` breakpoint behaviour**: a table with `responsive="md"` scrolls horizontally only on viewports narrower than the `md` breakpoint; on wider viewports it renders normally.
- **Rich cell content**: `<sit-table-cell>` slots accept any HTML — placing interactive elements (buttons, links) inside cells is the supported pattern for action columns.
- **No sorting or pagination built in**: `<sit-table>` is a presentational component — implement sorting, filtering, and pagination logic in your application layer.

## Edge Cases

- **Empty table**: `<sit-table>` with no rows renders an empty container — always include at least a header row.
- **Missing header row**: without `<sit-table-head>` cells, the table has no accessible column headers — always include a header row with `<sit-table-head>` elements.
- **Inconsistent column counts**: rows with fewer cells than the header row leave trailing empty columns — ensure all rows have the same number of cells.
- **Very wide tables without `responsive`**: content overflows the container on narrow viewports — add `responsive` when the table has many columns.
- **Complex content in cells on narrow viewports**: buttons or badges inside cells may wrap or overflow — test rich cell layouts at target breakpoints.

## Sub-components

| Tag | Role |
|-----|---------|
| `<sit-table>` | Container. Accepts `tableBorder` and `headerBackground` boolean attributes. |
| `<sit-table-row>` | A row. Place inside `<sit-table>`. First row typically contains `<sit-table-head>` cells. |
| `<sit-table-head>` | A header cell. Inherits `headerBackground` styling from the parent `<sit-table>`. |
| `<sit-table-cell>` | A data cell. Can contain any HTML — text, badges, buttons, links. |

## Basic Usage

```html
<sit-table>
  <sit-table-row>
    <sit-table-head>Name</sit-table-head>
    <sit-table-head>Department</sit-table-head>
    <sit-table-head>Status</sit-table-head>
  </sit-table-row>
  <sit-table-row>
    <sit-table-cell>Alice Tan</sit-table-cell>
    <sit-table-cell>Engineering</sit-table-cell>
    <sit-table-cell><sit-badge variant="success">Active</sit-badge></sit-table-cell>
  </sit-table-row>
  <sit-table-row>
    <sit-table-cell>Bob Lee</sit-table-cell>
    <sit-table-cell>Design</sit-table-cell>
    <sit-table-cell><sit-badge variant="warning">Pending</sit-badge></sit-table-cell>
  </sit-table-row>
</sit-table>
```

## With borders and header background

```html
<sit-table tableBorder headerBackground>
  <sit-table-row>
    <sit-table-head>Reference</sit-table-head>
    <sit-table-head>Applicant</sit-table-head>
    <sit-table-head>Submitted</sit-table-head>
    <sit-table-head>Amount</sit-table-head>
    <sit-table-head>Status</sit-table-head>
  </sit-table-row>
  <sit-table-row>
    <sit-table-cell>REF-00412</sit-table-cell>
    <sit-table-cell>Lim Ah Kow</sit-table-cell>
    <sit-table-cell>01 Jan 2025</sit-table-cell>
    <sit-table-cell>$1,200</sit-table-cell>
    <sit-table-cell><sit-badge variant="success">Active</sit-badge></sit-table-cell>
  </sit-table-row>
</sit-table>
```

## Rich cell content (actions, links, badges)

`<sit-table-cell>` slots accept any HTML — use this for interactive content:

```html
<sit-table-row>
  <sit-table-cell>REF-00398</sit-table-cell>
  <sit-table-cell>Tan Bee Choo</sit-table-cell>
  <sit-table-cell><sit-badge variant="warning">Pending</sit-badge></sit-table-cell>
  <sit-table-cell>
    <sit-button variant="ghost" size="sm">View</sit-button>
    <sit-button variant="ghost" size="sm">Edit</sit-button>
  </sit-table-cell>
</sit-table-row>
```

## Responsive horizontal scroll

```html
<sit-table responsive="md">
  <!-- rows and cells -->
</sit-table>
```

## API Summary

### `<sit-table>` attributes

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `headerBackground` | boolean | `false` | Applies background shade to all `<sit-table-head>` cells |
| `tableBorder` | boolean | `false` | Renders borders on all cells |
| `responsive` | `sm \| md \| lg \| xl \| always` | — | Enables horizontal scroll below the breakpoint |

`<sit-table-row>`, `<sit-table-head>`, and `<sit-table-cell>` have no attributes — all content goes in their default slot.

## Events

None.

---

**For AI agents**:
1. **Always use slots** — `<sit-table-row>`, `<sit-table-head>`, `<sit-table-cell>` are the correct approach. Never use `tableData`, `columnHeader`, or `rowHeader` array properties.
2. The first `<sit-table-row>` should contain `<sit-table-head>` cells; subsequent rows use `<sit-table-cell>`.
3. `<sit-table-cell>` accepts rich HTML — badges, buttons, links are fine inside cells.
4. `headerBackground` and `tableBorder` are boolean attributes on `<sit-table>` only — they cascade down to sub-components automatically.
5. There are no custom events or public methods on this component.
6. **`<sit-table>` must always occupy the full 12-column grid width.** Never place it beside another element sharing the same grid row (e.g. do not put it in a 6-column half alongside a sidebar or form). Tables need the full width to display columns legibly — splitting them into a partial-width column makes them unreadable. If a filter panel or sidebar is needed, stack it above or below the table, not beside it.
