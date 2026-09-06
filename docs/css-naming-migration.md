# CSS class naming migration (BEM)

Tracks the decision in `CODE_CONVENTIONS.md`'s "Naming CSS classes" section: adopt BEM
(`block__element--modifier`) consistently for component CSS, going forward.

**This is intentionally a partial migration, not a completed rename.** Converting all 76 component
`.css` files in one pass would be a large, high-risk sweep unrelated to any specific feature or
bug — the plan is to convert a file whenever it's next touched for another reason (a fix, a new
prop, a refactor), not as a dedicated project.

## Already BEM (verified, not from this pass)

6 files already used a `block__element` shape before this decision was documented:

- `src/components/Accordion/accordion-item.css`
- `src/components/Alert/alert.css`
- `src/components/Modal/modal.css`
- `src/components/Tab/tab-group.css`
- `src/components/SystemBanner/system-banner-item.css`
- `src/components/Toast/toast.css`

## Converted (this pass — demonstrated pattern)

- `src/components/Skeleton/skeleton.css` + `sit-skeleton.ts` + `test/skeleton.test.ts` — block
  `.skeleton`, elements `.skeleton__row` (simplified from a per-index `.skeleton-row-N`, since
  nothing actually depended on distinguishing row 0 from row 1) and `.skeleton__sheen`, modifiers
  `.skeleton--paragraph` / `.skeleton--auto-size-rows`.
- `src/components/Spinner/spinner.css` + `sit-spinner.ts` + `test/spinner.test.ts` — block
  `.spinner-wrapper`, elements `.spinner-wrapper__spinner` / `.spinner-wrapper__label`, modifiers
  `.spinner-wrapper--horizontal` / `.spinner-wrapper__spinner--{xs,sm,lg,xl}`.
- `src/components/Badge/badge.css` + `sit-badge.ts` + `test/badge.test.ts` — block `.badge`,
  element `.badge__label`, modifiers `.badge--outlined` / `.badge--full-width` /
  `.badge--dismissible`. Incidentally fixed a real, separate bug found while renaming: the
  close-button border-radius override selector was `.badge-dimissible` (missing the second "s"),
  so it never matched the actual class and had been silently inert.

**Follow-up needed, not done in this pass:** `Avatar`, `Popover`, and `SegmentedControl` were built
on their own separate, not-yet-merged branches (`feat/avatar`, `feat/popover`,
`feat/segmented-control`) and don't exist in this branch's working tree, so their CSS couldn't be
checked/retrofitted from here. As authored, none of the three actually complies yet — flat class
names (`.avatar-fallback`, `.popover-panel`, `.segment.selected` rather than `.segment.segment--selected`),
not BEM. Retrofit them in a small follow-up once those three branches land, before assuming they're
"already compliant."

## Not yet converted (67 files)

Convert opportunistically, one file at a time, whenever touching that component for an unrelated
reason — update the `.css` selectors, the corresponding `.ts` template's class strings/`classMap`
keys, and any test file that asserts against a class name, together in the same change (as the 3
conversions above did), then check this file off here.

- [ ] `src/components/Accordion/accordion.css`
- [ ] `src/components/Alert/alert-link.css`
- [ ] `src/components/Breadcrumb/breadcrumb-item.css`
- [ ] `src/components/Breadcrumb/breadcrumb.css`
- [ ] `src/components/Button/button.css`
- [ ] `src/components/Card/card.css`
- [ ] `src/components/Checkbox/checkbox-group.css`
- [ ] `src/components/Checkbox/checkbox.css`
- [ ] `src/components/CloseButton/close-button.css`
- [ ] `src/components/ComboBox/combo-box.css`
- [ ] `src/components/Datepicker/datepicker-calendar.css`
- [ ] `src/components/Datepicker/datepicker-header.css`
- [ ] `src/components/Datepicker/datepicker-input.css`
- [ ] `src/components/Datepicker/datepicker.css`
- [ ] `src/components/DescriptionList/description-list-group.css`
- [ ] `src/components/DescriptionList/description-list.css`
- [ ] `src/components/Divider/divider.css`
- [ ] `src/components/Drawer/drawer.css`
- [ ] `src/components/Dropdown/dropdown-item.css`
- [ ] `src/components/Dropdown/dropdown-menu.css`
- [ ] `src/components/Dropdown/dropdown.css`
- [ ] `src/components/FileUpload/file-upload.css`
- [ ] `src/components/Footer/footer-item.css`
- [ ] `src/components/Footer/footer.css`
- [ ] `src/components/Icon/icon.css`
- [ ] `src/components/IconButton/icon-button.css`
- [ ] `src/components/IconCard/icon-card.css`
- [ ] `src/components/IconList/icon-list.css`
- [ ] `src/components/ImageCard/image-card.css`
- [ ] `src/components/Input/input.css`
- [ ] `src/components/Link/link.css`
- [ ] `src/components/Mainnav/mainnav-dropdown.css`
- [ ] `src/components/Mainnav/mainnav-item.css`
- [ ] `src/components/Mainnav/mainnav.css`
- [ ] `src/components/Masthead/masthead.css`
- [ ] `src/components/OverflowMenu/overflow-menu.css`
- [ ] `src/components/Pagination/pagination.css`
- [ ] `src/components/ProgressBar/progress-bar.css`
- [ ] `src/components/QuantityToggle/quantity-toggle.css`
- [ ] `src/components/Radio/radio-group.css`
- [ ] `src/components/Radio/radio.css`
- [ ] `src/components/Select/select.css`
- [ ] `src/components/Sidebar/sidebar-item.css`
- [ ] `src/components/Sidebar/sidebar-section.css`
- [ ] `src/components/Sidebar/sidebar.css`
- [ ] `src/components/Sidenav/sidenav-item.css`
- [ ] `src/components/Sidenav/sidenav-link.css`
- [ ] `src/components/Sidenav/sidenav.css`
- [ ] `src/components/Stepper/step.css`
- [ ] `src/components/Stepper/stepper.css`
- [ ] `src/components/Subnav/subnav-item.css`
- [ ] `src/components/Subnav/subnav.css`
- [ ] `src/components/Switch/switch.css`
- [ ] `src/components/SystemBanner/system-banner.css`
- [ ] `src/components/Tab/tab-panel.css`
- [ ] `src/components/Tab/tab.css`
- [ ] `src/components/Table/table-cell.css`
- [ ] `src/components/Table/table-head.css`
- [ ] `src/components/Table/table-row.css`
- [ ] `src/components/Table/table.css`
- [ ] `src/components/TableOfContents/table-of-contents.css`
- [ ] `src/components/Textarea/textarea.css`
- [ ] `src/components/ThumbnailCard/thumbnail-card.css`
- [ ] `src/components/Toast/toast-container.css`
- [ ] `src/components/Tooltip/tooltip.css`

## Regenerating this checklist

```sh
for f in $(find src/components -name "*.css"); do
  grep -qE "\.[a-zA-Z0-9-]+__[a-zA-Z0-9-]+" "$f" || echo "$f"
done | sort
```

Files that stop appearing in this output have been converted — check them off (or remove them)
above.
