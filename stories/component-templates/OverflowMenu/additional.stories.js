import { html } from "lit";

const SizeTemplate = args => {
  return html`
    <sit-overflow-menu size=${args.size}>
      <sit-dropdown-item ariaLabel="View">View</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="Edit">Edit</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="Delete">Delete</sit-dropdown-item>
    </sit-overflow-menu>
  `;
};

export const SmallSize = {
  render: SizeTemplate.bind({}),
  name: "Small size",
  args: { size: "sm" },
  parameters: {}
};
export const MediumSize = {
  render: SizeTemplate.bind({}),
  name: "Medium size",
  args: { size: "md" },
  parameters: {}
};
