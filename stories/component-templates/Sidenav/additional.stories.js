import { html } from "lit";

const SidenavItemAsLinkTemplate = args =>
  html` <sit-sidenav-item ariaLabel="Item as a link"><a href="#">Item as a link</a></sit-sidenav-item> `;

const SidenavItemAsMenuTemplate = args =>
  html`
    <sit-sidenav-item ariaLabel="SidenavItem as menu">
      <span slot="title"> SidenavItem as menu </span>
      <sit-sidenav-link>
        <a href="#"> SidenavLink 1</a>
      </sit-sidenav-link>
      <sit-sidenav-link>
        <a href="#">SidenavLink 2</a>
      </sit-sidenav-link>
    </sit-sidenav-item>
  `;
const EmbeddedMenuTemplate = args =>
  html`
    <sit-sidenav>
      <sit-sidenav-item ariaLabel="SidenavItem L1">
        <span slot="title"> SidenavItem L1</span>
        <sit-sidenav-link>
          <a href="#"> SidenavLink 1 L2</a>
        </sit-sidenav-link>
        <sit-sidenav-link>
          <a href="#">SidenavLink 2 L2</a>
        </sit-sidenav-link>
        <sit-sidenav-item ariaLabel="SidenavItem L2">
          <span slot="title"> SidenavItem L2 </span>
          <sit-sidenav-link>
            <a href="#"> SidenavLink 1 L3</a>
          </sit-sidenav-link>
          <sit-sidenav-link active>
            <a href="#">SidenavLink 2 L3</a>
          </sit-sidenav-link>
        </sit-sidenav-item>
      </sit-sidenav-item>
    </sit-sidenav>
  `;
const IconTemplate = args =>
  html`
    <sit-sidenav>
      <sit-sidenav-item ariaLabel="SidenavItem L1">
        <span slot="title"> SidenavItem L1</span>
        <sit-icon slot="icon" name="placeholder"></sit-icon>
        <sit-sidenav-link>
          <a href="#"> SidenavLink 1 L2</a>
        </sit-sidenav-link>
        <sit-sidenav-link>
          <a href="#">SidenavLink 2 L2</a>
        </sit-sidenav-link>
      </sit-sidenav-item>
      <sit-sidenav-item ariaLabel="SidenavItem L1 (link)">
        <a href="#"> <sit-icon name="placeholder"></sit-icon> SidenavItem L1 (link)</a>
      </sit-sidenav-item>
    </sit-sidenav>
  `;
const DisabledTemplate = args =>
  html`
    <sit-sidenav>
      <sit-sidenav-item ariaLabel="SidenavItem L1" disabled>
        <span slot="title"> SidenavItem L1</span>
        <sit-icon slot="icon" name="placeholder"></sit-icon>
        <sit-sidenav-link>
          <a href="#"> SidenavLink 1 L2</a>
        </sit-sidenav-link>
        <sit-sidenav-link>
          <a href="#">SidenavLink 2 L2</a>
        </sit-sidenav-link>
      </sit-sidenav-item>
      <sit-sidenav-item ariaLabel="SidenavItem L1 (link)" disabled>
        <a href="#"> <sit-icon name="placeholder"></sit-icon> SidenavItem L1 (link)</a>
      </sit-sidenav-item>
    </sit-sidenav>
  `;
const DisabledLinkTemplate = args =>
  html`
    <sit-sidenav>
      <sit-sidenav-item ariaLabel="SidenavItem L1">
        <span slot="title"> SidenavItem L1</span>
        <sit-icon slot="icon" name="placeholder"></sit-icon>
        <sit-sidenav-link disabled>
          <a href="#"> SidenavLink 1 L2</a>
        </sit-sidenav-link>
        <sit-sidenav-link>
          <a href="#">SidenavLink 2 L2</a>
        </sit-sidenav-link>
      </sit-sidenav-item>
    </sit-sidenav>
  `;

export const SidenavItemAsLink = {
  render: SidenavItemAsLinkTemplate.bind({}),
  name: "SidenavItem as first level link",
  args: {},
  parameters: {}
};

export const SidenavItemAsMenu = {
  render: SidenavItemAsMenuTemplate.bind({}),
  name: "SidenavItem as menu",
  args: {},
  parameters: {}
};

export const EmbeddedMenu = {
  render: EmbeddedMenuTemplate.bind({}),
  name: "SidenavItem as an embedded menu",
  args: {},
  parameters: {}
};

export const IconsOnFirstLevel = {
  render: IconTemplate.bind({}),
  name: "Icons",
  args: {},
  parameters: {}
};
export const ActiveLinkState = {
  render: Template.bind({}),
  name: "Active sidenav link",
  args: { ...args, activeSNL: true },
  parameters: {}
};
export const ActiveaSidenavItemAsLinkState = {
  render: Template.bind({}),
  name: "Active sidenav item as a link",
  args: { ...args, activeSNIAsLink: true },
  parameters: {}
};
export const ActiveaSidenavItemAsMenu = {
  render: Template.bind({}),
  name: "Active sidenav item as a menu",
  args: { ...args, active: true },
  parameters: {}
};
export const DisabledItem = {
  render: DisabledTemplate.bind({}),
  name: "Disabled sidenav item",
  args: { ...args, active: true },
  parameters: {}
};
export const DisabledLink = {
  render: DisabledLinkTemplate.bind({}),
  name: "Disabled sidenav link",
  args: { ...args, active: true },
  parameters: {}
};
