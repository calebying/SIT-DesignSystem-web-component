import { html } from "lit";

// Template is in scope via concatenation — no import needed

const WithoutHeaderTemplate = args => html`<sit-table-of-contents>
  ${args.contents?.map(
    item =>
      html`<li slot="contents">
        <sit-link><a href=${item.href}>${item.label}</a></sit-link>
      </li>`
  )}
</sit-table-of-contents>`;

export const WithoutHeader = {
  render: WithoutHeaderTemplate.bind({}),
  name: "Without header",
  args: {
    contents: [
      { label: "Introduction", href: "#" },
      { label: "Usage", href: "#" },
      { label: "Examples", href: "#" }
    ]
  },
  parameters: {},
  tags: ["!dev"]
};
