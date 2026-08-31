import { html } from "lit";

// Template is in scope via concatenation — no import needed

const WithoutActionsTemplate = ({ active, disabled }) => html`<sit-subnav>
  <h5 slot="header">Header</h5>
  <sit-subnav-item ?active=${active} ?disabled=${disabled}>
    <a href="#">Overview</a>
  </sit-subnav-item>
  <sit-subnav-item>
    <a href="#">Programme</a>
  </sit-subnav-item>
  <sit-subnav-item>
    <a href="#">Speakers</a>
  </sit-subnav-item>
  <sit-subnav-item>
    <a href="#">FAQ</a>
  </sit-subnav-item>
</sit-subnav>`;

export const WithoutActions = {
  render: WithoutActionsTemplate.bind({}),
  name: "Without actions",
  args: {},
  parameters: {},
  tags: ["!dev"]
};
