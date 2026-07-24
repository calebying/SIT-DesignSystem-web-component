import { html } from "lit";
import { allModes } from "../../../.storybook/modes";

export const Template = ({ fluid }) => html` <sit-masthead ?fluid=${fluid}></sit-masthead> `;

export const args = {};

export const parameters = {
  layout: "fullscreen",
  chromatic: {
    modes: {
      mobile: allModes["sm"],
      desktop: allModes["lg"]
    }
  }
};

export const play = undefined;
