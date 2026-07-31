# Canvas System Banner Component Skill

`<sit-system-banner>` displays one or more `<sit-system-banner-item>` messages that cycle automatically every 5 seconds. Use it for site-wide announcements, planned maintenance notices, or system status updates. It sits above `<sit-masthead>` and `<sit-mainnav>`.

No CSS styling modifications — custom properties and CSS parts are not exposed on this component.

## Usage Guideline

### When to use

- For planned maintenance notices, service outage alerts, or critical system status updates that affect all users.
- When a persistent, page-level message must appear before the main navigation.
- For rotating announcements where multiple notices need equal visibility.

### When NOT to use

- For page- or section-specific feedback — use `<sit-alert>` instead.
- For transient action confirmations — use `<sit-toast>` instead.
- For promotional or marketing content that is not operationally critical.
- When the message applies only to a specific user action or form — inline alerts are more appropriate.

## Behaviour

- Hidden by default — add `show` to make it visible.
- With a single `<sit-system-banner-item>`, displays that item statically.
- With multiple items, cycles through them automatically every 5 seconds; pagination dots appear automatically.
- `dismissible` shows a close (×) button that hides the entire banner on click; fires `sit-hide`.
- `fluid` uses a full-width container instead of the default constrained container.
- `noClampAction` prevents the `action` slot content from being line-clamped where long action text would otherwise be truncated.
- Fires `sit-show` when the banner begins showing and `sit-hide` when dismissed.
- No public methods — visibility is controlled via the `show` attribute only.

## Advanced Considerations

- **Positioning**: the banner must be the first element in the page body, above `<sit-masthead>` and `<sit-mainnav>` — placing it elsewhere breaks the intended layout hierarchy.
- **Persistence across navigation**: the banner re-renders on each page load unless dismissed state is persisted (e.g. via `sessionStorage`); listen to `sit-hide` and restore `show` accordingly.
- **`noClampAction`**: by default, long `action` slot content is line-clamped to prevent the banner from expanding vertically; set `noClampAction` only when the action text must be fully visible.
- **No public methods**: there is no `.show()` or `.hide()` method — toggle the `show` attribute directly from JavaScript.
- **Multiple items**: pagination dots are rendered automatically; no configuration is needed. Auto-cycling is always 5 seconds and is not configurable.

## Edge Cases

- **`show` omitted**: the banner is invisible — always set `show` explicitly to render it.
- **Single item with `dismissible`**: after the user dismisses, the banner hides entirely — ensure `sit-hide` is handled if persistence is needed.
- **Multiple items, one item dismissed**: dismissal hides the entire banner, not just the current item.
- **Long message text**: may expand the banner height — keep messages concise to maintain a single-line layout.
- **`action` slot with long text, no `noClampAction`**: text is line-clamped and may be truncated — add `noClampAction` if the full action label is necessary.
- **No `icon` in slot**: the banner renders without an icon prefix — always provide one for visual clarity and accessibility.

## Quick Decision Guide

**Show the banner?** → Add `show` to `<sit-system-banner>`

**User can dismiss it?** → Add `dismissible`

**Full-width container?** → Add `fluid`

**Allow action text/button to not be clamped?** → Add `noClampAction`

**Single announcement vs multiple?** → Use one or more `<sit-system-banner-item>` elements; pagination appears automatically with multiple items

```html
<!-- Single announcement -->
<sit-system-banner show>
  <sit-system-banner-item>
    <sit-icon slot="icon" name="info-circle-fill" size="md"></sit-icon>
    Scheduled maintenance on 12 December 2024, 10pm–12am SGT.
    <sit-link size="sm" tone="fixed-light" slot="action">
    </sit-link>
  </sit-system-banner-item>
</sit-system-banner>

<!-- Multiple items, dismissible -->
<sit-system-banner show dismissible>
  <sit-system-banner-item>
    <sit-icon slot="icon" name="info-circle-fill" size="md"></sit-icon>
    First announcement with details about a system update.
    <sit-link size="sm" tone="fixed-light" slot="action">
      <a href="#">Action link <sit-icon name="arrow-right"></sit-icon></a>
    </sit-link>
  </sit-system-banner-item>
  <sit-system-banner-item>
    <sit-icon slot="icon" name="exclamation-triangle-fill" size="md"></sit-icon>
    Second announcement about a service change.
    <sit-button href="#" slot="action" size="sm" tone="fixed-light" variant="outline">
      Learn more <sit-icon name="arrow-right" slot="rightIcon" size="md"></sit-icon>
    </sit-button>
  </sit-system-banner-item>
</sit-system-banner>
```

## API Summary

### `<sit-system-banner>`

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `show` | boolean | `false` | Controls banner visibility |
| `dismissible` | boolean | `false` | Shows a close button to dismiss the entire banner |
| `fluid` | boolean | `false` | Uses a full-width (fluid) container |
| `noClampAction` | boolean | `false` | Prevents the action slot text/button from being line-clamped |

### `<sit-system-banner-item>`

No attributes.

## Slots

### `<sit-system-banner>`

| Slot | Purpose |
|---|---|
| *(default)* | `<sit-system-banner-item>` elements |

### `<sit-system-banner-item>`

| Slot | Purpose |
|---|---|
| `icon` | Icon for the announcement (use `<sit-icon size="md">`) |
| *(default)* | Announcement message text |
| `action` | Action link or button (`<sit-link tone="fixed-light">` or `<sit-button tone="fixed-light">`) |

## Events (`<sit-system-banner>`)

| Event | Cancelable | When |
|---|---|---|
| `sit-show` | No | Banner begins showing |
| `sit-hide` | No | Banner begins hiding (dismissed) |

---

**For AI agents**:
1. `show` must be set on `<sit-system-banner>` to make it visible — it defaults to hidden.
2. Pagination dots appear automatically when there are multiple `<sit-system-banner-item>` elements.
3. Items cycle every 5 seconds automatically when multiple items are present.
4. Place the banner above `<sit-masthead>` and `<sit-mainnav>` in the page structure.
5. Use `<sit-link tone="fixed-light">` or `<sit-button tone="fixed-light" variant="outline">` in the `action` slot to match the dark banner background.
6. There are no public methods on this component.
