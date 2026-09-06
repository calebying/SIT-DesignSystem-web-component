# RTL / logical-properties migration

Tracks converting physical CSS properties (`left`, `right`, `margin-left`, `padding-right`,
`text-align: left`, `border-top-left-radius`, ...) to their logical equivalents
(`inset-inline-start`, `padding-inline`, `text-align: start`, `border-start-start-radius`, ...) so
component layout correctly follows the document's actual writing direction instead of always
assuming LTR.

**This is intentionally a partial migration.** 29 of this repo's ~74 component `.css` files use at
least one physical left/right property; converting all of them in one pass would be a large,
high-risk sweep unrelated to any specific feature or bug. This pass converted the 4
highest-traffic/most-requested files as a demonstrated, low-risk pattern; the rest are tracked
below to convert opportunistically when next touched for an unrelated reason.

## Converted (this pass)

- `src/components/Sidebar/sidebar.css` (12 occurrences — the single highest-traffic file
  repo-wide) — `left` → `inset-inline-start`, `border-right` → `border-inline-end`.
- `src/components/Toast/toast-container.css` (9 occurrences) — `left`/`right` →
  `inset-inline-start`/`inset-inline-end`. Notably, this file's own class names already use
  writing-direction-aware terminology (`top-start`, `top-end`, `bottom-start`, `bottom-end`) while
  the CSS underneath was still hardcoded to physical left/right — a "start"-named toast was
  silently pinned to the visual left even in an RTL document. Fixed so the classes' own naming
  finally means what it says.
- `src/components/Mainnav/mainnav.css` (4 occurrences, one of the components the task named
  directly) — `padding-left`/`padding-right` (identical values) → the `padding-inline` shorthand;
  two `margin-left: auto` → `margin-inline-start: auto` (preserves the real intent, "push to the
  end", in both directions, rather than the literal left/right mechanics).
- `src/components/Dropdown/dropdown-menu.css` (3 occurrences, another of the named components) —
  `text-align: left` → `text-align: start`; `border-top-left-radius`/`border-top-right-radius` →
  `border-start-start-radius`/`border-start-end-radius`; `left: 0; right: 0;` → the `inset-inline: 0`
  shorthand.

`top`/`bottom` (the block/vertical axis) are untouched everywhere above — RTL only flips the inline
(horizontal) axis, never the block one.

One property genuinely can't be logical: `transform: translateX()` (used for a new
`sit:animate-slide-in-start` utility added in this same pass, see below) has no logical CSS
equivalent — transforms don't participate in the logical-property system the way box properties
do. That utility instead uses a `:dir(rtl)` override with a mirrored keyframe to get the same
direction-aware effect; see `src/css/utility.css`.

## Not yet converted (25 files with a real physical left/right property)

Convert opportunistically, one file at a time, whenever touching that component for an unrelated
reason:

- [ ] `src/components/SystemBanner/system-banner-item.css` (5)
- [ ] `src/components/Modal/modal.css` (5)
- [ ] `src/components/SystemBanner/system-banner.css` (4)
- [ ] `src/components/Toast/toast.css` (3)
- [ ] `src/components/Stepper/stepper.css` (3)
- [ ] `src/components/Stepper/step.css` (3)
- [ ] `src/components/Sidenav/sidenav-link.css` (3)
- [ ] `src/components/Accordion/accordion-item.css` (3)
- [ ] `src/components/Tab/tab.css` (2)
- [ ] `src/components/Sidenav/sidenav-item.css` (2)
- [ ] `src/components/Pagination/pagination.css` (2)
- [ ] `src/components/Masthead/masthead.css` (2) — the fourth component the task named directly;
      not converted in this pass (only 2 real occurrences, lower priority than the 4 above, but a
      good next candidate)
- [ ] `src/components/ImageCard/image-card.css` (2)
- [ ] `src/components/Icon/icon.css` (2)
- [ ] `src/components/Alert/alert.css` (2)
- [ ] `src/components/Tooltip/tooltip.css` (1)
- [ ] `src/components/Textarea/textarea.css` (1)
- [ ] `src/components/Subnav/subnav.css` (1)
- [ ] `src/components/Sidebar/sidebar-item.css` (1)
- [ ] `src/components/Mainnav/mainnav-dropdown.css` (1)
- [ ] `src/components/FileUpload/file-upload.css` (1)
- [ ] `src/components/Datepicker/datepicker.css` (1)
- [ ] `src/components/Card/card.css` (1)
- [ ] `src/components/Badge/badge.css` (1) — note: this is a real remaining occurrence unrelated to
      this repo's separate BEM class-naming pass (`chore/css-naming-convention`), which also
      touched this same file for a different reason.

## Regenerating this checklist

```sh
for f in $(find src/components -name "*.css"); do
  c=$(grep -cE "(^|[^-])(left|right)[[:space:]]*:|margin-left|margin-right|padding-left|padding-right|text-align:\s*(left|right)|border-top-left|border-top-right|border-bottom-left|border-bottom-right" "$f")
  [ "$c" -gt 0 ] && echo "$c $f"
done | sort -rn
```

Note this grep also matches physical properties mentioned inside explanatory comments (e.g. this
migration's own "RTL: was left/right, now inset-inline-*" notes) — spot-check hits with only 1-2
matches before assuming a file still needs conversion.
