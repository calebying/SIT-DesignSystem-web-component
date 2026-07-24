import { html } from "lit";

export default {
  parameters: { controls: { disable: true }, actions: { disable: true }, interactions: { disable: true } },
  title: "Layouts/Full Width/Breadcrumb"
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

const Template = () => html`
  ${placeholderStyle}
  <div>
    <sit-masthead></sit-masthead>
    <sit-mainnav>
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
  <div class="sit:flex sit:flex-col">
    <main>
      <div class="sit:border-b sit:border-muted sit:text-body-sm">
        <div class="sit-container sit:py-md">
          <sit-breadcrumb>
            <sit-breadcrumb-item><a href="#">Home</a></sit-breadcrumb-item>
            <sit-breadcrumb-item><a href="#">Section</a></sit-breadcrumb-item>
            <sit-breadcrumb-item active><a href="#">Current Page</a></sit-breadcrumb-item>
          </sit-breadcrumb>
        </div>
      </div>
      <div class="sit-container sit:py-layout-md sit:flex sit:flex-col">
        <div class="content-placeholder sit:border sit:border-muted sit:flex-1"></div>
      </div>
    </main>
    <sit-footer></sit-footer>
  </div>
`;

export const Breadcrumb = {
  render: Template.bind({}),
  name: "Breadcrumb",
  args: {},
  parameters: { layout: "fullscreen" },
  tags: ["!autodocs"]
};
