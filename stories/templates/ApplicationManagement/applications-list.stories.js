import { html } from "lit";

const Template = () => html`
  <div class="sit:bg-surface-subtle">
    <!-- ── Application Shell ───────────────────────────────────────────── -->
    <div>
      <sit-masthead fluid></sit-masthead>
      <sit-mainnav fluid>
        <strong slot="brand">Logo</strong>
        <sit-mainnav-item href="#">Home</sit-mainnav-item>
        <sit-mainnav-item href="#" active>Applications</sit-mainnav-item>
        <sit-mainnav-item href="#">Reports</sit-mainnav-item>
      </sit-mainnav>
    </div>

    <div class="sit:flex sit:flex-col sit:w-full">
      <div class="sit-container sit:py-2-xl sit:flex sit:flex-col sit:gap-2-xl">
        <!-- ── Page Header block ─────────────────────────────────────────── -->
        <div class="sit:flex sit:flex-col sit:gap-layout-sm">
          <!-- Breadcrumb -->
          <sit-breadcrumb>
            <sit-breadcrumb-item><a href="#">Home</a></sit-breadcrumb-item>
            <sit-breadcrumb-item><a href="#">Applications</a></sit-breadcrumb-item>
          </sit-breadcrumb>

          <!-- Title row: left content + right action -->
          <div class="sit:flex sit:items-start sit:justify-between">
            <!-- Left: icon + title + description -->
            <div class="sit:flex sit:flex-col sit:gap-component-sm sit:flex-1">
              <h1
                class="sit:text-heading-lg sit:font-bold sit:leading-lg sit:tracking-tight sit:text-heading-default sit:mb-0"
              >
                Applications
              </h1>
              <div class="sit:text-label-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-label-default">
                Browse and manage all registered applications in your organisation.
              </div>
            </div>

            <!-- Right: CTA -->
            <sit-button variant="primary" class="sit:hidden sit:md:inline-flex">
              <sit-icon name="plus" slot="leftIcon"></sit-icon>
              Create application
            </sit-button>
            <sit-icon-button
              name="plus"
              variant="primary"
              ariaLabel="Create applications"
              class="sit:md:hidden"
            ></sit-icon-button>
          </div>
        </div>

        <!-- ── Two-column: filter sidebar + table filter ──────────────── -->
        <div class="sit-grid sit:items-start">
          <!-- Filter Sidebar block -->
          <aside class="sit-col-lg-3 sit:hidden sit:lg:flex sit:flex-col sit:gap-2-xl">
            <!-- Filter header -->
            <div class="sit:flex sit:gap-4 sit:items-center">
              <span class="sit:text-subtitle-md sit:font-semibold sit:text-heading-default">Filter by</span>
              <sit-link><a href="#">Clear all</a></sit-link>
            </div>

            <!-- Status -->
            <div class="sit:flex sit:flex-col sit:gap-text-xs">
              <div
                class="sit:text-label-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-label-default"
              >
                Status
              </div>
              <sit-checkbox-group>
                <sit-checkbox value="active">Active (8)</sit-checkbox>
                <sit-checkbox value="pending">Pending (3)</sit-checkbox>
                <sit-checkbox value="rejected">Rejected (2)</sit-checkbox>
                <sit-checkbox value="suspended">Suspended (1)</sit-checkbox>
              </sit-checkbox-group>
            </div>

            <!-- Environment -->
            <div class="sit:flex sit:flex-col sit:gap-text-xs">
              <div
                class="sit:text-label-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-label-default"
              >
                Environment
              </div>
              <sit-checkbox-group>
                <sit-checkbox value="production">Production (6)</sit-checkbox>
                <sit-checkbox value="staging">Staging (5)</sit-checkbox>
                <sit-checkbox value="development">Development (3)</sit-checkbox>
              </sit-checkbox-group>
            </div>

            <!-- API type -->
            <div class="sit:flex sit:flex-col sit:gap-text-xs">
              <div
                class="sit:text-label-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-label-default"
              >
                API type
              </div>
              <sit-checkbox-group>
                <sit-checkbox value="rest">REST (10)</sit-checkbox>
                <sit-checkbox value="graphql">GraphQL (2)</sit-checkbox>
                <sit-checkbox value="soap">SOAP (2)</sit-checkbox>
              </sit-checkbox-group>
            </div>
          </aside>

          <!-- Mobile filter button (visible below lg) -->
          <div class="sit-col-4 sit-col-sm-8 sit-col-md-8 sit:lg:hidden">
            <sit-button id="filter-drawer-btn" variant="outline" tone="neutral">
              <sit-icon name="bi-funnel" slot="leftIcon"></sit-icon>
              Filter
            </sit-button>
          </div>

          <!-- Table Filter block -->
          <div
            class="sit-col-4 sit-col-sm-8 sit-col-md-8 sit-col-lg-9 sit:min-w-0 sit:bg-surface-default sit:border sit:border-muted sit:rounded-lg sit:p-layout-xs sit:flex sit:flex-col sit:gap-5"
          >
            <!-- Card header: icon + title -->
            <div class="sit:flex sit:items-center sit:gap-text-md">
              <div
                class="sit:inline-flex sit:items-center sit:justify-center sit:w-10 sit:h-10 sit:shrink-0 sit:p-2 sit:rounded-md sit:bg-accent-surface-muted"
              >
                <sit-icon name="grid-fill" size="24"></sit-icon>
              </div>
              <h5
                class="sit:text-subtitle-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-heading-default sit:mb-0"
              >
                All applications
              </h5>
            </div>

            <!-- Search + filter toolbar -->
            <div class="sit:flex sit:items-center sit:gap-layout-sm">
              <div class="sit:flex-1">
                <sit-input type="search" placeholder="Search applications" name="search"></sit-input>
              </div>
              <sit-button variant="outline" tone="neutral">
                <sit-icon name="sliders" slot="leftIcon"></sit-icon>
                Filter
              </sit-button>
            </div>

            <!-- Results count -->
            <div class="sit:text-label-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-label-default">
              Showing 6/14 result(s)
            </div>

            <!-- Table -->
            <div class="sit:overflow-x-auto sit:min-w-0">
              <sit-table>
                <sit-table-row>
                  <sit-table-head>Application name</sit-table-head>
                  <sit-table-head>Organisation</sit-table-head>
                  <sit-table-head>Environment</sit-table-head>
                  <sit-table-head>Status</sit-table-head>
                  <sit-table-head>Actions</sit-table-head>
                </sit-table-row>
                <sit-table-row>
                  <sit-table-cell
                    ><sit-link><a href="#">APEX Gateway v2.1.0</a></sit-link></sit-table-cell
                  >
                  <sit-table-cell>[GVT] APEX</sit-table-cell>
                  <sit-table-cell>Production</sit-table-cell>
                  <sit-table-cell><sit-badge variant="success" outlined>Active</sit-badge></sit-table-cell>
                  <sit-table-cell><sit-button variant="ghost" size="sm">View</sit-button></sit-table-cell>
                </sit-table-row>
                <sit-table-row>
                  <sit-table-cell
                    ><sit-link><a href="#">MyInfo Bridge v1.4.0</a></sit-link></sit-table-cell
                  >
                  <sit-table-cell>[GVT] NDI</sit-table-cell>
                  <sit-table-cell>Staging</sit-table-cell>
                  <sit-table-cell><sit-badge variant="warning" outlined>Pending</sit-badge></sit-table-cell>
                  <sit-table-cell><sit-button variant="ghost" size="sm">View</sit-button></sit-table-cell>
                </sit-table-row>
                <sit-table-row>
                  <sit-table-cell
                    ><sit-link><a href="#">FormSG Webhook v3.0.0</a></sit-link></sit-table-cell
                  >
                  <sit-table-cell>[GVT] OGP</sit-table-cell>
                  <sit-table-cell>Production</sit-table-cell>
                  <sit-table-cell><sit-badge variant="success" outlined>Active</sit-badge></sit-table-cell>
                  <sit-table-cell><sit-button variant="ghost" size="sm">View</sit-button></sit-table-cell>
                </sit-table-row>
                <sit-table-row>
                  <sit-table-cell
                    ><sit-link><a href="#">SingPass Auth v1.2.0</a></sit-link></sit-table-cell
                  >
                  <sit-table-cell>[GVT] GDS</sit-table-cell>
                  <sit-table-cell>Production</sit-table-cell>
                  <sit-table-cell><sit-badge variant="danger" outlined>Rejected</sit-badge></sit-table-cell>
                  <sit-table-cell><sit-button variant="ghost" size="sm">View</sit-button></sit-table-cell>
                </sit-table-row>
                <sit-table-row>
                  <sit-table-cell
                    ><sit-link><a href="#">Data.gov Sync v2.0.0</a></sit-link></sit-table-cell
                  >
                  <sit-table-cell>[GVT] SNDGO</sit-table-cell>
                  <sit-table-cell>Development</sit-table-cell>
                  <sit-table-cell><sit-badge variant="neutral" outlined>Suspended</sit-badge></sit-table-cell>
                  <sit-table-cell><sit-button variant="ghost" size="sm">View</sit-button></sit-table-cell>
                </sit-table-row>
                <sit-table-row>
                  <sit-table-cell
                    ><sit-link><a href="#">CorpPass Verify v1.0.0</a></sit-link></sit-table-cell
                  >
                  <sit-table-cell>[GVT] ACRA</sit-table-cell>
                  <sit-table-cell>Staging</sit-table-cell>
                  <sit-table-cell><sit-badge variant="success" outlined>Active</sit-badge></sit-table-cell>
                  <sit-table-cell><sit-button variant="ghost" size="sm">View</sit-button></sit-table-cell>
                </sit-table-row>
              </sit-table>
            </div>

            <!-- Pagination -->
            <sit-pagination total-items="14" items-per-page="6" page="1" class="sit:me-auto"></sit-pagination>
          </div>
        </div>

        <!-- Filter drawer (mobile) -->
        <sit-drawer id="filter-drawer" placement="end">
          <span slot="title">Filters</span>
          <div class="sit:flex sit:flex-col sit:gap-2-xl">
            <!-- Status -->
            <div class="sit:flex sit:flex-col sit:gap-text-xs">
              <div
                class="sit:text-label-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-label-default"
              >
                Status
              </div>
              <sit-checkbox-group>
                <sit-checkbox value="active">Active (8)</sit-checkbox>
                <sit-checkbox value="pending">Pending (3)</sit-checkbox>
                <sit-checkbox value="rejected">Rejected (2)</sit-checkbox>
                <sit-checkbox value="suspended">Suspended (1)</sit-checkbox>
              </sit-checkbox-group>
            </div>

            <!-- Environment -->
            <div class="sit:flex sit:flex-col sit:gap-text-xs">
              <div
                class="sit:text-label-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-label-default"
              >
                Environment
              </div>
              <sit-checkbox-group>
                <sit-checkbox value="production">Production (6)</sit-checkbox>
                <sit-checkbox value="staging">Staging (5)</sit-checkbox>
                <sit-checkbox value="development">Development (3)</sit-checkbox>
              </sit-checkbox-group>
            </div>

            <!-- API type -->
            <div class="sit:flex sit:flex-col sit:gap-text-xs">
              <div
                class="sit:text-label-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-label-default"
              >
                API type
              </div>
              <sit-checkbox-group>
                <sit-checkbox value="rest">REST (10)</sit-checkbox>
                <sit-checkbox value="graphql">GraphQL (2)</sit-checkbox>
                <sit-checkbox value="soap">SOAP (2)</sit-checkbox>
              </sit-checkbox-group>
            </div>
          </div>
        </sit-drawer>
      </div>
      <sit-footer></sit-footer>
    </div>
  </div>
`;

export default {
  title: "Templates/Application Management/Application list",
  tags: ["!autodocs"],
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    interactions: { disable: true },
    layout: "fullscreen"
  }
};

export const ApplicationList = {
  render: Template.bind({}),
  name: "Application list",
  play: async ({ canvasElement }) => {
    const filterDrawerBtn = canvasElement.querySelector("#filter-drawer-btn");
    const filterDrawer = canvasElement.querySelector("#filter-drawer");
    if (filterDrawerBtn && filterDrawer) {
      filterDrawerBtn.addEventListener("click", () => {
        filterDrawer.show();
      });
    }
  }
};
