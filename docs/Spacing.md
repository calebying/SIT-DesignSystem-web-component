# Spacing System

## Core Concept

The Canvas spacing system is built on a **base unit of 4px**. All spacing tokens are multiples of this fundamental unit, creating a consistent and predictable spacing scale throughout your application.

### Base Unit: 4px

Every spacing value is calculated as: **`value = multiplier × 4px`**

## Spacing Scale

The spacing system uses numeric multipliers where each unit equals **4px**:

| Multiplier | Token | Value |
|-----------|-------|-------|
| 1 | `sit:m-1` | 1 × 4px = 4px |
| 2 | `sit:m-2` | 2 × 4px = 8px |
| 3 | `sit:m-3` | 3 × 4px = 12px |
| 4 | `sit:m-4` | 4 × 4px = 16px |
| 5 | `sit:m-5` | 5 × 4px = 20px |
| 6 | `sit:m-6` | 6 × 4px = 24px |
| 8 | `sit:m-8` | 8 × 4px = 32px |
| 12 | `sit:m-12` | 12 × 4px = 48px |
| 16 | `sit:m-16` | 16 × 4px = 64px |
| 24 | `sit:m-24` | 24 × 4px = 96px |
| ... | `sit:m-*` | ... and beyond |

*The scale continues indefinitely with any numeric multiplier (e.g., `sit:m-32`, `sit:m-40`, etc.)*

## Spacing Utilities

The numeric multiplier system works universally for **margin**, **padding**, and **gap** utilities. All use the same 4px base unit.

### Margin

#### All Sides Margin

Apply margin to all four sides of an element using numeric multipliers:

```html
<!-- 16px margin on all sides (4 × 4px) -->
<div class="sit:m-4">Content with 16px margin</div>

<!-- 24px margin on all sides (6 × 4px) -->
<div class="sit:m-6">Content with 24px margin</div>
```

### Axis-Specific Margin

#### Vertical Margin (Top and Bottom)

Use `my-*` to apply margin to the Y-axis (top and bottom):

```html
<!-- 12px margin top and bottom (3 × 4px) -->
<div class="sit:my-3">Content with vertical spacing</div>

<!-- 32px margin top and bottom (8 × 4px) -->
<div class="sit:my-8">Content with more vertical spacing</div>
```

#### Horizontal Margin (Left and Right)

Use `mx-*` to apply margin to the X-axis (left and right):

```html
<!-- 8px margin left and right (2 × 4px) -->
<div class="sit:mx-2">Content with horizontal spacing</div>

<!-- 48px margin left and right (12 × 4px) -->
<div class="sit:mx-12">Content with more horizontal spacing</div>
```

### Side-Specific Margin

Apply margin to individual sides:

- `mt-*` - margin-top
- `mb-*` - margin-bottom
- `ml-*` - margin-left
- `mr-*` - margin-right

```html
<!-- 12px margin at top only (3 × 4px) -->
<div class="sit:mt-3">Content with top margin</div>

<!-- 16px margin at bottom only (4 × 4px) -->
<div class="sit:mb-4">Content with bottom margin</div>
```

### Padding

#### All Sides Padding

Apply padding to all sides of an element:

```html
<div class="sit:p-6">Content with 24px padding</div>

<div class="sit:p-4">Content with 16px padding</div>
```

### Axis-Specific Padding

#### Vertical Padding (Top and Bottom)

Use `py-*` to apply padding to the Y-axis:

```html
<!-- 12px padding top and bottom (3 × 4px) -->
<div class="sit:py-3">Content with vertical padding</div>
```

#### Horizontal Padding (Left and Right)

Use `px-*` to apply padding to the X-axis:

```html
<!-- 8px padding left and right (2 × 4px) -->
<div class="sit:px-2">Content with horizontal padding</div>
```

### Gap

Control spacing between flex or grid children:

```html
<!-- 16px gap between items (4 × 4px) -->
<div class="sit:flex sit:gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- 24px gap between stacked items (6 × 4px) -->
<div class="sit:flex sit:flex-col sit:gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Side-Specific Margin

Apply margin to individual sides:

- `mt-*` - margin-top
- `mb-*` - margin-bottom
- `ml-*` - margin-left
- `mr-*` - margin-right

```html
<!-- 12px margin at top only (3 × 4px) -->
<div class="sit:mt-3">Content with top margin</div>

<!-- 16px margin at bottom only (4 × 4px) -->
<div class="sit:mb-4">Content with bottom margin</div>
```

## Combining Utilities

Stack multiple spacing utilities for precise control:

```html
<!-- Combine horizontal and vertical spacing -->
<div class="sit:mx-4 sit:my-6">
  <!-- 16px left/right margin, 24px top/bottom margin -->
</div>

<!-- Different spacing per axis -->
<div class="sit:mx-2 sit:my-8">
  <!-- 8px left/right margin, 32px top/bottom margin -->
</div>
```

## Design Considerations

### Best Practices

- **Use consistent scale**: Stick to named tokens rather than arbitrary values
- **Layer spacing**: Combine axis-specific utilities for semantic meaning
- **Vertical rhythm**: Use `my-*` to maintain consistent vertical spacing
- **Component padding**: Use `p-*` for internal component spacing
- **Layout margins**: Use `m-*` and `mx-*`/`my-*` for component spacing

## Related Utilities

- **Padding**: `p-*`, `px-*`, `py-*`, `pt-*`, `pb-*`, `pl-*`, `pr-*`
- **Gap**: `gap-*` (for flexbox/grid children spacing)
- **Layout**: Combine with `sit:flex` and `sit:grid` utilities
