# Dashboard Page Template

Sidebar navigation + filters + stat cards + ECharts charts + data table. Adapted from shadcn's `dashboard-01` block.

---

## When to use

- Internal tools and admin portals
- Operations dashboards with real-time metrics
- Analytics and reporting views
- Pages combining charts, stat cards, and data tables
- Multi-section layouts with sticky sidebar navigation

**Prerequisites:** Install [ECharts](https://echarts.apache.org/) separately — see [sit-data-visualisation](../../sit-data-visualisation/SKILL.md).

```bash
npm install echarts
```

## Layout Structure

Uses the **Sidebar App Layout** from the [Application Shell](../../sit-blocks/reference/application-shell.md). The sidebar is sticky; the main content scrolls independently.

```
┌─────────────────────────────────────────────────────┐
│  sit-masthead + sit-mainnav (sticky top)          │
├──────────────┬──────────────────────────────────────┤
│              │  Page title     [Filters] [Apply]     │
│  sit-sidenav│  ──────────────────────────────────── │
│  (sticky)    │  Stat cards (4-column grid)           │
│              │  ──────────────────────────────────── │
│              │  [Line chart (2/3)]  [Donut (1/3)]    │
│              │  ──────────────────────────────────── │
│              │  [Stacked bar chart (full width)]     │
│              │  ──────────────────────────────────── │
│              │  Data table                           │
│              │  sit-footer                          │
└──────────────┴──────────────────────────────────────┘
```

---

## Raw Content Link

To get the full HTML template, fetch and extract from the raw GitHub link below. See **[How to Extract HTML from Raw GitHub Links](../SKILL.md#how-to-extract-html-from-raw-github-links)** in SKILL.md for step-by-step instructions.


| File | GitHub Raw URL |
|------|---|

---

## Complete Template

> See **[sidebar component](../../sit-components/reference/sidebar.md)** for the full API.

```html
<!-- Sticky header -->
<div class="sit:sticky sit:top-0 sit:z-10">
  <sit-masthead fluid></sit-masthead>
  <sit-mainnav fluid>
    <strong slot="brand">My App</strong>
    <sit-button slot="end" variant="ghost" size="sm">John Doe</sit-button>
  </sit-mainnav>
</div>

<!-- Two-column body -->
<div class="sit:flex sit:flex-row sit:bg-surface-default">

  <!-- Sticky sidebar -->
  <div class="sit:sticky sit:top-27 sit:h-[calc(100vh-108px)]">
    <sit-sidebar active="dashboard">
    <div slot="brandName">My App</div>

    <sit-sidebar-section title="Analytics" name="analytics">
      <sit-sidebar-item name="dashboard" title="Dashboard">
        <sit-icon name="grid-fill" slot="icon"></sit-icon>
        <a href="/dashboard"></a>
      </sit-sidebar-item>
      <!-- Root-level group: clicking opens a drawer overlay with children -->
      <sit-sidebar-group name="submissions" title="Submissions">
        <sit-icon name="file-earmark-text" slot="icon"></sit-icon>
        <sit-sidebar-item name="all-submissions" title="All submissions">
          <sit-icon name="files" slot="icon"></sit-icon>
        </sit-sidebar-item>
        <sit-sidebar-item name="pending" title="Pending review">
          <sit-icon name="pending-circle" slot="icon"></sit-icon>
        </sit-sidebar-item>
        <sit-sidebar-item name="approved" title="Approved">
          <sit-icon name="check-circle-fill" slot="icon"></sit-icon>
        </sit-sidebar-item>
      </sit-sidebar-group>
      <sit-sidebar-item name="reports" title="Reports">
        <sit-icon name="speedometer" slot="icon"></sit-icon>
        <a href="/reports"></a>
      </sit-sidebar-item>
    </sit-sidebar-section>

    <sit-sidebar-section title="Manage" name="manage">
      <sit-sidebar-item name="users" title="Users">
        <sit-icon name="users" slot="icon"></sit-icon>
        <a href="/users"></a>
      </sit-sidebar-item>
      <sit-sidebar-item name="settings" title="Settings">
        <sit-icon name="gear" slot="icon"></sit-icon>
        <a href="/settings"></a>
      </sit-sidebar-item>
    </sit-sidebar-section>
  </sit-sidebar>
  </div>

  <!-- Main content -->
  <div class="sit:flex sit:flex-col sit:w-full">
    <div class="sit-container-sidebar sit:py-layout-md">

      <!-- Page header -->
      <div class="sit:flex sit:items-center sit:justify-between sit:mb-layout-sm">
        <div>
          <h1 class="sit:text-2xl sit:font-semibold sit:text-default">Dashboard</h1>
          <p class="sit:text-sm sit:text-body-subtle sit:mt-1">Overview of your application metrics</p>
        </div>
        <sit-button variant="primary" size="sm">
          <sit-icon name="download" slot="leftIcon"></sit-icon>
          Export
        </sit-button>
      </div>

      <!-- Single grid: stat cards + charts + table all in one -->
      <div class="sit-grid sit:gap-layout-md">

        <!-- Stat cards: 4 × 3/12 cols -->
        <div class="sit-col-4 sit-col-sm-4 sit-col-lg-3 sit:bg-surface-raised sit:rounded-lg sit:p-component-xs sit:shadow-card">
          <p class="sit:text-sm sit:text-body-subtle sit:mb-1">Total Users</p>
          <p class="sit:text-2xl sit:font-semibold sit:text-default">12,486</p>
          <div class="sit:flex sit:items-center sit:gap-1 sit:mt-2">
            <sit-icon name="arrow-up" class="sit:text-success-default" size="sm"></sit-icon>
            <span class="sit:text-sm sit:text-success-default">+8.2%</span>
            <span class="sit:text-sm sit:text-body-subtle">vs last month</span>
          </div>
        </div>

        <div class="sit-col-4 sit-col-sm-4 sit-col-lg-3 sit:bg-surface-raised sit:rounded-lg sit:p-component-xs sit:shadow-card">
          <p class="sit:text-sm sit:text-body-subtle sit:mb-1">Active Sessions</p>
          <p class="sit:text-2xl sit:font-semibold sit:text-default">3,241</p>
          <div class="sit:flex sit:items-center sit:gap-1 sit:mt-2">
            <sit-icon name="arrow-up" class="sit:text-success-default" size="sm"></sit-icon>
            <span class="sit:text-sm sit:text-success-default">+4.1%</span>
            <span class="sit:text-sm sit:text-body-subtle">vs last month</span>
          </div>
        </div>

        <div class="sit-col-4 sit-col-sm-4 sit-col-lg-3 sit:bg-surface-raised sit:rounded-lg sit:p-component-xs sit:shadow-card">
          <p class="sit:text-sm sit:text-body-subtle sit:mb-1">Submissions</p>
          <p class="sit:text-2xl sit:font-semibold sit:text-default">847</p>
          <div class="sit:flex sit:items-center sit:gap-1 sit:mt-2">
            <sit-icon name="arrow-down" class="sit:text-danger-default" size="sm"></sit-icon>
            <span class="sit:text-sm sit:text-danger-default">-2.4%</span>
            <span class="sit:text-sm sit:text-body-subtle">vs last month</span>
          </div>
        </div>

        <div class="sit-col-4 sit-col-sm-4 sit-col-lg-3 sit:bg-surface-raised sit:rounded-lg sit:p-component-xs sit:shadow-card">
          <p class="sit:text-sm sit:text-body-subtle sit:mb-1">Pending Reviews</p>
          <p class="sit:text-2xl sit:font-semibold sit:text-default">23</p>
          <div class="sit:flex sit:items-center sit:gap-1 sit:mt-2">
            <sit-badge variant="warning">Action needed</sit-badge>
          </div>
        </div>

        <!-- Charts: trend 8/12, donut 4/12, bar 12/12 — CSS Grid auto-wraps into rows -->
        <div class="sit-col-4 sit-col-sm-8 sit-col-lg-8 sit:bg-surface-raised sit:rounded-lg sit:border sit:border-muted sit:p-component-xs">
          <h2 class="sit:text-base sit:font-semibold sit:text-default sit:mb-component-sm">Submission trend</h2>
          <div id="chart-trend" class="sit:h-[260px] sit:w-full"></div>
        </div>

        <div class="sit-col-4 sit-col-sm-8 sit-col-lg-4 sit:bg-surface-raised sit:rounded-lg sit:border sit:border-muted sit:p-component-xs">
          <h2 class="sit:text-base sit:font-semibold sit:text-default sit:mb-component-sm">Status breakdown</h2>
          <div id="chart-donut" class="sit:h-[260px] sit:w-full sit:overflow-visible"></div>
        </div>

        <div class="sit-col-4 sit-col-sm-8 sit-col-lg-12 sit:bg-surface-raised sit:rounded-lg sit:border sit:border-muted sit:p-component-xs">
          <h2 class="sit:text-base sit:font-semibold sit:text-default sit:mb-component-sm">Submissions by department</h2>
          <div id="chart-bar" class="sit:h-[240px] sit:w-full"></div>
        </div>

        <!-- Table: full width 12/12 -->
        <div class="sit-col-4 sit-col-sm-8 sit-col-lg-12 sit:bg-surface-raised sit:rounded-lg sit:shadow-card">

          <div class="sit:flex sit:items-center sit:justify-between sit:p-component-xs sit:border-b sit:border-muted">
            <h2 class="sit:text-base sit:font-semibold sit:text-default">Recent Submissions</h2>
            <div class="sit:flex sit:gap-component-sm">
              <sit-input placeholder="Search..." size="sm">
                <sit-icon name="search" slot="prefix"></sit-icon>
              </sit-input>
              <sit-button variant="outline" size="sm">
                <sit-icon name="bi-funnel" slot="leftIcon"></sit-icon>
                Filter
              </sit-button>
            </div>
          </div>

          <sit-table>
            <sit-table-row>
              <sit-table-head>Name</sit-table-head>
              <sit-table-head>Status</sit-table-head>
              <sit-table-head>Date</sit-table-head>
              <sit-table-head>Actions</sit-table-head>
            </sit-table-row>
            <sit-table-row>
              <sit-table-cell>Alice Tan</sit-table-cell>
              <sit-table-cell><sit-badge variant="success">Approved</sit-badge></sit-table-cell>
              <sit-table-cell>10 Mar 2026</sit-table-cell>
              <sit-table-cell><sit-button variant="ghost" size="sm">View</sit-button></sit-table-cell>
            </sit-table-row>
            <sit-table-row>
              <sit-table-cell>Bob Lim</sit-table-cell>
              <sit-table-cell><sit-badge variant="warning">Pending</sit-badge></sit-table-cell>
              <sit-table-cell>09 Mar 2026</sit-table-cell>
              <sit-table-cell><sit-button variant="ghost" size="sm">View</sit-button></sit-table-cell>
            </sit-table-row>
            <sit-table-row>
              <sit-table-cell>Carol Ng</sit-table-cell>
              <sit-table-cell><sit-badge variant="danger">Rejected</sit-badge></sit-table-cell>
              <sit-table-cell>08 Mar 2026</sit-table-cell>
              <sit-table-cell><sit-button variant="ghost" size="sm">View</sit-button></sit-table-cell>
            </sit-table-row>
          </sit-table>

          <div class="sit:flex sit:justify-end sit:p-component-xs">
            <sit-pagination length="10" limit="5"></sit-pagination>
          </div>

        </div>

      </div>
    </div>
    <sit-footer></sit-footer>
  </div>

</div>
```

---

## Key visual rules for this template

- **Page bg**: `sit:bg-surface-default` — the canvas behind everything
- **Card bg**: `sit:bg-surface-raised sit:rounded-lg sit:border sit:border-muted` — consistent card treatment for charts, stat cards, and table
- **Chart height**: set explicit `height` on the ECharts container div (e.g. `height:260px`) — ECharts requires a non-zero height
- **Chart bg**: `backgroundColor: "transparent"` — let the Canvas surface token control the background, not ECharts
- **Dark mode**: use a `MutationObserver` on `document.documentElement` watching the `class` attribute; call `chart.setOption()` with updated `textColor`/`gridColor` when `sit-night-theme` is added or removed
- **Resize**: call `chart.resize()` on `window resize` so charts fill their container at every viewport width
- **Stat value**: `sit:text-3xl sit:font-semibold sit:tabular-nums` — tabular nums prevent jank on live-updating counters
- **Trend up**: `sit:text-success-default` · **Trend down**: `sit:text-danger-default`

---

## Customisation notes

- **Page title & description**: Update "Dashboard" and description to match your dashboard purpose
- **Sidebar navigation**: Customize section titles and items to match your application structure
- **Stat cards**: Update the 4 metrics (Total Users, Active Sessions, etc.) with your actual KPIs
- **Stat values**: Replace example numbers with real data; use `sit:tabular-nums` class to prevent jank on live updates
- **Chart data**: Replace placeholder data with your actual datasets; ensure ECharts container has explicit `height` set
- **Table columns**: Customize headers and cell content to match your data structure
- **Table data**: Replace placeholder rows with actual records from your database
- **Badges**: Use appropriate variant colors (success, warning, danger, neutral) for status indicators
- **Dark mode support**: Implement the `MutationObserver` pattern shown in Key visual rules to update chart colors when theme changes
- **Responsive charts**: Call `chart.resize()` on window resize to ensure charts scale properly at all viewport widths
