import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = ({ variant, orientation, density }) => html`
  <sit-tab-group variant=${ifDefined(variant)} orientation=${ifDefined(orientation)} density=${ifDefined(density)}>
    <sit-tab slot="nav" panel="home" ariaLabel="Home">Home</sit-tab>
    <sit-tab slot="nav" panel="profile" ariaLabel="Profile">Profile</sit-tab>
    <sit-tab slot="nav" panel="contact" ariaLabel="Contact">Contact</sit-tab>
    <sit-tab-panel name="home"
      >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book.</sit-tab-panel
    >
    <sit-tab-panel name="profile"
      >It is a long established fact that a reader will be distracted by the readable content of a page when looking at
      its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
      opposed to using 'Content here, content here',</sit-tab-panel
    >
    <sit-tab-panel name="contact">Contact information</sit-tab-panel>
  </sit-tab-group>
`;

export const args = {
  // name: "home",
  // panel: "home"
};

export const parameters = {
  // controls: { exclude: ["name", "panel", "active", "variant"] }
};

export const play = undefined;
