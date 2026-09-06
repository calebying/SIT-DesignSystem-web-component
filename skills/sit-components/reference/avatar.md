# Canvas Avatar Component Skill

`<sit-avatar>` renders a user's photo, with an automatic initials or icon fallback when there's no
image (or the image fails to load). Includes optional size variants and a status dot.

## Usage Guideline

### When to use

- Representing a person or account in a list, card, comment, table cell, or navigation/header area.
- Any place a user photo may or may not be available and a graceful fallback is needed.
- Showing presence/availability alongside identity (via the `status` dot).

### When NOT to use

- For non-person entities with their own dedicated visual (e.g. a document/file type icon) — use
  `<sit-icon>` directly instead.
- As a purely decorative image with no identity meaning — use a plain `<img>` or `<sit-icon>`.
- For a large hero/profile photo where cropping to a circle isn't desired — use a plain `<img>`.

## Behaviour

- Renders `src` as a circular, `object-fit: cover` image when set.
- If `src` is unset, or the image fails to load (network error, broken URL, 404), falls back to
  `initials` if set, otherwise a generic person icon (`user-circle`).
- The fallback's background colour is deterministic, not random: it's picked by hashing
  `initials` (or `alt` if `initials` is unset) and indexing into 8 `--sit-{variant}-surface-default`
  colour families — the same identity always resolves to the same colour.
- `size` controls the diameter: `xs` (24px), `sm` (32px), `md` (40px, default), `lg` (48px), `xl`
  (64px).
- `status` renders a small coloured dot (`online` = success colour, `away` = warning colour,
  `offline` = neutral grey) positioned at the bottom-right corner. Omit `status` (and don't slot
  anything into `status`) to render no dot at all.
- The `status` slot renders inside the dot — use it for fully custom status content; it composes
  with (doesn't require) the `status` attribute.
- Emits `sit-error` once the image-load fallback has happened (informational only — the fallback
  is already showing by the time this fires).

## Advanced Considerations

- **Fallback colour is a hash, not user-configurable**: there's no `variant`/`color` prop to force
  a specific fallback colour — it's always derived from `initials`/`alt`. If a specific colour
  matters more than consistency-per-identity, use `src` with a pre-rendered image instead.
- **`initials` is used as-is**: pass exactly what should render (e.g. `"JT"`), not a full name —
  the component does not derive initials from a name string itself.
- **Image error handling is automatic**: you don't need to catch/retry a broken `src` yourself —
  set `initials` as a safety net and the component falls back to it on its own.
- **`status` and the `status` slot can be used together**: the attribute drives the dot's position/
  base colour via CSS; slotted content renders on top of it for a custom icon/graphic.

## Edge Cases

- **`src` set but `initials` unset, and the image fails**: falls back to the generic person icon,
  not blank — always safe, but a named `initials` fallback is more identifiable.
- **Very long `initials`**: rendered as-is with no truncation — keep it to 1-2 characters for the
  circular layout to read cleanly.
- **`status` set with no matching built-in state** (a typo, e.g. `"onlien"`): no known
  `status-{value}` CSS rule matches, so the dot renders with its default neutral-grey background
  and no visible error — double-check the value is exactly `online`, `away`, or `offline`.
- **Rapid `src` changes** (e.g. list virtualization reusing a component): `_imageFailed` state
  isn't reset when `src` changes to a new URL that hasn't failed yet — each new `src` gets its own
  fresh `<img>` load attempt because Lit re-renders the `src` attribute on the same `<img>` element,
  triggering a new load.

## Quick Decision Guide

**Do I have a photo URL?**
- Yes → set `src` (and `alt`) — the fallback only shows if it 404s.
- No, but I know initials → set `initials`.
- No → omit both, the generic person icon shows.

**Do I need to show presence?**
- Yes, one of online/away/offline → set `status`.
- Yes, something custom → slot content into `status` (with or without the `status` attribute).
- No → omit `status` entirely.

```html
<sit-avatar src="https://example.com/jane.jpg" alt="Jane Tan" size="lg" status="online"></sit-avatar>
<sit-avatar initials="BL" alt="Bob Lee" size="md"></sit-avatar>
<sit-avatar size="sm"></sit-avatar>
```

## API Summary

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `src` | string | — | Image URL |
| `alt` | string | `""` | Accessible alt text for the image; also a fallback hash seed |
| `initials` | string | — | Fallback text shown when there's no image (or it fails to load) |
| `size` | `xs \| sm \| md \| lg \| xl` | `md` | Avatar diameter |
| `status` | `online \| away \| offline` | — | Status-dot state. Omit for no dot |

## Slots

| Slot | Purpose |
|---|---|
| `status` | Custom status-dot content, rendered inside the dot |

## Events

| Event | When Fired | Detail |
|---|---|---|
| `sit-error` | The `src` image failed to load and the component fell back to initials/icon | — |

For framework-specific event syntax (React `onSitError`, Vue `@sit-error`, Angular
`(sit-error)`), see the **[sit-components SKILL.md](../SKILL.md)**.

## Public Methods

None.

---

**For AI agents**:
1. Set `initials` alongside `src` whenever possible — it's the fallback if the image 404s, and
   costs nothing when the image loads fine.
2. Don't attempt to derive `initials` from a full name inside your own logic and pass it as one
   prop expecting the component to split it — `initials` is rendered exactly as given.
3. There is no `variant`/colour prop for the fallback background — it's always the deterministic
   hash-based colour. Don't invent a non-existent prop trying to force a specific fallback colour.
4. `status` only accepts `online`, `away`, or `offline` — any other string silently renders the
   default neutral-grey dot with no error, so double-check spelling.
5. `sit-error` is informational (the fallback has already rendered) — don't wire it to retry logic
   expecting to swap back to the image; there's no built-in retry.
