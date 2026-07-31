# Canvas Checkbox Component Skill

`<sit-checkbox>` can be used standalone or grouped in `<sit-checkbox-group>`. The group manages shared validation, a fieldset label, and change detection. Standalone checkboxes work for "I agree" cases.

No CSS styling modifications — custom properties and CSS parts are not exposed on this component.

## Usage Guideline

### When to use

- When users can select zero, one, or multiple options from a list independently.
- For consent or acknowledgement scenarios where a single standalone checkbox is appropriate (e.g. "I agree to the terms").
- For parent–child selection groups where a parent checkbox reflects the aggregate state of its children (checked / indeterminate / unchecked).
- When options are displayed as a visible list and users benefit from seeing all choices at once.

### When NOT to use
- When only one option can be selected → use radio buttons
- For immediate actions → use a switch
- When there are too many options (>7–10) → consider select or combobox
- For mutually exclusive choices

## Behaviour

- **Default**: unchecked
- **Checked**: indicates selection
- **Indeterminate**: used when a parent checkbox represents a partially selected group
- **Disabled**: cannot be interacted with; visually muted
- Each checkbox in a group functions independently
- Parent-child relationships may exist: parent reflects aggregated state (checked / indeterminate / unchecked)
- In `<sit-checkbox-group>`, `hintText` is rendered in the label row above the checkboxes and is always visible — unlike single-field components, it is not replaced by the error message when invalid. Both `hintText` and the error message can be visible simultaneously.

## Advanced Considerations

**Hierarchical checkboxes** — parent checkbox reflects children selection; indeterminate state must be clearly communicated

**Accessibility** — use proper label association; support `aria-checked="mixed"` for indeterminate; ensure screen readers announce label and state (checked / unchecked / mixed)

**Layout & responsiveness** — maintain alignment between checkbox and label; support wrapping labels without breaking layout; ensure spacing consistency using design tokens

**`hasFeedback` type differs between group and standalone** — on `<sit-checkbox-group>` it is a boolean presence attribute (`hasFeedback`); on standalone `<sit-checkbox>` it is a string enum (`hasFeedback="style"`, `hasFeedback="text"`, `hasFeedback="both"`). Never add `hasFeedback="both"` to a group — it will not work as expected.

## Edge Cases

- **Indeterminate without hierarchy** — avoid using unless there is a clear parent-child relationship
- **Long labels wrapping** — checkbox should align to the first line, not the centre
- **Error state in forms** — show validation message clearly; highlight the group, not just a single checkbox
- **Pre-selected options** — use sparingly and only when strongly justified
- **Dynamic data loading** — maintain selection state when options update
- **Mixed interaction patterns** — avoid mixing checkbox and switch for similar purposes in the same context

## Quick Decision Guide

**Multiple related checkboxes with a label?** → Use `<sit-checkbox-group>`

**Single "I agree" checkbox?** → Use `<sit-checkbox>` standalone

**Indeterminate state (e.g. partial select)?** → Set `indeterminate` on the checkbox

**Show validation feedback on group?** → Set `hasFeedback` and `invalidFeedback` on the group

**Pre-checked?** → Add `checked` to the `<sit-checkbox>`

```html
<!-- Checkbox group -->
<sit-checkbox-group
  label="Dietary Requirements"
  hintText="Check all that apply"
  hasFeedback
  invalidFeedback="Please select at least one option"
  required
>
  <sit-checkbox value="vegetarian">Vegetarian</sit-checkbox>
  <sit-checkbox value="halal">Halal</sit-checkbox>
  <sit-checkbox value="vegan">Vegan</sit-checkbox>
  <sit-checkbox value="gluten-free">Gluten-free</sit-checkbox>
</sit-checkbox-group>

<!-- Standalone checkbox for agreement -->
<sit-checkbox name="agree" value="yes" required>
  I agree to the Terms and Conditions
</sit-checkbox>

<!-- Indeterminate state (e.g. select all) -->
<sit-checkbox id="select-all" indeterminate>Select All</sit-checkbox>

<!-- Pre-checked -->
<sit-checkbox name="newsletter" value="yes" checked>
  Subscribe to newsletter
</sit-checkbox>

<!-- Listen to group change -->
<sit-checkbox-group id="my-group" label="Options">
  <sit-checkbox value="a">Option A</sit-checkbox>
  <sit-checkbox value="b">Option B</sit-checkbox>
  <sit-checkbox value="c">Option C</sit-checkbox>
</sit-checkbox-group>
<script>
  document.getElementById("my-group").addEventListener("sit-change", () => {
    console.log("Group value:", document.getElementById("my-group").value);
  });
</script>
```

## API Summary

### `<sit-checkbox-group>`

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `label` | string | `""` | Group label |
| `hintText` | string | `""` | Hint text below the label |
| `value` | string | `""` | Comma-separated values of checked checkboxes |
| `required` | boolean | `false` | Makes at least one checkbox required |
| `noValidate` | boolean | `false` | Disables native and Canvas validation |
| `hasFeedback` | boolean | `false` | Enables validation feedback UI |
| `invalidFeedback` | string | `"Please tick at least one box if you want to proceed"` | Error message when nothing is checked |

### `<sit-checkbox>`

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `name` | string | — | Form field name (for standalone use) |
| `value` | string | — | The value submitted when checked |
| `checked` | boolean | `false` | Pre-checks the checkbox |
| `indeterminate` | boolean | `false` | Shows the indeterminate (partial) state |
| `disabled` | boolean | `false` | Disables the checkbox |
| `required` | boolean | `false` | Makes the checkbox required (standalone) |
| `noValidate` | boolean | `false` | Disables native and Canvas validation (standalone) |
| `hasFeedback` | `style \| text \| both` | — | Validation feedback display (standalone) |
| `invalidFeedback` | string | `""` | Error message (standalone) |

## Slots

| Component | Slot | Purpose |
|---|---|---|
| `<sit-checkbox-group>` | *(default)* | `<sit-checkbox>` elements |
| `<sit-checkbox>` | *(default)* | Checkbox label text |

## Methods

| Component | Method | Description |
|---|---|---|
| `<sit-checkbox-group>` | `setInvalid(bool)` | Programmatically sets the invalid state |
| `<sit-checkbox>` | `setInvalid(bool)` | Programmatically sets the invalid state |

## Events

| Component | Event | Detail | When |
|---|---|---|---|
| `<sit-checkbox-group>` | `sit-change` | — | Any checkbox in the group is checked or unchecked; read `element.value` for current checked values |
| `<sit-checkbox-group>` | `sit-invalid` | — | The group's invalid state is set to true |
| `<sit-checkbox-group>` | `sit-valid` | — | The group's invalid state is set to false |
| `<sit-checkbox>` | `sit-change` | `{ checked: boolean, value: string }` | Checked state changes |
| `<sit-checkbox>` | `sit-check` | — | Checkbox is checked |
| `<sit-checkbox>` | `sit-uncheck` | — | Checkbox is unchecked |
| `<sit-checkbox>` | `sit-focus` | — | Gains focus |
| `<sit-checkbox>` | `sit-blur` | — | Loses focus |
| `<sit-checkbox>` | `sit-invalid` | — | The checkbox's invalid state is set to true |
| `<sit-checkbox>` | `sit-valid` | — | The checkbox's invalid state is set to false |

---

**For AI agents**:
1. For multi-checkbox forms, use `<sit-checkbox-group>` — `hasFeedback` and `invalidFeedback` belong on the group.
2. `<sit-checkbox-group>` `value` is a semicolon-separated string of the values of all currently checked checkboxes.
3. On `sit-change` from a group, read `element.value` to get the current selection — no event detail for group.
4. `indeterminate` is useful for "select all" patterns; toggling it programmatically is valid.
5. Standalone `<sit-checkbox>` elements (outside a group) work like a plain HTML checkbox with `name` and `value`.
6. `hasFeedback` type differs: `<sit-checkbox-group hasFeedback>` takes a boolean; `<sit-checkbox hasFeedback="both">` takes a string enum (`style | text | both`). Never add `hasFeedback="both"` to a group.
7. For custom validation, add `noValidate` and `hasFeedback` to the component, then call `setInvalid(true/false)` and set `invalidFeedback` inside the `sit-change` event listener.
8. `setInvalid(true)` emits `sit-invalid`; `setInvalid(false)` emits `sit-valid`.
