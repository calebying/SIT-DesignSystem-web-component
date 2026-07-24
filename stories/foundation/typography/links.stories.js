import { html } from "lit";
import NonInteractiveDocsPage from "../../../.storybook/NonInteractiveDocsPage";

export default {
  title: "Foundation/Typography/Links",
  parameters: {
    docs: { page: NonInteractiveDocsPage }
  }
};

const AllLinksTemplate = () => html` <a href="#">Anchor link</a> `;

const LinkLgTemplate = () => html`
  <a href="#" class="sit:text-link-lg sit:font-regular sit:leading-md sit:tracking-normal sit:underline">Link large</a>
`;

const LinkMdTemplate = () => html`
  <a href="#" class="sit:text-link-md sit:font-regular sit:leading-xs sit:tracking-normal sit:underline">Link medium</a>
`;

const LinkSmTemplate = () => html`
  <a href="#" class="sit:text-link-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:underline"
    >Link small</a
  >
`;

const LinkXsTemplate = () => html`
  <a href="#" class="sit:text-link-xs sit:font-regular sit:leading-3-xs sit:tracking-normal sit:underline">Link XS</a>
`;

export const AllLinks = {
  render: AllLinksTemplate.bind({}),
  name: "Default"
};

export const LinkLg = {
  render: LinkLgTemplate.bind({}),
  name: "Large"
};

export const LinkMd = {
  render: LinkMdTemplate.bind({}),
  name: "Medium"
};

export const LinkSm = {
  render: LinkSmTemplate.bind({}),
  name: "Small"
};

export const LinkXs = {
  render: LinkXsTemplate.bind({}),
  name: "XS"
};
