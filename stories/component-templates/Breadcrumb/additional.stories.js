import { html } from "lit";

const OverflowTemplate = args => {
  return html`
    <sit-breadcrumb>
      <sit-breadcrumb-item><a href="#">Home</a></sit-breadcrumb-item>
      <sit-breadcrumb-item><a href="#">About</a></sit-breadcrumb-item>
      <sit-breadcrumb-item><a href="#">Contacts</a></sit-breadcrumb-item>
      <sit-breadcrumb-item><a href="#">Link-1</a></sit-breadcrumb-item>
      <sit-breadcrumb-item><a href="#">Link-2</a></sit-breadcrumb-item>
      <sit-breadcrumb-item><a href="#">Link-3</a></sit-breadcrumb-item>
      <sit-breadcrumb-item><a href="#">Link-4</a></sit-breadcrumb-item>
    </sit-breadcrumb>
  `;
};

export const Overflow = {
  render: OverflowTemplate.bind({}),
  name: "Overflow",
  args: {},
  parameters: {
    docs: {
      story: {
        height: "500px",
        controls: { disable: true }
      }
    }
  }
};
