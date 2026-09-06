# Canvas Segmented Control Component Skill

`<sit-segmented-control>` is a grouped single-choice control: a connected row of `<sit-segment>`
buttons with exactly one active at a time. Reuses `<sit-radio-group>`'s ARIA/keyboard pattern
(`role="radiogroup"` + `role="radio"` children, roving tabindex, Arrow keys, Space) applied to a
button-styled row instead of radio inputs.

## Usage Guideline

### When to use

- Switching between a small number (2-5) of mutually exclusive views or modes where all options
  should be visible at once (e.g. List/Grid/Table view, Day/Week/Month range).
- A compact, always-visible alternative to a `<sit-tab>` group when the choice affects a filter/
  display mode rather than navigating to different page content.

### When NOT to use

- More than ~5 options — the row becomes cramped; use `<sit-select>` instead.
- Navigating between different page sections/content — use `<sit-tab>` instead, which has the
  right semantics (`role="tablist"`/`tabpanel`) for that.
- A single yes/no toggle — use `<sit-switch>` instead.
- Multiple selections at once — this is single-choice only; there's no multi-select variant.

## Behaviour

- `<sit-segmented-control>` is the container (`role="radiogroup"`); `<sit-segment>` children are
  the individual options (`role="radio"`, `aria-checked`).
- Exactly one segment is always selected — unlike a native radio group, there's no valid "nothing
  selected" state. If `value` doesn't match any segment (including being unset), the first
  non-disabled segment is auto-selected once the group's segments are known.
- Click a segment, or use Arrow Left/Right/Up/Down to move selection with the keyboard (wraps
  around at either end), or Space to (re-)confirm the currently-focused segment.
- The roving tab stop is always the currently *selected* segment — Tab reaches the group at that
  one segment, not every segment individually.
- `disabled` on the group disables every segment; `disabled` on an individual `<sit-segment>`
  disables just that one (skipped by keyboard navigation, unselectable by click).
- `size` (`sm`/`md`/`lg`) sets the segment padding/font-size.
- Emits `sit-change` (detail: `{ value }`) whenever the selection changes.

## Advanced Considerations

- **Always provide `ariaLabel`** on `<sit-segmented-control>` — there's no visible `<label>`
  element (unlike `<sit-radio-group>`, which has a `label` prop that renders visibly), so
  `ariaLabel` is the only accessible name assistive tech gets for the group.
- **`<sit-segment>`'s `selected`/`disabled` reflect state the group owns**: don't set `selected`
  directly on a `<sit-segment>` expecting it to change the group's `value` — set `value` on the
  parent `<sit-segmented-control>` instead (or click/keyboard-navigate).
- **No native form participation**: unlike `<sit-radio-group>`, this component doesn't implement
  `FormControlElement`/constraint validation — it's a UI toggle, not a form input. If the selection
  needs to submit with a `<form>`, read `value` via `sit-change` and set a hidden input yourself.
- **First-segment auto-select is a deliberate design decision**, not a fallback for a bug: a
  connected button row visually implies one option is always "on," unlike a set of separate radio
  buttons where an all-unchecked initial state reads as normal.

## Edge Cases

- **All segments disabled**: no segment is selectable or keyboard-reachable at all — avoid this
  state (disable the whole group with the group's own `disabled` instead, which is the same visual
  result but clearer intent).
- **`value` set to a value matching a disabled segment**: that segment still renders as visually
  selected (matches `value`), but arrow-key navigation skips over it as a keyboard destination.
- **Segments added/removed dynamically**: re-evaluated on `slotchange` — if the current `value` no
  longer matches any segment, the first non-disabled remaining segment becomes selected.
- **Very many segments in a narrow container**: the row scrolls horizontally rather than wrapping
  (`overflow-x: auto`) — keep to a handful of segments for a good compact-control experience.

## API Summary

### `<sit-segmented-control>` attributes

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `value` | string | `""` | The selected segment's value |
| `disabled` | boolean | `false` | Disables every segment |
| `size` | `sm \| md \| lg` | `md` | Segment size |
| `ariaLabel` | string | — | Accessible name for the group (always provide this) |

### `<sit-segment>` attributes

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `value` | string | `""` | This segment's value, matched against the group's `value` |
| `selected` | boolean | `false` | Owned by the parent group — don't set directly |
| `disabled` | boolean | `false` | Disables this one segment |

## Slots

| Component | Slot | Purpose |
|---|---|---|
| `<sit-segmented-control>` | default | `<sit-segment>` children |
| `<sit-segment>` | default | The segment's label content (text and/or icon) |

## Events

| Event | When Fired | Detail |
|---|---|---|
| `sit-change` | Selection changes (click, Arrow keys, or Space) | `{ value }` |

For framework-specific event syntax (React `onSitChange`, Vue `@sit-change`, Angular
`(sit-change)`), see the **[sit-components SKILL.md](../SKILL.md)**.

## Public Methods

None on `<sit-segmented-control>`. `<sit-segment>` exposes `focus()`/`blur()` (used internally by
the group's keyboard navigation — not usually called directly).

---

**For AI agents**:
1. Always set `ariaLabel` on `<sit-segmented-control>` — there's no visible label element.
2. Don't set `selected` directly on a `<sit-segment>` — set `value` on the parent
   `<sit-segmented-control>` instead; the group owns and syncs each segment's `selected` state.
3. This is single-choice only (like a radio group) — for multi-select, look elsewhere; there's no
   multi-select variant of this component.
4. Reach for `<sit-tab>` instead if the choice navigates between different page content/sections,
   not just a filter/display mode.
5. There is no built-in form/validation integration (`FormControlElement`) — if you need the
   selection to be part of `<form>` submission, wire that up yourself via the `sit-change` event.
