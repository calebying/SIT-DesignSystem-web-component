# Canvas Typography Utilities Skill

Helps developers apply consistent text weights, letter spacing, and font families using Canvas typography utilities.

## Core Concept

All Canvas typography utilities use the `sit:` prefix. The main properties:

- **Font weight** — `sit:font-{weight}` (light / regular / semibold / bold)
- **Letter spacing** — `sit:tracking-{size}` (tighter / tight / normal / wide / wider)
- **Font family** — `sit:font-sans` / `sit:font-mono`

## Letter Spacing by Role

| Role | Tracking |
|------|----------|
| Display | `sit:tracking-tighter` |
| Headings (H1–H4) | `sit:tracking-tight` |
| Subtitles | `sit:tracking-normal` |
| Overline | `sit:tracking-wide` |
| Body, labels, captions | no class needed (normal is default) |

## Quick Decision Guide

**Styling a display heading?**

Use `<h1>`.

| Variant | Classes |
|---------|---------|
| Display Large Bold | `sit:text-display-lg sit:font-bold sit:leading-3-xl sit:tracking-tighter` |
| Display Large Light | `sit:text-display-lg sit:font-light sit:leading-3-xl sit:tracking-tighter` |
| Display Medium Bold *(default)* | `sit:text-display-md sit:font-bold sit:leading-2-xl sit:tracking-tighter` |
| Display Medium Light | `sit:text-display-md sit:font-light sit:leading-2-xl sit:tracking-tighter` |
| Display Small Bold | `sit:text-display-sm sit:font-bold sit:leading-xl sit:tracking-tighter` |
| Display Small Light | `sit:text-display-sm sit:font-light sit:leading-xl sit:tracking-tighter` |

**Styling a section heading (H1–H4)?**

| Variant | Element | Classes |
|---------|---------|---------|
| Heading XL Bold | `<h1>` | `sit:text-heading-xl sit:font-bold sit:leading-xl sit:tracking-tight` |
| Heading XL Light | `<h1>` | `sit:text-heading-xl sit:font-light sit:leading-xl sit:tracking-tight` |
| Heading LG Bold | `<h2>` | `sit:text-heading-lg sit:font-bold sit:leading-lg sit:tracking-tight` |
| Heading LG Light | `<h2>` | `sit:text-heading-lg sit:font-light sit:leading-lg sit:tracking-tight` |
| Heading MD Semibold *(default)* | `<h3>` | `sit:text-heading-md sit:font-semibold sit:leading-md sit:tracking-tight` |
| Heading MD Light | `<h3>` | `sit:text-heading-md sit:font-light sit:leading-md sit:tracking-tight` |
| Heading SM Semibold | `<h4>` | `sit:text-heading-sm sit:font-semibold sit:leading-sm sit:tracking-tight` |
| Heading SM Light | `<h4>` | `sit:text-heading-sm sit:font-light sit:leading-sm sit:tracking-tight` |

**Styling a subtitle (H5–H6)?**

| Variant | Element | Classes |
|---------|---------|---------|
| Subtitle MD Semibold *(default)* | `<h5>` | `sit:text-subtitle-md sit:font-semibold sit:leading-xs sit:tracking-normal` |
| Subtitle MD Light | `<h5>` | `sit:text-subtitle-md sit:font-light sit:leading-xs sit:tracking-normal` |
| Subtitle SM Semibold | `<h6>` | `sit:text-subtitle-sm sit:font-semibold sit:leading-2-xs sit:tracking-normal` |
| Subtitle SM Light | `<h6>` | `sit:text-subtitle-sm sit:font-light sit:leading-2-xs sit:tracking-normal` |

**Styling body content?**

Use `<p>`.

| Variant | Classes |
|---------|---------|
| Body Large Semibold | `sit:text-body-lg sit:font-semibold sit:leading-md sit:tracking-normal sit:mb-paragraph-xl` |
| Body Large Regular | `sit:text-body-lg sit:leading-md sit:tracking-normal sit:mb-paragraph-xl` |
| Body Medium Semibold | `sit:text-body-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:mb-paragraph-lg` |
| Body Medium Regular *(default)* | `sit:text-body-md sit:leading-xs sit:tracking-normal sit:mb-paragraph-lg` |
| Body Small Semibold | `sit:text-body-sm sit:font-semibold sit:leading-2-xs sit:tracking-normal sit:mb-paragraph-lg` |
| Body Small Regular | `sit:text-body-sm sit:leading-2-xs sit:tracking-normal sit:mb-paragraph-lg` |

**Styling a list (ordered or unordered)?**

Use `<ul>` or `<ol>`. Apply tokens to both the list element and each `<li>`. Use `sit:my-list-*` for spacing between items; last item uses `sit:mt-list-*` only.

| Variant | Classes |
|---------|---------|
| List Large Regular | `sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal sit:my-list-lg` |
| List Medium Regular *(default)* | `sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:my-list-md` |
| List Small Regular | `sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:my-list-sm` |

**Styling a form label or UI label?**

In form context: prefer the component's built-in `label` attribute. Use `<label>` only if the component has no built-in label support. Outside form context: use `<div>`.

| Variant | Classes |
|---------|---------|
| Label LG Semibold | `sit:text-label-lg sit:font-semibold sit:leading-md sit:tracking-normal` |
| Label LG Regular | `sit:text-label-lg sit:leading-md sit:tracking-normal` |
| Label MD Semibold | `sit:text-label-md sit:font-semibold sit:leading-xs sit:tracking-normal` |
| Label MD Regular *(default)* | `sit:text-label-md sit:leading-xs sit:tracking-normal` |
| Label MD Light | `sit:text-label-md sit:font-light sit:leading-xs sit:tracking-normal` |
| Label SM Semibold | `sit:text-label-sm sit:font-semibold sit:leading-2-xs sit:tracking-normal` |
| Label SM Regular | `sit:text-label-sm sit:leading-2-xs sit:tracking-normal` |
| Label XS Semibold | `sit:text-label-xs sit:font-semibold sit:leading-3-xs sit:tracking-normal` |
| Label XS Regular | `sit:text-label-xs sit:leading-3-xs sit:tracking-normal` |

**Styling a caption or helper text?**

Use `<div>`.

| Variant | Classes |
|---------|---------|
| Caption Semibold | `sit:text-caption-md sit:font-semibold sit:leading-2-xs sit:tracking-normal sit:mb-paragraph-md` |
| Caption Regular *(default)* | `sit:text-caption-md sit:leading-2-xs sit:tracking-normal sit:mb-paragraph-md` |

**Styling an overline?**

Always use `<div>` with `sit:uppercase`.

| Variant | Classes |
|---------|---------|
| Overline Semibold | `sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase` |
| Overline Regular *(default)* | `sit:text-overline-md sit:leading-2-xs sit:tracking-wide sit:uppercase` |

**Styling a link?**

Always use `<a href="...">`. All link patterns include underline.

| Variant | Classes |
|---------|---------|
| Link Large | `sit:text-link-lg sit:leading-md sit:tracking-normal sit:underline` |
| Link Medium *(default)* | `sit:text-link-md sit:leading-xs sit:tracking-normal sit:underline` |
| Link Small | `sit:text-link-sm sit:leading-2-xs sit:tracking-normal sit:underline` |
| Link XS | `sit:text-link-xs sit:leading-3-xs sit:tracking-normal sit:underline` |

**Styling code?**

Always apply `sit:font-mono` to `<code>` and `<pre>`.

```html
<code class="sit:font-mono sit:text-14">inline code</code>
<pre class="sit:font-mono sit:text-14 sit:leading-20">block code</pre>
```

## Reference Documentation

| File | Covers |
|------|--------|
| [`type-properties.md`](typography/type-properties.md) | Full scale tables for all six type properties and usage rules |
| [`patterns.md`](typography/patterns.md) | HTML patterns for all content types |

---

**For AI Agents**: Apply tracking by role: display → `tracking-tighter`, headings → `tracking-tight`, subtitles → `tracking-normal`, overlines → `tracking-wide`. Always apply `sit:font-mono` to `<code>` and `<pre>`. See reference files for full property tables.
