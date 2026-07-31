# Canvas Dropdown Component Skill

`<sit-dropdown>` is a toggleable overlay menu. It requires a `toggler` slot element (typically `<sit-button>`) and `<sit-dropdown-item>` children for list items. For an icon-only three-dot menu, use `<sit-overflow-menu>` instead.

No CSS styling modifications — custom properties and CSS parts are not exposed on this component.

## Usage Guideline

### When to use

- For action menus where a button reveals a list of related actions or navigation links.
- When space is limited and multiple actions need to be grouped under a single trigger.
- For contextual menus on items where a set of options (edit, delete, view) applies to that item.
- When a three-dot overflow pattern is needed — use `<sit-overflow-menu>` (a pre-built convenience wrapper).

### When NOT to use

- For selecting a value from a list of options — use `<sit-select>` or `<sit-combo-box>` instead.
- For binary on/off choices — use `<sit-switch>` or `<sit-checkbox>`.
- When all actions can be shown as buttons without space constraints — prefer visible buttons for primary actions.
- For navigation menus that are always visible — use `<sit-mainnav>` or `<sit-sidenav>`.

## Behaviour

- The menu is hidden by default; clicking the `toggler` slot element opens and closes it.
- `drop` controls the direction the menu opens: `down` (default), `up`, `left`, or `right`.
- `menuAlignRight` right-aligns the menu panel with the toggler.
- `noFlip` prevents the menu from auto-repositioning when it would overflow the viewport edge.
- `close` controls when the menu auto-closes: `default` (closes on outside click or item click), `outside` (closes only on outside click), `inside` (closes only on item click).
- `disabled` on `<sit-dropdown>` disables the toggler and prevents the menu from opening.
- `disabled` on `<sit-dropdown-item>` prevents selection and `sit-select` does not fire for that item.
- `active` on `<sit-dropdown-item>` marks it as the current selection visually.
- Fires `sit-select` on the dropdown element with `event.detail.item` as the clicked `<sit-dropdown-item>`.

## Component Composition

**`toggler` slot (`<sit-dropdown>`)** — the element that opens the menu. Standard pattern: `<sit-button slot="toggler">` with a label and `<sit-icon name="chevron-down" slot="rightIcon">`. Always provide toggler content — without it, the dropdown has no visible trigger.

**Default slot (`<sit-dropdown>`)** — only `<sit-dropdown-item>` elements. Do not place raw `<a>` or `<li>` tags directly.

**`<sit-dropdown-item>` default slot** — two patterns:
- **Navigation item**: slot a single `<a href="...">` tag inside the item.
- **Action item (no URL)**: slot plain text directly inside the item; handle `sit-select` on the parent dropdown.

**Avoid placing inside a dropdown:**
- Form inputs, checkboxes, or complex interactive components — use a `<sit-drawer>` for richer interactions
- More than ~8 items — long menus become hard to scan; consider grouping or a different pattern

## Advanced Considerations

- **Navigation vs action items**: for navigation, slot an `<a>` inside `<sit-dropdown-item>`; for actions (no URL), slot plain text directly — do not mix both patterns in the same dropdown without clear visual grouping.
- **`sit-select` event**: fires on the `<sit-dropdown>` element, not on individual items — use `event.detail.item` to identify which item was selected.
- **`close` behaviour**: use `close="outside"` when items trigger UI changes (e.g. opening a modal) and the dropdown should stay open until the user clicks away; use `close="inside"` for immediate action items.
- **`<sit-overflow-menu>`**: use this instead of `<sit-dropdown>` for the standard three-dot icon button pattern — it pre-configures the toggler and styling.
- **Positioning with `drop` and `noFlip`**: by default the menu flips when near the viewport edge; set `noFlip` only when you need to enforce a fixed direction regardless of overflow.

## Edge Cases

- **Empty toggler slot**: the dropdown renders with no visible trigger — always provide an element in the `toggler` slot.
- **No items**: an empty dropdown menu opens but shows no options — always include at least one `<sit-dropdown-item>`.
- **All items disabled**: the menu opens but nothing is selectable — ensure at least one active item exists or disable the entire dropdown instead.
- **Long item labels**: may overflow the menu container — consider truncation or constrain menu width via parent layout.
- **`menuIsOpen` on initial render**: useful for testing or controlled open states; ensure the dropdown is properly positioned before setting this.
- **`active` item without `sit-select` tracking**: `active` is a visual attribute only and does not auto-update when an item is clicked — manage it manually in the `sit-select` handler.

## Quick Decision Guide

**Navigation items with `<a>` tags?** → Put `<a>` inside `<sit-dropdown-item>`

**No anchor/navigation (action items)?** → Put text directly inside `<sit-dropdown-item>`

**Menu opens upward?** → `drop="up"`

**Right-align menu with toggler?** → Add `menuAlignRight`

**Prevent menu from flipping when near viewport edge?** → Add `noFlip`

**Three-dot overflow menu?** → Use `<sit-overflow-menu>` instead

```html
<!-- Basic navigation dropdown -->
<sit-dropdown>
  <sit-button slot="toggler" ariaLabel="Options">
    Options
    <sit-icon name="chevron-down" slot="rightIcon"></sit-icon>
  </sit-button>
  <sit-dropdown-item ariaLabel="Profile"><a href="/profile">Profile</a></sit-dropdown-item>
  <sit-dropdown-item ariaLabel="Settings"><a href="/settings">Settings</a></sit-dropdown-item>
  <sit-dropdown-item disabled ariaLabel="Archived">Archived</sit-dropdown-item>
</sit-dropdown>

<!-- Action dropdown (no navigation) -->
<sit-dropdown>
  <sit-button slot="toggler" ariaLabel="Actions">
    Actions <sit-icon name="chevron-down" slot="rightIcon"></sit-icon>
  </sit-button>
  <sit-dropdown-item ariaLabel="View">View</sit-dropdown-item>
  <sit-dropdown-item ariaLabel="Edit">Edit</sit-dropdown-item>
  <sit-dropdown-item ariaLabel="Delete">Delete</sit-dropdown-item>
</sit-dropdown>

<!-- React to selection -->
<sit-dropdown id="my-dropdown">
  <sit-button slot="toggler" ariaLabel="Choose">Choose <sit-icon name="chevron-down" slot="rightIcon"></sit-icon></sit-button>
  <sit-dropdown-item ariaLabel="Option A">Option A</sit-dropdown-item>
  <sit-dropdown-item ariaLabel="Option B">Option B</sit-dropdown-item>
  <sit-dropdown-item ariaLabel="Option C">Option C</sit-dropdown-item>
</sit-dropdown>

<script>
  document.getElementById("my-dropdown").addEventListener("sit-select", e => {
    console.log("Selected:", e.detail.item.textContent.trim());
  });
</script>

<!-- Dropdown opens upward -->
<sit-dropdown drop="up">
  <sit-button slot="toggler" ariaLabel="Menu above">Menu above <sit-icon name="chevron-up" slot="rightIcon"></sit-icon></sit-button>
  <sit-dropdown-item ariaLabel="Item 1">Item 1</sit-dropdown-item>
  <sit-dropdown-item ariaLabel="Item 2">Item 2</sit-dropdown-item>
</sit-dropdown>
```

## API Summary

### `<sit-dropdown>`

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `drop` | `down \| up \| left \| right` | `down` | Direction the menu opens relative to the toggler |
| `menuAlignRight` | boolean | `false` | Right-aligns the menu with the toggler button |
| `noFlip` | boolean | `false` | Prevents auto-flip when menu would overflow viewport |
| `menuIsOpen` | boolean | `false` | Opens the menu on first render |
| `disabled` | boolean | `false` | Disables the toggler and prevents menu from opening |
| `close` | `default \| outside \| inside` | `default` | When the menu auto-closes: default (outside click or item click), outside (only outside click), inside (only item click) |

### `<sit-dropdown-item>`

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `disabled` | boolean | `false` | Prevents the item from being selected |
| `active` | boolean | `false` | Marks the item as the current active selection |
| `ariaLabel` | string | `""` | Forwards `aria-label` to the inner clickable element for accessibility |
| `target` | string | — | `target` attribute forwarded to the slotted anchor |

## Slots

### `<sit-dropdown>`

| Slot | Purpose |
|---|---|
| `toggler` | The button or element that opens/closes the menu |
| *(default)* | `<sit-dropdown-item>` elements |

### `<sit-dropdown-item>`

| Slot | Purpose |
|---|---|
| *(default)* | Navigation anchor `<a>` or plain text for action items |

## Events (`<sit-dropdown>`)

| Event | Cancelable | Detail | When |
|---|---|---|---|
| `sit-show` | No | — | Menu begins opening |
| `sit-after-show` | No | — | Menu fully open |
| `sit-hide` | No | — | Menu begins closing |
| `sit-after-hide` | No | — | Menu fully closed |
| `sit-select` | No | `{ item: SitDropdownItem }` | A dropdown item is clicked |

---

**For AI agents**:
1. Always place the toggler element in the `toggler` slot — it can be any element but `<sit-button>` is typical.
2. **Always add `ariaLabel`** to the `<sit-button>` toggler — this is required for accessibility.
3. **Always add `ariaLabel`** to each `<sit-dropdown-item>` — this forwards `aria-label` to the inner clickable element for screen readers.
4. For navigation, slot an `<a>` tag inside `<sit-dropdown-item>`. For actions (no navigation), slot plain text directly.
5. `sit-select` fires on `<sit-dropdown>` when any item is clicked — `event.detail.item` is the clicked `<sit-dropdown-item>`.
6. Disabled items do not fire `sit-select`.
7. For a three-dot overflow menu, use `<sit-overflow-menu>` which is a pre-built convenience wrapper.
