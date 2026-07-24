import "../../mocks/pagination.ts";
import { html } from "lit";

const MockPaginationTemplate = () => html`<mock-pagination></mock-pagination>`;

export const PaginationWithAPI = {
  render: MockPaginationTemplate.bind({}),
  name: "API example",
  args: {},
  parameters: {}
};

export const PaginationSizes = {
  render: () => html`
    <sit-pagination dataLength="50" size="sm"></sit-pagination>
    <sit-pagination dataLength="50" size="md"></sit-pagination>
  `,
  name: "Sizes",
  args: {},
  parameters: {}
};

export const PaginationVariants = {
  render: () => html`
    <sit-pagination dataLength="50"></sit-pagination>
    <sit-pagination dataLength="50" variant="number"></sit-pagination>
    <sit-pagination dataLength="50" variant="button"></sit-pagination>
    <sit-pagination dataLength="50" variant="description"></sit-pagination>
  `,
  name: "Variants",
  args: {},
  parameters: {}
};

export const Navigation = {
  render: () => html`
    <sit-pagination dataLength="50"></sit-pagination>
    <sit-pagination dataLength="50" navigation="button"></sit-pagination>
  `,
  name: "Navigation button type",
  args: {},
  parameters: {}
};
