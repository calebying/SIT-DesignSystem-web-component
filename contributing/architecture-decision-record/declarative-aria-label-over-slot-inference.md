# Declarative ariaLabel over slot text inference

## Status

Accepted

## Context

Components like `<sit-accordion-item>` render an internal `<button>` in their shadow DOM that requires an accessible label. One approach is to infer the label at runtime by listening for `slotchange` events, reading the assigned nodes' `textContent`, and forwarding it to `aria-label` on the button.

This JS-based inference introduces timing issues:
- The `slotchange` event fires asynchronously after the element connects to the DOM.
- In SSR/hydration scenarios (e.g. Next.js, Astro), the slot content may not be available when the component first renders, causing the button to momentarily lack an accessible label.
- Accessibility scanners (axe-core) that run before hydration completes will flag the button as inaccessible.

The `ariaLabel` property pattern already exists across the component library (`sit-button`, `sit-icon-button`, `sit-progress-bar`, `sit-drawer`, `sit-sidebar`, `sit-breadcrumb`), so adopting it is consistent.

## Decision

Use a declarative `ariaLabel` property on components whose internal interactive elements need an accessible label. The consumer explicitly sets the label value matching their header/title text:

```html
<sit-accordion-item ariaLabel="Section title">
  <div slot="header">Section title</div>
  <div slot="content">...</div>
</sit-accordion-item>
```

Do not infer the label from slot content via JavaScript.

## Consequences

**Easier:**
- No timing issues — the label is available on first render, including during SSR hydration.
- Passes accessibility scanners (axe-core) without needing to wait for `updateComplete` or `slotchange`.
- Simpler implementation — no `@state`, no `slotchange` handler, no `ifDefined` guarding against empty strings.
- Consistent with the existing `ariaLabel` convention used across the library.

**More difficult:**
- Consumers must remember to set `ariaLabel` and keep it in sync with the header text — there is no automatic derivation.
- If the header text changes dynamically, the consumer must also update `ariaLabel`.

## Future direction

`test/a11y/axe-core/` remains the primary accessibility test suite. An earlier
proposal to adopt GovTech's Oobee scanner as a shadow-DOM-aware alternative was
not carried forward after the rebrand — Oobee and its related tooling have
been removed from this repository.

## Date of proposal

02/06/2026
