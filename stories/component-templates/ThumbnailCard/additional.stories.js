import { html } from "lit";

export const Stretched = {
  render: Template.bind({}),
  name: "Stretched link",
  args: { ...args, stretchedLink: true },
  parameters: {}
};

export const Disabled = {
  render: Template.bind({}),
  name: "Disabled state",
  args: { ...args, disabled: true },
  parameters: {}
};

const OrientationTemplate = () =>
  html`
    <div class="container">
      <sit-thumbnail-card>
        <img slot="thumbnail" alt="img alternate text goes here" width="64" height="64" src="/logo.png" />
        <sit-badge variant="primary" slot="upper">New</sit-badge>
        <span slot="subtitle">EXPLORE THE FEATURES</span>
        <span slot="title">Innovative solutions for you</span>
        <sit-icon-list size="sm">
          <div role="listitem"><sit-icon size="md" name="calendar"></sit-icon>12 September</div>
          <div role="listitem"><sit-icon size="md" name="laptop"></sit-icon>Online</div>
        </sit-icon-list>
        <span slot="description"
          >Discover how our platform can streamline your workflow and enhance productivity. With cutting-edge technology
          and user-friendly design, we empower you to achieve more.</span
        >
        <div slot="lower">
          <sit-badge variant="neutral" outlined>Design</sit-badge>
        </div>
        <sit-link slot="footer">
          <a href="#" aria-label="Register now">Register now <sit-icon name="arrow-right"></sit-icon></a>
        </sit-link>
      </sit-thumbnail-card>
      <sit-thumbnail-card orientation="horizontal">
        <img slot="thumbnail" alt="img alternate text goes here" width="64" height="64" src="/logo.png" />
        <sit-badge variant="primary" slot="upper">New</sit-badge>
        <span slot="subtitle">EXPLORE THE FEATURES</span>
        <span slot="title">Innovative solutions for you</span>
        <sit-icon-list size="sm">
          <div role="listitem"><sit-icon size="md" name="calendar"></sit-icon>12 September</div>
          <div role="listitem"><sit-icon size="md" name="laptop"></sit-icon>Online</div>
        </sit-icon-list>
        <span slot="description"
          >Discover how our platform can streamline your workflow and enhance productivity. With cutting-edge technology
          and user-friendly design, we empower you to achieve more.</span
        >
        <div slot="lower">
          <sit-badge variant="neutral" outlined>Design</sit-badge>
        </div>
        <sit-link slot="footer">
          <a href="#" aria-label="Register now">Register now <sit-icon name="arrow-right"></sit-icon></a>
        </sit-link>
      </sit-thumbnail-card>
    </div>
  `;

export const Orientation = {
  render: OrientationTemplate.bind({}),
  name: "Orientation",
  args: {},
  parameters: {}
};

export const HideBorder = {
  render: Template.bind({}),
  name: "Hide border",
  args: { ...args, hideBorder: true },
  parameters: {}
};

export const Tinted = {
  render: Template.bind({}),
  name: "Tinted",
  args: { ...args, tinted: true },
  parameters: {}
};

const NoPaddingTemplate = () =>
  html`
    <div class="container">
      <sit-thumbnail-card noPadding>
        <img slot="thumbnail" alt="img alternate text goes here" width="64" height="64" src="/logo.png" />
        <sit-badge variant="primary" slot="upper">New</sit-badge>
        <span slot="subtitle">EXPLORE THE FEATURES</span>
        <span slot="title">Innovative solutions for you</span>
        <sit-icon-list size="sm">
          <div role="listitem"><sit-icon size="md" name="calendar"></sit-icon>12 September</div>
          <div role="listitem"><sit-icon size="md" name="laptop"></sit-icon>Online</div>
        </sit-icon-list>
        <span slot="description"
          >Discover how our platform can streamline your workflow and enhance productivity. With cutting-edge technology
          and user-friendly design, we empower you to achieve more.</span
        >
        <div slot="lower">
          <sit-badge variant="neutral" outlined>Design</sit-badge>
        </div>
        <sit-link slot="footer">
          <a href="#" aria-label="Register now">Register now <sit-icon name="arrow-right"></sit-icon></a>
        </sit-link>
      </sit-thumbnail-card>
      <sit-thumbnail-card orientation="horizontal" noPadding>
        <img slot="thumbnail" alt="img alternate text goes here" width="64" height="64" src="/logo.png" />
        <sit-badge variant="primary" slot="upper">New</sit-badge>
        <span slot="subtitle">EXPLORE THE FEATURES</span>
        <span slot="title">Innovative solutions for you</span>
        <sit-icon-list size="sm">
          <div role="listitem"><sit-icon size="md" name="calendar"></sit-icon>12 September</div>
          <div role="listitem"><sit-icon size="md" name="laptop"></sit-icon>Online</div>
        </sit-icon-list>
        <span slot="description"
          >Discover how our platform can streamline your workflow and enhance productivity. With cutting-edge technology
          and user-friendly design, we empower you to achieve more.</span
        >
        <div slot="lower">
          <sit-badge variant="neutral" outlined>Design</sit-badge>
        </div>
        <sit-link slot="footer">
          <a href="#" aria-label="Register now">Register now <sit-icon name="arrow-right"></sit-icon></a>
        </sit-link>
      </sit-thumbnail-card>
    </div>
  `;

export const NoPadding = {
  render: NoPaddingTemplate.bind({}),
  name: "No padding",
  args: {},
  parameters: {}
};
