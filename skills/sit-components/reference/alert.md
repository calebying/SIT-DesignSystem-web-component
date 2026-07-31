# Canvas Alert Component Skill

`<sit-alert>` displays short, contextual feedback messages — info, success, warnings, or errors. Use native `<a>` tags directly inside the alert body for inline links — the component styles them automatically.

No CSS styling modifications — custom properties and CSS parts are not exposed on this component.

## Usage Guideline

### When to use

- To provide contextual feedback about an action, event, or system state — success, warning, error, or informational.
- When feedback is directly related to content on the current page and should appear inline near the relevant section.
- For form-level validation summaries (e.g. "Please fix the errors below before submitting").
- When a temporary or persistent message needs to be visible within the page layout without blocking the user.

### When NOT to use
- For interruptive or critical decisions → use modal/dialog
- For passive or static information → use text
- For global messaging across pages → use banner
- For inline validation → use form field error

## Behaviour

**Visibility**
- Appears inline within layout
- Should be placed near relevant content or action

**Dismissibility**
- Optional dismiss button
- User-initiated dismissal
- Should not reappear unless re-triggered

**Persistence**
- Temporary → tied to session or action
- Persistent → remains until resolved or dismissed

**Stacking**
- Multiple alerts stack vertically
- Limit number to avoid overload
- Prioritise by severity: Danger > Warning > Info > Success > Neutral

## Component Composition

**`icon` slot** — a single `<sit-icon size="md">` that matches the alert's semantic variant:
- `info` → `<sit-icon name="info-circle-fill" size="md">`
- `success` → `<sit-icon name="check-circle-fill" size="md">`
- `danger` → `<sit-icon name="exclamation-circle-fill" size="md">`
- `warning` → `<sit-icon name="exclamation-triangle-fill" size="md">`
- Omit the slot entirely for a text-only (no icon) alert.
- Always set `size="md"` on the icon — this is the required size for alert icons.

**Default slot (body)** — text content and native `<a>` tags for inline links. The alert component automatically styles slotted `<a>` elements to match the variant color with an underline. Basic HTML is permitted (`<strong>`, `<em>`, `<p>`). Avoid placing interactive components in the body — alerts are informational only.

**Inline links** — use a native `<a>` tag directly as a slotted child (not wrapped in a `<div>`). The alert applies the correct variant-matched link style automatically via `::slotted(a)`.

**`action` slot** — use for call-to-action buttons placed after the description.

**Avoid placing inside an alert:**
- Form inputs or complex interactive components
- Long multi-paragraph content — keep alerts concise; link out for details

## Deprecated: `<sit-alert-link>`

> **`<sit-alert-link>` is deprecated.** Use a native `<a>` element directly inside `<sit-alert>` instead. The alert component now styles slotted anchor tags automatically.

The old pattern required wrapping content in a `<div>`:
```html
<!-- DEPRECATED — do not use -->
<sit-alert show>
  <div>Message with <sit-alert-link href="#">link</sit-alert-link>.</div>
</sit-alert>
```

The new pattern uses `<a>` directly (no `<div>` wrapper needed):
```html
<!-- RECOMMENDED -->
<sit-alert show>
  Message with <a href="#">link</a> and more text.
</sit-alert>
```

## Advanced Considerations

**Variant Strategy**
- Filled → high emphasis, critical or important messages
- Outlined → lower emphasis, supportive messaging
- Neutral → use when semantic meaning is not required

**Alert vs Toast vs System Banner**

| Component | Usage |
|---|---|
| Alert | Inline, persistent, contextual |
| Toast | Temporary, overlay, passive |
| System Banner | Global, page-level messaging |

**Placement Strategy**
- Place close to triggering action or relevant content
- Avoid placing at unrelated sections of the page
- For forms: top of form → summary errors; inline → contextual guidance

## Edge Cases

- **Multiple alerts** — risk of cognitive overload; prioritise and consolidate
- **Long content** — reduces readability; keep concise or link out
- **Missing actions** — user unsure what to do; always provide next step if needed
- **Auto-dismiss behaviour** — may cause users to miss important info; avoid auto-dismiss for critical alerts
- **Repeated alerts** — same alert appearing multiple times; deduplicate or persist state
- **Accessibility gaps** — alerts not announced or not focusable; apply correct ARIA roles and keyboard support

## Quick Decision Guide

**Which `variant`?**
- Informational → `info` (default)
- Positive / completed → `success`
- Error / destructive → `danger`
- Caution → `warning`
- Neutral / subdued → `neutral`

**Filled or outlined?**
- Solid colored background (default) → omit `outlined`
- Lighter outline style → add `outlined`

**Dismissible?**
- Permanent message → omit `dismissible`
- User can close it → add `dismissible` (close button appears automatically)

**Visible on first render?**
- Set `show` to control visibility. Both dismissible and non-dismissible alerts require `show` to be visible.

```html
<!-- Basic alert with link -->
<sit-alert show variant="info" title="Title">
  <sit-icon slot="icon" name="info-circle-fill" size="md"></sit-icon>
  Description with <a href="#">link</a> and more details here.
</sit-alert>

<!-- All variants -->
<sit-alert show variant="success" title="Success alert">
  <sit-icon slot="icon" name="check-circle-fill" size="md"></sit-icon>
  Operation completed. <a href="#">Learn more</a> about the changes.
</sit-alert>

<sit-alert show variant="danger" title="Error alert">
  <sit-icon slot="icon" name="exclamation-circle-fill" size="md"></sit-icon>
  Something went wrong. Please <a href="#">try again</a> or contact support.
</sit-alert>

<sit-alert show variant="warning" title="Warning alert">
  <sit-icon slot="icon" name="exclamation-triangle-fill" size="md"></sit-icon>
  Proceed with <a href="#">caution</a> before making changes.
</sit-alert>

<sit-alert show variant="neutral" title="Neutral alert">
  <sit-icon slot="icon" name="info-circle-fill" size="md"></sit-icon>
  Here is some neutral <a href="#">information</a> for your reference.
</sit-alert>

<!-- Outlined variant -->
<sit-alert show variant="info" title="Title" outlined>
  <sit-icon slot="icon" name="info-circle-fill" size="md"></sit-icon>
  Outlined alert with <a href="#">link</a> and extra context.
</sit-alert>

<!-- Dismissible alert -->
<sit-alert show variant="info" title="Title" dismissible>
  <sit-icon slot="icon" name="info-circle-fill" size="md"></sit-icon>
  This alert can be closed. <a href="#">Undo</a> this action.
</sit-alert>

<!-- Alert without icon -->
<sit-alert show title="Title">
  Alert with no icon and a <a href="#">link</a> for more info.
</sit-alert>

<!-- Alert with action slot -->
<sit-alert show variant="info" title="Info alert">
  <sit-icon slot="icon" name="info-circle-fill" size="md"></sit-icon>
  Description with <a href="#">link</a> and more details here
  <sit-button slot="action" variant="outline" size="sm" tone="fixed-light">Take Action</sit-button>
</sit-alert>
```

## API Summary — `<sit-alert>`

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `show` | boolean | `false` | Controls visibility of the alert |
| `variant` | `info \| success \| danger \| warning \| neutral` | `info` | Visual theme variant |
| `outlined` | boolean | `false` | Lighter outlined style instead of solid filled |
| `dismissible` | boolean | `false` | Shows a close button so the user can dismiss the alert |
| `title` | string | — | Alert title text (plain text only, no HTML) |

## API Summary — `<sit-alert-link>` (deprecated)

> **Deprecated.** Use a native `<a>` element directly inside `<sit-alert>` instead.

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `href` | string | — | URL the link navigates to |
| `target` | `_blank \| _parent \| _self \| _top` | — | Browser open target |

## Slots — `<sit-alert>`

| Slot | Purpose |
|---|---|
| *(default)* | Main alert body content — text and native `<a>` tags for inline links |
| `icon` | Icon displayed to the left of the title; pass a single `<sit-icon>` or SVG element |
| `action` | Call-to-action button placed after the description |

## Events — `<sit-alert>`

| Event | When Fired | Detail |
|---|---|---|
| `sit-show` | When the alert becomes visible (`show` set to `true`) | — |
| `sit-hide` | After the alert closes (`show` set to `false`) | — |

For framework-specific event syntax (React, Vue, Angular) see the **[sit-components SKILL.md](../SKILL.md)**.

## Public Methods — `<sit-alert>`

| Method | Description |
|---|---|
| `close()` | Sets `show` to `false`, closing the alert |

---

**For AI agents**:
1. Always use `<sit-alert>` for feedback messages — never suggest custom `<div>` banners.
2. `show` must be set to `true` for the alert to be visible regardless of whether it is `dismissible`.
3. The `icon` slot is optional; omit it for a text-only alert. When using it, always set `size="md"` on the `<sit-icon>`.
4. **Use native `<a>` tags directly inside the alert body for inline links — do NOT use `<sit-alert-link>` (deprecated).** The `<a>` must be a direct slotted child (not wrapped in a `<div>`) for styling to apply.
5. `title` accepts plain text only — do not pass HTML into the `title` attribute.
6. `close()` programmatically dismisses the alert; listening for `sit-hide` confirms it has closed.
7. `outlined` and `dismissible` can be combined freely with any `variant`.
8. The `action` slot accepts a `<sit-button>` for call-to-action use cases.
