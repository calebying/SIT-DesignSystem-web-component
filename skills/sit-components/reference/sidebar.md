# Canvas Sidebar Component Skill

`<sit-sidebar>` is a collapsible vertical navigation component with icon-only collapse mode, drawer overlays for root-level groups, and multi-level nesting (up to 3 levels). Use it for internal tools, admin dashboards, and any product with persistent left-rail navigation.

## Sub-components

| Tag | Role |
|-----|------|
| `<sit-sidebar>` | Root container — manages active state, collapse, and drawer coordination |
| `<sit-sidebar-item>` | Leaf navigation item (no children). Supports an optional `<a>` child for real URL navigation |
| `<sit-sidebar-group>` | Parent item that expands to reveal children. At level 0 opens a drawer overlay; at level 1+ toggles an inline submenu |
| `<sit-sidebar-section>` | Visual grouping with an optional collapsible section title. Items inside it participate in active tracking normally |

## Usage Guideline

### When to use

- For internal tools, admin dashboards, and products where users navigate between multiple sections frequently and benefit from persistent left-rail navigation.
- When navigation has multiple levels of hierarchy (up to 3 levels) that cannot be flattened into a top nav or subnav.
- When the sidebar app layout (`sit-container-sidebar`) is being used — `<sit-sidebar>` is the intended companion component.
- When collapsible icon-only mode is needed to give more space to main content while retaining navigation access.

### When NOT to use

- For public-facing websites where a top navigation bar (`<sit-mainnav>`) is more appropriate.
- When navigation is shallow (1–2 levels with few items) — a `<sit-sidenav>` or `<sit-subnav>` is simpler.
- For in-page section navigation — use `<sit-table-of-contents>` instead.

## Behaviour

- `<sit-sidebar>` manages active state, collapse/expand, and drawer coordination for all descendant items and groups.
- `active` on `<sit-sidebar>` sets the active item by `name` — the sidebar highlights the matching item and opens any ancestor groups automatically.
- `collapsed` on `<sit-sidebar>` switches to icon-only mode — all labels are hidden, only `icon` slot icons are shown.
- `<sit-sidebar-group>` at level 0 (direct child of sidebar or section) opens a **drawer overlay** when clicked; at levels 1+ it toggles an **inline submenu**.
- `<sit-sidebar-section>` provides visual grouping with an optional header; add `collapsible` to let users toggle its visibility.
- `icon` is **required** on every `<sit-sidebar-item>` and `<sit-sidebar-group>` at levels 1 and 2 — omitting it breaks icon-only collapse mode.
- **Fallback icon**: if you are unsure whether an icon name exists, use `name="placeholder"` — this always renders a valid icon and prevents broken icon slots.
- `sit-select` fires with `{ activeItem: string }` (the `name` of the selected item) whenever an item or group is activated.
- Navigation via anchor: place an `<a href="...">` as a direct child of `<sit-sidebar-item>` — on activation the sidebar automatically clicks it.

## Advanced Considerations

- **`name` is required for active tracking**: every `<sit-sidebar-item>` and `<sit-sidebar-group>` must have a unique `name`; without it, `active` matching silently fails. `<sit-sidebar-section>` `name` is for identification only and does not participate in `active` tracking.
- **Drawer vs inline submenu**: root-level `<sit-sidebar-group>` elements open as drawer overlays; nested groups open inline. Design your hierarchy with this distinction in mind — typically keep top-level groups broad.
- **Sticky layout**: pair `<sit-sidebar>` with `sit:sticky`, a fixed height, and `sit:overflow-y-auto` on the wrapper element to achieve a sticky left rail.
- **`indicator` slot**: used to show notification counts or status indicators on items and groups — for example, the number of unread messages or pending actions. Use `<sit-badge slot="indicator" outlined="" variant="white">3</sit-badge>` as the standard pattern, or any custom element up to 24×24 px. The slot sits before the auto-appended chevron on groups.

## Edge Cases

- **Missing `name` on items**: `active` tracking will not work — always provide a unique `name` on every item and group.
- **Missing `icon` at levels 1–2**: breaks icon-only collapse mode — always supply an `icon` slot at these levels even if visually redundant.
- **Unknown icon name**: if an icon name cannot be verified, use `name="placeholder"` as a safe fallback — do not omit the `icon` slot or leave the name empty.
- **Nesting beyond level 3**: not officially supported — limit to 3 levels to avoid rendering issues.
- **`sit-sidebar-section` `collapsed` without `collapsible`**: the section renders collapsed but has no user control to expand — only use `collapsed` together with `collapsible`.
- **`activeItem` name collision**: if two items share the same `name`, the sidebar highlights both — ensure all `name` values are unique across the entire sidebar tree.

## Quick Decision Guide

**Simple flat nav (no nesting)?** → Use `sit-sidebar-item` directly inside `sit-sidebar`

**Grouped sections with titles?** → Wrap items in `sit-sidebar-section title="..." name="..."`

**Expandable groups with children?** → Use `sit-sidebar-group`; nest `sit-sidebar-item` or more `sit-sidebar-group` inside (up to 3 levels)

**Collapsible section (user can hide)?** → Add `collapsible` on `sit-sidebar-section`

**Collapsible sidebar (icon-only mode)?** → Set `collapsed` on `sit-sidebar`, or let the built-in toggle button handle it

**Programmatic navigation (track active page)?** → Set `active="item-name"` on `sit-sidebar`; give each item/group a unique `name`

**Logo/brand in the sidebar header?** → Use `slot="upper"` — any HTML is accepted (`<div>`, `<img>`, etc.)

**Badge or notification count on an item?** → Use `<sit-badge slot="indicator" outlined="" variant="white">3</sit-badge>`, or a custom element up to 24×24 px

## Basic Usage

```html
<sit-sidebar active="dashboard">
  <sit-sidebar-item name="dashboard" title="Dashboard">
    <sit-icon name="grid-fill" slot="icon"></sit-icon>
  </sit-sidebar-item>
  <sit-sidebar-item name="records" title="Records">
    <sit-icon name="users" slot="icon"></sit-icon>
  </sit-sidebar-item>
  <sit-sidebar-item name="settings" title="Settings">
    <sit-icon name="gear" slot="icon"></sit-icon>
  </sit-sidebar-item>
</sit-sidebar>
```

## Full Example — Sections, Groups, and Nesting

```html
<sit-sidebar active="meetings">
  <div slot="upper">My App</div>

  <!-- Non-collapsible section -->
  <sit-sidebar-section title="Main" name="main">
    <!-- Root-level group: clicking opens a drawer overlay -->
    <sit-sidebar-group title="Dashboard" name="dashboard">
      <sit-icon name="house" slot="icon"></sit-icon>

      <!-- Nested group (level 1): clicking toggles an inline submenu -->
      <sit-sidebar-group title="Summary" name="summary">
        <sit-icon name="building" slot="icon"></sit-icon>
        <sit-sidebar-item title="Latest Sales" name="latest-sales">
          <sit-icon name="building" slot="icon"></sit-icon>
          <a href="/sales"></a>
        </sit-sidebar-item>
        <sit-sidebar-item title="Refunds" name="refunds">
          <sit-icon name="building" slot="icon"></sit-icon>
        </sit-sidebar-item>
      </sit-sidebar-group>

      <sit-sidebar-item title="Meetings" name="meetings">
        <sit-icon name="calendar" slot="icon"></sit-icon>
        <a href="/meetings"></a>
      </sit-sidebar-item>
      <sit-sidebar-item title="Gallery" name="gallery">
        <sit-icon name="camera" slot="icon"></sit-icon>
        <a href="/gallery"></a>
      </sit-sidebar-item>
    </sit-sidebar-group>

    <sit-sidebar-group title="Reports" name="reports">
      <sit-icon name="file-text" slot="icon"></sit-icon>
      <sit-sidebar-item title="Yearly" name="yearly">
        <sit-icon name="house" slot="icon"></sit-icon>
      </sit-sidebar-item>
      <sit-sidebar-item title="Monthly" name="monthly">
        <sit-icon name="house" slot="icon"></sit-icon>
      </sit-sidebar-item>
    </sit-sidebar-group>

    <!-- Item with a custom trailing icon -->
    <sit-sidebar-item title="Public Members" name="public-members">
      <sit-icon name="user-circle" slot="icon"></sit-icon>
      <sit-icon name="box-arrow-up-right" slot="indicator"></sit-icon>
    </sit-sidebar-item>
  </sit-sidebar-section>

  <!-- Collapsible sections -->
  <sit-sidebar-section title="Organization" name="organization" collapsible>
    <sit-sidebar-item title="Team Management" name="team-management">
      <sit-icon name="users" slot="icon"></sit-icon>
    </sit-sidebar-item>
    <sit-sidebar-item title="Projects" name="projects">
      <sit-icon name="layers" slot="icon"></sit-icon>
    </sit-sidebar-item>
  </sit-sidebar-section>

  <sit-sidebar-section title="Configuration" name="configuration" collapsible>
    <sit-sidebar-item title="Settings" name="settings">
      <sit-icon name="gear" slot="icon"></sit-icon>
    </sit-sidebar-item>
  </sit-sidebar-section>

  <!-- Top-level items outside any section are valid -->
  <sit-sidebar-item title="Help &amp; Support" name="help-support">
    <sit-icon name="question-circle" slot="icon"></sit-icon>
    <sit-badge slot="indicator" outlined="" variant="white">3</sit-badge>
  </sit-sidebar-item>

  <sit-sidebar-item title="Premium Features" name="premium-features">
    <sit-icon name="star" slot="icon"></sit-icon>
  </sit-sidebar-item>
</sit-sidebar>
```

## API Summary

### `<sit-sidebar>`

| Attribute | Type | Default | Purpose |
|-----------|------|---------|---------|
| `active` | `string` | `""` | Name of the currently active item. Two-way: set programmatically or read after user interaction |
| `collapsed` | `boolean` | `false` | When true, sidebar shows icon-only mode |
| `variant` | `"collapsible" \| "persistent" \| "overlay"` | `"collapsible"` | Layout behaviour — `collapsible` shows an internal toggle button; `persistent` is always visible and cannot be collapsed; `overlay` slides the sidebar over content (requires an external toggle with `data-sidebar-toggler="true"`) |
| `scrim` | `boolean` | `false` | When true, renders a semi-transparent overlay behind the sidebar drawer to focus user attention. Visible when the drawer is open or when the overlay sidebar is expanded |
| `ariaLabel` | `string` | `"Sidebar navigation"` | Accessible label for the `<nav>` landmark — override when multiple navs exist on the page (e.g. `"Dashboard navigation"`) |

### `<sit-sidebar-item>`

| Attribute | Type | Default | Purpose |
|-----------|------|---------|---------|
| `name` | `string` | `""` | Unique identifier used for active state matching |
| `title` | `string` | `""` | Display label shown in the sidebar |

### `<sit-sidebar-group>`

| Attribute | Type | Default | Purpose |
|-----------|------|---------|---------|
| `name` | `string` | `""` | Unique identifier used for active state matching |
| `title` | `string` | `""` | Display label shown as the group header |

| Property (read-only) | Type | Purpose |
|----------------------|------|---------|
| `showMenu` | `boolean` | Returns `true` when the inline submenu is open. Only meaningful for nested groups (level 2+); root-level groups use the drawer overlay instead |

### `<sit-sidebar-section>`

| Attribute | Type | Default | Purpose |
|-----------|------|---------|---------|
| `name` | `string` | `""` | Identifier for the section (does not participate in `active` tracking) |
| `title` | `string` | `""` | Section header label |
| `collapsed` | `boolean` | `false` | Whether section content is hidden |
| `collapsible` | `boolean` | `false` | Whether the user can click the header to toggle |
| `separator` | `boolean` | `false` | When true, renders a divider below the section to visually separate it from the next section |

## Slots

| Component | Slot | Required? | Purpose |
|-----------|------|-----------|--------|
| `sit-sidebar` | *(default)* | — | `sit-sidebar-item`, `sit-sidebar-group`, `sit-sidebar-section` — top-level items outside sections are valid |
| `sit-sidebar` | `upper` | — | Brand or logo content rendered in the sidebar header — accepts any HTML (`<div>`, `<img>`, custom element). Shown above the navigation items. |
| `sit-sidebar` | `lower` | — | Footer area at the bottom of the sidebar, pinned below the main navigation. Typically used for secondary actions such as Settings, user account, logout, or a user avatar. **Always prefer `sit-sidebar-*` sub-components** — wrap them in `sit-sidebar-section` to keep padding consistent with the rest of the sidebar. If passing custom HTML (e.g. an avatar component) instead, match the padding manually using `sit:px-component-xs` (`--sit-component-padding-xs`) on the x-axis and `sit:py-2` on the y-axis. |
| `sit-sidebar-item` | `icon` | **Required at levels 1 & 2** | Icon before the label (typically `<sit-icon>`) |
| `sit-sidebar-item` | `indicator` | — | Notification count or status indicator after the label. Use `<sit-badge outlined="" variant="white">` or a custom element ≤ 24×24 px |
| `sit-sidebar-group` | `icon` | **Required at levels 1 & 2** | Icon before the group label |
| `sit-sidebar-group` | `indicator` | — | Notification count or status indicator after the group label. A chevron is always auto-appended after this. Use `<sit-badge outlined="" variant="white">` or a custom element ≤ 24×24 px |
| `sit-sidebar-group` | *(default)* | — | Nested `sit-sidebar-item` or `sit-sidebar-group` children |
| `sit-sidebar-section` | *(default)* | — | `sit-sidebar-item` and `sit-sidebar-group` elements |

> **`icon` is compulsory on every `sit-sidebar-item` and `sit-sidebar-group` at level 1 (direct children of `sit-sidebar` or `sit-sidebar-section`) and level 2 (children of a root group). This applies regardless of whether the component is `sit-sidebar-group` or `sit-sidebar-item`. Omitting it at these levels breaks the icon-only collapse mode and the sidebar's visual consistency.**

## Events

| Event | When fired | Detail |
|-------|-----------|--------|
| `sit-select` | An item or group is selected | `{ activeItem: string }` — the `name` of the selected element |

```js
document.querySelector('sit-sidebar').addEventListener('sit-select', e => {
  console.log(e.detail.activeItem); // e.g. "dashboard"
});
```

## Navigation with Anchor Links

For real URL routing, place an `<a>` as a direct child of `sit-sidebar-item`. When the item is activated, the sidebar automatically clicks the anchor, allowing the browser or your router to handle navigation.

```html
<sit-sidebar-item name="dashboard" title="Dashboard">
  <sit-icon name="grid-fill" slot="icon"></sit-icon>
  <a href="/dashboard"></a>
</sit-sidebar-item>
```

---

## Variants

### Variant 1: Flat Navigation with Sections

Simple dashboard with grouped items — no nesting. Use sections to organize related navigation items.

```html
<sit-sidebar active="dashboard">
  <div slot="upper">Dashboard</div>

  <sit-sidebar-section title="Main Navigation" name="main">
    <sit-sidebar-item name="dashboard" title="Dashboard">
      <sit-icon name="house" slot="icon"></sit-icon>
    </sit-sidebar-item>
    <sit-sidebar-item name="analytics" title="Analytics">
      <sit-icon name="bar-chart" slot="icon"></sit-icon>
    </sit-sidebar-item>
    <sit-sidebar-item name="reports" title="Reports">
      <sit-icon name="file-text" slot="icon"></sit-icon>
    </sit-sidebar-item>
  </sit-sidebar-section>

  <sit-sidebar-section title="Settings" name="settings" collapsible>
    <sit-sidebar-item name="account" title="Account">
      <sit-icon name="user-circle" slot="icon"></sit-icon>
    </sit-sidebar-item>
    <sit-sidebar-item name="configuration" title="Configuration">
      <sit-icon name="gear" slot="icon"></sit-icon>
    </sit-sidebar-item>
  </sit-sidebar-section>
</sit-sidebar>
```

**Key features:**
- All items at the same level — no group hierarchy
- `collapsible` sections allow users to collapse/expand Settings independently
- Perfect for apps with shallow navigation

---

### Variant 2: Multi-Level Nested Navigation

Complex management system with expandable groups and multiple nesting levels. Root groups (`<sit-sidebar-group>` at level 0) open drawer overlays.

```html
<sit-sidebar active="monthly-view">
  <div slot="upper">Admin Portal</div>

  <sit-sidebar-section title="Content" name="content">
    <!-- Root group: opens drawer overlay on click -->
    <sit-sidebar-group name="reports" title="Reports">
      <sit-icon name="file-text" slot="icon"></sit-icon>

      <!-- Level 1 group: toggles inline submenu -->
      <sit-sidebar-group name="analytics" title="Analytics">
        <sit-icon name="chart-line" slot="icon"></sit-icon>

        <!-- Level 2 items: optional icons -->
        <sit-sidebar-item name="monthly-view" title="Monthly View">
          <sit-icon name="calendar" slot="icon"></sit-icon>
        </sit-sidebar-item>
        <sit-sidebar-item name="yearly-view" title="Yearly View"></sit-sidebar-item>
      </sit-sidebar-group>

      <!-- Level 1 items -->
      <sit-sidebar-item name="sales-report" title="Sales Report">
        <sit-icon name="trending-up" slot="icon"></sit-icon>
      </sit-sidebar-item>
    </sit-sidebar-group>

    <sit-sidebar-group name="content-mgmt" title="Content Management">
      <sit-icon name="pencil-square" slot="icon"></sit-icon>
      <sit-sidebar-item name="pages" title="Pages">
        <sit-icon name="file" slot="icon"></sit-icon>
      </sit-sidebar-item>
      <sit-sidebar-item name="media" title="Media">
        <sit-icon name="image" slot="icon"></sit-icon>
      </sit-sidebar-item>
    </sit-sidebar-group>
  </sit-sidebar-section>
</sit-sidebar>
```

**Key features:**
- Root groups (`reports`, `content-mgmt`) open drawer overlays
- Nested groups (`analytics`) toggle inline submenus
- Up to 3 levels of nesting supported
- Active state automatically expands parent groups

---

### Variant 3: Overlay Sidebar with External Toggle

Floating sidebar panel for responsive layouts (mobile-first). Ideal for dashboards on narrow screens.

```html
<html>
<head>
</head>
<body>
  <div class="app-header" style="padding: 12px 16px; border-bottom: 1px solid {{color-border}};">
    <button onclick="toggleSidebar()" style="background: none; border: none; cursor: pointer;">
      <sit-icon name="three-dots" size="24"></sit-icon>
    </button>
  </div>

  <div style="display: flex; height: 100vh;">
    <!-- Overlay sidebar: floats over content -->
    <div>
      <sit-sidebar id="app-sidebar" variant="overlay" scrim collapsed>
        <div slot="upper">My Application</div>
        <sit-sidebar-section name="nav">
          <sit-sidebar-item name="dashboard" title="Dashboard">
            <sit-icon name="house" slot="icon"></sit-icon>
          </sit-sidebar-item>
          <sit-sidebar-item name="settings" title="Settings">
            <sit-icon name="gear" slot="icon"></sit-icon>
          </sit-sidebar-item>
        </sit-sidebar-section>
      </sit-sidebar>
    </div>

    <!-- Main content -->
    <div style="flex: 1; padding: 24px; overflow-y: auto;">
      <h1>Dashboard</h1>
    </div>
  </div>

  <script>
    function toggleSidebar() {
      const sidebar = document.getElementById('app-sidebar');
      sidebar.toggleCollapsed();
    }
  </script>
</body>
</html>
```

**Key features:**
- `overlay` attribute makes sidebar float above content
- `scrim` adds a dark background for focus (optional)
- `collapsed` hides the sidebar on load (ideal for mobile)
- `toggleCollapsed()` method controlled by external button
- Clicks outside close the overlay automatically

---

### Variant 4: Programmatic Active State Control

Sync sidebar with external controls — update active state dynamically via buttons or routing changes.

```html
<div style="margin-bottom: 16px;">
  <button onclick="setActive('dashboard')">📊 Dashboard</button>
  <button onclick="setActive('analytics')">📈 Analytics</button>
  <button onclick="setActive('settings')">⚙️ Settings</button>
</div>

<sit-sidebar id="main-sidebar" active="dashboard">
  <sit-sidebar-section name="main">
    <sit-sidebar-item name="dashboard" title="Dashboard">
      <sit-icon name="house" slot="icon"></sit-icon>
    </sit-sidebar-item>
    <sit-sidebar-item name="analytics" title="Analytics">
      <sit-icon name="bar-chart" slot="icon"></sit-icon>
    </sit-sidebar-item>
    <sit-sidebar-item name="settings" title="Settings">
      <sit-icon name="gear" slot="icon"></sit-icon>
    </sit-sidebar-item>
  </sit-sidebar-section>
</sit-sidebar>

<script>
  function setActive(itemName) {
    document.getElementById('main-sidebar').active = itemName;
  }
</script>
```

**Key features:**
- Buttons trigger programmatic navigation
- `sidebar.active = "item-name"` updates active state and highlights the item
- Parent groups expand automatically when a nested item becomes active
- Useful for SPA routing or command palettes
- Works with framework event handlers (React/Vue/Angular)

---

### Variant 5: Collapsible Sections with Badges

Organize navigation into collapsible groups with visual indicators like notification badges.

```html
<sit-sidebar active="inbox">
  <div slot="upper">Email Manager</div>

  <!-- Non-collapsible main section -->
  <sit-sidebar-section title="Folders" name="folders" collapsible="false">
    <sit-sidebar-item name="inbox" title="Inbox">
      <sit-icon name="envelope" slot="icon"></sit-icon>
      <sit-badge slot="indicator" outlined="" variant="white">5</sit-badge>
    </sit-sidebar-item>
    <sit-sidebar-item name="sent" title="Sent">
      <sit-icon name="send" slot="icon"></sit-icon>
    </sit-sidebar-item>
    <sit-sidebar-item name="drafts" title="Drafts">
      <sit-icon name="pencil" slot="icon"></sit-icon>
    </sit-sidebar-item>
  </sit-sidebar-section>

  <!-- Collapsible tags/labels section -->
  <sit-sidebar-section title="Labels" name="labels" collapsible>
    <sit-sidebar-item name="work" title="Work">
      <sit-icon name="tag" slot="icon"></sit-icon>
    </sit-sidebar-item>
    <sit-sidebar-item name="personal" title="Personal">
      <sit-icon name="tag" slot="icon"></sit-icon>
    </sit-sidebar-item>
    <sit-sidebar-item name="important" title="Important">
      <sit-icon name="star" slot="icon"></sit-icon>
    </sit-sidebar-item>
  </sit-sidebar-section>
</sit-sidebar>
```

**Key features:**
- Notification counts in `indicator` slot
- `collapsible` sections toggle independently
- Combines flat and grouped navigation styles
- Perfect for email, task managers, or document apps

---

## Sidebar App Layout Integration

`sit-sidebar` is designed for the **Sidebar App Layout** — a sticky left rail alongside scrollable main content. Pair it with `sit-container-sidebar` in the main column.

```html
<!-- Sticky left rail -->
<div class="sit:sticky sit:top-27 sit:h-[calc(100vh-108px)] sit:overflow-y-auto sit:w-68 sit:border-r sit:border-muted sit:bg-surface-raised">
  <sit-sidebar active="dashboard">
    <sit-sidebar-item name="dashboard" title="Dashboard">
      <sit-icon name="grid-fill" slot="icon"></sit-icon>
    </sit-sidebar-item>
    <!-- more items -->
  </sit-sidebar>
</div>

<!-- Scrollable main content -->
<div class="sit:flex sit:flex-col sit:w-full">
  <div class="sit-container-sidebar sit:py-layout-md">
    <!-- page content -->
  </div>
  <sit-footer></sit-footer>
</div>
```

See **[Application Shell](../../sit-blocks/reference/application-shell.md)** for the complete sidebar app layout setup.

## Keyboard Navigation

| Key | Action |
|-----|--------|
| `Arrow Up` / `Arrow Down` | Navigate between items at the same level |
| `Arrow Right` | Open drawer (root group) or expand submenu (nested group) |
| `Arrow Left` | Close drawer or return focus to parent group |
| `Enter` / `Space` | Activate focused item or toggle group |
| `Tab` | Standard focus order through interactive elements |

## Related Components

- **[sidenav reference](sidenav.md)** — The stable published sidebar; use when you need a production-ready vertical nav without the RC dependency. `sit-sidebar` replaces `sit-sidenav` once out of RC.
- **[Application Shell](../../sit-blocks/reference/application-shell.md)** — Full sidebar app layout template
- **[sit-templates](../sit-templates/SKILL.md)** — Dashboard template usage

---

**For AI agents**: Use `name` on every `sit-sidebar-item` and `sit-sidebar-group` — without it, `active` tracking will not work. `sit-sidebar-section` accepts `name` for identification but its `name` does NOT participate in `active` tracking — only items and groups do. Top-level `sit-sidebar-item` elements placed directly inside `sit-sidebar` (outside any section) are valid. The `upper`, `lower`, and `indicator` slots accept any HTML — not just `sit-icon`. Use `upper` for headers (brand names, logos), `lower` for footers (user menus, copyright info), and `indicator` for badges and indicators. At level 0, `sit-sidebar-group` opens a drawer overlay (items slide in from the side); at level 1+, it toggles an inline submenu. Use `collapsible` (boolean attribute) on `sit-sidebar-section` to let users collapse the section. **`icon` is compulsory on every `sit-sidebar-item` and `sit-sidebar-group` at level 1 and level 2 — this rule applies to both component types equally. Never omit it at these levels, even for groups that only serve as structural containers.** **Icon fallback rule**: when you are not certain that a specific `sit-icon` name exists, always use `name="placeholder"` — never guess an icon name or omit the slot. Only use a named icon if you have seen it confirmed in existing playground or Storybook examples.
