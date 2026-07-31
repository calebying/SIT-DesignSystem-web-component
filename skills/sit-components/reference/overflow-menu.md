# Canvas Overflow Menu Component Skill

`<sit-overflow-menu>` is a pre-built three-dot (`⋯`) icon button that toggles a dropdown menu. It uses `<sit-dropdown-item>` as its list items and is commonly used in table rows, cards, and list items for contextual actions.

No CSS styling modifications — custom properties and CSS parts are not exposed on this component.

## Usage Guideline

### When to use

- For table rows, cards, or list items where multiple contextual actions (view, edit, delete) need to be grouped under a compact three-dot icon button.
- When space is too limited for visible action buttons and the actions are secondary or contextual.
- As a standard overflow pattern for per-row actions in data-heavy interfaces.

### When NOT to use

- When a visible button label is needed — use `<sit-dropdown>` with a custom `toggler` slot instead.
- When a custom toggler icon or trigger is required — use `<sit-dropdown>`.
- For primary actions — overflow menus hide actions; primary actions should always be visible.
- When there is only one action — show it as a direct button instead of hiding it in a menu.

## Behaviour

- Renders a pre-built three-dot (`⋯`) icon button; clicking it toggles the dropdown menu.
- `size` controls the icon button size: `md` (default) or `sm`.
- List items must be `<sit-dropdown-item>` elements in the default slot.
- `disabled` on `<sit-dropdown-item>` prevents selection; `sit-select` does not fire for disabled items.
- Fires `sit-select` with `event.detail.item` as the clicked `<sit-dropdown-item>`.
- No public methods — the menu is toggled entirely via the built-in icon button.

## Advanced Considerations

- **vs `<sit-dropdown>`**: `<sit-overflow-menu>` is a convenience wrapper with a fixed three-dot toggler. Use `<sit-dropdown>` when a custom toggler, labeled button, or different icon is needed.
- **Navigation vs action items**: for navigation, slot an `<a>` inside `<sit-dropdown-item>`; for actions (no URL), slot plain text directly.
- **`sit-select` event**: fires on the `<sit-overflow-menu>` element — use `event.detail.item` to identify the selected item and `.textContent.trim()` to read its label.
- **Size in compact layouts**: use `size="sm"` inside table rows and tight card layouts to match the surrounding density.

## Edge Cases

- **No items**: an empty menu opens but shows nothing — always include at least one `<sit-dropdown-item>`.
- **All items disabled**: the menu opens but nothing is selectable — ensure at least one enabled item exists or remove the overflow menu entirely.
- **Single action**: a one-item overflow menu adds unnecessary interaction cost — show the action as a direct button instead.
- **Long item labels**: may overflow the menu container — keep action labels concise (1–3 words).

## Quick Decision Guide

**Custom toggler or button label needed?** → Use `<sit-dropdown>` instead

**Three-dot icon menu with no label?** → `<sit-overflow-menu>` (this component)

**Size?** → `size="md"` (default), `size="sm"`

```html
<!-- Basic overflow menu -->
<sit-overflow-menu>
  <sit-dropdown-item ariaLabel="View">View</sit-dropdown-item>
  <sit-dropdown-item ariaLabel="Edit">Edit</sit-dropdown-item>
  <sit-dropdown-item ariaLabel="Delete">Delete</sit-dropdown-item>
</sit-overflow-menu>

<!-- Small size for compact layouts -->
<sit-overflow-menu size="sm">
  <sit-dropdown-item ariaLabel="View">View</sit-dropdown-item>
  <sit-dropdown-item ariaLabel="Edit">Edit</sit-dropdown-item>
  <sit-dropdown-item disabled ariaLabel="Archive">Archive</sit-dropdown-item>
</sit-overflow-menu>

<!-- React to selection -->
<sit-overflow-menu id="row-menu">
  <sit-dropdown-item ariaLabel="View details">View details</sit-dropdown-item>
  <sit-dropdown-item ariaLabel="Edit">Edit</sit-dropdown-item>
  <sit-dropdown-item ariaLabel="Delete">Delete</sit-dropdown-item>
</sit-overflow-menu>

<script>
  document.getElementById("row-menu").addEventListener("sit-select", e => {
    const action = e.detail.item.textContent.trim();
    console.log("Action selected:", action);
  });
</script>

<!-- Common usage inside a table row -->
<tr>
  <td>Item name</td>
  <td>Active</td>
  <td>
    <sit-overflow-menu size="sm">
      <sit-dropdown-item ariaLabel="Edit">Edit</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="Delete">Delete</sit-dropdown-item>
    </sit-overflow-menu>
  </td>
</tr>
```

## API Summary

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `size` | `sm \| md` | `md` | Size of the three-dot icon button |

## Slots

| Slot | Purpose |
|---|---|
| *(default)* | `<sit-dropdown-item>` elements for the menu list |

## Events

| Event | Cancelable | Detail | When |
|---|---|---|---|
| `sit-show` | No | — | Menu begins opening |
| `sit-after-show` | No | — | Menu fully open |
| `sit-hide` | No | — | Menu begins closing |
| `sit-after-hide` | No | — | Menu fully closed |
| `sit-select` | No | `{ item: SitDropdownItem }` | A dropdown item is clicked |

---

**For AI agents**:
1. `<sit-overflow-menu>` is a convenience wrapper — for a custom toggler or labeled button use `<sit-dropdown>` instead.
2. List items must be `<sit-dropdown-item>` elements in the default slot.
3. **Always add `ariaLabel`** to each `<sit-dropdown-item>` — this forwards `aria-label` to the inner clickable element for screen readers.
4. `sit-select` fires when any item is clicked — `event.detail.item` is the clicked `<sit-dropdown-item>`.
5. For navigation items, slot `<a>` tags inside `<sit-dropdown-item>`; for action items, slot plain text directly.
6. There are no public methods — the menu is toggled entirely via the built-in icon button.
