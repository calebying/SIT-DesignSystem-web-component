# Canvas Border Radius Utilities Skill

Helps developers apply rounded corners to components, containers, and form elements using Canvas design tokens.

## Core Concept

Border radius defines the curvature of UI elements and contributes to both:

- **Usability** — clarity, grouping, affordance
- **Visual tone** — structured ↔ friendly

Canvas provides two radius scales:

| Scale | Classes | Use on |
|-------|---------|--------|
| **General** | `sit:rounded-{size}` | Containers, buttons, cards, badges, avatars |
| **Form** | `sit:rounded-form-{size}` | Native form elements (`<input>`, `<select>`, `<textarea>`) |

Use general tokens by default. Use form tokens only for native form controls.

## General Border Radius

### All Corners

```html
<div class="sit:rounded-none">0px — square corners</div>
<div class="sit:rounded-xs">2px</div>
<div class="sit:rounded-sm">4px</div>
<div class="sit:rounded-md">8px (default)</div>
<div class="sit:rounded-lg">12px</div>
<div class="sit:rounded-xl">16px</div>
<div class="sit:rounded-2-xl">24px</div>
<div class="sit:rounded-3-xl">32px</div>
<div class="sit:rounded-full">9999px — pill / circle</div>
```

### Specific Sides

```html
<div class="sit:rounded-t-md">Top corners (top-left + top-right)</div>
<div class="sit:rounded-b-md">Bottom corners</div>
<div class="sit:rounded-l-md">Left corners</div>
<div class="sit:rounded-r-md">Right corners</div>
```

### Individual Corners

```html
<div class="sit:rounded-tl-md">Top-left only</div>
<div class="sit:rounded-tr-md">Top-right only</div>
<div class="sit:rounded-br-md">Bottom-right only</div>
<div class="sit:rounded-bl-md">Bottom-left only</div>
```

### Size Reference

| Class | Value | Typical use |
|-------|-------|-------------|
| `sit:rounded-none` | 0px | Sharp corners, table cells |
| `sit:rounded-xs` | 2px | Very subtle rounding |
| `sit:rounded-sm` | 4px | Badge, small components |
| `sit:rounded-md` | 8px | Buttons, Cards, panels, form input, modals as default |
| `sit:rounded-lg` | 12px | Larger cards |
| `sit:rounded-xl` | 16px | Featured cards |
| `sit:rounded-2-xl` | 24px | Large containers like panel |
| `sit:rounded-3-xl` | 32px | Huge radius Hero / feature sections |
| `sit:rounded-full` | 9999px | Full radius like circle, Avatars, Radio |

## Form Border Radius

Apply to native HTML form elements only: `<input>`, `<select>`, `<textarea>`, `<form>`.

```html
<input class="sit:rounded-form-md" type="text" />
<select class="sit:rounded-form-md"></select>
<textarea class="sit:rounded-form-md"></textarea>
```

### Form Size Reference

| Class | Value | Typical use |
|-------|-------|-------------|
| `sit:rounded-form-none` | 0px | Sharp corners, table cells |
| `sit:rounded-form-xs` | 2px | Very subtle rounding for small size input |
| `sit:rounded-form-sm` | 4px | Standard buttons, small components |
| `sit:rounded-form-md` | 8px | Cards, panels |
| `sit:rounded-form-full` | 9999px | Badges, avatars, pill buttons |

## Form Patterns

> **Note**: Use library components like `<sit-input>`, `<sit-select>` when available. Form border radius tokens are for custom form elements when library components don't meet your needs.

### Standard Text Input

```html
<input class="sit:rounded-form-md" type="text" placeholder="Enter text" />
```

### Pill Search Input

```html
<input class="sit:rounded-form-full" type="search" placeholder="Search..." />
```

### Square Input

```html
<input class="sit:rounded-form-none" type="text" placeholder="No rounding" />
```

## Usage Patterns

**Default components** — use `sit:rounded-md` as the baseline. Increase for larger surfaces; decrease for compact UI.

---

## Design Decision Principles

**1. Size → Radius** — match visual weight:
- Small element → smaller radius
- Large element → larger radius

**2. Density → Radius** — reflect UI complexity:
- Dense / data-heavy → sharper (`none` – `sm`)
- Spacious / marketing → softer (`lg` – `xl+`)

**3. Consistency** — avoid mixing too many radius values in one view. Keep radius consistent within a component group.

---

## Brand Expression

Border radius is a branding lever, not just a utility.

| Brand tone | Recommended radius |
|------------|-------------------|
| Structured / Government / Enterprise | `none` – `md` |
| Balanced / Modern | `md` – `lg` |
| Friendly / Consumer | `lg` – `full` |

Examples:
- Government system → `sit:rounded-md`
- Consumer product → `sit:rounded-full` buttons

---

## Troubleshooting

**Rounded corners not appearing**: Check for `overflow: hidden` on a parent element — it clips corners. Ensure the element has a defined width/height.

**`sit:rounded-full` on a non-square element**: Produces a pill (oval), not a circle. Set equal width and height for a true circle.

**Form element looks out of place**: If the border-radius on a form control doesn't match surrounding inputs, confirm you're using `sit:rounded-form-*` instead of the general `sit:rounded-*` scale.

---

**For AI Agents**: When applying border radius — default to `sit:rounded-md`; adjust based on component size and density; use `sit:rounded-full` only for pills, avatars, or circular UI; use form tokens (`sit:rounded-form-*`) for native inputs only; do not introduce values outside the defined scale; align radius usage with the product's brand tone.

---

## See Also

- **[border-color](border-color.md)** — Semantic and theme-aware border colors
- **[border-width](border-width.md)** — Border thickness and sides
