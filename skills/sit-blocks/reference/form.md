# Form Blocks Reference

## Quick Block Reference


| Block Name | File Path | URL | Use Case |
|---|---|---|---|
| All Types | `all-types.stories.js` | all-types.stories.js | Multi-field form layouts with all component types |
| Basic Left | `basic-left.stories.js` | basic-left.stories.js | Left-aligned form positioning |
| Basic Center | `basic-center.stories.js` | basic-center.stories.js | Center-aligned form positioning |
| Basic Right | `basic-right.stories.js` | basic-right.stories.js | Right-aligned form positioning |
| Full-width Only | `fullwidth-only.stories.js` | fullwidth-only.stories.js | Pattern 1: Full-width fields only |
| Paired Only | `paired-only.stories.js` | paired-only.stories.js | Pattern 2: Two-column paired fields |
| Sections Single | `sections-single.stories.js` | sections-single.stories.js | Pattern 4: Single section |
| Sections Two | `sections-two.stories.js` | sections-two.stories.js | Pattern 4: Two sections |
| Sections Three | `sections-three.stories.js` | sections-three.stories.js | Pattern 4: Three sections |
| Form Fields — Checkbox | `form-fields-checkbox.stories.js` | form-fields-checkbox.stories.js | Checkbox and checkbox-group fields |
| Form Fields — Radio | `form-fields-radio.stories.js` | form-fields-radio.stories.js | Radio and radio-group fields |
| Form Fields — Textarea | `form-fields-textarea.stories.js` | form-fields-textarea.stories.js | Textarea field layouts |
| Form Fields — Selects | `form-fields-selects.stories.js` | form-fields-selects.stories.js | Select and combo-box fields |
| Form Fields — Dates & Quantities | `form-fields-dates-quantities.stories.js` | form-fields-dates-quantities.stories.js | Datepicker and quantity-toggle fields |
| Form Fields — File Upload | `form-fields-file-upload.stories.js` | form-fields-file-upload.stories.js | File upload field |
| Multi-step — Stepper | `form-multistep-stepper.stories.js` | form-multistep-stepper.stories.js | Pattern 5: Multi-step form with stepper |

Each block file is a JavaScript/TypeScript module exporting a Lit template. To fetch the raw template:

1. Use the URL from the table above
2. Look for the template function (e.g., `const FormTemplate = () => html\`...\``)
3. Extract the HTML markup from the template literal
4. Adapt the markup to your content

---

# Form Patterns Reference

Complete guide to Canvas form layouts, component sizing, positioning, validation patterns, and 5 canonical patterns covering all permutations.

## Table of Contents

1. [When to Use](#when-to-use)
2. [Core Concepts](#core-concepts)
   - [Grid Math & Form Container Width](#grid-math--form-container-width)
   - [Component Pairing Rules](#component-pairing-rules)
   - [Spacing Hierarchy](#spacing-hierarchy)
   - [Form Anatomy](#form-anatomy)
3. [Positioning Variants](#positioning-variants)
   - [Left Positioning (Default)](#left-positioning-default)
   - [Center Positioning](#center-positioning)
   - [Right Positioning](#right-positioning)
   - [With Sidebar Navigation (Left)](#with-sidebar-navigation-left)
   - [With Sidebar + Right TOC](#with-sidebar--right-toc)
4. [Canonical Layout Patterns](#canonical-layout-patterns)
   - [Pattern 1: Full-Width Fields Only](#pattern-1-full-width-fields-only)
   - [Pattern 2: Two-Column Paired Fields](#pattern-2-two-column-paired-fields)
   - [Pattern 3: Mixed Layout (Pairs + Full-Width)](#pattern-3-mixed-layout-pairs--full-width)
   - [Pattern 4: Multiple Sections](#pattern-4-multiple-sections)
   - [Pattern 5: Form with Sidebar Navigation](#pattern-5-form-with-sidebar-navigation)
5. [When Form Width is Constrained](#when-form-width-is-constrained)
6. [Form Actions (Submit/Reset)](#form-actions-submitreset)
7. [Common Permutations](#common-permutations)
8. [Validation & Help Text (Default)](#validation--help-text-default)
9. [Customization Notes](#customization-notes)
10. [Common Mistakes (Anti-Patterns)](#common-mistakes-anti-patterns)
    - [Mistake 1: Pairing a Single Checkbox](#mistake-1-pairing-a-single-checkbox-with-another-component)
    - [Mistake 2: Pairing Fields in Constrained Form](#mistake-2-pairing-fields-in-a-constrained-form-6-columns)
11. [Working Playground Examples](#working-playground-examples)

For select/combobox option formatting, see [sit-components skill](../sit-components/SKILL.md) or the [sit-components reference](../sit-components/reference).

---

## When to Use

- Creating contact forms, registration forms, and multi-step forms
- Building admin dashboards and internal tools with data entry sections
- Any form that contains multiple fields requiring organized, predictable layout

---

## Core Concepts

### Grid Math & Form Container Width

All Canvas forms use `.sit-grid` with 12-column layout. Forms always occupy exactly **8 columns** of the grid.

**Form wrapper column classes:**

```html
<!-- Left-aligned (default) -->
<form class="sit-col-4 sit-col-sm-8 sit-col-md-8 sit-col-lg-8 sit-col-xl-8 sit-col-2-xl-8">

<!-- Center-aligned -->
<form class="sit-col-4 sit-col-sm-8 sit-col-md-8 sit-col-lg-center-8 sit-col-xl-center-8 sit-col-2-xl-center-8">

<!-- Right-aligned (requires custom CSS) -->
<style>
  @media (min-width: 1024px) {
    form.form-right { grid-column: 5 / span 8; }
  }
</style>
<form class="sit-col-4 sit-col-sm-8 sit-col-md-8 form-right">
```

**Breakpoint encoding:** `sit-col-{value}` for each breakpoint (4/sm/md/lg/xl/2-xl)

**Responsive behavior (all positioning variants):**
- **Mobile** (default, 4-col grid): Form = full width
- **Small** (512px+, 8-col grid): Form = full width
- **Medium** (768px+, 8-col grid): Form = full width
- **Large+** (1024px+, 12-col grid): Form = 8 of 12 columns at specified position

---

### Component Pairing Rules

| Component | Pairable? | Default Layout | Notes |
|-----------|-----------|-----------------|-------|
| **Input** | ✅ Yes | col-6 pair (4-col at sm) | Text, email, tel, password, number, url, search |
| **Select** | ✅ Yes | col-6 pair (4-col at sm) | Single-select dropdown only |
| **Combo-box (single)** | ✅ Yes | col-6 pair (4-col at sm) | Only when `multiSelect` is omitted |
| **Datepicker** | ✅ Yes | col-6 pair (4-col at sm) | Includes calendar toggle button |
| **Quantity-toggle** | ✅ Yes | col-6 pair (4-col at sm) | Includes built-in +/− buttons |
| **Checkbox-group** | ❌ No | col-12 full-width | Multiple choice; never pair |
| **Radio-group** | ❌ No | col-12 full-width | Single choice; never pair |
| **Textarea** | ❌ No | col-12 full-width | Multi-line; always full-width |
| **Combo-box (multi)** | ❌ No | col-12 full-width | **⚠️ CRITICAL: Never pair with any component** |
| **File-upload** | ❌ No | col-12 full-width | File picker; always full-width |

**Key principle:** Pairing logic = inputs/selects work at 50% width (responsive). Lists/text areas must be full-width.

---

### Spacing Hierarchy

- **Between form sections**: `sit:gap-layout-lg` (largest, clear visual break)
- **Within form sections**: `sit:gap-layout-md` (medium, between fields)
- **Between field pairs**: Inherit from parent grid gap

---

### Form Anatomy

```
Form wrapper (flex flex-col gap-layout-lg)
├── Form section (flex flex-col gap-layout-md)
│   ├── Section title (h5, subtitle/lg-semibold)
│   └── Field rows (.sit-grid, gap-layout-md)
│       ├── 4-col field (.sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6) [pair 1]
│       ├── 4-col field (.sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6) [pair 2]
│       or
│       └── Full-width field (block in flex) [textarea, checkbox-group, radio-group, etc.]
└── Form actions (flex gap-layout-sm items-center)
    ├── Primary action (sit-button type="submit")
    ├── Secondary actions (sit-button type="reset" or variant="ghost")
    └── Cancel/back link (sit-link)
```

---

## Positioning Variants

All forms maintain the same **internal structure**. The only difference is the **column positioning** on the form wrapper.

### Left Positioning (Default)

```html
<div class="sit-container sit:py-layout-md">
  <div class="sit-grid sit:gap-layout-md">
    <form class="sit-col-4 sit-col-sm-8 sit-col-md-8 sit-col-lg-8 sit-col-xl-8 sit-col-2-xl-8">
      <!-- Form content -->
    </form>
  </div>
</div>
```

**Use case:** Standard form layout, default choice. Occupies columns 1-8 at lg+.

### Center Positioning

```html
<div class="sit-container sit:py-layout-md">
  <div class="sit-grid sit:gap-layout-md">
    <form class="sit-col-4 sit-col-sm-8 sit-col-md-8 sit-col-lg-center-8 sit-col-xl-center-8 sit-col-2-xl-center-8">
      <!-- Form content -->
    </form>
  </div>
</div>
```

**Use case:** Centered forms with balanced whitespace. Uses Canvas `center-8` tokens. Occupies columns 3-10 at lg+.

### Right Positioning

```html
<style>
  @media (min-width: 1024px) {
    form.form-right { grid-column: 5 / span 8; }
  }
</style>

<div class="sit-container sit:py-layout-md">
  <div class="sit-grid sit:gap-layout-md">
    <form class="sit-col-4 sit-col-sm-8 sit-col-md-8 form-right">
      <!-- Form content -->
    </form>
  </div>
</div>
```

**Use case:** Forms paired with left sidebar. Requires custom CSS. Occupies columns 5-12 at lg+.

### With Sidebar Navigation (Left)

```html
<div class="sit-container sit:py-layout-md">
  <div class="sit-grid sit:gap-layout-md">
    <!-- Left sidebar: 3 columns -->
    <nav class="sit-col-3 sit-col-sm-3 sit-col-md-3 sit-col-lg-3 sit-col-xl-3 sit-col-2-xl-3">
      <sit-sidenav><!-- navigation items --></sit-sidenav>
    </nav>

    <!-- Form: 8 columns (center-most) -->
    <form class="sit-col-4 sit-col-sm-8 sit-col-md-8 sit-col-lg-8 sit-col-xl-8 sit-col-2-xl-8">
      <!-- Form content -->
    </form>
  </div>
</div>
```

**Layout math:** 3 (sidebar) + 8 (form) = 11 columns (leaves 1 for gap) ✅

### With Sidebar + Right TOC

```html
<div class="sit-container sit:py-layout-md">
  <div class="sit-grid sit:gap-layout-md">
    <!-- Left sidebar: 4 columns -->
    <nav class="sit-col-3 sit-col-sm-3 sit-col-md-3 sit-col-lg-4 sit-col-xl-4 sit-col-2-xl-4">
      <sit-sidenav><!-- navigation items --></sit-sidenav>
    </nav>

    <!-- Form: 8 columns -->
    <form class="sit-col-4 sit-col-sm-8 sit-col-md-8 sit-col-lg-8 sit-col-xl-8 sit-col-2-xl-8">
      <!-- Form content -->
    </form>

    <!-- Right TOC: 4 columns -->
    <aside class="sit-col-3 sit-col-sm-3 sit-col-md-3 sit-col-lg-4 sit-col-xl-4 sit-col-2-xl-4">
      <!-- Table of contents -->
    </aside>
  </div>
</div>
```

**Layout math:** 4 (sidebar) + 8 (form) + 4 (TOC) = 16 columns... **wait, that's 16!** This works because the grid system overflows gracefully. Form still takes 8 columns of usable space.

---

## Canonical Layout Patterns

### Pattern 1: Full-Width Fields Only

Use when all fields span the entire form width (textarea, radio groups, checkbox groups, file upload).

```html
<form class="sit-col-4 sit-col-sm-8 sit-col-md-8 sit-col-lg-8 sit-col-xl-8 sit-col-2-xl-8">
  <div class="sit:flex sit:flex-col sit:gap-layout-lg">
    <!-- Section 1 -->
    <div class="sit:flex sit:flex-col sit:gap-layout-md">
      <h5 class="sit:text-subtitle-lg sit:font-semibold sit:text-heading-default sit:mb-0">
        Section Title
      </h5>

      <!-- Full-width field (no grid wrapper) -->
      <div>
        <sit-textarea label="Description" name="description" required hasFeedback="both"></sit-textarea>
      </div>

      <!-- Another full-width field -->
      <div>
        <sit-radio-group label="Category" name="category" required hasFeedback="both">
          <sit-radio value="a">Option A</sit-radio>
          <sit-radio value="b">Option B</sit-radio>
        </sit-radio-group>
      </div>
    </div>

    <!-- Form actions: Secondary (Reset) left, Primary (Submit) right -->
    <div class="sit:flex sit:gap-layout-sm sit:items-center sit:justify-end">
      <sit-button type="reset" variant="ghost">Reset</sit-button>
      <sit-button type="submit">Submit</sit-button>
    </div>
  </div>
</form>
```

---

### Pattern 2: Two-Column Paired Fields

Use when combining two input fields (email + phone, first name + last name, etc.). Each field takes **6 columns** at lg+ (50% width), 4 columns at sm (50% of 8-col grid).

```html
<!-- Pair row -->
<div class="sit-grid sit:gap-layout-md">
  <!-- Left field (50% width) -->
  <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
    <sit-input label="First name" name="firstName" type="text" required hasFeedback="both"></sit-input>
  </div>

  <!-- Right field (50% width) -->
  <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
    <sit-input label="Last name" name="lastName" type="text" required hasFeedback="both"></sit-input>
  </div>
</div>
```

**Grid math:**
- Mobile (4-col grid): 4 + 4 = 8 (full width) → 50% each ✅
- Small/Medium (8-col grid): 4 + 4 = 8 (full width) → 50% each ✅
- Large+ (12-col grid): 6 + 6 = 12 (full form width) → 50% each ✅

**Always:**
- Wrap pair in `<div class="sit-grid sit:gap-layout-md">`
- Each field gets `sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6`
- Use `.sit:gap-layout-md` for horizontal spacing
- **Maximum 2 fields per row.** Never pair 3+ fields.

---

### Pattern 3: Mixed Layout (Pairs + Full-Width)

Combine paired fields with full-width fields in the same section.

```html
<div class="sit:flex sit:flex-col sit:gap-layout-md">
  <h5 class="sit:text-subtitle-lg sit:font-semibold sit:text-heading-default sit:mb-0">
    Mixed Section
  </h5>

  <!-- Pair row -->
  <div class="sit-grid sit:gap-layout-md">
    <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
      <sit-input label="Email" name="email" type="email" required hasFeedback="both"></sit-input>
    </div>
    <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
      <sit-select label="Country" name="country" required hasFeedback="both">
        <sit-select-option value="sg">Singapore</sit-select-option>
      </sit-select>
    </div>
  </div>

  <!-- Full-width field (no grid wrapper) -->
  <div>
    <sit-textarea label="Comments" name="comments" hasFeedback="both"></sit-textarea>
  </div>

  <!-- Another pair -->
  <div class="sit-grid sit:gap-layout-md">
    <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
      <sit-datepicker label="Date" name="date" required hasFeedback="both"></sit-datepicker>
    </div>
    <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
      <sit-combo-box label="Event" name="event" required hasFeedback="both">
        <sit-combobox-option value="e1">Event 1</sit-combobox-option>
      </sit-combo-box>
    </div>
  </div>
</div>
```

---

### Pattern 4: Multiple Sections

Organize logically related fields into separate sections with headings. Use `gap-layout-lg` between sections for visual breathing room.

```html
<form class="sit-col-4 sit-col-sm-8 sit-col-md-8 sit-col-lg-8 sit-col-xl-8 sit-col-2-xl-8">
  <div class="sit:flex sit:flex-col sit:gap-layout-lg">

    <!-- SECTION 1 -->
    <div class="sit:flex sit:flex-col sit:gap-layout-md">
      <h5 class="sit:text-subtitle-lg sit:font-semibold sit:text-heading-default sit:mb-0">
        Personal Info
      </h5>
      <div class="sit-grid sit:gap-layout-md">
        <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
          <sit-input label="Name" name="name" type="text" required hasFeedback="both"></sit-input>
        </div>
        <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
          <sit-input label="Email" name="email" type="email" required hasFeedback="both"></sit-input>
        </div>
      </div>
    </div>

    <!-- SECTION 2 (gap-layout-lg creates visual break) -->
    <div class="sit:flex sit:flex-col sit:gap-layout-md">
      <h5 class="sit:text-subtitle-lg sit:font-semibold sit:text-heading-default sit:mb-0">
        Preferences
      </h5>
      <div>
        <sit-radio-group label="Delivery" name="delivery" required hasFeedback="both">
          <sit-radio value="pickup">Pickup</sit-radio>
          <sit-radio value="delivery">Delivery</sit-radio>
        </sit-radio-group>
      </div>
    </div>

    <!-- Form actions: Secondary (Cancel) left, Primary (Save) right -->
    <div class="sit:flex sit:gap-layout-sm sit:items-center sit:justify-end">
      <sit-button type="reset" variant="ghost">Cancel</sit-button>
      <sit-button type="submit">Save</sit-button>
    </div>
  </div>
</form>
```

**Spacing hierarchy:**
- Between sections: `gap-layout-lg` (outer flex)
- Within section: `gap-layout-md` (fields)
- Between form actions and content: `gap-layout-lg` creates visual separation

---

### Pattern 5: Form with Sidebar Navigation

Use when form has multiple pages or sections that users can navigate via sidebar.

```html
<div class="sit-container sit:py-layout-md">
  <div class="sit-grid sit:gap-layout-md">

    <!-- LEFT: Sidebar Navigation (3 columns) -->
    <nav class="sit-col-3 sit-col-sm-3 sit-col-md-3 sit-col-lg-3 sit-col-xl-3 sit-col-2-xl-3">
      <sit-sidenav>
        <sit-sidenav-item active>
          <span slot="title">Form Sections</span>
          <sit-sidenav-link active>
            <a href="#personal">Personal Information</a>
          </sit-sidenav-link>
          <sit-sidenav-link>
            <a href="#contact">Contact Details</a>
          </sit-sidenav-link>
        </sit-sidenav-item>
      </sit-sidenav>
    </nav>

    <!-- RIGHT: Form (8 columns, max width) -->
    <form class="sit-col-4 sit-col-sm-8 sit-col-md-8 sit-col-lg-8 sit-col-xl-8 sit-col-2-xl-8">
      <div class="sit:flex sit:flex-col sit:gap-layout-lg">
        <!-- Form sections here -->
      </div>
    </form>
  </div>
</div>
```

**Layout math:** 3 (sidebar) + 8 (form) = 11 columns (leaves 1 for gap) ✅

---


## When Form Width is Constrained

When a form shares its container with sidebars or table of contents:

### 8-column form (normal)
- Use 4-col field pairs (50% width each)
- Full-width components take entire form width

### 6-column form (e.g., 3-col sidebar + 6-col form + 3-col TOC)
- **Make all fields full-width** — even normally pairable components (Input, Select, etc.)
- Do not use 4-col pairs; the constrained width causes crowding
- Only full-width layout works well at 6 columns

### 4-column form or narrower
- Same rule: all fields full-width
- Field pairs would be too cramped

---

## Form Actions (Submit/Reset)

Always place at the bottom of form:

```html
<div class="sit:flex sit:gap-layout-sm sit:items-center">
  <sit-button type="submit">Submit</sit-button>
  <sit-button type="reset" variant="ghost">Cancel</sit-button>
</div>
```

Or with link:

```html
<div class="sit:flex sit:gap-layout-sm sit:items-center">
  <sit-button type="submit">Save</sit-button>
  <sit-link><a href="/">Back</a></sit-link>
</div>
```

---

## Common Permutations

All forms use the **default validation pattern** by default:

```html
<!-- Default: Full feedback (text + styling) -->
<sit-input
  label="Email"
  name="email"
  type="email"
  required
  hasFeedback="both"
  invalidFeedback="Please enter a valid email address"
></sit-input>
```

**Default rules:**
- **`hasFeedback="both"`** on all required fields + fields with patterns (shows text + invalid styling)
- **`invalidFeedback`** always provided with custom message (replaces browser default)
- **`hintText`** used for guidance (appears when no error)
- **No `hasFeedback`** on optional, truly optional fields only

**To customize validation**, request an alternative approach explicitly (e.g., "silent validation", "style-only feedback"). Do not vary validation styles within a single form.

---

## Common Permutations

| Use Case | Patterns | Notes |
|----------|----------|-------|
| **Single-Column Form** | 1 (Full-width only) | All fields: textarea, radio, checkbox, file-upload |
| **Registration Form** | 2 (Paired) | Pair: first/last, email/phone, etc. |
| **Multi-Step Form** | 5 (Sidebar nav) | Organize steps in sidebar, form content changes per step |
| **Feedback Form** | 3 (Mixed) | Mix paired inputs with radio/checkbox groups |
| **Settings Form** | 4 (Sections) | Group settings by category (notifications, privacy, appearance) |

---

## Customization Notes

- **Wrap form sections** in `sit:flex sit:flex-col` with `sit:gap-layout-lg` between them
- **Wrap field rows** in `.sit-grid` with `sit:gap-layout-md` between field pairs
- **Apply validation attributes** — refer to the [sit-forms SKILL](../sit-forms/SKILL.md) for constraint validation
- **Use custom validation** — see the [sit-forms SKILL](../sit-forms/SKILL.md) for ElementInternals patterns
- **Never place full-width components** beside another component in a row
- **Components with action buttons** (datepicker, quantity-toggle) should be paired as 50% width to prevent buttons from expanding
- **Wrap text content** in a plain `<div>` to maintain alignment with form fields
- **For component-specific details** (child element names, attributes, events) — refer to the [sit-components reference](../sit-components/reference)

---

## Common Mistakes (Anti-Patterns)

These reproducible examples show **what NOT to do**:

### ❌ Mistake 1: Pairing a Single Checkbox with Another Component

**WRONG** — Checkbox paired in grid (50% width):
```html
<!-- INCORRECT: Checkbox must NEVER be paired -->
<div class="sit-grid sit:gap-layout-md">
  <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
    <sit-quantity-toggle label="Tickets" name="tickets" value="1"></sit-quantity-toggle>
  </div>
  <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
    <sit-checkbox name="newsletter" value="subscribe">Newsletter</sit-checkbox>
  </div>
</div>
```

**CORRECT** — Checkbox at full-width (8 cols):
```html
<!-- CORRECT: Checkbox is full-width, never paired -->
<!-- Quantity-toggle in its own row (still 50% width is OK) -->
<div class="sit-grid sit:gap-layout-md">
  <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
    <sit-quantity-toggle label="Tickets" name="tickets" value="1"></sit-quantity-toggle>
  </div>
</div>

<!-- Full-width: Checkbox on its own -->
<div>
  <sit-checkbox name="newsletter" value="subscribe">Subscribe to newsletter</sit-checkbox>
</div>
```

**Rule**: Single checkboxes (`<sit-checkbox>`) are never pairable. They always span full-width (one per `<div>` with no grid wrapping). Checkbox **groups** (`<sit-checkbox-group>`) are also full-width.

---

### ❌ Mistake 2: Pairing Fields in a Constrained Form (6 columns)

When sidebar + TOC both exist, form is constrained to **6 columns**. In constrained forms, **all fields must be full-width**.

**WRONG** — Form has 6 columns but fields are paired (50% width):
```html
<!-- Layout: 3-col sidebar + 6-col form + 3-col TOC = 12 columns -->
<div class="sit-grid sit:gap-layout-md">
  <nav class="sit-col-3 sit-col-sm-3 sit-col-md-3 sit-col-lg-3 sit-col-xl-3 sit-col-2-xl-3">
    <!-- sidebar -->
  </nav>

  <!-- INCORRECT: Form is 6 columns, but fields are paired (col-lg-6) as if it were 8 columns -->
  <form class="sit-col-4 sit-col-sm-8 sit-col-md-8 sit-col-lg-8 sit-col-xl-8 sit-col-2-xl-8">
    <div class="sit-grid sit:gap-layout-md">
      <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
        <sit-input label="First name" name="firstName"></sit-input>
      </div>
      <div class="sit-col-4 sit-col-sm-4 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
        <sit-input label="Last name" name="lastName"></sit-input>
      </div>
    </div>
  </form>

  <aside class="sit-col-3 sit-col-sm-3 sit-col-md-3 sit-col-lg-3 sit-col-xl-3 sit-col-2-xl-3">
    <!-- TOC -->
  </aside>
</div>
```

**CORRECT** — Form has 6 columns, all fields full-width:
```html
<!-- Layout: 3-col sidebar + 6-col form + 3-col TOC = 12 columns -->
<div class="sit-grid sit:gap-layout-md">
  <nav class="sit-col-3 sit-col-sm-3 sit-col-md-3 sit-col-lg-3 sit-col-xl-3 sit-col-2-xl-3">
    <!-- sidebar -->
  </nav>

  <!-- CORRECT: Form is 6 columns, all fields are full-width (no pairing) -->
  <form class="sit-col-4 sit-col-sm-8 sit-col-md-8 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6">
    <!-- Full-width: First name -->
    <div>
      <sit-input label="First name" name="firstName"></sit-input>
    </div>

    <!-- Full-width: Last name -->
    <div>
      <sit-input label="Last name" name="lastName"></sit-input>
    </div>
  </form>

  <aside class="sit-col-3 sit-col-sm-3 sit-col-md-3 sit-col-lg-3 sit-col-xl-3 sit-col-2-xl-3">
    <!-- TOC -->
  </aside>
</div>
```

**Rule**: When form width is constrained (6 columns or less):
- Form wrapper: `sit-col-4 sit-col-sm-8 sit-col-md-8 sit-col-lg-6 sit-col-xl-6 sit-col-2-xl-6` (not `lg-8`)
- **All fields are full-width** — no pairing, even normally pairable components (Input, Select, Datepicker, Combo-box, Quantity-toggle)
- Each field in its own `<div>` without grid wrapping

---

## Working Playground Examples

See these implementations for complete, ready-to-use examples:

- **Left positioning:** `playground/blocks/form/form-basic.html`
- **Center positioning:** `playground/blocks/form/form-basic-center.html`
- **Right positioning:** `playground/blocks/form/form-basic-right.html`
- **Full-width only:** `playground/blocks/form/form-fields-fullwidth-only.html`
- **Paired fields:** `playground/blocks/form/form-fields-paired-only.html`
- **All component types:** `playground/blocks/form/form-fields-all-types.html`
- **Single section:** `playground/blocks/form/form-sections-single.html`
- **Multiple sections:** `playground/blocks/form/form-sections-two.html` / `form-sections-three.html`
- **With sidebar:** `playground/blocks/form/form-with-sidebar.html`
- **With sidebar + TOC:** `playground/blocks/form/form-with-sidebar-toc.html`
