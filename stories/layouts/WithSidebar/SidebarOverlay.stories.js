import { html } from "lit";

export default {
  parameters: { controls: { disable: true }, actions: { disable: true }, interactions: { disable: true } },
  title: "Layouts/With Sidebar/Overlay"
};

const placeholderStyle = html`
  <style>
    .content-placeholder {
      min-height: calc(100vh - 108px);
      background-image: repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 6px,
        var(--Sit-color-border-muted, #e5e7eb) 6px,
        var(--Sit-color-border-muted, #e5e7eb) 7px
      );
    }
  </style>
`;

const sidebarNav = html`
  <sit-sidebar variant="overlay" active="dashboard" scrim>
    <div slot="brandName">My App</div>
    <sit-sidebar-section title="Workspace" name="workspace">
      <sit-sidebar-item name="dashboard" title="Dashboard">
        <sit-icon name="grid-fill" slot="icon" size="md"></sit-icon>
        <a href="#"></a>
      </sit-sidebar-item>
      <sit-sidebar-item name="analytics" title="Analytics">
        <sit-icon name="trend-up" slot="icon" size="md"></sit-icon>
        <a href="#"></a>
      </sit-sidebar-item>
    </sit-sidebar-section>
    <sit-sidebar-section title="Manage" name="manage">
      <sit-sidebar-item name="team" title="Team">
        <sit-icon name="user-circle" slot="icon" size="md"></sit-icon>
        <a href="#"></a>
      </sit-sidebar-item>
      <sit-sidebar-item name="settings" title="Settings">
        <sit-icon name="laptop-gear" slot="icon" size="md"></sit-icon>
        <a href="#"></a>
      </sit-sidebar-item>
    </sit-sidebar-section>
  </sit-sidebar>
`;

const Template = () => html`
  ${placeholderStyle}
  <div class="sit:h-screen sit:flex sit:flex-col sit:overflow-hidden">
    <div class="sit:flex-none">
      <sit-masthead fluid></sit-masthead>
      <sit-mainnav fluid>
        <strong slot="brand">My App</strong>
        <sit-mainnav-dropdown ariaLabel="Workspace menu">
          <span slot="toggler">Workspace</span>
          <sit-dropdown-item ariaLabel="Dashboard"><a href="#">Dashboard</a></sit-dropdown-item>
          <sit-dropdown-item ariaLabel="Analytics"><a href="#">Analytics</a></sit-dropdown-item>
        </sit-mainnav-dropdown>
        <sit-mainnav-dropdown ariaLabel="Manage menu">
          <span slot="toggler">Manage</span>
          <sit-dropdown-item ariaLabel="Team"><a href="#">Team</a></sit-dropdown-item>
          <sit-dropdown-item ariaLabel="Reports"><a href="#">Reports</a></sit-dropdown-item>
        </sit-mainnav-dropdown>
        <div slot="end">
          <sit-button variant="primary" size="sm">New</sit-button>
        </div>
      </sit-mainnav>
    </div>
    <div class="sit:border-b sit:border-muted sit:text-body-sm">
      <div class="sit:py-md sit:px-sm sit:flex sit:items-center sit:gap-layout-md">
        <sit-icon-button
          data-sidebar-toggler="true"
          size="sm"
          tone="neutral"
          variant="ghost"
          name="sidebar-expand"
          @click=${() => document.querySelector("Sit-sidebar").toggleCollapsed()}
        ></sit-icon-button>
        <sit-breadcrumb>
          <sit-breadcrumb-item><a href="#">Home</a></sit-breadcrumb-item>
          <sit-breadcrumb-item><a href="#">Section</a></sit-breadcrumb-item>
          <sit-breadcrumb-item active><a href="#">Current Page</a></sit-breadcrumb-item>
        </sit-breadcrumb>
      </div>
    </div>
    <div class="sit:flex sit:flex-row sit:flex-1 sit:overflow-hidden sit:relative">
      ${sidebarNav}
      <div class="sit:flex sit:flex-col sit:flex-1 sit:overflow-y-auto">
        <div class="sit-container-sidebar sit:py-layout-md sit:flex-1">
          <div class="sit-grid">
            <div class="content-placeholder sit:border sit:border-muted sit-col-4 sit-col-sm-8 sit-col-lg-12"></div>
          </div>
        </div>
        <sit-footer tone="neutral"></sit-footer>
      </div>
    </div>
  </div>
`;

export const SidebarOverlay = {
  render: Template.bind({}),
  name: "Overlay",
  args: {},
  parameters: { layout: "fullscreen" },
  tags: ["!autodocs"]
};
