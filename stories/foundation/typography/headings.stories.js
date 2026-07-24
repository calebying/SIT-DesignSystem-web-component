import { html } from "lit";
import NonInteractiveDocsPage from "../../../.storybook/NonInteractiveDocsPage";

export default {
  title: "Foundation/Typography/Headings",
  parameters: {
    docs: { page: NonInteractiveDocsPage }
  }
};

const AllHeadingsTemplate = () => html`
  <div class="sit:flex sit:flex-col">
    <h1>Header H1</h1>
    <h2>Header H2</h2>
    <h3>Header H3</h3>
    <h4>Header H4</h4>
    <h5>Header H5</h5>
    <h6>Header H6</h6>
  </div>
`;

const HeadingXlBoldTemplate = () => html`
  <h1 class="sit:text-heading-xl sit:font-bold sit:leading-xl sit:tracking-tight">Heading XL Bold</h1>
`;

const HeadingXlLightTemplate = () => html`
  <h1 class="sit:text-heading-xl sit:font-light sit:leading-xl sit:tracking-tight">Heading XL Light</h1>
`;

const HeadingLgBoldTemplate = () => html`
  <h2 class="sit:text-heading-lg sit:font-bold sit:leading-lg sit:tracking-tight">Heading Large Bold</h2>
`;

const HeadingLgLightTemplate = () => html`
  <h2 class="sit:text-heading-lg sit:font-light sit:leading-lg sit:tracking-tight">Heading Large Light</h2>
`;

const HeadingMdSemiboldTemplate = () => html`
  <h3 class="sit:text-heading-md sit:font-semibold sit:leading-md sit:tracking-tight">Heading Medium Semibold</h3>
`;

const HeadingMdLightTemplate = () => html`
  <h3 class="sit:text-heading-md sit:font-light sit:leading-md sit:tracking-tight">Heading Medium Light</h3>
`;

const HeadingSmSemiboldTemplate = () => html`
  <h4 class="sit:text-heading-sm sit:font-semibold sit:leading-sm sit:tracking-tight">Heading Small Semibold</h4>
`;

const HeadingSmLightTemplate = () => html`
  <h4 class="sit:text-heading-sm sit:font-light sit:leading-sm sit:tracking-tight">Heading Small Light</h4>
`;

export const Default = {
  render: AllHeadingsTemplate.bind({}),
  name: "Default"
};

export const HeadingXlBold = {
  render: HeadingXlBoldTemplate.bind({}),
  name: "XL Bold"
};

export const HeadingXlLight = {
  render: HeadingXlLightTemplate.bind({}),
  name: "XL Light"
};

export const HeadingLgBold = {
  render: HeadingLgBoldTemplate.bind({}),
  name: "Large Bold"
};

export const HeadingLgLight = {
  render: HeadingLgLightTemplate.bind({}),
  name: "Large Light"
};

export const HeadingMdSemibold = {
  render: HeadingMdSemiboldTemplate.bind({}),
  name: "Medium Semibold"
};

export const HeadingMdLight = {
  render: HeadingMdLightTemplate.bind({}),
  name: "Medium Light"
};

export const HeadingSmSemibold = {
  render: HeadingSmSemiboldTemplate.bind({}),
  name: "Small Semibold"
};

export const HeadingSmLight = {
  render: HeadingSmLightTemplate.bind({}),
  name: "Small Light"
};
