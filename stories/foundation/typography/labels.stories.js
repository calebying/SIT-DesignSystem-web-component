import { html } from "lit";
import NonInteractiveDocsPage from "../../../.storybook/NonInteractiveDocsPage";

export default {
  title: "Foundation/Typography/Labels",
  parameters: {
    docs: { page: NonInteractiveDocsPage }
  }
};

const LabelLgSemiboldTemplate = () => html`
  <div class="sit:text-label-lg sit:font-semibold sit:leading-md sit:tracking-normal">Label Large Semibold</div>
`;

const LabelLgRegularTemplate = () => html`
  <div class="sit:text-label-lg sit:font-regular sit:leading-md sit:tracking-normal">Label Large Regular</div>
`;

const LabelMdSemiboldTemplate = () => html`
  <div class="sit:text-label-md sit:font-semibold sit:leading-xs sit:tracking-normal">Label Medium Semibold</div>
`;

const LabelMdRegularTemplate = () => html`
  <div class="sit:text-label-md sit:font-regular sit:leading-xs sit:tracking-normal">Label Medium Regular</div>
`;

const LabelMdLightTemplate = () => html`
  <div class="sit:text-label-md sit:font-light sit:leading-xs sit:tracking-normal">Label Medium Light</div>
`;

const LabelSmSemiboldTemplate = () => html`
  <div class="sit:text-label-sm sit:font-semibold sit:leading-2-xs sit:tracking-normal">Label Small Semibold</div>
`;

const LabelSmRegularTemplate = () => html`
  <div class="sit:text-label-sm sit:font-regular sit:leading-2-xs sit:tracking-normal">Label Small Regular</div>
`;

const LabelXsSemiboldTemplate = () => html`
  <div class="sit:text-label-xs sit:font-semibold sit:leading-3-xs sit:tracking-normal">Label XS Semibold</div>
`;

const LabelXsRegularTemplate = () => html`
  <div class="sit:text-label-xs sit:font-regular sit:leading-3-xs sit:tracking-normal">Label XS Regular</div>
`;

const FormBuiltInTemplate = () => html` <sit-input label="Field label"></sit-input> `;

const FormFallbackTemplate = () => html`
  <label class="sit:text-label-md sit:font-semibold sit:leading-xs sit:tracking-normal">Field Label</label>
`;

export const LabelLgSemibold = {
  render: LabelLgSemiboldTemplate.bind({}),
  name: "Large Semibold"
};

export const LabelLgRegular = {
  render: LabelLgRegularTemplate.bind({}),
  name: "Large Regular"
};

export const LabelMdSemibold = {
  render: LabelMdSemiboldTemplate.bind({}),
  name: "Medium Semibold"
};

export const LabelMdRegular = {
  render: LabelMdRegularTemplate.bind({}),
  name: "Medium Regular"
};

export const LabelMdLight = {
  render: LabelMdLightTemplate.bind({}),
  name: "Medium Light"
};

export const LabelSmSemibold = {
  render: LabelSmSemiboldTemplate.bind({}),
  name: "Small Semibold"
};

export const LabelSmRegular = {
  render: LabelSmRegularTemplate.bind({}),
  name: "Small Regular"
};

export const LabelXsSemibold = {
  render: LabelXsSemiboldTemplate.bind({}),
  name: "XS Semibold"
};

export const LabelXsRegular = {
  render: LabelXsRegularTemplate.bind({}),
  name: "XS Regular"
};

export const FormBuiltIn = {
  render: FormBuiltInTemplate.bind({}),
  name: "Form — Built-in Label"
};

export const FormFallback = {
  render: FormFallbackTemplate.bind({}),
  name: "Form — Fallback Label"
};
