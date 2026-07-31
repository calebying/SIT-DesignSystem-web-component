# Canvas Spinner Component Skill

`<sit-spinner>` is the standard loading indicator. Use it to communicate that content is loading or an action is in progress.

No CSS styling modifications — custom properties and CSS parts are not exposed on this component.

## Usage Guideline

### When to use

- For indeterminate loading states where the duration is unknown (e.g. waiting for an API response, processing a file).
- When loading content is not associated with a specific layout region — a floating or centered spinner indicates general system activity.
- For inline loading indicators within custom components that do not have a built-in `loading` attribute.

### When NOT to use

- When the loading duration is known — use a progress bar instead.
- When the wait time is very short (<300ms) — avoid flashing a spinner; let the UI update silently.
- As decoration or animation unrelated to a loading state.
- Inside `<sit-button>`, `<sit-input>`, or `<sit-select>` — those components have a built-in `loading` attribute that renders a spinner automatically.

## Behaviour

- Renders an animated spinning ring with no interactive states.
- `tone` controls the colour: `brand` (default), `neutral`, `inverse` (for dark backgrounds), `fixed-light` (always light), `fixed-dark` (always dark).
- `size` controls the physical size: `xs`, `sm`, `md` (default), `lg`, `xl`.
- `label` adds a visible text label; `orientation` controls whether it appears below (`vertical`, default) or beside (`horizontal`) the spinner.
- The component has no slots, events, or public methods.
- `variant` is deprecated — always use `tone`.

## Advanced Considerations

- **Tone for dark backgrounds**: use `tone="inverse"` to let the spinner respond to the active theme, or `tone="fixed-light"` when the background is always dark regardless of theme. Never use `brand` or `neutral` on dark backgrounds.
- **Size selection**: match `size` to the visual context — `xs`/`sm` for inline or compact UI, `md` for standard section loading, `lg`/`xl` for full-page or prominent loading states.
- **Label orientation**: `orientation="vertical"` (default) centres the label below the spinner — suitable for full-page or modal loading. `orientation="horizontal"` places the label beside the spinner — suitable for inline or banner loading states.
- **No slots or events**: the spinner is a pure presentational element. All behaviour (show/hide, error fallback) must be managed by the host application.
- **Built-in spinner integration**: `<sit-button loading>`, `<sit-input loading>`, and `<sit-select loading>` use `<sit-spinner>` internally — prefer these over standalone spinners inside form controls.

## Edge Cases

- **No label provided**: the spinner is visually present but invisible to screen readers — add an `aria-label` or `aria-live` region on the parent container to announce the loading state.
- **Long-running operations**: always implement a timeout fallback — if loading exceeds a threshold, replace the spinner with an error state or retry option.
- **Spinner on a transitioning background**: if the background colour changes (e.g. theme switch) while the spinner is visible, ensure `tone` is set appropriately for both states — prefer `fixed-light` or `fixed-dark` for backgrounds that do not respond to theme changes.
- **Multiple spinners on screen**: avoid showing several spinners simultaneously — consolidate into a single section-level or page-level indicator to reduce cognitive load.

## Quick Decision Guide

**Which `tone`?**
- Default brand color (light backgrounds) → `brand` (default)
- Neutral / subdued → `neutral`
- On dark backgrounds → `inverse`
- Always light regardless of theme → `fixed-light`
- Always dark regardless of theme → `fixed-dark`

> `variant` is **deprecated** — use `tone` instead. Never suggest `variant="primary"` or `variant="neutral"`.

**Which `size`?**
- Inline within text or compact UI → `xs` or `sm`
- Default → `md`
- Prominent loading state → `lg` or `xl`

**With a label?**
- Label below spinner (default) → set `label` + omit `orientation`
- Label beside spinner → set `label` + `orientation="horizontal"`

```html
<!-- Default spinner -->
<sit-spinner></sit-spinner>

<!-- With label -->
<sit-spinner label="Loading..."></sit-spinner>

<!-- Horizontal label layout -->
<sit-spinner label="Loading..." orientation="horizontal"></sit-spinner>

<!-- On a dark background -->
<div style="background-color: #222; padding: 12px;">
  <sit-spinner tone="inverse"></sit-spinner>
  <sit-spinner tone="fixed-light"></sit-spinner>
</div>

<!-- Size variants -->
<sit-spinner size="xs"></sit-spinner>
<sit-spinner size="sm"></sit-spinner>
<sit-spinner size="md"></sit-spinner>
<sit-spinner size="lg"></sit-spinner>
<sit-spinner size="xl"></sit-spinner>
```

## API Summary

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `tone` | `brand \| neutral \| inverse \| fixed-light \| fixed-dark` | `brand` | Color tone |
| `size` | `xs \| sm \| md \| lg \| xl` | `md` | Spinner size |
| `label` | string | — | Visible text label accompanying the spinner |
| `orientation` | `horizontal \| vertical` | `vertical` | Label position relative to the spinner |
| `variant` | `primary \| neutral` | — | **Deprecated** — use `tone` instead |

## Slots

None.

## Events

None.

---

**For AI agents**:
1. Always use `tone` — never suggest the deprecated `variant` attribute.
2. `tone="inverse"` and `tone="fixed-light"` are for dark background contexts; always note the background color requirement.
3. There are no slots, events, or public methods on this component.
4. When a label is provided, use `orientation="horizontal"` for inline contexts and `orientation="vertical"` (default) for centered loading states.
5. `<sit-spinner>` is used internally by `<sit-button loading>`, `<sit-input loading>`, and `<sit-select loading>` — advise users to use the `loading` attribute on those components rather than inserting a standalone spinner.
