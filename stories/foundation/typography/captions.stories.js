import { html } from "lit";
import NonInteractiveDocsPage from "../../../.storybook/NonInteractiveDocsPage";

export default {
  title: "Foundation/Typography/Captions",
  parameters: {
    docs: { page: NonInteractiveDocsPage }
  }
};

const AllCaptionsTemplate = () => html` <div>Caption</div> `;

const CaptionSemiboldTemplate = () => html`
  <div class="sit:text-caption-md sit:font-semibold sit:leading-2-xs sit:tracking-normal sit:mb-md">
    Caption semibold
  </div>
`;

const CaptionRegularTemplate = () => html`
  <div class="sit:text-caption-md sit:font-regular sit:leading-2-xs sit:tracking-normal sit:mb-md">Caption regular</div>
`;

export const AllCaptions = {
  render: AllCaptionsTemplate.bind({}),
  name: "Default"
};

export const CaptionSemibold = {
  render: CaptionSemiboldTemplate.bind({}),
  name: "Semibold"
};

export const CaptionRegular = {
  render: CaptionRegularTemplate.bind({}),
  name: "Regular"
};
