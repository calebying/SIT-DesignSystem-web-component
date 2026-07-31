# Form Border Colors & Radius Reference

**Meaning**: Form element-specific borders
**Usage**: Input validation states and border radius for form HTML elements

## Design Semantics

- **Form = HTML form elements only**
- For `<input>`, `<select>`, `<textarea>`, `<form>` elements
- Border colors convey validation state (success/danger)
- Border radius controls the roundness of form element corners

---

## Form Border Colors

### `sit:border-form-success-default`
**Valid/success input border.**

**When to use:**
- Input field has passed validation
- Successful form field state

```html
<input
  class="sit:border sit:border-form-success-default"
  type="text"
  value="Valid input"
/>
```

### `sit:border-form-danger-default`
**Invalid/error input border.**

**When to use:**
- Input field has failed validation
- Required field that is empty
- Error state on a form element

```html
<input
  class="sit:border sit:border-form-danger-default"
  type="text"
  placeholder="This field has an error"
/>
```

---

## Form Border Radius

Controls the corner roundness of form HTML elements. Use these instead of the general `sit:rounded-*` utilities for form inputs to maintain design consistency.

### Available Sizes

| Token | CSS Variable | Value |
|---|---|---|
| `sit:rounded-form-none` | `--sit-form-border-radius-none` | 0px |
| `sit:rounded-form-xs` | `--sit-form-border-radius-xs` | Extra small |
| `sit:rounded-form-sm` | `--sit-form-border-radius-sm` | Small |
| `sit:rounded-form-md` | `--sit-form-border-radius-md` | Medium |
| `sit:rounded-form-full` | `--sit-form-border-radius-full` | Fully rounded (pill) |

```html
<input class="sit:rounded-form-md" type="text" placeholder="Rounded input" />
<input class="sit:rounded-form-full" type="search" placeholder="Pill search input" />
<input class="sit:rounded-form-none" type="text" placeholder="Square input" />
```

---

## Common Patterns

> **Note**: Use library components like `<sit-input>`, `<sit-select>`, `<sit-textarea>` when available. Form border tokens are for creating custom form elements when library components don't meet your needs.

### Validated Input (Success)

```html
<input
  class="sit:border sit:border-form-success-default sit:rounded-form-md"
  type="text"
  value="john@example.com"
/>
```

### Invalid Input (Error)

```html
<input
  class="sit:border sit:border-form-danger-default sit:rounded-form-md"
  type="text"
  placeholder="Required field"
/>
```

### Default Input with Form Radius

```html
<input
  class="sit:border sit:border-default sit:rounded-form-md"
  type="text"
  placeholder="Enter value"
/>
```

### Select Dropdown

```html
<select class="sit:border sit:border-default sit:rounded-form-md">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Pill Search Input

```html
<input
  class="sit:border sit:border-default sit:rounded-form-full"
  type="search"
  placeholder="Search..."
/>
```

## See Also

- **[base.md](base.md)** — Base border color tokens (default, inverse, transparent, fixed)
- **[semantic.md](semantic.md)** — Semantic border colors for validation states
- **[border-width](../border-width.md)** — Border thickness utilities
- **[background-color/form.md](../background-color/form.md)** — Form input background tokens
