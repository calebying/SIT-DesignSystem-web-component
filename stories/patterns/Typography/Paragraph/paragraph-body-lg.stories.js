import { html } from "lit";

const BodyLgTemplate = () => html`
  <div style="max-width: var(--Sit-text-max-width);">
    <p class="sit:text-body-lg sit:font-regular sit:leading-xs sit:tracking-normal sit:text-body-default sit:mb-xl">
      Singapore's digital government services are designed to be simple, accessible, and reliable. Our mission is to
      help residents access what they need quickly, without unnecessary complexity or barriers.
    </p>

    <p class="sit:text-body-lg sit:font-regular sit:leading-xs sit:tracking-normal sit:text-body-default sit:mb-xl">
      We work closely with agencies across the public sector to deliver integrated experiences that reflect the real
      needs of citizens. Every decision is grounded in research, usability testing, and feedback from the people we
      serve.
    </p>

    <p class="sit:text-body-lg sit:font-regular sit:leading-xs sit:tracking-normal sit:text-body-default">
      As technology evolves, so do our standards. We continuously improve the design system to ensure it remains
      relevant, inclusive, and easy to adopt for teams building government digital products.
    </p>
  </div>
`;

export default {
  title: "Patterns/Typography/Paragraph",
  tags: ["!autodocs"],
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    interactions: { disable: true },
    layout: "padded"
  }
};

export const BodyLarge = {
  render: BodyLgTemplate.bind({}),
  name: "Body Large"
};
