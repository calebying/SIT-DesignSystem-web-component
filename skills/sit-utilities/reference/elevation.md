# Canvas Elevation Utilities Skill

Helps developers apply shadow-based depth and visual hierarchy using Canvas elevation tokens.

## Core Concept

Canvas provides two categories of elevation:

| Category | Classes | Use on |
|----------|---------|--------|
| **Surface** | `sit:shadow-{1–5}` | Navigation or information temporarily appearing in front of other surfaces (e.g. dropdowns, tooltips), and actionable elements on hover (e.g. cards, tiles) |
| **Edge** | `sit:shadow-edge-top`, `sit:shadow-edge-bottom` | Components anchored to the top or bottom of the viewport (e.g. header, action bar) — creates a shadow so other surfaces appear to scroll behind them |

Surface elevation uses progressive depth (1 = lowest, 5 = highest). Edge elevation uses directional shadows for scroll-aware UI. Edge is not for footers.

## Surface Elevation

```html
<div class="sit:shadow-1">Subtle elevation</div>
<div class="sit:shadow-2">Light elevation for cards</div>
<div class="sit:shadow-3">Standard card elevation</div>
<div class="sit:shadow-4">Prominent for modals</div>
<div class="sit:shadow-5">Maximum elevation</div>
```

### Size Reference

| Class | CSS Variable | Use for |
|-------|-------------|--------|
| `sit:shadow-1` | `--sit-elevation-surface-1` | Container surfaces — cards, panels, tiles |
| `sit:shadow-2` | `--sit-elevation-surface-2` | Floating controls — dropdown menus, select menus, mega menus |
| `sit:shadow-3` | `--sit-elevation-surface-3` | Contextual overlays — tooltips, toasts |
| `sit:shadow-4` | `--sit-elevation-surface-4` | Blocking overlays — modals, drawers |
| `sit:shadow-5` | `--sit-elevation-surface-5` | Interaction — hovering card state |

## Edge Elevation

```html
<header class="sit:shadow-edge-bottom sit:sticky sit:top-0">Sticky header</header>
<div class="sit:shadow-edge-top sit:sticky sit:bottom-0">Bottom action bar</div>
```

### Edge Reference

| Class | CSS Variable | Use for |
|-------|-------------|--------|
| `sit:shadow-edge-bottom` | `--sit-elevation-edge-bottom` | Sticky headers, top navigation — shadow cast downward |
| `sit:shadow-edge-top` | `--sit-elevation-edge-top` | Bottom action bars — shadow cast upward |

## Choosing an Elevation Level

| Context | Recommended |
|---------|-------------|
| Card, panel, tile | `sit:shadow-1` |
| Dropdown, select menu, mega menu | `sit:shadow-2` |
| Tooltip, toast | `sit:shadow-3` |
| Modal, drawer | `sit:shadow-4` |
| Hovering card (interaction state) | `sit:shadow-5` |
| Sticky header, top navigation | `sit:shadow-edge-bottom` |
| Bottom action bar | `sit:shadow-edge-top` |
| Flat / no elevation | Remove shadow class |

## Common Patterns

### Card with elevation

```html
<div class="sit:bg-surface-raised sit:shadow-2 sit:p-lg sit:rounded-md">
  <h3 class="sit:text-heading-default sit:font-semibold">Card Title</h3>
  <p class="sit:text-body-default sit:text-subtle">Card description</p>
</div>
```

### Sticky header with edge shadow

```html
<header class="sit:bg-default sit:shadow-edge-bottom sit:sticky sit:top-0 sit:p-md">
  <h1 class="sit:text-heading-md sit:font-bold">Page Title</h1>
</header>
```

### Hover elevation transition

```html
<div class="sit:bg-surface-raised sit:shadow-2 hover:sit:shadow-4 sit:p-lg sit:rounded-md sit:transition-shadow">
  Hover to elevate
</div>
```

---

## Usage Guidelines

**1. Use elevation to show hierarchy**
- Higher elevation = closer to the user
- Lower elevation = part of the layout

**2. Avoid over-layering**
- Do not stack too many elevation levels in one view
- Prefer 2–3 levels per screen for clarity

**3. Pair with interaction states**
- Hover: increase elevation slightly (e.g. `shadow-1` → `shadow-2`)
- Active: reduce elevation to simulate press

**4. Use elevation only when needed**
- Not all components need shadows
- Use borders or background contrast when elevation is unnecessary

---

## Do & Don't

**Do**
- Use elevation consistently across components
- Use subtle shadows for most UI
- Increase elevation progressively

**Don't**
- Mix too many shadow styles in one view
- Use strong shadows for small components
- Rely only on elevation for hierarchy — combine with spacing and colour

---

## Accessibility Notes

- Ensure sufficient contrast between elevated surfaces and the background
- Avoid relying on shadows alone to convey meaning
- Support dark mode: reduce shadow opacity or use surface overlays instead of deep shadows

---

**For AI Agents**: Apply elevation by semantic role — `shadow-1` for cards/panels/tiles, `shadow-2` for floating controls (dropdowns, selects, mega menus), `shadow-3` for contextual overlays (tooltips, toasts), `shadow-4` for blocking overlays (modals, drawers), `shadow-5` for interactive hover states on cards and tiles. Use `shadow-edge-bottom` for sticky headers and top navigation bars, `shadow-edge-top` for bottom action bars. Do not apply edge shadows to footers. Always pair elevation with `sit:bg-surface-raised` or another surface background for proper visual layering. Use `hover:sit:shadow-5` with `sit:transition-shadow` for interactive card lift effects.
