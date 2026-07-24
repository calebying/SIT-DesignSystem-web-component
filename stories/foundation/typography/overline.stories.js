import { html } from "lit";
import NonInteractiveDocsPage from "../../../.storybook/NonInteractiveDocsPage";

export default {
  title: "Foundation/Typography/Overline",
  parameters: {
    docs: { page: NonInteractiveDocsPage }
  }
};

const OverlineSemiboldTemplate = () => html`
  <div class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase">
    Overline Semibold
  </div>
`;

const OverlineRegularTemplate = () => html`
  <div class="sit:text-overline-md sit:font-regular sit:leading-2-xs sit:tracking-wide sit:uppercase">
    Overline Regular
  </div>
`;

export const OverlineSemibold = {
  render: OverlineSemiboldTemplate.bind({}),
  name: "Semibold"
};

export const OverlineRegular = {
  render: OverlineRegularTemplate.bind({}),
  name: "Regular"
};
