# Canvas Tab Component Skill

`<sit-tab-group>` coordinates `<sit-tab>` and `<sit-tab-panel>` elements. Each tab's `panel` attribute must match a tab panel's `name` attribute — this is how the tab and its content are linked.

No CSS styling modifications — custom properties and CSS parts are not exposed on this component.

## Usage Guideline

### When to use

- When content can be split into distinct, mutually exclusive sections and users need to switch between them without leaving the page.
- For categorised content where only one section needs to be visible at a time (e.g. product details, settings categories, filtered views).
- When vertical navigation between content sections is preferred — use `orientation="vertical"`.

### When NOT to use

- When users need to compare content across sections simultaneously — consider showing all sections instead.
- For sequential steps where order matters — use `<sit-stepper>` instead.
- For primary page navigation — use `<sit-mainnav>` or `<sit-sidenav>`.
- When there are fewer than 2 tabs — a single tab provides no value; show the content directly.
- When there are more tabs than can reasonably fit in the tab list — consider grouping or a different navigation pattern.

## Behaviour

- `<sit-tab>` elements must be placed in the `nav` slot of `<sit-tab-group>`; `<sit-tab-panel>` elements go in the default slot.
- Each `<sit-tab panel="x">` is linked to a `<sit-tab-panel name="x">` by matching `panel` and `name` values — mismatches result in no panel being shown.
- The first non-disabled tab is active by default; add `active` to a specific `<sit-tab>` to override the initial selection.
- `disabled` on a `<sit-tab>` prevents selection and skips the tab during keyboard navigation.
- `variant` controls visual style: `underlined` (default) or `solid`. Set on `<sit-tab-group>` — propagates to all child tabs.
- `orientation` controls layout: `horizontal` (default) or `vertical`. Set on `<sit-tab-group>`.
- `density` controls spacing: `default` or `compact`. Set on `<sit-tab-group>`.
- Fires `sit-tab-show` (with `event.detail.name`) when a tab is activated and `sit-tab-hide` when it is deactivated.
- No public methods on `<sit-tab-group>`.

## Component Composition

**`nav` slot (`<sit-tab-group>`)** — only `<sit-tab slot="nav" panel="...">` elements. Do not place any other content in this slot.

**Default slot (`<sit-tab-group>`)** — only `<sit-tab-panel name="...">` elements. The `panel` value on `<sit-tab>` and the `name` value on `<sit-tab-panel>` must match exactly — a typo in either results in a tab with no visible content.

**`<sit-tab>` default slot** — the tab label text (1–3 words recommended). Keep labels concise to avoid overflow on narrow screens.

**`<sit-tab-panel>` default slot** — any content that would appear in a normal page section: text, forms, tables, lists, `<sit-card>` grids. Each panel is an independent content area.

**Avoid placing inside tab panels:**
- Nested `<sit-tab-group>` — nested tabs are a known accessibility and usability anti-pattern
- Content that users need to compare simultaneously across panels — show it side by side instead

## Advanced Considerations

- **`panel`/`name` matching**: the link between a tab and its panel is entirely string-based — a typo in either attribute results in a broken tab with no panel displayed. Always verify both values match exactly.
- **`active` attribute**: sets the initially active tab at render time only; once the tab group is interactive, active state is managed internally and the `active` attribute is not reactively updated.
- **`variant` and `density` propagation**: these are set on `<sit-tab-group>` and automatically propagate to all child `<sit-tab>` elements — do not set them on individual tabs.
- **`sit-tab-show` / `sit-tab-hide`**: both events fire with `event.detail.name` (the panel name string) — use to lazy-load content, track analytics, or sync URL state with the active tab.
- **No public methods**: programmatic tab activation is not supported via methods — manage active state by adding/removing the `active` attribute on a `<sit-tab>` directly if needed.

## Edge Cases

- **Mismatched `panel` / `name`**: the tab renders but clicking it shows no content — always keep `panel` and `name` in sync.
- **All tabs disabled**: the tab group renders with no selectable tab — ensure at least one tab is enabled.
- **No `active` tab set**: the first non-disabled tab is selected automatically; this is correct behaviour, not a bug.
- **Dynamically added tabs**: tabs added after initial render may not be registered — initialise the full tab list before mounting the component where possible.
- **Long tab labels**: may overflow the tab bar on narrow viewports — keep labels concise (1–3 words) or use `orientation="vertical"` for longer labels.

## Quick Decision Guide

**Visual style?**
- Underline tabs → `variant="underlined"` (default)
- Solid/pill tabs → `variant="solid"`

**Orientation?**
- Horizontal tabs → `orientation="horizontal"` (default)
- Vertical side tabs → `orientation="vertical"`

**Compact spacing?** → `density="compact"` on `<sit-tab-group>`

**Set initial active tab?** → Add `active` to the specific `<sit-tab>`

**Set initial active tab (first loaded tab)?** → The first non-disabled tab is active by default

```html
<!-- Basic tab group -->
<sit-tab-group>
  <sit-tab slot="nav" panel="home" ariaLabel="Home">Home</sit-tab>
  <sit-tab slot="nav" panel="profile" ariaLabel="Profile">Profile</sit-tab>
  <sit-tab slot="nav" panel="settings" ariaLabel="Settings" disabled>Settings</sit-tab>

  <sit-tab-panel name="home">
    <p>Welcome to the home tab content.</p>
  </sit-tab-panel>
  <sit-tab-panel name="profile">
    <p>Profile information goes here.</p>
  </sit-tab-panel>
  <sit-tab-panel name="settings">
    <p>Settings are not available.</p>
  </sit-tab-panel>
</sit-tab-group>

<!-- Solid variant, compact density -->
<sit-tab-group variant="solid" density="compact">
  <sit-tab slot="nav" panel="tab1" ariaLabel="Tab One">Tab One</sit-tab>
  <sit-tab slot="nav" panel="tab2" ariaLabel="Tab Two" active>Tab Two (starts active)</sit-tab>
  <sit-tab-panel name="tab1">Content for tab one.</sit-tab-panel>
  <sit-tab-panel name="tab2">Content for tab two.</sit-tab-panel>
</sit-tab-group>

<!-- Vertical orientation -->
<sit-tab-group orientation="vertical">
  <sit-tab slot="nav" panel="section1" ariaLabel="Section 1">Section 1</sit-tab>
  <sit-tab slot="nav" panel="section2" ariaLabel="Section 2">Section 2</sit-tab>
  <sit-tab-panel name="section1">Section 1 content.</sit-tab-panel>
  <sit-tab-panel name="section2">Section 2 content.</sit-tab-panel>
</sit-tab-group>

<!-- Listen to tab change -->
<sit-tab-group id="my-tabs">
  <sit-tab slot="nav" panel="a" ariaLabel="Tab A">Tab A</sit-tab>
  <sit-tab slot="nav" panel="b" ariaLabel="Tab B">Tab B</sit-tab>
  <sit-tab-panel name="a">Content A</sit-tab-panel>
  <sit-tab-panel name="b">Content B</sit-tab-panel>
</sit-tab-group>

<script>
  document.getElementById("my-tabs").addEventListener("sit-tab-show", e => {
    console.log("Active tab:", e.detail.name);
  });
</script>
```

## API Summary

### `<sit-tab-group>`

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `variant` | `underlined \| solid` | `underlined` | Visual style of the tab list |
| `orientation` | `horizontal \| vertical` | `horizontal` | Layout direction of the tabs |
| `density` | `default \| compact` | `default` | Spacing of the tab items |

### `<sit-tab>`

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `panel` | string | `""` | **Required** — must match the `name` of a `<sit-tab-panel>` |
| `active` | boolean | `false` | Sets this tab as active on initial load |
| `disabled` | boolean | `false` | Prevents the tab from being selected |
| `ariaLabel` | string | — | Accessible label for the tab. **Required** for accessibility — always provide this to describe the tab's purpose |

### `<sit-tab-panel>`

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `name` | string | — | **Required** — must match the `panel` of a `<sit-tab>` |

## Slots

| Component | Slot | Purpose |
|---|---|---|
| `<sit-tab-group>` | `nav` | `<sit-tab>` elements go here |
| `<sit-tab-group>` | *(default)* | `<sit-tab-panel>` elements go here |
| `<sit-tab>` | *(default)* | Tab label text |
| `<sit-tab-panel>` | *(default)* | Tab panel content |

## Events (`<sit-tab-group>`)

| Event | Cancelable | Detail | When |
|---|---|---|---|
| `sit-tab-show` | No | `{ name: string }` | A tab and its panel are shown |
| `sit-tab-hide` | No | `{ name: string }` | A tab and its panel are hidden |

---

**For AI agents**:
1. `<sit-tab>` must have `slot="nav"` and its `panel` must exactly match a `<sit-tab-panel>`'s `name`.
2. **Always add `ariaLabel`** to every `<sit-tab>` — this is required for accessibility. The value should describe the tab's purpose (usually matches the visible label text).
3. `variant`, `orientation`, and `density` are set on `<sit-tab-group>` — they propagate automatically to all child `<sit-tab>` elements.
4. `sit-tab-show` and `sit-tab-hide` both carry `event.detail.name` which is the panel name string.
5. To set the initially active tab, add `active` to one `<sit-tab>` — if none are active, the first non-disabled tab is selected.
6. There are no public methods on the tab group.
