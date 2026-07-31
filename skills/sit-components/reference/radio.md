# Canvas Radio Component Skill

`<sit-radio-group>` wraps `<sit-radio>` elements as a mutually exclusive selection group. Set a pre-selected value via the group's `value` attribute. Listen to `sit-change` on the group to get the selected value.

No CSS styling modifications — custom properties and CSS parts are not exposed on this component.

## Usage Guideline

### When to use

- When exactly one option must be selected from a small set of mutually exclusive choices (e.g. gender, payment method, delivery option).
- When all options should be visible simultaneously so users can compare before selecting.
- For 2–7 options where a dropdown would add unnecessary interaction overhead.

### When NOT to use

- When multiple selections are allowed → use `<sit-checkbox>`.
- When there are too many options (>7) → use `<sit-select>`.
- When options require complex descriptions or comparison tables.
- For binary choices → consider a toggle or switch if the effect is immediate.

## Behaviour

- No option is selected by default unless a sensible default is required.
- Selecting one option automatically deselects others in the same group.
- Supported states: default, hover, focus, selected, disabled, and error (validation failure).
- If `required` and no option is selected, an error state is shown when `hasFeedback` is set.
- Radios must always be grouped with a shared `name` attribute via `<sit-radio-group>`.
- In `<sit-radio-group>`, `hintText` is rendered in the label row above the radio options and is always visible — unlike single-field components, it is not replaced by the error message when invalid. Both `hintText` and the error message can be visible simultaneously.

## Advanced Considerations

- **Default selection**: Use a preselected value when there is a recommended or most common option; avoid when neutrality is required — leave `value` unset.
- **Layout**: Vertical alignment is the default and most accessible; horizontal layout is only appropriate for very short labels with few options.
- **Conditional reveal**: Selecting an option may reveal additional inputs — ensure clear visual relationships between the radio and revealed content.
- **Autofocus**: When `autofocus="true"` is set on the radio group, the currently checked radio automatically receives focus. This improves keyboard navigation and accessibility, especially in multi-step forms or when a selection triggers additional actions or form sections.
- **Accessibility**: `<sit-radio-group>` provides semantic grouping. If building a custom implementation, use `fieldset`/`legend` and appropriate ARIA roles.

## Edge Cases

- **No selection**: If the field is optional, allow all radios to remain unselected; do not force a default.
- **Dynamic options**: Maintain the current selection state if the option list updates programmatically.
- **Disabled options**: Clearly indicate why an option is disabled with optional helper text.
- **Long labels**: Text wraps within the label; keep labels concise since no CSS parts are exposed to customise layout.
- **Error handling**: Show a clear message via `invalidFeedback` when a required selection is missing.
- **Mobile layout**: Ensure spacing and tap targets remain usable on small screens.

## Quick Decision Guide

**Ensure only one option is selected?** → Always wrap in `<sit-radio-group>`

**Pre-select a value?** → Set `value` on `<sit-radio-group>` to match a radio's `value`

**Show validation feedback?** → Set `hasFeedback` and `invalidFeedback` on the group

**Disable one option?** → Add `disabled` to the specific `<sit-radio>`

```html
<!-- Basic radio group -->
<sit-radio-group
  name="gender"
  label="Gender"
  hintText="Select one"
>
  <sit-radio value="male">Male</sit-radio>
  <sit-radio value="female">Female</sit-radio>
  <sit-radio value="prefer-not-to-say">Prefer not to say</sit-radio>
</sit-radio-group>

<!-- Pre-selected value with required validation -->
<sit-radio-group
  name="priority"
  label="Priority"
  value="medium"
  required
  hasFeedback
  invalidFeedback="Please select a priority level"
>
  <sit-radio value="low">Low</sit-radio>
  <sit-radio value="medium">Medium</sit-radio>
  <sit-radio value="high">High</sit-radio>
  <sit-radio value="critical" disabled>Critical (unavailable)</sit-radio>
</sit-radio-group>

<!-- Listen to selection change -->
<sit-radio-group id="my-radios" name="plan" label="Plan">
  <sit-radio value="basic">Basic</sit-radio>
  <sit-radio value="pro">Pro</sit-radio>
  <sit-radio value="enterprise">Enterprise</sit-radio>
</sit-radio-group>
<script>
  document.getElementById("my-radios").addEventListener("sit-change", e => {
    console.log("Selected:", e.detail.value);
  });
</script>
```

## API Summary

### `<sit-radio-group>`

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `name` | string | — | Form field name — shared by all child radios |
| `label` | string | `""` | Group label |
| `hintText` | string | `""` | Hint text below the label |
| `value` | string | `""` | Pre-selected radio value |
| `required` | boolean | `false` | Makes the group required |
| `hasFeedback` | boolean | `false` | Enables validation feedback UI |
| `invalidFeedback` | string | `""` | Error message when no option is selected |
| `invalid` | boolean | `false` | Manually sets the invalid state |
| `noValidate` | boolean | `false` | Disables native and Canvas validation |
| `autofocus` | boolean | `false` | When true, the checked radio automatically receives focus (improves keyboard navigation) |

### `<sit-radio>`

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `value` | string | — | The value submitted when this radio is selected |
| `checked` | boolean | `false` | Pre-checks this radio on render |
| `disabled` | boolean | `false` | Disables this radio option |
| `invalid` | boolean | `false` | Marks this radio as invalid |

## Slots

| Component | Slot | Purpose |
|---|---|---|
| `<sit-radio-group>` | *(default)* | `<sit-radio>` elements |
| `<sit-radio>` | *(default)* | Radio button label text |

## Methods (`<sit-radio-group>`)

| Method | Description |
|---|---|
| `setInvalid(bool)` | Programmatically sets the invalid state. Pass `true` to mark invalid, `false` to clear. |
| `reportValidity()` | Checks validity and returns boolean |
| `checkValidity()` | Checks validity without native error popup |

## Events

| Component | Event | Detail | When |
|---|---|---|---|
| `<sit-radio-group>` | `sit-change` | `{ value: string }` | A radio in the group is selected |
| `<sit-radio-group>` | `sit-invalid` | — | The group's invalid state is set to true |
| `<sit-radio-group>` | `sit-valid` | — | The group's invalid state is set to false |
| `<sit-radio>` | `sit-focus` | — | Radio gains focus |
| `<sit-radio>` | `sit-blur` | — | Radio loses focus |

---

**For AI agents**:
1. Always wrap `<sit-radio>` elements in `<sit-radio-group>` — standalone radios are not supported.
2. Set `name` on the **group** — it propagates to all child radios. Setting `name` on individual `<sit-radio>` elements has no effect; only the group's `name` attribute is used for form submission.
3. Listen to `sit-change` on the group (not on individual radios) to get the selected value via `event.detail.value`.
4. `hasFeedback` and `invalidFeedback` are set on the group, not on individual radios.
5. To pre-select an option, prefer setting `value` on `<sit-radio-group>`. The `checked` attribute on `<sit-radio>` also pre-checks that radio on render, but avoid using both simultaneously — `value` on the group takes precedence and may conflict with `checked` on a child.
6. For custom validation, add `noValidate` and `hasFeedback` to the group, then call `setInvalid(true/false)` and set `invalidFeedback` inside the `sit-change` event listener.
7. `setInvalid(true)` emits `sit-invalid`; `setInvalid(false)` emits `sit-valid`.
