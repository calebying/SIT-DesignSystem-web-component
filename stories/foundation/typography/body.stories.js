import { html } from "lit";
import NonInteractiveDocsPage from "../../../.storybook/NonInteractiveDocsPage";

export default {
  title: "Foundation/Typography/Paragraph body",
  parameters: {
    docs: { page: NonInteractiveDocsPage }
  }
};

const AllBodyTemplate = () => html`
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
    type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
    Lorem Ipsum.
  </p>
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
    type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
    Lorem Ipsum.
  </p>
`;

const BodyLgSemiboldTemplate = () => html`
  <p class="sit:text-body-lg sit:font-semibold sit:leading-md sit:tracking-normal sit:mb-xl">Body large semibold.</p>
`;

const BodyLgRegularTemplate = () => html`
  <p class="sit:text-body-lg sit:font-regular sit:leading-md sit:tracking-normal sit:mb-xl">Body large regular.</p>
`;

const BodyMdSemiboldTemplate = () => html`
  <p class="sit:text-body-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:mb-xl">Body medium semibold.</p>
`;

const BodyMdRegularTemplate = () => html`
  <p class="sit:text-body-md sit:font-regular sit:leading-xs sit:tracking-normal sit:mb-xl">Body medium regular.</p>
`;

const BodySmSemiboldTemplate = () => html`
  <p class="sit:text-body-sm sit:font-semibold sit:leading-2-xs sit:tracking-normal sit:mb-xl">Body small semibold.</p>
`;

const BodySmRegularTemplate = () => html`
  <p class="sit:text-body-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:mb-xl">Body small regular.</p>
`;

export const AllBody = {
  render: AllBodyTemplate.bind({}),
  name: "Default"
};

export const BodyLgSemibold = {
  render: BodyLgSemiboldTemplate.bind({}),
  name: "Large Semibold"
};

export const BodyLgRegular = {
  render: BodyLgRegularTemplate.bind({}),
  name: "Large Regular"
};

export const BodyMdSemibold = {
  render: BodyMdSemiboldTemplate.bind({}),
  name: "Medium Semibold"
};

export const BodyMdRegular = {
  render: BodyMdRegularTemplate.bind({}),
  name: "Medium Regular"
};

export const BodySmSemibold = {
  render: BodySmSemiboldTemplate.bind({}),
  name: "Small Semibold"
};

export const BodySmRegular = {
  render: BodySmRegularTemplate.bind({}),
  name: "Small Regular"
};
