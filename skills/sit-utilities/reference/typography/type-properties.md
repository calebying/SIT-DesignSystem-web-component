# Typography Type Properties Reference

Full reference for all Canvas typography utility classes — scale tables, usage rules, do/don't guidance, and complete examples.

---

## Overview

Canvas typography utilities control six visual properties of text. Each property is applied via a dedicated `sit:` Tailwind utility class. All classes are available after importing `utility.css` — no additional setup is needed beyond the standard Canvas utility setup.

The six properties are: **font family**, **font weight**, **letter spacing**, **paragraph spacing**, **text decoration**, and **text transform**.

---

## Principles

- **Use the scale, not arbitrary values.** Every property has a defined Canvas scale. Apply scale tokens rather than inline styles or custom values.
- **Defaults require no class.** The reboot sets body-safe defaults (sans-serif, regular weight, 16px, 1.5 line height). Only add a class when deviating from the default.
- **Combine properties intentionally.** Letter spacing, weight, and transform work together. Large text needs tighter tracking; small uppercase text needs wider tracking and a small size.
- **Monospace for code, always.** Apply `sit:font-mono` on every `<code>` and `<pre>` element without exception.

---

## 1. Font Family

Apply with `sit:font-{family}`:

### Scale / Values

| Token | Stack | Use for |
|-------|-------|---------|
| `sit:font-sans` | Inter, system-ui, sans-serif | All prose, headings, labels (reboot default) |
| `sit:font-mono` | JetBrainsMono, Courier New, monospace | All code — inline and block |

### Roles & Usage

- **Prose and UI text** — reboot applies `font-sans` globally; no class needed on regular content.
- **Code** — always apply `sit:font-mono` to `<code>`, `<pre>`, and `<kbd>` elements.
- Never use `sit:font-sans` on `<code>` or `<pre>` elements.

```html
<!-- No class needed for regular text — reboot default -->
<p>Regular body text</p>

<!-- Always set mono on code -->
<code class="sit:font-mono sit:text-14">const value = 42;</code>
<pre class="sit:font-mono sit:text-14 sit:leading-20">
  function hello() {
    return 'world';
  }
</pre>
```

---

## 2. Font Weight

Apply with `sit:font-{weight}`:

### Scale / Values

| Token | Numeric weight | Typical use |
|-------|---------------|-------------|
| `sit:font-light` | 300 | Large display text; use sparingly |
| `sit:font-regular` | 400 | Reboot default — body text |
| `sit:font-semibold` | 600 | Subtitles, labels, button labels |
| `sit:font-bold` | 700 | Headings, strong emphasis |

### Roles & Usage

- **Body text** — reboot applies `font-regular` globally; no class needed.
- **Subtitles and labels** → `sit:font-semibold`
- **Headings** → `sit:font-bold`
- **Display / hero text** → `sit:font-bold` or `sit:font-light` for large low-weight treatments

```html
<p>Body text — no weight class needed</p>
<label class="sit:font-semibold sit:text-14">Form label</label>
<h3 class="sit:font-semibold sit:text-24">Subtitle</h3>
<h1 class="sit:font-bold sit:text-48">Page heading</h1>
```

---

## 3. Letter Spacing

Apply with `sit:tracking-{size}`:

### Scale / Values

| Token | Value | Typical use |
|-------|-------|-------------|
| `sit:tracking-tighter` | −1px | Very large display headings |
| `sit:tracking-tight` | −0.4px | Large headings (48px and above) |
| `sit:tracking-normal` | 0px | Default — all body text |
| `sit:tracking-wide` | 1px | Slightly open body text |
| `sit:tracking-wider` | 2px | Small uppercase labels and badges |

### Roles & Usage

- **Body text** — leave at `normal`; no class needed.
- **Large headings (48px+)** → `sit:tracking-tight` or `sit:tracking-tighter`
- **Small uppercase labels** → `sit:tracking-wider`
- Never apply wide tracking to large text — it reduces readability.

```html
<h1 class="sit:text-56 sit:font-bold sit:leading-64 sit:tracking-tighter">
  Hero heading
</h1>
<h2 class="sit:text-48 sit:font-bold sit:leading-56 sit:tracking-tight">
  Page title
</h2>
<p class="sit:text-16">Body text — tracking-normal is the default, no class needed</p>
<span class="sit:text-12 sit:font-semibold sit:uppercase sit:tracking-wider">
  Badge label
</span>
```

---

## 4. Paragraph Spacing

Apply with `sit:mb-paragraph-{size}` on the paragraph element:

### Scale / Values

| Token | Value | Typical use |
|-------|-------|-------------|
| `sit:mb-paragraph-none` | 0 | Reset — remove spacing between paragraphs |
| `sit:mb-paragraph-sm` | 0.5rem (8px) | Compact content, dense UI |
| `sit:mb-paragraph-md` | 1rem (16px) | Standard body content |
| `sit:mb-paragraph-lg` | 1.5rem (24px) | Long-form reading, articles |
| `sit:mb-paragraph-xl` | 2rem (32px) | Landing pages, editorial layouts |

### Roles & Usage

- Apply to the paragraph element, not its container.
- Use `sit:mb-paragraph-md` for standard content; increase for long-form reading.
- Use `sit:mb-paragraph-none` to reset spacing in tightly controlled layouts.

```html
<!-- Standard article content -->
<p class="sit:mb-paragraph-md">First paragraph with standard spacing.</p>
<p class="sit:mb-paragraph-md">Second paragraph follows with the same gap.</p>

<!-- Long-form reading -->
<p class="sit:mb-paragraph-lg">Longer editorial content benefits from more air between paragraphs.</p>
<p class="sit:mb-paragraph-lg">This breathing room improves reading stamina.</p>
```

---

## 5. Text Decoration

Apply with the decoration class directly:

### Scale / Values

| Token | Effect | Typical use |
|-------|--------|-------------|
| `sit:underline` | Underline | Links, emphasised inline terms |
| `sit:overline` | Overline | Decorative labels |
| `sit:line-through` | Strikethrough | Deleted content, prices |
| `sit:no-underline` | Remove underline | Remove default link underline |

### Roles & Usage

- **Links** — apply `sit:underline` to make links clearly identifiable.
- **Deleted/struck content** — use `sit:line-through` paired with `<del>` for semantic accuracy.
- **Removing underlines** — use `sit:no-underline` when link styling is handled by colour or weight instead.

```html
<a href="#" class="sit:text-link-default sit:underline">Standard link</a>

<p>
  Original price: <span class="sit:line-through sit:text-14">$99</span>
  Sale price: <strong class="sit:font-bold">$59</strong>
</p>

<!-- Navigation link — underline removed, colour conveys the link -->
<a href="#" class="sit:text-link-default sit:no-underline sit:font-semibold">
  Nav item
</a>
```

---

## 6. Text Transform

Apply with the transform class directly:

### Scale / Values

| Token | Effect | Typical use |
|-------|--------|-------------|
| `sit:uppercase` | ALL CAPS | Badge labels, category tags, section markers |
| `sit:lowercase` | all lowercase | Stylistic use; rare in UI |
| `sit:capitalize` | Title Case | Auto-capitalise proper names |
| `sit:normal-case` | Reset | Remove inherited transform |

### Roles & Usage

- **Uppercase labels** — always pair with `sit:tracking-wider` and a small font size for readability.
- **Capitalize** — use on dynamic content where casing is unknown (e.g. user names).
- **Normal-case** — use to reset an inherited `uppercase` from a parent element.

```html
<!-- Badge / category tag -->
<span class="sit:text-12 sit:font-semibold sit:uppercase sit:tracking-wider">
  New
</span>

<!-- Section marker -->
<p class="sit:text-14 sit:font-semibold sit:uppercase sit:tracking-wider sit:text-body-subtle">
  Overview
</p>

<!-- Reset inherited transform -->
<button class="sit:uppercase">
  Parent is uppercase
  <span class="sit:normal-case">but this is not</span>
</button>
```

---

## Do & Don't

**Font weight**
- ✅ Use `sit:font-semibold` for labels and subtitles, `sit:font-bold` for headings
- ❌ Do not apply `sit:font-bold` to every element — it destroys visual hierarchy

**Letter spacing**
- ✅ Tighten tracking on large text; widen for small uppercase labels
- ❌ Do not apply `sit:tracking-wider` to large text — it reduces legibility severely

**Uppercase**
- ✅ Pair `sit:uppercase` with `sit:tracking-wider` and a small font size
- ❌ Do not use `sit:uppercase` on long paragraphs — all-caps body text is hard to read

**Monospace**
- ✅ Always use `sit:font-mono` on `<code>` and `<pre>`
- ❌ Never use `sit:font-sans` on code elements

---

## Examples

### Page heading with subtitle

```html
<div class="sit:mb-paragraph-xl">
  <h1 class="sit:text-48 sit:font-bold sit:leading-56 sit:tracking-tight sit:mb-paragraph-sm">
    Design System
  </h1>
  <p class="sit:text-18 sit:font-regular sit:leading-28 sit:text-body-subtle">
    Build consistent, accessible Singapore Government digital services.
  </p>
</div>
```

### Article body

```html
<article>
  <h2 class="sit:text-36 sit:font-bold sit:leading-44 sit:mb-paragraph-md">
    Section Title
  </h2>
  <p class="sit:text-16 sit:leading-24 sit:mb-paragraph-lg">
    First paragraph of the section. Standard body size with comfortable line height.
  </p>
  <p class="sit:text-16 sit:leading-24 sit:mb-paragraph-lg">
    Second paragraph follows with the same spacing for a consistent reading rhythm.
  </p>
</article>
```

### Badge and label

```html
<span class="sit:text-12 sit:font-semibold sit:uppercase sit:tracking-wider">
  Beta
</span>

<label class="sit:text-14 sit:font-semibold sit:block sit:mb-paragraph-sm">
  Email address
</label>
```

### Code block

```html
<pre class="sit:font-mono sit:text-14 sit:leading-20 sit:bg-surface-raised sit:p-md sit:rounded">
  const greeting = 'hello';
  console.log(greeting);
</pre>
```

### Link with decoration

```html
<a href="#" class="sit:text-link-default sit:text-16 sit:underline sit:font-regular">
  Read the full documentation
</a>
```

---

## For AI

When generating typography markup with Canvas utilities:

- **Font family**: No class needed for prose; always add `sit:font-mono` to `<code>` and `<pre>`.
- **Font weight**: `sit:font-semibold` for subtitles and labels; `sit:font-bold` for H1–H2; `sit:font-regular` for body (default, no class needed).
- **Letter spacing**: `sit:tracking-tight` for 48px+ headings; `sit:tracking-wider` for small uppercase labels; no class for body.
- **Paragraph spacing**: `sit:mb-paragraph-md` for standard content; `sit:mb-paragraph-lg` for long-form reading.
- **Text decoration**: `sit:underline` on links; `sit:line-through` for deleted/struck content; `sit:no-underline` when colour conveys link state.
- **Text transform**: Always pair `sit:uppercase` with `sit:tracking-wider` and a size of `sit:text-12` or `sit:text-14`.

## See Also

- **[patterns.md](patterns.md)** — Common HTML patterns pairing these properties for headings, body, forms, code, buttons
