import { html } from "lit";
import NonInteractiveDocsPage from "../../../.storybook/NonInteractiveDocsPage";

export default {
  title: "Foundation/Typography/Display",
  parameters: {
    docs: { page: NonInteractiveDocsPage }
  }
};

const DisplayLgBoldTemplate = () => html`
  <h1 class="sit:text-display-lg sit:font-bold sit:leading-3-xl sit:tracking-tighter">Display Large Bold</h1>
`;

const DisplayLgLightTemplate = () => html`
  <h1 class="sit:text-display-lg sit:font-light sit:leading-3-xl sit:tracking-tighter">Display Large Light</h1>
`;

const DisplayMdBoldTemplate = () => html`
  <h1 class="sit:text-display-md sit:font-bold sit:leading-2-xl sit:tracking-tighter">Display Medium Bold</h1>
`;

const DisplayMdLightTemplate = () => html`
  <h1 class="sit:text-display-md sit:font-light sit:leading-2-xl sit:tracking-tighter">Display Medium Light</h1>
`;

const DisplaySmBoldTemplate = () => html`
  <h1 class="sit:text-display-sm sit:font-bold sit:leading-xl sit:tracking-tighter">Display Small Bold</h1>
`;

const DisplaySmLightTemplate = () => html`
  <h1 class="sit:text-display-sm sit:font-light sit:leading-xl sit:tracking-tighter">Display Small Light</h1>
`;

export const DisplayLgBold = {
  render: DisplayLgBoldTemplate.bind({}),
  name: "Large Bold"
};

export const DisplayLgLight = {
  render: DisplayLgLightTemplate.bind({}),
  name: "Large Light"
};

export const DisplayMdBold = {
  render: DisplayMdBoldTemplate.bind({}),
  name: "Medium Bold"
};

export const DisplayMdLight = {
  render: DisplayMdLightTemplate.bind({}),
  name: "Medium Light"
};

export const DisplaySmBold = {
  render: DisplaySmBoldTemplate.bind({}),
  name: "Small Bold"
};

export const DisplaySmLight = {
  render: DisplaySmLightTemplate.bind({}),
  name: "Small Light"
};
