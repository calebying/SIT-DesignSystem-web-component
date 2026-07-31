# Canvas Icon Card Component Skill

`<sit-icon-card>` is a card variant where a large icon is the primary visual element. Use it for feature showcases, service listings, or any content where an icon leads the hierarchy.

No CSS styling modifications — custom properties and CSS parts are not exposed on this component.

## Usage Guideline

### When to use

- When a large icon is the primary visual and leads the content hierarchy (e.g. service categories, feature highlights, topic listings).
- For grids of equal-weight service or feature cards where each item is identified by an icon rather than a photograph.
- When metadata (dates, locations, tags) alongside an icon needs to be presented in a consistent card layout.
- When the entire card should be a single clickable navigation target — use `stretchedLink`.

### When NOT to use

- When the primary visual is a photograph or image — use `<sit-image-card>` instead.
- When a small thumbnail beside text is the intended layout — use `<sit-thumbnail-card>` instead.
- For general mixed-content cards without a prominent icon — use `<sit-card>` instead.
- When there is no meaningful icon to lead the card — the icon slot is integral to this component's hierarchy.

## Behaviour

- Renders a card with a large icon as the primary visual, followed by subtitle, title, content, description, and footer.
- `orientation` controls layout: `vertical` (icon above content, default) or `horizontal` (icon beside content).
- `stretchedLink` makes the entire card clickable; the link `href` is sourced from the `<a>` inside the `footer` slot.
- `noPadding` removes internal card padding.
- `disabled` applies disabled styling.
- `tinted` applies a tinted background; `hideBorder` removes the card border.
- No custom events or public methods.

## Component Composition

**`icon` slot** — required; use `<sit-icon size="3-xl">` for the standard icon card hierarchy. This is the primary visual anchor — always provide one.

**`upper` slot** — `<sit-badge>` for a status or category label above the subtitle (e.g. "NEW", "FEATURED").

**`subtitle` slot** — short category or type label in uppercase.

**`title` slot** — concise card heading (1–6 words). Use plain text or `<span>`.

**Default slot** — metadata between the title and description; `<sit-icon-list>` is the standard pattern for date, location, or type metadata.

**`description` slot** — 1–3 sentences of supporting text.

**`lower` slot** — `<sit-badge>` elements for category or status tags below the description.

**`footer` slot** — the card CTA; use `<sit-link><a href="...">Label</a></sit-link>`. The `link` slot is deprecated since v3.3.2.

**Avoid placing inside an icon card:**
- Photographs or images in the `icon` slot — use `<sit-image-card>` instead
- Multiple CTAs — cards should have a single navigation target

## Advanced Considerations

- **Icon sizing**: always use `size="3-xl"` on `<sit-icon>` in the `icon` slot for the standard icon card appearance — other sizes may visually break the card hierarchy.
- **`stretchedLink` and `footer` slot**: the href is read from the `<a>` inside the `footer` slot — always include `<sit-link><a href="...">` when using `stretchedLink`.
- **`<sit-icon-list>` in default slot**: the standard pattern for rendering metadata (dates, venues) between the title and description — place it in the default slot (not `description`).
- **`lower` slot for tags**: use the `lower` slot for badge/tag rows below the description; do not place them in the `description` slot.
- **`link` slot deprecation**: the `link` slot was deprecated in v3.3.2 — always use the `footer` slot with `<sit-link>` for card CTAs.

## Edge Cases

- **No `icon` slot content**: renders a card with no primary visual — always provide an `<sit-icon>` in the `icon` slot.
- **No `footer` slot with `stretchedLink`**: the card is clickable but has no destination — always include a `<sit-link><a href="...">` in the `footer` slot when using `stretchedLink`.
- **`disabled` with `stretchedLink`**: the card appears disabled but the stretched link may still be interactive — test the interaction state when combining both.
- **`noPadding` with rich content**: removing padding may cause content to visually collide with card edges — verify layout at target viewport sizes.
- **No content slots**: renders an empty card frame — always provide at minimum a `title` slot.

## Quick Decision Guide

**Which card type?**
- Large prominent icon leads the card → `<sit-icon-card>` (this component)
- Photograph or image leads the card → `<sit-image-card>`
- Small thumbnail beside content → `<sit-thumbnail-card>`
- General mixed content → `<sit-card>`

**Orientation?**
- Icon above content → `vertical` (default)
- Icon beside content → `horizontal`

**Entire card clickable?**
- Add `stretchedLink` — href is sourced from the `<a>` inside the `footer` slot

```html
<!-- Basic icon card -->
<sit-icon-card>
  <sit-icon slot="icon" name="box-seam" size="3-xl"></sit-icon>
  <sit-badge variant="primary" slot="upper">New</sit-badge>
  <span slot="subtitle">EXPLORE THE FEATURES</span>
  <span slot="title">Innovative Solutions for You</span>
  <sit-icon-list size="sm">
    <div role="listitem"><sit-icon size="md" name="calendar"></sit-icon>12 September</div>
    <div role="listitem"><sit-icon size="md" name="laptop"></sit-icon>Online</div>
  </sit-icon-list>
  <span slot="description">Descriptive text about this feature.</span>
  <div slot="lower" style="display: flex; flex-wrap: wrap; gap: 8px;">
    <sit-badge variant="neutral" outlined>Design</sit-badge>
    <sit-badge variant="neutral" outlined>Research</sit-badge>
  </div>
  <sit-link slot="footer">
    <a href="#">Register now <sit-icon name="arrow-right"></sit-icon></a>
  </sit-link>
</sit-icon-card>

<!-- Horizontal orientation -->
<sit-icon-card orientation="horizontal">
  <sit-icon slot="icon" name="box-seam" size="3-xl"></sit-icon>
  <span slot="title">Horizontal Icon Card</span>
  <span slot="description">Icon is placed beside the content.</span>
  <sit-link slot="footer"><a href="#">Learn more</a></sit-link>
</sit-icon-card>

<!-- Stretched link -->
<sit-icon-card stretchedLink>
  <sit-icon slot="icon" name="star" size="3-xl"></sit-icon>
  <span slot="title">Clickable Card</span>
  <sit-link slot="footer"><a href="/destination" aria-label="Go somewhere">Go somewhere</a></sit-link>
</sit-icon-card>

<!-- No padding -->
<sit-icon-card noPadding>
  <sit-icon slot="icon" name="placeholder" size="3-xl"></sit-icon>
  <span slot="title">No Padding Card</span>
</sit-icon-card>
```

## API Summary

| Attribute | Type | Default | Purpose |
|---|---|---|---|
| `orientation` | `vertical \| horizontal` | `vertical` | Icon above or beside content |
| `stretchedLink` | boolean | `false` | Makes entire card a link; href sourced from `footer` slot anchor |
| `noPadding` | boolean | `false` | Removes internal card padding |
| `disabled` | boolean | `false` | Applies disabled styling |
| `hideBorder` | boolean | `false` | Removes the card border |
| `tinted` | boolean | `false` | Applies a tinted background |

## Slots

| Slot | Purpose |
|---|---|
| `icon` | Icon element — use `<sit-icon size="3-xl">` for the primary icon |
| `upper` | Above subtitle (e.g. a badge) |
| `subtitle` | Subtitle text |
| `title` | Card title |
| *(default)* | Content below title (e.g. `<sit-icon-list>`) |
| `description` | Descriptive paragraph text |
| `lower` | Below description; use for tags/badges |
| `footer` | Footer area — place `<sit-link>` here for the card CTA |
| `link` | **Deprecated since 3.3.2** — use `footer` instead |

## Events

None.

---

**For AI agents**:
1. Always use `size="3-xl"` on the `<sit-icon>` in the `icon` slot for the standard icon card appearance.
2. Place the CTA in the `footer` slot using `<sit-link>` — the `link` slot is deprecated since 3.3.2.
3. For `stretchedLink`, the href is sourced from the `<a>` tag inside the `footer` slot. Always add `aria-label` to the `<a>` for accessibility (the label is forwarded to the card's outer clickable element).
4. `lower` slot is the correct place for tag badges below the description.
5. `<sit-icon-list>` in the default slot (between title and description) is the standard pattern for metadata like dates and locations.
6. There are no custom events or public methods on this component.
