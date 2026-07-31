# Typography Patterns Reference

Common HTML patterns combining Canvas typography utilities for real-world content types.

> **Note**: Use library components like `<sit-button>`, `<sit-badge>` when available.
> These patterns are for custom components when library components don't meet your needs.

---

## Display Headings (Hero Text)

```html
<!-- sit-display-lg-bold -->
<h1 class="sit:text-display-lg sit:font-bold sit:leading-3-xl sit:tracking-tighter">
  Display Large Bold
</h1>

<!-- sit-display-lg-light -->
<h1 class="sit:text-display-lg sit:font-light sit:leading-3-xl sit:tracking-tighter">
  Display Large Light
</h1>

<!-- sit-display-md-bold (Default) -->
<h1 class="sit:text-display-md sit:font-bold sit:leading-2-xl sit:tracking-tighter">
  Display Medium Bold
</h1>

<!-- sit-display-md-light -->
<h1 class="sit:text-display-md sit:font-light sit:leading-2-xl sit:tracking-tighter">
  Display Medium Light
</h1>

<!-- sit-display-sm-bold -->
<h1 class="sit:text-display-sm sit:font-bold sit:leading-xl sit:tracking-tighter">
  Display Small Bold
</h1>

<!-- sit-display-sm-light -->
<h1 class="sit:text-display-sm sit:font-light sit:leading-xl sit:tracking-tighter">
  Display Small Light
</h1>
```

**When to use:** Page heroes, marketing banners, splash screens.

---

## Section Headings (H1–H4)

```html
<!-- sit-heading-xl-bold -->
<h1 class="sit:text-heading-xl sit:font-bold sit:leading-xl sit:tracking-tight">
  Heading XL Bold
</h1>

<!-- sit-heading-xl-light -->
<h1 class="sit:text-heading-xl sit:font-light sit:leading-xl sit:tracking-tight">
  Heading XL Light
</h1>

<!-- sit-heading-lg-bold -->
<h2 class="sit:text-heading-lg sit:font-bold sit:leading-lg sit:tracking-tight">
  Heading Large Bold
</h2>

<!-- sit-heading-lg-light -->
<h2 class="sit:text-heading-lg sit:font-light sit:leading-lg sit:tracking-tight">
  Heading Large Light
</h2>

<!-- sit-heading-md-semibold (Default) -->
<h3 class="sit:text-heading-md sit:font-semibold sit:leading-md sit:tracking-tight">
  Heading Medium Semibold
</h3>

<!-- sit-heading-md-light -->
<h3 class="sit:text-heading-md sit:font-light sit:leading-md sit:tracking-tight">
  Heading Medium Light
</h3>

<!-- sit-heading-sm-semibold -->
<h4 class="sit:text-heading-sm sit:font-semibold sit:leading-sm sit:tracking-tight">
  Heading Small Semibold
</h4>

<!-- sit-heading-sm-light -->
<h4 class="sit:text-heading-sm sit:font-light sit:leading-sm sit:tracking-tight">
  Heading Small Light
</h4>
```

---

## Subtitles (H5–H6)

```html
<!-- sit-subtitle-md-semibold (Default) -->
<h5 class="sit:text-subtitle-md sit:font-semibold sit:leading-xs sit:tracking-normal">
  Subtitle Medium Semibold
</h5>

<!-- sit-subtitle-md-light -->
<h5 class="sit:text-subtitle-md sit:font-light sit:leading-xs sit:tracking-normal">
  Subtitle Medium Light
</h5>

<!-- sit-subtitle-sm-semibold -->
<h6 class="sit:text-subtitle-sm sit:font-semibold sit:leading-2-xs sit:tracking-normal">
  Subtitle Small Semibold
</h6>

<!-- sit-subtitle-sm-light -->
<h6 class="sit:text-subtitle-sm sit:font-light sit:leading-2-xs sit:tracking-normal">
  Subtitle Small Light
</h6>
```

---

## Body Text

```html
<!-- sit-body-lg-semibold -->
<p class="sit:text-body-lg sit:font-semibold sit:leading-md sit:tracking-normal sit:mb-paragraph-xl">
  Body large semibold.
</p>

<!-- sit-body-lg-regular -->
<p class="sit:text-body-lg sit:font-regular sit:leading-md sit:tracking-normal sit:mb-paragraph-xl">
  Body large regular.
</p>

<!-- sit-body-md-semibold -->
<p class="sit:text-body-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:mb-paragraph-lg">
  Body medium semibold.
</p>

<!-- sit-body-md-regular (Default) -->
<p class="sit:text-body-md sit:font-regular sit:leading-xs sit:tracking-normal sit:mb-paragraph-lg">
  Body medium regular.
</p>

<!-- sit-body-sm-semibold -->
<p class="sit:text-body-sm sit:font-semibold sit:leading-2-xs sit:tracking-normal sit:mb-paragraph-lg">
  Body small semibold.
</p>

<!-- sit-body-sm-regular -->
<p class="sit:text-body-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:mb-paragraph-lg">
  Body small regular.
</p>
```

---

## Labels

**In form context:** use the Canvas component's built-in label attribute first. Only fall back to `<label>` if the component has no built-in label support. Outside form context: use `<div>`.

```html
<!-- Non-form context: use <div> -->

<!-- sit-label-lg-semibold — large button, UI label -->
<div class="sit:text-label-lg sit:font-semibold sit:leading-md sit:tracking-normal">Label Large Semibold</div>

<!-- sit-label-lg-regular — labels in components -->
<div class="sit:text-label-lg sit:leading-md sit:tracking-normal">Label Large Regular</div>

<!-- sit-label-md-semibold — medium button -->
<div class="sit:text-label-md sit:font-semibold sit:leading-xs sit:tracking-normal">Label Medium Semibold</div>

<!-- sit-label-md-regular (Default) — labels in components -->
<div class="sit:text-label-md sit:leading-xs sit:tracking-normal">Label Medium Regular</div>

<!-- sit-label-md-light — placeholder text -->
<div class="sit:text-label-md sit:font-light sit:leading-xs sit:tracking-normal">Label Medium Light</div>

<!-- sit-label-sm-semibold — small button -->
<div class="sit:text-label-sm sit:font-semibold sit:leading-2-xs sit:tracking-normal">Label Small Semibold</div>

<!-- sit-label-sm-regular — timestamp / tag label -->
<div class="sit:text-label-sm sit:leading-2-xs sit:tracking-normal">Label Small Regular</div>

<!-- sit-label-xs-semibold — timestamp / tag label -->
<div class="sit:text-label-xs sit:font-semibold sit:leading-3-xs sit:tracking-normal">Label XS Semibold</div>

<!-- sit-label-xs-regular — timestamp / tag label -->
<div class="sit:text-label-xs sit:leading-3-xs sit:tracking-normal">Label XS Regular</div>
```

```html
<!-- Form context: prefer Canvas component built-in label -->
<sit-input label="Field label"></sit-input>

<!-- Form context fallback: use <label> only if component has no built-in label support -->
<label class="sit:text-label-md sit:font-semibold sit:leading-xs sit:tracking-normal">
  Field Label
</label>
```

---

## Captions

```html
<!-- sit-caption-semibold -->
<div class="sit:text-caption-md sit:font-semibold sit:leading-2-xs sit:tracking-normal sit:mb-paragraph-md">
  Caption semibold
</div>

<!-- sit-caption-regular (Default) -->
<div class="sit:text-caption-md sit:font-regular sit:leading-2-xs sit:tracking-normal sit:mb-paragraph-md">
  Caption regular
</div>
```

**When to use:** Helper text, field error messages, footnotes, footer copy.

---

## Links

Always use `<a>` with an `href`. All link patterns include underline.

```html
<!-- sit-link-lg-regular -->
<a href="#" class="sit:text-link-lg sit:font-regular sit:leading-md sit:tracking-normal sit:underline">
  Link large
</a>

<!-- sit-link-md-regular (Default) -->
<a href="#" class="sit:text-link-md sit:font-regular sit:leading-xs sit:tracking-normal sit:underline">
  Link medium
</a>

<!-- sit-link-sm-regular -->
<a href="#" class="sit:text-link-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:underline">
  Link small
</a>

<!-- sit-link-xs-regular -->
<a href="#" class="sit:text-link-xs sit:font-regular sit:leading-3-xs sit:tracking-normal sit:underline">
  Link XS
</a>
```

---

## Overline

Always use `<div>` and `sit:uppercase`. Use for key-value labels and data table header labels.

```html
<!-- sit-overline-semibold -->
<div class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase">
  Overline Semibold
</div>

<!-- sit-overline-regular (Default) -->
<div class="sit:text-overline-md sit:font-regular sit:leading-2-xs sit:tracking-wide sit:uppercase">
  Overline Regular
</div>
```

---

## Best Practices

**Pair font size with appropriate line height** (see [type-properties.md](type-properties.md) for full pairing table):

| Context | Size | Leading |
|---------|------|---------|
| Display LG | `sit:text-display-lg` | `sit:leading-3-xl` |
| Display MD | `sit:text-display-md` | `sit:leading-2-xl` |
| Display SM | `sit:text-display-sm` | `sit:leading-xl` |
| Heading XL | `sit:text-heading-xl` | `sit:leading-xl` |
| Heading LG | `sit:text-heading-lg` | `sit:leading-lg` |
| Heading MD | `sit:text-heading-md` | `sit:leading-md` |
| Heading SM | `sit:text-heading-sm` | `sit:leading-sm` |
| Subtitle MD | `sit:text-subtitle-md` | `sit:leading-xs` |
| Subtitle SM | `sit:text-subtitle-sm` | `sit:leading-2-xs` |
| Body LG | `sit:text-body-lg` | `sit:leading-md` |
| Body MD | `sit:text-body-md` | `sit:leading-xs` |
| Body SM | `sit:text-body-sm` | `sit:leading-2-xs` |
| Label LG | `sit:text-label-lg` | `sit:leading-md` |
| Label MD | `sit:text-label-md` | `sit:leading-xs` |
| Label SM | `sit:text-label-sm` | `sit:leading-2-xs` |
| Label XS | `sit:text-label-xs` | `sit:leading-3-xs` |
| Caption | `sit:text-caption-md` | `sit:leading-2-xs` |
| Link LG | `sit:text-link-lg` | `sit:leading-md` |
| Link MD | `sit:text-link-md` | `sit:leading-xs` |
| Link SM | `sit:text-link-sm` | `sit:leading-2-xs` |
| Link XS | `sit:text-link-xs` | `sit:leading-3-xs` |
| Overline | `sit:text-overline-md` | `sit:leading-2-xs` |

**Font weight for hierarchy:**
- Display / H1–H2 → `sit:font-bold` or `sit:font-light`
- H3–H4 → `sit:font-semibold` or `sit:font-light`
- Subtitles / Labels → `sit:font-semibold` or `sit:font-regular` 
- Body → no class needed (regular is the reboot default)

**Tracking by text role:**
- Display → `sit:tracking-tighter`
- Headings (H1–H4) → `sit:tracking-tight`
- Subtitles → `sit:tracking-normal`
- Overline → `sit:tracking-wide`
- Body, labels, captions → no tracking class needed (normal is the default)

## See Also

- **[type-properties.md](type-properties.md)** — Full scale tables for all token values
