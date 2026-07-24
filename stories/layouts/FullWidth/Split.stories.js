import { html } from "lit";

export default {
  parameters: { controls: { disable: true }, actions: { disable: true }, interactions: { disable: true } },
  title: "Layouts/Full Width/Split"
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
      <div class="sit-container sit:py-layout-md sit:flex sit:flex-col sit:gap-layout-md">
        <div class="sit:flex sit:gap-layout-md">
          <div class="content-placeholder sit:border sit:border-muted sit:flex-1"></div>
          <div class="content-placeholder sit:border sit:border-muted sit:flex-1"></div>
        </div>
      </div>
    </main>
    <sit-footer></sit-footer>
  </div>
`;

export const Split = {
  render: Template.bind({}),
  name: "Split",
  args: {},
  parameters: { layout: "fullscreen" },
  tags: ["!autodocs"]
};
