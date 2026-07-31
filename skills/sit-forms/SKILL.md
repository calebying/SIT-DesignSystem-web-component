---
name: "sit-forms"
description: "Use this skill when users ask about form validation in Canvas, hasFeedback prop, constraint validation, custom validation, noValidate, setInvalid, form submission, or reading FormData from Canvas form components."
metadata:
  author: sit-canvas
  version: "0.0.0"
  audience: external
  category: pattern
---

# Canvas Form Validation Pattern

Canvas form components integrate with the browser's [ElementInternals API](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals) so they behave like native HTML form controls — they participate in `<form>` submission, `FormData`, and constraint validation automatically.

## Prerequisites

See **[sit-components](../sit-components/SKILL.md)** for installation and framework integration.

All form components must be placed inside a `<form>` element and given a `name` attribute to participate in form submission.

## Quick Decision Guide

**Show native HTML validation messages?** → Add `hasFeedback` to each form component

**Prevent submit when fields are invalid?** → Built-in — no extra code needed

**Read submitted field values?** → Use `new FormData(event.target)` in the submit handler

**Disable Canvas validation per component?** → `noValidate` prop on `<sit-input>`, `<sit-textarea>`, `<sit-combo-box>`, `<sit-select>`, `<sit-datepicker>`, or `<sit-file-upload>`

**Disable Canvas validation for the whole form?** → `novalidate` on the `<form>` element

**Run 3rd-party validation (e.g. Zod)?** → Disable Canvas validation first, then call `setInvalid(bool)` and set `invalidFeedback` programmatically

## How Validation Is Triggered

Canvas validation is layered:

1. **onChange (after blur)** — validates when the user leaves a field; shows feedback if `hasFeedback` is set
2. **onSubmit** — final validation pass fires before submission; blocks the form if any field is invalid
3. **onReset** — clears all validity states and field values when the form is reset

Disabled components skip validation entirely.

## `hintText` and Error Message Placement

On most form components (`<sit-input>`, `<sit-textarea>`, `<sit-select>`, `<sit-combo-box>`, `<sit-quantity-toggle>`, `<sit-file-upload>`), `hintText` and the error message **share the same space** below the input container:

- When the field is **invalid** (and `hasFeedback` is set), the error message replaces `hintText`.
- When the error is **resolved**, `hintText` reappears.

`<sit-checkbox-group>` and `<sit-radio-group>` behave differently — `hintText` is rendered in the label row above the options and remains visible at all times. The error message appears separately below the options.

## Activating Feedback Display

Constraint validation runs regardless of `hasFeedback`, but the **visible error message only renders when `hasFeedback` is present**. The `hasFeedback` prop accepts:

| Value                   | Behaviour                                              |
| ----------------------- | ------------------------------------------------------ |
| `hasFeedback` (boolean) | Shows the native HTML validation message as error text |
| `hasFeedback="text"`    | Same as boolean — shows text feedback only             |
| `hasFeedback="style"`   | Shows invalid border/colour styling only, no text      |
| `hasFeedback="both"`    | Shows both invalid styling and text feedback           |

You can also override the displayed message with `invalidFeedback`:

```html
<sit-input
  name="email"
  label="Email"
  type="email"
  required
  hasFeedback="both"
  invalidFeedback="Please enter a valid email address"
></sit-input>
```

## Constraint Validations by Component

| Component                      | Supported constraints                                         |
| ------------------------------ | ------------------------------------------------------------- |
| `<sit-input>`                 | `required`, `pattern`, `min`, `max`, `minlength`, `maxlength` |
| `<sit-textarea>`              | `required`, `minlength`, `maxlength`                          |
| `<sit-quantity-toggle>`       | `min`, `max`                                                  |
| `<sit-datepicker>`            | `required`, `minDate`, `maxDate`                              |
| `<sit-select>`                | `required`                                                    |
| `<sit-combo-box>`             | `required`                                                    |
| `<sit-radio-group>`           | `required`                                                    |
| `<sit-checkbox-group>`        | `required`                                                    |
| `<sit-checkbox>` (standalone) | `required`                                                    |
| `<sit-file-upload>`           | `required` (file size limit WIP)                              |

## Full Form Example

```html
<form id="my-form" class="d-flex-column">
  <sit-input
    label="First Name"
    name="firstName"
    required
    hasFeedback="both"
    pattern="[A-Za-z ]+"
    invalidFeedback="Letters only"
  ></sit-input>

  <sit-datepicker label="Appointment Date" name="appointmentDate" required hasFeedback></sit-datepicker>

  <sit-radio-group label="Gender" name="gender" required hasFeedback>
    <sit-radio value="female">Female</sit-radio>
    <sit-radio value="male">Male</sit-radio>
  </sit-radio-group>

  <sit-checkbox-group label="Food Preference" name="food" required hasFeedback hintText="Select at least one option">
    <sit-checkbox value="vegetarian">Vegetarian</sit-checkbox>
    <sit-checkbox value="halal">Halal</sit-checkbox>
  </sit-checkbox-group>

  <sit-textarea label="Comments" name="comments" required minlength="3" hasFeedback></sit-textarea>

  <sit-button type="submit">Submit</sit-button>
  <sit-button type="reset" variant="ghost">Reset</sit-button>
</form>
```

## Reading Form Values via FormData

Use the native `FormData` API in the submit handler. Access `sit-file-upload` files separately via the component's `selectedFiles` property:

```html
<script>
  const form = document.getElementById("my-form");

  form.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const firstName = formData.get("firstName");
    const gender = formData.get("gender");
    const comments = formData.get("comments");

    // File upload files are not in FormData automatically
    const fileUpload = document.querySelector("sit-file-upload");
    for (let i = 0; i < fileUpload.selectedFiles.length; i++) {
      formData.append("file" + i, fileUpload.selectedFiles[i]);
    }

    // Submit formData to server
  });
</script>
```

## Custom Validation (Disabling Canvas Validation)

For 3rd-party validation libraries (e.g. Zod) or fully custom logic, disable Canvas's built-in validation first, then call `setInvalid(bool)` and update `invalidFeedback` in response to input events.

### Option 1 — Disable per component with `noValidate`

Currently supported on **`<sit-input>`**, **`<sit-textarea>`**, **`<sit-combo-box>`**, **`<sit-datepicker>`**, **`<sit-file-upload>`**, **`<sit-select>`**, and **`<sit-radio-group>`, **`<sit-checkbox>`**, and **`<sit-checkbox-group>`**. Other components are WIP.

```html
<sit-input
  noValidate
  id="keys-input"
  name="keys"
  label="Keys"
  hintText="Cannot start with special characters"
  hasFeedback="both"
></sit-input>

<script>
  const input = document.getElementById("keys-input");

  input.addEventListener("sit-input", e => {
    if (/^[^a-zA-Z0-9]/.test(e.target.value)) {
      e.target.setInvalid(true);
      e.target.invalidFeedback = "Keys cannot start with special characters";
    } else {
      e.target.setInvalid(false);
    }
  });
</script>
```

### Option 2 — Disable at form level with `novalidate`

Adding `novalidate` to the `<form>` element disables constraint validation and Canvas validation for **all child components**. Then apply `setInvalid` logic per field.

```html
<form id="custom-form" novalidate class="d-flex-column">
  <sit-input id="keys-input" name="keys" label="Keys" hasFeedback="both"></sit-input>

  <sit-textarea id="bio-textarea" name="bio" label="Bio" hasFeedback></sit-textarea>
</form>

<script>
  document.getElementById("keys-input").addEventListener("sit-input", e => {
    if (/^[^a-zA-Z0-9]/.test(e.target.value)) {
      e.target.setInvalid(true);
      e.target.invalidFeedback = "Invalid key format";
    } else {
      e.target.setInvalid(false);
    }
  });

  document.getElementById("bio-textarea").addEventListener("sit-input", e => {
    if (e.target.value.length < 10) {
      e.target.setInvalid(true);
      e.target.invalidFeedback = "Bio must be at least 10 characters";
    } else {
      e.target.setInvalid(false);
    }
  });
</script>
```

### `setInvalid(bool)` Method

| Parameter | Type      | Description                                                                                      |
| --------- | --------- | ------------------------------------------------------------------------------------------------ |
| `bool`    | `boolean` | `true` marks the component invalid and shows `invalidFeedback`; `false` clears the invalid state |

Pair `setInvalid(true)` with setting the `invalidFeedback` property on the element to control the displayed message.

## Custom Validation Support Status

| Component                                   | Status         |
| -------------------------------------------- | -------------- |
| `<sit-input>`                              | ✅ Implemented |
| `<sit-textarea>`                           | ✅ Implemented |
| `<sit-datepicker>`                         | ✅ Implemented |
| `<sit-checkbox>` / `<sit-checkbox-group>` | ✅ Implemented |
| `<sit-quantity-toggle>`                    | WIP            |
| `<sit-radio-group>`                        | ✅ Implemented |
| `<sit-file-upload>`                        | ✅ Implemented |
| `<sit-select>`                             | ✅ Implemented |
| `<sit-combo-box>`                          | ✅ Implemented |

---

## For AI agents

1. Always place Canvas form components inside a `<form>` element with `name` attributes for them to participate in form submission and `FormData`.
2. `hasFeedback` must be present on a form component for the error message to visually appear — constraint validation alone does not show UI feedback.
3. To show both the invalid border style and the error message text, use `hasFeedback="both"`. A plain boolean `hasFeedback` shows the message text only.
4. Use `invalidFeedback` to override the browser's native constraint validation message with a custom string.
5. Constraint validation and form submission blocking are built-in — do not add extra submit event listeners to replicate this behaviour.
6. Use `new FormData(event.target)` in the submit handler to read values. For file uploads, read `selectedFiles` directly from the `<sit-file-upload>` element.
7. When using custom/3rd-party validation, add `noValidate` on the component (or `novalidate` on the form), then call `element.setInvalid(true/false)` and set `element.invalidFeedback` inside the relevant event listener (`sit-input` for inputs/textareas, `sit-change-date` for datepicker, `sit-change` for select/combo-box/radio-group/checkbox-group, `sit-add-files`/`sit-remove-file` for file-upload).
8. `<sit-input>`, `<sit-textarea>`, `<sit-datepicker>`, `<sit-combo-box>`, `<sit-select>`, `<sit-radio-group>`, `<sit-checkbox>`, `<sit-checkbox-group>`, and `<sit-file-upload>` fully support custom validation via `noValidate` + `setInvalid`. Only `<sit-quantity-toggle>` has this feature as WIP.
9. The reset button (`type="reset"`) automatically clears all validity states and values — no extra reset logic is needed.
10. Disabled components are excluded from constraint validation and will never block form submission.
