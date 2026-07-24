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
      <sit-icon-card>
        <sit-icon slot="icon" name="box-seam" size="3-xl"></sit-icon>
        <sit-badge variant="primary" slot="upper">New</sit-badge>
        <span slot="subtitle">EXPLORE THE FEATURES</span>
        <span slot="title">Innovative solutions for you</span>
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <sit-icon-list size="sm">
            <div role="listitem"><sit-icon size="md" name="calendar"></sit-icon>12 September</div>
            <div role="listitem"><sit-icon size="md" name="laptop"></sit-icon>Online</div>
          </sit-icon-list>
        </div>
        <span slot="description"
          >Discover how our platform can streamline your workflow and enhance productivity. With cutting-edge technology
          and user-friendly design, we empower you to achieve more.</span
        >
        <div slot="lower" style="display: flex; flex-wrap: wrap; gap: 8px;">
          <sit-badge variant="neutral" outlined>Design</sit-badge>
          <sit-badge variant="neutral" outlined>Research</sit-badge>
        </div>
        <sit-link slot="footer">
          <a href="#" aria-label="Register now">Register now <sit-icon name="arrow-right"></sit-icon></a>
        </sit-link>
      </sit-icon-card>
      <sit-icon-card orientation="horizontal">
        <sit-icon slot="icon" name="box-seam" size="3-xl"></sit-icon>
        <sit-badge variant="primary" slot="upper">New</sit-badge>
        <span slot="subtitle">EXPLORE THE FEATURES</span>
        <span slot="title">Innovative solutions for you</span>
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <sit-icon-list size="sm">
            <div role="listitem"><sit-icon size="md" name="calendar"></sit-icon>12 September</div>
            <div role="listitem"><sit-icon size="md" name="laptop"></sit-icon>Online</div>
          </sit-icon-list>
        </div>
        <span slot="description"
          >Discover how our platform can streamline your workflow and enhance productivity. With cutting-edge technology
          and user-friendly design, we empower you to achieve more.</span
        >
        <div slot="lower" style="display: flex; flex-wrap: wrap; gap: 8px;">
          <sit-badge variant="neutral" outlined>Design</sit-badge>
          <sit-badge variant="neutral" outlined>Research</sit-badge>
        </div>
        <sit-link slot="footer">
          <a href="#" aria-label="Register now">Register now <sit-icon name="arrow-right"></sit-icon></a>
        </sit-link>
      </sit-icon-card>
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
      <sit-icon-card noPadding>
        <sit-icon slot="icon" name="box-seam" size="3-xl"></sit-icon>
        <sit-badge variant="primary" slot="upper">New</sit-badge>
        <span slot="subtitle">EXPLORE THE FEATURES</span>
        <span slot="title">Innovative solutions for you</span>
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <sit-icon-list size="sm">
            <div role="listitem"><sit-icon size="md" name="calendar"></sit-icon>12 September</div>
            <div role="listitem"><sit-icon size="md" name="laptop"></sit-icon>Online</div>
          </sit-icon-list>
        </div>
        <span slot="description"
          >Discover how our platform can streamline your workflow and enhance productivity. With cutting-edge technology
          and user-friendly design, we empower you to achieve more.</span
        >
        <div slot="lower" style="display: flex; flex-wrap: wrap; gap: 8px;">
          <sit-badge variant="neutral" outlined>Design</sit-badge>
          <sit-badge variant="neutral" outlined>Research</sit-badge>
        </div>
        <sit-link slot="footer">
          <a href="#" aria-label="Register now">Register now <sit-icon name="arrow-right"></sit-icon></a>
        </sit-link>
      </sit-icon-card>
      <sit-icon-card orientation="horizontal" noPadding>
        <sit-icon slot="icon" name="box-seam" size="3-xl"></sit-icon>
        <sit-badge variant="primary" slot="upper">New</sit-badge>
        <span slot="subtitle">EXPLORE THE FEATURES</span>
        <span slot="title">Innovative solutions for you</span>
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <sit-icon-list size="sm">
            <div role="listitem"><sit-icon size="md" name="calendar"></sit-icon>12 September</div>
            <div role="listitem"><sit-icon size="md" name="laptop"></sit-icon>Online</div>
          </sit-icon-list>
        </div>
        <span slot="description"
          >Discover how our platform can streamline your workflow and enhance productivity. With cutting-edge technology
          and user-friendly design, we empower you to achieve more.</span
        >
        <div slot="lower" style="display: flex; flex-wrap: wrap; gap: 8px;">
          <sit-badge variant="neutral" outlined>Design</sit-badge>
          <sit-badge variant="neutral" outlined>Research</sit-badge>
        </div>
        <sit-link slot="footer">
          <a href="#" aria-label="Register now">Register now <sit-icon name="arrow-right"></sit-icon></a>
        </sit-link>
      </sit-icon-card>
    </div>
  `;

export const NoPadding = {
  render: NoPaddingTemplate.bind({}),
  name: "No padding",
  args: {},
  parameters: {}
};
