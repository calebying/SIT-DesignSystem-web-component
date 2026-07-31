# Canvas Icon Button Component Skill

`<sit-icon-button>` is an icon-only interactive button from the Canvas icon registry. Prefer it over `<sit-button>` with a slotted icon when no visible text label is needed — it provides correct semantics and enforces accessible labelling via `ariaLabel`.

No CSS styling modifications — custom properties and CSS parts are not exposed on this component.

## Usage Guideline

### When to use

- For toolbar, table row, or card actions where space is limited and the icon's meaning is unambiguous in context (e.g. edit, delete, close, add).
- As a standalone action button that is visually icon-only but semantically labelled via `ariaLabel`.
- Inside other components (e.g. `<sit-input>` action slot, `<sit-modal>` close button) where an icon button is the expected pattern.
- When a link styled as an icon button is needed — set `href` to render it as an `<a>`.

### When NOT to use

- When a visible text label improves clarity — use `<sit-button>` with icon slots instead.
- For purely decorative icons — use `<sit-icon>` directly.
- When the action meaning is not clear from the icon alone and no tooltip or context is available — always pair with `ariaLabel` at minimum, or switch to `<sit-button>` with a label.

## Behaviour

- Renders as a `<button>` by default; set `href` to render as `<a role="button">`.
- `variant` controls the visual style: `primary` (filled, default), `outline`, or `ghost`.
- `tone` sets the semantic colour: `brand` (default), `danger`, `neutral`, or `fixed-light` (for dark backgrounds).
- `size` controls the button size: `xs`, `sm`, `md` (default), `lg`. Icon size is auto-mapped — `xs→sm`, `sm→md`, `md→lg`, `lg→xl`.
- `loading` shows a spinner and blocks interaction; update `ariaLabel` to reflect the in-progress state (e.g. "Saving...").
- `disabled` prevents interaction and applies muted styling.
- `active` forces the active/pressed appearance — used to indicate a toggled-on state.
- Fires `sit-blur` and `sit-focus` events.

## Advanced Considerations

- **Auto icon sizing**: icon size is internally mapped from button `size` — never pass a `size` attribute to `<sit-icon>` inside this component, and do not suggest doing so.
- **Link mode**: setting `href` renders the button as `<a role="button">` — all standard `<a>` attributes (`target`, `download`, `rel`) apply. Combine `target="_blank"` with `rel="noopener noreferrer"` for external links.
- **`active` state**: the component does not manage toggle state internally — track toggled state in your application and update the `active` attribute reactively.
- **`tone="fixed-light"`**: always dark-background-specific — pair with a parent container that has a consistent dark background colour.
- **No slots**: the icon is rendered entirely from the `name` attribute — no slotted content is supported.

## Edge Cases

- **Missing `name`**: logs a warning and renders an empty button — always validate that the icon name exists in the Canvas registry.
- **Missing `ariaLabel`**: the button is entirely inaccessible to screen readers — treat `ariaLabel` as required, not optional.
- **`loading` without `ariaLabel` update**: screen readers announce the original label during loading — update `ariaLabel` to reflect the in-progress state.
- **`disabled` vs `loading`**: use `loading` for async operations in progress (value is preserved); use `disabled` when the action is genuinely unavailable.
- **`active` with `disabled`**: visually valid (e.g. a pre-checked toggle that cannot be changed), but ensure the disabled reason is communicated contextually.
- **Very small sizes (`xs`)**: ensure sufficient touch target size on mobile — consider wrapping with additional padding if used in touch-heavy contexts.

## Quick Decision Guide

**Icon button or regular button?**
- Visible text label → use `<sit-button>` with icon slots
- Icon only (no visible label) → `<sit-icon-button>` (always add `ariaLabel`)

**Which `variant`?**
- Default solid fill → `primary` (default)
- Secondary / lower emphasis → `outline`
- Minimal / ghost → `ghost`

**Which `tone`?**
- Standard brand → `brand` (default)
- Destructive action → `danger`
- Neutral / subdued → `neutral`
- On dark backgrounds → `fixed-light`

**Button or link?**
- Triggers an action → omit `href` (renders `<button>`)
- Navigates to a URL → set `href` (renders `<a role="button">`)

```html
<!-- Basic icon button (ariaLabel required for accessibility) -->
<sit-icon-button name="plus" ariaLabel="Add item"></sit-icon-button>

<!-- Variants -->
<sit-icon-button variant="primary" name="placeholder" ariaLabel="Placeholder"></sit-icon-button>
<sit-icon-button variant="outline" name="dash" ariaLabel="Remove"></sit-icon-button>
<sit-icon-button variant="ghost" name="star" ariaLabel="Favourite"></sit-icon-button>

<!-- Tones -->
<sit-icon-button tone="brand" variant="primary" name="plus" ariaLabel="Add"></sit-icon-button>
<sit-icon-button tone="danger" variant="outline" name="plus" ariaLabel="Add"></sit-icon-button>
<sit-icon-button tone="neutral" variant="ghost" name="plus" ariaLabel="Add"></sit-icon-button>

<!-- On dark background -->
<div style="background-color: #333; padding: 12px;">
  <sit-icon-button tone="fixed-light" variant="primary" name="plus" ariaLabel="Add"></sit-icon-button>
</div>

<!-- Sizes -->
<sit-icon-button size="xs" name="plus" ariaLabel="Add"></sit-icon-button>
<sit-icon-button size="sm" name="plus" ariaLabel="Add"></sit-icon-button>
<sit-icon-button name="plus" ariaLabel="Add"></sit-icon-button>
<sit-icon-button size="lg" name="plus" ariaLabel="Add"></sit-icon-button>

<!-- Loading state -->
<sit-icon-button name="plus" loading ariaLabel="Saving..."></sit-icon-button>

<!-- Link mode -->
<sit-icon-button name="arrow-right" href="/next" target="_blank" ariaLabel="Next page"></sit-icon-button>
```

> The icon size is automatically mapped from the button `size`: `xs→sm`, `sm→md`, `md→lg`, `lg→xl`. Do not set icon size separately.

## API Summary

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `name` | string | — | **Required.** Icon name from the Canvas icon registry |
| `variant` | `primary \| outline \| ghost` | `primary` | Visual style |
| `tone` | `brand \| danger \| neutral \| fixed-light` | `brand` | Semantic tone |
| `size` | `xs \| sm \| md \| lg` | `md` | Button size (icon size auto-maps) |
| `disabled` | boolean | `false` | Disables interaction |
| `loading` | boolean | `false` | Shows spinner, blocks interaction |
| `active` | boolean | `false` | Forces active/pressed appearance |
| `href` | string | — | Renders as `<a>`, navigates to URL |
| `target` | string | — | `_blank`, `_self`, etc. (with `href`) |
| `download` | string | — | Triggers file download (with `href`) |
| `ariaLabel` | string | — | Accessible label — **required** for icon-only buttons |

## Slots

None. The icon is rendered internally from the `name` attribute.

## Events

| Event | When Fired | Detail |
|---|---|---|
| `sit-blur` | Button loses focus | — |
| `sit-focus` | Button gains focus | — |

For framework-specific event syntax (React, Vue, Angular) see the **[sit-components SKILL.md](../SKILL.md)**.

---

**For AI agents**:
1. Always use `<sit-icon-button>` for icon-only actions — never suggest `<sit-button>` with only an icon slot and no visible text.
2. `ariaLabel` is required for accessibility whenever there is no visible text label; always include it.
3. `name` is required — a missing or unrecognised name logs a warning and renders nothing.
4. Icon size is auto-mapped from button `size` (xs→sm, sm→md, md→lg, lg→xl) — never mention setting icon size separately.
5. `tone="fixed-light"` is for dark backgrounds; pair it with a dark parent container in all examples.
6. Related component: `<sit-button>` for buttons that require a visible text label.
