import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

const ExtendedTemplate = args => html`
  <sit-footer
    contactHref="https://form.gov.sg/"
    feedbackHref="https://form.gov.sg/"
    faqHref="https://form.gov.sg/"
    privacyHref="https://www.designsystem.tech.gov.sg/privacy/"
    termsOfUseHref="https://www.designsystem.tech.gov.sg/terms-of-use/"
    sitemapHref="#"
    tone=${ifDefined(args.tone)}
    layout=${ifDefined(args.layout)}
  >
    <h3 slot="title">Name of portal/digital service</h3>
    <p slot="description">Description of portal/digital service</p>
    <sit-footer-item slot="items">
      <div slot="title">Application guidelines</div>
      <sit-link><a href="#">Lorem Ipsum One</a></sit-link>
      <sit-link><a href="#">Second Level B</a></sit-link>
      <sit-link><a href="#">Lorem Ipsum Three</a></sit-link>
    </sit-footer-item>
    <sit-footer-item slot="items">
      <div slot="title">Legislation</div>
      <sit-link><a href="#">Legislation</a></sit-link>
      <sit-link><a href="#">External Link One</a></sit-link>
      <sit-link><a href="#">External Link Two</a></sit-link>
    </sit-footer-item>
    <sit-footer-item slot="items">
      <div slot="title">Resources</div>
      <sit-link><a href="#">All</a></sit-link>
      <sit-link><a href="#">Forms and Templates</a></sit-link>
      <sit-link><a href="#">Guides</a></sit-link>
    </sit-footer-item>
    <sit-footer-item slot="items">
      <div slot="title">Resources</div>
      <sit-link><a href="#">All</a></sit-link>
      <sit-link><a href="#">Forms and Templates</a></sit-link>
      <sit-link><a href="#">Guides</a></sit-link>
    </sit-footer-item>
    <sit-footer-item slot="items">
      <div slot="title">Resources</div>
      <sit-link><a href="#">All</a></sit-link>
      <sit-link><a href="#">Forms and Templates</a></sit-link>
      <sit-link><a href="#">Guides</a></sit-link>
    </sit-footer-item>
    <sit-footer-item slot="items">
      <div slot="title">Resources</div>
      <sit-link><a href="#">All</a></sit-link>
      <sit-link><a href="#">Forms and Templates</a></sit-link>
      <sit-link><a href="#">Guides</a></sit-link>
    </sit-footer-item>
    <a slot="social-media" href="https://www.facebook.com">
      <sit-icon name="facebook"></sit-icon>
    </a>
    <a slot="social-media" href="https://www.instagram.com">
      <sit-icon name="instagram"></sit-icon>
    </a>
    <a slot="social-media" href="https://www.linkedin.com">
      <sit-icon name="linkedin"></sit-icon>
    </a>
    <a slot="social-media" href="https://www.x.com">
      <sit-icon name="twitter-x"></sit-icon>
    </a>
    <a slot="social-media" href="https://www.youtube.com">
      <sit-icon name="youtube"></sit-icon>
    </a>
  </sit-footer>
`;

export const Extended = {
  render: ExtendedTemplate.bind({}),
  name: "Extended",
  args: {},
  parameters: { layout: "fullscreen" },
  tags: []
};

export const NeutralTone = {
  render: Template.bind({}),
  name: "Neutral Tone",
  args: { ...args, tone: "neutral" },
  parameters,
  tags: []
};

export const NeutralToneExtended = {
  render: ExtendedTemplate.bind({}),
  name: "Neutral Tone Extended",
  args: { tone: "neutral" },
  parameters: { layout: "fullscreen" },
  tags: []
};
