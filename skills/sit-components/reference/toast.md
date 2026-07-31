# Canvas Toast Component Skill

`<sit-toast>` is a brief, non-blocking notification. `<sit-toast-container>` positions one or more toasts on the screen. Toasts must contain both a `title` and a message, and optionally an icon and an action link.

No CSS styling modifications — custom properties and CSS parts are not exposed on this component.

## Usage Guideline

### When to use

- For brief, non-blocking status notifications that confirm a completed action or report a background event (e.g. "Changes saved", "File uploaded successfully", "Error sending message").
- When the notification is transient and does not require user action or sustained attention.
- For system-level feedback that is not tied to a specific element on the page.

### When NOT to use

- For critical messages that require immediate action — use a modal or alert instead.
- For persistent information that should be part of the page layout.
- When information is complex or requires user interaction — toasts are dismissible and transient.

## Behaviour

- `show` attribute controls whether the toast is visible; set it on page load to show a toast immediately or use `showToast()` / `hideToast()` methods for programmatic control.
- `variant` sets the visual tone: `info` (default), `success`, `danger`, `warning`, or `neutral`.
- `autohide` dismisses the toast automatically after `delay` milliseconds (default 5000); without `autohide` the toast persists until dismissed or hidden via JS.
- `dismissible` renders a close button users can click to dismiss the toast manually.
- Multiple `<sit-toast>` elements inside one `<sit-toast-container>` stack vertically — limit to 3–4 to avoid clutter.
- Events fire in sequence: `sit-show` → `sit-after-show` when showing; `sit-hide` → `sit-after-hide` when hiding.
- `noAnimation` disables show/hide animations for reduced-motion contexts.

## Advanced Considerations

- **Always use `<sit-toast-container>`**: `<sit-toast>` must be placed inside `<sit-toast-container>` — the container handles screen positioning and stacking.
- **`title` is required for accessibility**: always set a meaningful `title` on every `<sit-toast>` — it is the accessible heading of the notification.
- **`show` attribute vs `showToast()` method**: use the `show` attribute for toasts that should be visible on initial render; use `showToast()` / `hideToast()` for dynamically triggered notifications (e.g. after a form submit).
- **Deprecated positions**: `top-start`, `middle-start`, `middle-center`, `middle-end` are deprecated since v3.7.1 — use only `top-center`, `top-end`, `bottom-start`, `bottom-center`, `bottom-end`.
- **One container per position**: use a single `<sit-toast-container>` per screen position — do not create multiple containers at the same position.
- **Auto-dismiss timing**: `delay` only takes effect when `autohide` is also set — setting `delay` alone has no effect.

## Edge Cases

- **Multiple rapid toasts**: implement queueing or throttling in the host application to avoid flooding the UI with simultaneous toasts.
- **Z-index conflicts**: ensure `<sit-toast-container>` appears above modals, banners, and other overlays — check stacking context if toasts are hidden behind other elements.
- **`sit-after-hide` for DOM cleanup**: use `sit-after-hide` (not `sit-hide`) to remove the toast element from the DOM or reset state — `sit-hide` fires before the animation completes, so the element is still visible at that point.

## Quick Decision Guide

**Variant?**
- Informational → `variant="info"` (default) — `<sit-icon slot="icon" name="info-circle-fill" size="md">`
- Confirmation → `variant="success"` — `<sit-icon slot="icon" name="check-circle-fill" size="md">`
- Error → `variant="danger"` — `<sit-icon slot="icon" name="exclamation-circle-fill" size="md">`
- Caution → `variant="warning"` — `<sit-icon slot="icon" name="exclamation-triangle-fill" size="md">`
- Theme-neutral → `variant="neutral"` — `<sit-icon slot="icon" name="info-circle-fill" size="md">`

**Auto-dismiss?** → Add `autohide` and optionally `delay` (ms, default 5000)

**User can dismiss?** → Add `dismissible`

**Position on screen?**
- Bottom right → `position="bottom-end"` on `<sit-toast-container>` (common default)
- Use `"top-end"`, `"top-center"`, `"bottom-center"`, `"bottom-start"` etc.

**Show/hide a toast via JS?** → Use `showToast()` / `hideToast()` methods

```html
<!-- Basic toast (already shown) -->
<sit-toast-container position="bottom-end">
  <sit-toast show variant="info" title="Info" dismissible>
    <sit-icon slot="icon" name="info-circle-fill" size="md"></sit-icon>
    Your changes have been saved.
    <sit-link slot="action" size="sm"><a href="#" target="_blank">Undo</a></sit-link>
  </sit-toast>
</sit-toast-container>

<!-- Auto-dismissing toast after 3 seconds -->
<sit-toast-container position="top-end">
  <sit-toast show variant="success" title="Success" autohide delay="3000">
    <sit-icon slot="icon" name="check-circle-fill" size="md"></sit-icon>
    Item added to cart.
  </sit-toast>
</sit-toast-container>

<!-- Trigger toast via JS -->
<sit-button id="trigger-toast">Show Toast</sit-button>
<sit-toast-container position="bottom-end">
  <sit-toast id="my-toast" variant="danger" title="Error" dismissible>
    <sit-icon slot="icon" name="exclamation-circle-fill" size="md"></sit-icon>
    Something went wrong. Please try again.
  </sit-toast>
</sit-toast-container>

<script>
  document.getElementById("trigger-toast").addEventListener("click", () => {
    document.getElementById("my-toast").showToast();
  });
</script>

<!-- Multiple toasts stacked -->
<sit-toast-container position="bottom-end">
  <sit-toast show variant="success" title="Saved">
    <sit-icon slot="icon" name="check-circle-fill" size="md"></sit-icon>
    Document saved.
  </sit-toast>
  <sit-toast show variant="warning" title="Warning">
    <sit-icon slot="icon" name="exclamation-triangle-fill" size="md"></sit-icon>
    Storage almost full.
  </sit-toast>
</sit-toast-container>
```

## API Summary

### `<sit-toast>`

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `show` | boolean | `false` | Controls toast visibility |
| `title` | string | `"Title"` | Toast heading (required for accessibility) |
| `variant` | `info \| success \| danger \| warning \| neutral` | `info` | Visual style and semantic meaning |
| `dismissible` | boolean | `false` | Shows a close button for user dismissal |
| `autohide` | boolean | `false` | Auto-hides the toast after `delay` ms |
| `delay` | number | `5000` | Milliseconds before auto-hide (requires `autohide`) |
| `noAnimation` | boolean | `false` | Disables show/hide animations |

### `<sit-toast-container>`

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `position` | ToastPosition | — | Screen position for the toast stack |

#### ToastPosition values (current)
`top-center`, `top-end`, `bottom-start`, `bottom-center`, `bottom-end`

> `top-start`, `middle-start`, `middle-center`, `middle-end` are **deprecated since 3.7.1** — avoid these positions.

## Slots (`<sit-toast>`)

| Slot | Purpose |
|---|---|
| `icon` | Icon displayed on the left (use `<sit-icon size="md">`) |
| *(default)* | Toast message body text |
| `action` | Action link on the right (use `<sit-link size="sm">`) |

## Events (`<sit-toast>`)

| Event | Cancelable | When |
|---|---|---|
| `sit-show` | No | Toast begins showing |
| `sit-after-show` | No | Toast fully visible (animation complete) |
| `sit-hide` | No | Toast begins hiding |
| `sit-after-hide` | No | Toast fully hidden (animation complete) |

## Public Methods (`<sit-toast>`)

| Method | Description |
|---|---|
| `showToast()` | Shows the toast (sets `show = true` with animation) |
| `hideToast()` | Hides the toast (sets `show = false` with animation) |

---

**For AI agents**:
1. Always set `title` on `<sit-toast>` — it is required for accessibility.
2. `show` must be set on the toast for it to be visible on page load; `showToast()` / `hideToast()` are the programmatic API.
3. Always wrap `<sit-toast>` inside `<sit-toast-container>` — the container handles positioning.
4. Multiple `<sit-toast>` elements inside one container stack vertically automatically.
5. Avoid deprecated position values (`top-start`, `middle-*`); use `bottom-end` as the default position.
6. Icon slot accepts `<sit-icon size="md">`, action slot accepts `<sit-link size="sm">` wrapping an `<a>` tag.
