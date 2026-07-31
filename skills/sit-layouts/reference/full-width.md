# Full Width Layouts

Full Width layouts are for public-facing pages, informational sites, and general-purpose applications that do not require persistent side navigation.

**Content container:** `.sit-container` — centred, responsive max-width

| Breakpoint | `.sit-container` max-width |
|---|---|
| < 512px | `calc(100% - 40px)` |
| >= 512px (sm) | `calc(100% - 48px)` |
| >= 768px (md) | `calc(100% - 56px)` |
| >= 1024px (lg) | `888px` |
| >= 1280px (xl) | `1168px` |
| >= 1440px (2xl) | `1312px` |

---

## Default

The simplest layout — single content area with standard page chrome.

```
+-------------------------------+
| sit-masthead                  |
+-------------------------------+
| sit-mainnav                   |
+-------------------------------+
|                               |
|    .sit-container             |
|    [  main content area  ]    |
|                               |
+-------------------------------+
| sit-footer                    |
+-------------------------------+
```

### Raw Content Link

| Layout | Raw URL |
|---|---|

---

## Aside Left

Content with a left aside panel. Uses `.sit-grid` with a 4/8 column split (stacks on small screens).

```
+-------------------------------+
| sit-masthead                  |
+-------------------------------+
| sit-mainnav                   |
+-------------------------------+
|  .sit-container               |
|  +-------+------------------+ |
|  | aside |   main content   | |
|  | col-4 |     col-8        | |
|  +-------+------------------+ |
+-------------------------------+
| sit-footer                    |
+-------------------------------+
```

Grid classes: `sit-col-4 sit-col-sm-8 sit-col-lg-4` (aside) + `sit-col-8 sit-col-sm-8 sit-col-lg-8` (main)

### Raw Content Link

| Layout | Raw URL |
|---|---|

---

## Aside Right

Content with a right aside panel. Same grid ratios as Aside Left but reversed order.

```
+-------------------------------+
| sit-masthead                  |
+-------------------------------+
| sit-mainnav                   |
+-------------------------------+
|  .sit-container               |
|  +------------------+-------+ |
|  |   main content   | aside | |
|  |     col-8        | col-4 | |
|  +------------------+-------+ |
+-------------------------------+
| sit-footer                    |
+-------------------------------+
```

Grid classes: `sit-col-8 sit-col-sm-8 sit-col-lg-8` (main) + `sit-col-4 sit-col-sm-8 sit-col-lg-4` (aside)

### Raw Content Link

| Layout | Raw URL |
|---|---|

---

## Aside Both

Content flanked by aside panels on both sides. Uses a 3/6/3 column split.

```
+-------------------------------+
| sit-masthead                  |
+-------------------------------+
| sit-mainnav                   |
+-------------------------------+
|  .sit-container               |
|  +-----+------------+------+ |
|  |aside| main       | aside| |
|  |col-3| col-6      | col-3| |
|  +-----+------------+------+ |
+-------------------------------+
| sit-footer                    |
+-------------------------------+
```

Grid classes: `sit-col-3 sit-col-sm-8 sit-col-lg-3` (left aside) + `sit-col-6 sit-col-sm-8 sit-col-lg-6` (main) + `sit-col-3 sit-col-sm-8 sit-col-lg-3` (right aside)

### Raw Content Link

| Layout | Raw URL |
|---|---|

---

## Split

Two equal content panels side by side using flexbox.

```
+-------------------------------+
| sit-masthead                  |
+-------------------------------+
| sit-mainnav                   |
+-------------------------------+
|  .sit-container               |
|  +-------------+------------+ |
|  |   panel 1   |  panel 2   | |
|  |   flex-1    |  flex-1    | |
|  +-------------+------------+ |
+-------------------------------+
| sit-footer                    |
+-------------------------------+
```

Uses `sit:flex sit:gap-layout-md` with two `sit:flex-1` children.

### Raw Content Link

| Layout | Raw URL |
|---|---|

---

## Breadcrumb

Full-width layout with a breadcrumb navigation bar between the mainnav and content area.

```
+-------------------------------+
| sit-masthead                  |
+-------------------------------+
| sit-mainnav                   |
+-------------------------------+
| breadcrumb bar (border-b)     |
+-------------------------------+
|                               |
|    .sit-container             |
|    [  main content area  ]    |
|                               |
+-------------------------------+
| sit-footer                    |
+-------------------------------+
```

The breadcrumb bar uses `sit:border-b sit:border-muted sit:text-body-sm` with `<sit-breadcrumb>` inside `.sit-container sit:py-md`.

### Raw Content Link

| Layout | Raw URL |
|---|---|

---

## All Raw Content Links

| Layout | Raw URL |
|---|---|
