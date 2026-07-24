import { html } from "lit";

export const Template = ({ active, disabled }) => html`<sit-subnav>
  <h5 slot="header">Header</h5>
  <sit-subnav-item ?active=${active} ?disabled=${disabled}>
    <a href="#">Overview</a>
  </sit-subnav-item>
  <sit-subnav-item disabled>
    <a href="#">On-site Activites</a>
  </sit-subnav-item>
  <sit-subnav-item>
    <a href="#">Programme</a>
  </sit-subnav-item>
  <sit-subnav-item>
    <a href="#">Speakers</a>
  </sit-subnav-item>
  <sit-subnav-item>
    <a href="#">Partners</a>
  </sit-subnav-item>
  <sit-subnav-item>
    <a href="#">Recordings</a>
  </sit-subnav-item>
  <sit-subnav-item>
    <a href="#">FAQ</a>
  </sit-subnav-item>
  <sit-button slot="actions" size="sm" fullWidth>Register</sit-button>
  <sit-button slot="actions" size="sm" fullWidth>Exhibit</sit-button>
</sit-subnav>`;

export const args = {};

export const parameters = {};

export const play = undefined;
