# Canvas Mainnav Component Skill

`<sit-mainnav>` is the primary horizontal navigation bar. It collapses into a hamburger menu on small screens. Navigation items use `<sit-mainnav-item>` and dropdown menus use `<sit-mainnav-dropdown>`.

No CSS styling modifications — custom properties and CSS parts are not exposed on this component.

## Usage Guideline

### When to use

- As the primary horizontal navigation bar for any Singapore Government digital service or web application.
- When users need to navigate between top-level sections of a site from a persistent header.
- When the site has a brand logo that should link back to the homepage.
- When some nav items should expand into dropdown menus with sub-links.
- When right-aligned items (e.g. login button, language toggle) are needed in the navigation bar.

### When NOT to use

- For secondary or section-level navigation — use `<sit-subnav>` or `<sit-sidenav>` instead.
- For in-page navigation between sections — use `<sit-table-of-contents>`.
- As the sole navigation in a sidebar layout — use `<sit-sidebar>` or `<sit-sidenav>`.
- When navigation is minimal and does not require a full header bar — consider a simpler standalone link structure.

## Behaviour

- Renders a horizontal navigation bar with a brand area, primary nav items, and optional right-aligned items.
- Collapses into a hamburger menu at the breakpoint defined by `expand` (default `lg`); use `expand="always"` to never collapse or `expand="never"` to always show the hamburger.
- `<sit-mainnav-item>` renders a nav link; the default slot takes an `<a>` tag.
- `<sit-mainnav-dropdown>` renders a dropdown trigger with `<sit-dropdown-item>` children; the `toggler` slot takes the trigger element.
- Items in the `end` slot are right-aligned and also collapse into the hamburger menu on small screens.
- Items in the `non-collapsible` slot remain visible at all screen sizes regardless of the `expand` setting.
- `active` on `<sit-mainnav-item>` highlights the current page link.
- Fires `sit-show`, `sit-after-show`, `sit-hide`, `sit-after-hide` when the collapsed menu opens or closes (mobile only).

## Component Composition

**`brand` slot** — a single `<img>` with `alt`, `width`, and `src`. Set `brandHref` on `<sit-mainnav>` to the homepage URL (`"/"`). Always provide brand content.

**Default slot** — `<sit-mainnav-item>` and `<sit-mainnav-dropdown>` elements for primary navigation. Do not place other elements directly in the default slot.

**Inside `<sit-mainnav-item>`** — a single `<a href="...">Label</a>`. Set `active` on the item matching the current route.

**Inside `<sit-mainnav-dropdown>`** — a `toggler` slot element (typically `<span>` with the section label) and `<sit-dropdown-item>` children with `<a>` tags for sub-navigation links.

**`end` slot** — right-aligned secondary actions: login button (`<sit-button>`), language toggle (`<sit-mainnav-item>`), or similar. These also collapse into the hamburger menu on small screens.

**`non-collapsible` slot** — items that stay visible at all screen sizes regardless of hamburger collapse state (e.g. a language icon, accessibility toggle).

**Avoid placing inside mainnav:**
- Form inputs or search bars in the default slot — use the `end` slot or a dedicated search component
- More than 5–7 primary nav items — consolidate into dropdowns to prevent overflow at mid-size breakpoints

## Advanced Considerations

- **`non-collapsible` slot**: use for items that must always be visible (e.g. a language toggle icon) — these are not hidden when the nav collapses.
- **`end` slot collapse behaviour**: items in `end` collapse into the hamburger menu alongside default slot items — if an item must stay visible on mobile, use `non-collapsible` instead.
- **`<sit-mainnav-dropdown>` API**: inherits `<sit-dropdown>` properties — see [dropdown.md](dropdown.md) for `active`, `menuIsOpen`, `close`, and `drop` options.
- **`fluid` layout**: by default the mainnav uses a fixed-width container; set `fluid` for full-width layouts (e.g. dashboards or edge-to-edge designs).
- **Singapore Government requirement**: `<sit-masthead>` must appear above `<sit-mainnav>` on all Singapore Government digital services.

## Edge Cases

- **No brand slot content**: the brand area renders empty — always provide an `<img>` in the `brand` slot and set `brandHref`.
- **No `active` item set**: no nav item is highlighted — set `active` on the item matching the current route; update it on route changes in SPAs.
- **`expand="never"` on desktop**: the hamburger menu is always shown even on wide screens — only use `never` for contexts where a collapsed nav is always desired.
- **Dropdown without `toggler` slot content**: the dropdown trigger renders with no label — always provide a `<span>` or button in the `toggler` slot.
- **Many nav items**: the horizontal bar may overflow on mid-size screens — test at the `expand` breakpoint and consider consolidating items into a dropdown.

## Quick Decision Guide

**When does the navbar collapse into hamburger?** → `expand="lg"` (default) — collapses below the `lg` breakpoint

**Never collapse (always expanded)?** → `expand="always"`

**Always collapsed?** → `expand="never"`

**Full-width container?** → Add `fluid`

**Brand logo link?** → Set `brandHref` to the target URL

```html
<!-- Full mainnav example -->
<sit-mainnav brandHref="/">
  <img slot="brand" alt="Site logo" width="130" src="/logo.svg" />

  <!-- Primary nav items -->
  <sit-mainnav-item>
    <a href="/about">About</a>
  </sit-mainnav-item>

  <sit-mainnav-item active>
    <a href="/services">Services</a>
  </sit-mainnav-item>

  <!-- Dropdown nav item -->
  <sit-mainnav-dropdown ariaLabel="Resources menu">
    <span slot="toggler">Resources</span>
    <sit-dropdown-item ariaLabel="Documentation"><a href="/docs">Documentation</a></sit-dropdown-item>
    <sit-dropdown-item ariaLabel="FAQ"><a href="/faq">FAQ</a></sit-dropdown-item>
  </sit-mainnav-dropdown>

  <!-- Right-aligned items (end slot) -->
  <sit-mainnav-item slot="end">
    <a href="/contact">Contact Us</a>
  </sit-mainnav-item>
  <sit-button slot="end">Login</sit-button>
</sit-mainnav>
```

## API Summary

### `<sit-mainnav>`

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `expand` | `sm \| md \| lg \| xl \| xxl \| always \| never` | `lg` | Breakpoint below which the nav collapses |
| `brandHref` | string | `""` | URL for the brand logo link |
| `fluid` | boolean | `false` | Uses a full-width container instead of a fixed-width one |

### `<sit-mainnav-item>`

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `active` | boolean | `false` | Marks the item as the current active page |
| `disabled` | boolean | `false` | Disables the nav item |

### `<sit-mainnav-dropdown>`

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `active` | boolean | `false` | Applies active styles on the dropdown button |
| `disabled` | boolean | `false` | Disables the dropdown toggle |
| `ariaLabel` | string | — | Accessible label forwarded to the toggle button's `aria-label` attribute. **Required** for accessibility — screen readers cannot read slotted toggler text. |

Also inherits `<sit-dropdown>` properties — see **[components-dropdown](dropdown.md)** for full API (`menuIsOpen`, `close`, `drop`).

## Slots

### `<sit-mainnav>`

| Slot | Purpose |
|---|---|
| `brand` | Brand logo image |
| *(default)* | `<sit-mainnav-item>` and `<sit-mainnav-dropdown>` elements |
| `end` | Items right-aligned in the navbar; also collapses into the hamburger menu |
| `non-collapsible` | Items that stay visible even when the menu is collapsed |

### `<sit-mainnav-item>`

| Slot | Purpose |
|---|---|
| *(default)* | Anchor `<a>` tag for navigation |

### `<sit-mainnav-dropdown>`

| Slot | Purpose |
|---|---|
| `toggler` | The element that toggles the dropdown (typically `<span>` or `<sit-button>`) |
| *(default)* | `<sit-dropdown-item>` elements |

## Events (`<sit-mainnav>`)

| Event | When |
|---|---|
| `sit-show` | Collapsed menu begins expanding (mobile only) |
| `sit-after-show` | Collapsed menu fully expanded |
| `sit-hide` | Collapsed menu begins collapsing |
| `sit-after-hide` | Collapsed menu fully collapsed |

---

**For AI agents**:
1. Always place the brand logo in the `brand` slot using an `<img>` element; set `brandHref` to `"/"` for home navigation.
2. Regular nav links use `<a>` tags inside `<sit-mainnav-item>`.
3. Right-aligned items (login button, contact link) go in the `end` slot.
4. `non-collapsible` slot stays visible on all screen sizes — use for icons that should never collapse.
5. The collapsed menu events fire only on mobile breakpoints when using the hamburger toggle.
6. Use `<sit-masthead>` above `<sit-mainnav>` as required for Singapore Government sites.
7. **Always set `ariaLabel` on `<sit-mainnav-dropdown>`** — the slotted toggler text is not accessible to screen readers through the shadow DOM boundary. Use a descriptive label like `"Resources menu"`.
