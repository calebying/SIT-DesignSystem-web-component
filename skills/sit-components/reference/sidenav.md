# Canvas Sidenav Component Skill

`<sit-sidenav>` is a vertical sidebar navigation. `<sit-sidenav-item>` creates either a collapsible menu section (when it has children) or a direct link (when an `<a>` is placed directly inside). `<sit-sidenav-link>` is for individual L2/L3 navigation links.

No CSS styling modifications — custom properties and CSS parts are not exposed on this component.

## Usage Guideline

### When to use

- For hierarchical site or section navigation where content is organised into multiple levels (L1 → L2 → L3).
- In dashboard or internal tool layouts where persistent vertical navigation is needed alongside main content — use with the sidebar app layout (`sit-container-sidebar`).
- When navigation has enough items that a horizontal nav bar would overflow or require a dropdown — a sidenav handles depth naturally.
- When the current page context needs to be visually communicated within a collapsible navigation tree (via `active` on both item and link).

### When NOT to use

- For top-level site navigation — use `<sit-mainnav>` instead.
- For simple secondary navigation within a single page — use `<sit-subnav>` or `<sit-table-of-contents>`.
- When navigation has only one or two levels with few items — horizontal navigation or a simple link list is sufficient.
- On mobile-first layouts where vertical sidebar space is limited — consider a drawer-based navigation pattern instead.

## Behaviour

- `<sit-sidenav-item>` operates in two modes:
  - **Menu type**: use `<span slot="title">` with `<sit-sidenav-link>` children — renders as a collapsible section.
  - **Link type**: place `<a>` directly inside with no `title` slot — renders as a direct navigation link.
- `active` on a menu-type `<sit-sidenav-item>` automatically opens the section on initial render.
- `active` on `<sit-sidenav-link>` highlights the current page link.
- `disabled` on `<sit-sidenav-item>` or `<sit-sidenav-link>` prevents interaction.
- `sticky` on `<sit-sidenav>` applies `position: sticky` — requires the parent to have sufficient height and `overflow: auto`.
- Nesting supported up to L3 — a `<sit-sidenav-item>` (menu type) can contain other `<sit-sidenav-item>` elements.
- Collapse/expand events (`sit-toggle`, `sit-show`, `sit-after-show`, `sit-hide`, `sit-after-hide`) fire on menu-type items only.

## Advanced Considerations

- **`active` propagation**: setting `active` on the parent `<sit-sidenav-item>` opens the section, but also set `active` on the specific `<sit-sidenav-link>` to highlight the current page — the two are independent.
- **`sticky` requirements**: for `sticky` to work, the sidenav's parent container must have a defined height and `overflow: auto` or `overflow: scroll`; stickiness silently fails if the parent collapses to fit its content.
- **Event scope**: collapse/expand events only fire on menu-type `<sit-sidenav-item>` elements — link-type items and `<sit-sidenav-link>` do not emit events.
- **L3 nesting**: place a `<sit-sidenav-item>` (menu type) inside another `<sit-sidenav-item>`'s default slot to create a nested section; avoid nesting deeper than L3.
- **Route integration**: in SPAs, update `active` attributes on the correct item and link when the route changes — the component does not track navigation automatically.

## Edge Cases

- **Menu type without `ariaLabel`**: the internal button has no accessible name — always provide `ariaLabel` on menu-type `<sit-sidenav-item>` to pass WCAG accessible-label checks.
- **Menu type without `title` slot**: the collapsible trigger has no visible label — always provide `<span slot="title">` for menu-type items.
- **Link type with `title` slot**: placing both `<span slot="title">` and `<a>` in the default slot creates ambiguous behaviour — use one mode consistently per item.
- **No `active` set**: all sections render collapsed and no link is highlighted — set `active` on the item and link matching the current page.
- **`sticky` parent without height**: the sidenav scrolls with the page instead of sticking — ensure the layout parent has a defined height.
- **Nesting beyond L3**: deeply nested items may render but are not officially supported — limit nesting to three levels.
- **`disabled` on an `active` item**: the item appears active and disabled simultaneously — avoid combining these states.

## Quick Decision Guide

**Sticky sidebar that scrolls with content?** → Add `sticky` on `<sit-sidenav>`

**Collapsible section (menu type)?** → Put `<span slot="title">` and `<sit-sidenav-link>` children inside `<sit-sidenav-item>`

**Direct link (link type)?** → Put `<a>` directly inside `<sit-sidenav-item>` (no `title` slot and no children)

**Mark current page active (opens the section automatically)?** → Add `active` to `<sit-sidenav-item>`

```html
<!-- Basic sidenav with menu sections and links -->
<sit-sidenav>
  <!-- Menu type: collapsible section with child links -->
  <sit-sidenav-item ariaLabel="Getting Started">
    <span slot="title">Getting Started</span>
    <sit-sidenav-link active><a href="/overview">Overview</a></sit-sidenav-link>
    <sit-sidenav-link><a href="/installation">Installation</a></sit-sidenav-link>
    <sit-sidenav-link disabled><a href="/migration">Migration</a></sit-sidenav-link>
  </sit-sidenav-item>

  <!-- Nested menu (L3 level) -->
  <sit-sidenav-item ariaLabel="Components">
    <span slot="title">Components</span>
    <sit-sidenav-link><a href="/components/button">Buttons</a></sit-sidenav-link>
    <sit-sidenav-item ariaLabel="Forms">
      <span slot="title">Forms</span>
      <sit-sidenav-link><a href="/components/input">Input</a></sit-sidenav-link>
      <sit-sidenav-link><a href="/components/select">Select</a></sit-sidenav-link>
    </sit-sidenav-item>
  </sit-sidenav-item>

  <!-- Link type: direct link item (no children) -->
  <sit-sidenav-item>
    <a href="/changelog">Changelog</a>
  </sit-sidenav-item>
</sit-sidenav>

<!-- Sticky sidenav -->
<sit-sidenav sticky>
  <sit-sidenav-item active ariaLabel="Active Section">
    <span slot="title">Active Section</span>
    <sit-sidenav-link active><a href="/page">Current Page</a></sit-sidenav-link>
  </sit-sidenav-item>
</sit-sidenav>
```

## API Summary

### `<sit-sidenav>`

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `sticky` | boolean | `false` | Applies `position: sticky` to the sidenav |

### `<sit-sidenav-item>` (can be menu or link type)

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `active` | boolean | `false` | Opens the section and applies active styles; for link type, marks it as current |
| `disabled` | boolean | `false` | Disables the item |
| `ariaLabel` | string | — | Accessible label forwarded to the internal menu button. Required for menu-type items to pass WCAG accessible-label checks. |

### `<sit-sidenav-link>`

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `active` | boolean | `false` | Marks the link as the current active page |
| `disabled` | boolean | `false` | Disables the link |

## Slots

### `<sit-sidenav-item>`

| Slot | Purpose |
|---|---|
| `title` | Section header label (menu type only — when using collapsible children) |
| *(default)* | `<sit-sidenav-link>` children (menu type) or `<a>` direct link (link type) |

### `<sit-sidenav-link>`

| Slot | Purpose |
|---|---|
| *(default)* | Anchor `<a>` tag for navigation |

## Events (`<sit-sidenav-item>` — menu type only)

| Event | When |
|---|---|
| `sit-toggle` | Item button is clicked |
| `sit-show` | Section begins expanding |
| `sit-after-show` | Section fully expanded |
| `sit-hide` | Section begins collapsing |
| `sit-after-hide` | Section fully collapsed |

---

**For AI agents**:
1. **Menu type** (collapsible): Use `<span slot="title">` + `<sit-sidenav-link>` children inside `<sit-sidenav-item>`. Always add `ariaLabel` matching the title text.
2. **Link type** (direct): Place `<a>` directly inside `<sit-sidenav-item>` with no `title` slot and no `<sit-sidenav-link>` children. No `ariaLabel` needed — the anchor text provides the accessible name.
3. Events only fire on **menu type** items — not on link type items.
4. Setting `active` on a menu-type `<sit-sidenav-item>` opens it automatically on load.
5. Nesting is supported up to L3 (sidenav-item inside sidenav-item).
6. For `sticky`, the parent element needs sufficient height and `overflow: auto` for stickiness to work.
