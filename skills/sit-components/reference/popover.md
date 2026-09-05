# Canvas Popover Component Skill

`<sit-popover>` is a generic floating-content primitive: it positions arbitrary panel content
relative to a trigger element. Use it when neither `<sit-tooltip>` (text-only, hover-oriented) nor
`<sit-dropdown>` (list-item menu semantics) fits what you need to show.

## Usage Guideline

### When to use

- Showing rich, arbitrary content (a form, a mini profile card, custom buttons) anchored to a
  trigger element, where `<sit-tooltip>`'s plain-text `content` prop isn't enough.
- A click-to-open info panel that isn't a list of selectable items (if it were, use
  `<sit-dropdown>` instead).
- A hover-to-open rich preview (e.g. a user card on hover) where `<sit-tooltip>`'s text-only
  content is too limited.

### When NOT to use

- A simple text-only hint on hover/focus — use `<sit-tooltip>` instead, it's purpose-built and lighter.
- A list of selectable actions or options — use `<sit-dropdown>` instead, it has the right ARIA/
  keyboard semantics for menu items.
- A page-blocking, must-be-dismissed interaction — use `<sit-modal>` instead; popovers are
  lightweight and dismiss on outside click/Escape, not a deliberate blocking action.

## Behaviour

- Default slot: the trigger element (an interactive element, ideally — e.g. a button — since its
  bounding box is what the panel positions against).
- `content` slot: the panel's content. Arbitrary HTML, unlike `sit-tooltip`'s text-only `content` prop.
- `trigger="click"` (default): opens on trigger click, closes on outside click or Escape.
- `trigger="hover"`: opens on trigger mouseenter/focus, closes on mouseleave/blur (no outside-click
  or Escape dismissal, matching hover-triggered content generally not needing an explicit dismiss).
- `placement` accepts any Floating UI placement (`top`, `bottom`, `left`, `right`, and
  `-start`/`-end` variants); the panel auto-flips/shifts to stay in the viewport as the page scrolls
  or resizes.
- While open, focus is trapped within the panel (Tab cycles inside it) and Escape closes it and
  returns focus to the trigger.
- Public methods: `show()`, `hide()`, `toggle()`. `open` reflects current state.
- Events: `sit-show`, `sit-after-show`, `sit-hide`, `sit-after-hide` (same naming convention as
  `sit-modal`/`sit-dropdown`/`sit-tooltip`).

## Advanced Considerations

- **The trigger becomes the Floating UI reference element**: whatever you slot into the default
  slot determines where the panel anchors. Slot exactly one focusable element (a button is the
  simplest correct choice) rather than a loose text node or multiple elements.
- **`trigger="hover"` has no outside-click/Escape dismissal**: this is intentional — a hover-opened
  panel closes when the pointer/focus leaves, so there's no "stuck open" state to dismiss.
- **Focus trap only activates for `click` trigger's open panel** (via the same
  `src/utils/modal.ts` focus-trap utility `<sit-modal>` uses) — a hover-triggered panel isn't
  meant to hold keyboard focus away from the page.
- **Not a replacement for `<sit-dropdown>`**: this component has no concept of menu items, roving
  tabindex, or selection — it just positions and shows/hides a content panel.

## Edge Cases

- **Empty `content` slot**: the panel still opens (an empty box) — always slot real content.
- **Trigger removed from the DOM while open**: Floating UI's `autoUpdate` tracking stops on
  `disconnectedCallback`, but explicitly call `hide()` first if you're conditionally removing the
  trigger to avoid a panel positioned against a stale/removed element.
- **Multiple popovers open at once**: each has its own independent focus trap; opening a second
  `click`-trigger popover does not automatically close the first — close it yourself if that's
  the desired behaviour for your use case.
- **`placement` with no room in any direction**: Floating UI's `flip`/`shift` middleware does its
  best, but on a very small viewport the panel may still be visually cramped — test at your
  target viewport sizes.

## API Summary

| Attribute / Property | Type | Default | Purpose |
|---|---|---|---|
| `trigger` | `click \| hover` | `click` | How the popover opens |
| `placement` | Floating UI `Placement` string | `bottom-start` | Panel position relative to the trigger |
| `disabled` | boolean | `false` | Prevents the popover from opening |
| `open` | boolean | `false` | Whether the popover is open (reflects) |
| `floatingOpts` (property only) | `{ placement?, middleware? }` | `{}` | Advanced Floating UI overrides |

## Slots

| Slot | Purpose |
|---|---|
| default | The trigger element |
| `content` | The popover panel's content (arbitrary HTML) |

## Events

| Event | When Fired | Detail |
|---|---|---|
| `sit-show` | `show()` is called / popover starts opening | — |
| `sit-after-show` | Popover has opened and positioned | — |
| `sit-hide` | `hide()` is called / popover starts closing | — |
| `sit-after-hide` | Popover has fully closed | — |

For framework-specific event syntax (React `onSitShow`, Vue `@sit-show`, Angular `(sit-show)`), see
the **[sit-components SKILL.md](../SKILL.md)**.

## Public Methods

| Method | Description |
|---|---|
| `show()` | Opens the popover |
| `hide()` | Closes the popover |
| `toggle()` | Opens if closed, closes if open |

---

**For AI agents**:
1. Slot exactly one focusable trigger element into the default slot — it's the Floating UI
   reference element the panel positions against.
2. Use the `content` slot (not a `content` string prop like `sit-tooltip` has) for the panel body —
   this component has no `content` property.
3. Reach for `sit-dropdown` instead if the content is a list of selectable menu items — this
   component has no menu/selection semantics.
4. Reach for `sit-tooltip` instead if the content is plain text — this component's focus-trap and
   click/outside-dismiss machinery is unnecessary overhead for a simple hint.
5. `trigger="hover"` popovers don't respond to Escape or outside click — don't rely on those to
   dismiss a hover-triggered popover, it closes on mouseleave/blur instead.
