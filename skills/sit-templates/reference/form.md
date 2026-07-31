# Form Page Template

Single-page form with labelled sections for entity creation, editing, profile settings, or multi-section configuration pages.

## When to use

- Collecting user information across multiple related sections (personal, role, preferences, etc.)
- Profile or settings pages where users edit their own information
- Complex forms that benefit from visual grouping and descriptive guidance
- Full-page focused forms without competing page elements (as opposed to inline modal forms)

## Block anatomy

```
┌──────────────────────────────────────────────────────────┐
│ sit-masthead                                            │
├──────────────────────────────────────────────────────────┤
│ sit-mainnav                                             │
├──────────────────────────────────────────────────────────┤
│                                                          │
│ Page Title                            [Cancel] [Save]   │
│ Page description                                         │
│                                                          │
│ ──────────────────────────────────────────────────────── │
│                                                          │
│ Section 1 label  │  [Input field]                        │
│ Section desc     │  [Input field]  [Input field]         │
│                  │  [Full-width field]                   │
│                                                          │
│ ──────────────────────────────────────────────────────── │
│                                                          │
│ Section 2 label  │  [Select dropdown]                    │
│ Section desc     │  [Select dropdown]                    │
│                  │  [Select dropdown]                    │
│                                                          │
│ ──────────────────────────────────────────────────────── │
│                                                          │
│ Section 3 label  │  [Textarea field]                     │
│ Section desc     │  [Character count]                    │
│                                                          │
│                              [Cancel] [Save changes]    │
└──────────────────────────────────────────────────────────┘
```

---

## Raw Content Link

To get the full HTML template, fetch and extract from the raw GitHub link below. See **[How to Extract HTML from Raw GitHub Links](../SKILL.md#how-to-extract-html-from-raw-github-links)** in SKILL.md for step-by-step instructions.


| File | GitHub Raw URL |
|------|---|

---

## Complete template

```html
<sit-masthead></sit-masthead>

<sit-mainnav>
  <sit-mainnav-item slot="start">
    <a href="/">My Application</a>
  </sit-mainnav-item>
</sit-mainnav>

<div class="sit:bg-surface-default sit:min-h-screen">
  <div class="sit:w-container sit:mx-auto sit:py-layout-md">

    <!-- Page header with actions -->
    <div class="sit:flex sit:items-start sit:justify-between sit:mb-layout-md">
      <div>
        <h1 class="sit:text-2xl sit:font-semibold sit:text-default">Edit profile</h1>
        <p class="sit:text-sm sit:text-body-subtle sit:mt-1">
          Update your personal details and preferences.
        </p>
      </div>
      <!-- Sticky save/cancel — duplicate at bottom of form too -->
      <div class="sit:flex sit:gap-component-sm sit:shrink-0 sit:ml-layout-sm">
        <sit-button variant="outline" onclick="history.back()">Cancel</sit-button>
        <sit-button variant="primary" form="profile-form" type="submit">Save changes</sit-button>
      </div>
    </div>

    <form id="profile-form" method="post" novalidate>

      <!-- Section 1 -->
      <div class="sit:border-t sit:border-muted sit:py-layout-md">
        <div class="sit-grid sit:gap-layout-md">

          <!-- Section description (left third) -->
          <div class="sit-col-4 sit-col-sm-8 sit-col-lg-4">
            <h2 class="sit:text-base sit:font-semibold sit:text-default">Personal information</h2>
            <p class="sit:text-sm sit:text-body-subtle sit:mt-1">
              Your name and contact details. Only your agency administrator can see this information.
            </p>
          </div>

          <!-- Form fields (right two-thirds) -->
          <div class="sit-col-4 sit-col-sm-8 sit-col-lg-8 sit:flex sit:flex-col sit:gap-component-sm">

            <!-- Two-column row -->
            <div class="sit-grid sit:gap-component-sm">
              <sit-input
                class="sit-col-4 sit-col-sm-4 sit-col-lg-6"
                label="First name"
                name="firstName"
                required
                hasFeedback
              ></sit-input>
              <sit-input
                class="sit-col-4 sit-col-sm-4 sit-col-lg-6"
                label="Last name"
                name="lastName"
                required
                hasFeedback
              ></sit-input>
            </div>

            <!-- Full-width field -->
            <sit-input
              label="Email address"
              type="email"
              name="email"
              hint="Must be a gov.sg email address."
              required
              hasFeedback
            ></sit-input>

            <sit-input
              label="Phone number"
              type="tel"
              name="phone"
              hint="Singapore number including country code, e.g. +65 9123 4567"
              hasFeedback
            ></sit-input>

          </div>
        </div>
      </div>

      <!-- Section 2 -->
      <div class="sit:border-t sit:border-muted sit:py-layout-md">
        <div class="sit-grid sit:gap-layout-md">

          <div class="sit-col-4 sit-col-sm-8 sit-col-lg-4">
            <h2 class="sit:text-base sit:font-semibold sit:text-default">Role &amp; access</h2>
            <p class="sit:text-sm sit:text-body-subtle sit:mt-1">
              Your position and assigned permissions within the system.
            </p>
          </div>

          <div class="sit-col-4 sit-col-sm-8 sit-col-lg-8 sit:flex sit:flex-col sit:gap-component-sm">

            <sit-input
              label="Job title"
              name="jobTitle"
              hasFeedback
            ></sit-input>

            <sit-select label="Department" name="department" hasFeedback>
              <sit-select-option value="">Select department</sit-select-option>
              <sit-select-option value="policy">Policy</sit-select-option>
              <sit-select-option value="operations">Operations</sit-select-option>
              <sit-select-option value="ict">ICT</sit-select-option>
            </sit-select>

            <sit-select label="Access level" name="accessLevel" hasFeedback>
              <sit-select-option value="viewer">Viewer</sit-select-option>
              <sit-select-option value="editor">Editor</sit-select-option>
              <sit-select-option value="admin">Admin</sit-select-option>
            </sit-select>

          </div>
        </div>
      </div>

      <!-- Section 3: long-form text -->
      <div class="sit:border-t sit:border-muted sit:py-layout-md">
        <div class="sit-grid sit:gap-layout-md">

          <div class="sit-col-4 sit-col-sm-8 sit-col-lg-4">
            <h2 class="sit:text-base sit:font-semibold sit:text-default">Notes</h2>
            <p class="sit:text-sm sit:text-body-subtle sit:mt-1">
              Optional additional context visible to your team.
            </p>
          </div>

          <div class="sit-col-4 sit-col-sm-8 sit-col-lg-8">
            <sit-textarea
              label="Internal notes"
              name="notes"
              rows="4"
              maxlength="500"
              characterCount
              hint="Max 500 characters."
            ></sit-textarea>
          </div>

        </div>
      </div>

      <!-- Form footer actions -->
      <div class="sit:border-t sit:border-muted sit:pt-layout-sm sit:flex sit:justify-end sit:gap-component-sm">
        <sit-button variant="outline" type="button" onclick="history.back()">Cancel</sit-button>
        <sit-button variant="primary" type="submit">Save changes</sit-button>
      </div>

    </form>

  </div>
</div>

<sit-footer></sit-footer>
```

## Customisation notes

- **Page title & description**: Update `Edit profile` and description text to match your use case
- **Section labels & descriptions**: Change each section's heading and paragraph text to reflect your form's purpose
- **Form fields**: Add, remove, or modify inputs based on what data you're collecting; maintain `hasFeedback` for validation feedback
- **Field grouping**: Use the 3-column layout (1/3 description + 2/3 fields) to organize related fields logically
- **Two-column rows**: For paired fields like first/last name, use the nested `sit-grid` with `sit-col-lg-6`
- **Full-width fields**: Place inputs outside the two-column grid to span full width
- **Validation**: Keep `novalidate` on the form element and use `hasFeedback` on inputs; handle submission validation in JavaScript with `form.reportValidity()`
- **Button placement**: Duplicate Save/Cancel buttons at top (sticky) and bottom for easy access on long forms
- **Hints vs labels**: Use the `hint` attribute for instructional text; keep labels concise
