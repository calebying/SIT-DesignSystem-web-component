# Application Shell

The application shell is the mandatory page chrome that wraps every Canvas page — regardless of content or layout type. It consists of three required components plus the appropriate content container.

> **This block is required for every page.** Never ship a page without all three shell components. The masthead is a Singapore Institute of Technology digital standards requirement.

## Mandatory Page Chrome

| Component | Role | Required |
|---|---|---|
| `<sit-masthead>` | Singapore Institute of Technology identity bar | ✅ Always |
| `<sit-mainnav>` | Application navigation header | ✅ Always |
| `<sit-footer>` | Singapore Institute of Technology footer | ✅ Always |

---

## Quick Decision Guide

**Public-facing website, informational or transactional pages?** → [Simple App Layout](#simple-app-layout)

**Internal tool, dashboard, or data-heavy app with persistent navigation?** → [Sidebar App Layout](#sidebar-app-layout)

---

## Simple App Layout

For general-purpose applications, public-facing digital services, and pages without a persistent sidebar.

**Structure:** vertical stack — masthead → mainnav → content → footer

**Content container:** `.sit-container` — centred, responsive max-width that grows with viewport

| Breakpoint | `.sit-container` max-width |
|------------|-----------------------------|
| < 512px | `calc(100% - 40px)` |
| ≥ 512px (sm) | `calc(100% - 48px)` |
| ≥ 768px (md) | `calc(100% - 56px)` |
| ≥ 1024px (lg) | `888px` |
| ≥ 1280px (xl) | `1168px` |
| ≥ 1440px (2xl) | `1312px` |

```html
<div>
  <sit-masthead fluid></sit-masthead>
  <sit-mainnav fluid>
    <strong slot="brand">My App</strong>
    <strong slot="end">End</strong>
  </sit-mainnav>
</div>
<div class="sit:flex sit:flex-col sit:w-full">
  <div class="sit-container sit:py-2-xl">
    <!-- Page content goes here -->
  </div>
  <sit-footer></sit-footer>
</div>
```

---

## Sidebar App Layout

For internal tools, dashboards, admin portals, and transactional apps that need persistent side navigation alongside the main content.

**Structure:**
- Sticky top bar: masthead + mainnav
- Two-column body: sticky scrollable sidebar + scrollable main content area with footer

**Content container:** `.sit-container-sidebar` — narrower than `.sit-container` to account for the sidebar column

| Breakpoint | `.sit-container-sidebar` max-width |
|------------|--------------------------------------|
| < 768px | `100%` |
| ≥ 768px (md) | `calc(100% - 96px)` |
| ≥ 1024px (lg) | `840px` |
| ≥ 1280px (xl) | `888px` |
| ≥ 1440px (2xl) | `1024px` |

```html
<!-- Sticky top bar -->
<div class="sit:sticky sit:top-0">
  <sit-masthead fluid></sit-masthead>
  <sit-mainnav fluid>
    <strong slot="brand">My App</strong>
    <strong slot="end">End</strong>
  </sit-mainnav>
</div>

<!-- Two-column body -->
<div class="sit:flex sit:flex-row">

  <!-- Sticky sidebar column -->
  <div class="sit:sticky sit:h-[calc(100vh-108px)] sit:overflow-y-scroll sit:top-27 sit:border-r sit:border-muted">
    <!-- Place <sit-sidebar> or other sidebar content here -->
  </div>

  <!-- Main content column -->
  <div class="sit:flex sit:flex-col sit:w-full">
    <div class="sit-container-sidebar sit:py-2-xl">
      <!-- Page content goes here -->
    </div>
    <sit-footer></sit-footer>
  </div>

</div>
```

### Sidebar height and offset notes

- `sit:h-[calc(100vh-108px)]` — sidebar fills viewport height minus the sticky header (masthead ~60px + mainnav ~48px ≈ 108px). Adjust the value if your header height differs.
- `sit:top-27` — offsets the sidebar's sticky position to sit below the header. Adjust to match your actual header height in spacing tokens.
- `sit:overflow-y-scroll` — makes the sidebar independently scrollable when content exceeds the viewport.

---

## Containers Reference

| Class | Use case |
|-------|----------|
| `.sit-container` | Simple app — wide centred content well |
| `.sit-container-sidebar` | Sidebar app — narrower content well to account for the sidebar column |

Both classes are provided by `@sit-canvas/canvas-web-component/css/sit.css`.

---

## For AI agents

1. **Every page must include `<sit-masthead>`, `<sit-mainnav>`, and `<sit-footer>` — these are mandatory. Never generate a page without all three.**
2. Always wrap the masthead + mainnav pair in a single `<div>` when making the header sticky — do not apply `sit:sticky` individually to each component.
3. For simple apps, use `.sit-container` to centre and constrain page content. Do not use `sit:max-w-*` utilities to replicate this — `.sit-container` has the correct responsive breakpoints built in.
4. For sidebar apps, use `.sit-container-sidebar` (not `.sit-container`) inside the main content column — it uses narrower max-widths appropriate for the two-column layout.
5. The sidebar column must have `sit:sticky`, `sit:top-27`, and `sit:h-[calc(100vh-108px)]` together to remain fixed while the main content scrolls. Missing any of these breaks the sticky behaviour.
6. Place `<sit-footer>` inside the main content column (not outside the two-column wrapper) so it sits below the content and does not span the sidebar.
7. Sidebar app is the recommended layout for internal tools, dashboards, and transactional apps. Simple app is the recommended layout for public-facing digital services.
