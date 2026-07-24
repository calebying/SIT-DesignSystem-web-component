import { html } from "lit";
import { allModes } from "../../../.storybook/modes";

export const Template = args => html`<sit-system-banner
  ?dismissible=${args.dismissible}
  ?show=${args.show}
  ?noClampAction=${args.noClampAction}
  ?fluid=${args.fluid}
>
  <sit-system-banner-item>
    <sit-icon slot="icon" name="placeholder" size="md"></sit-icon>
    Etiam suscipit nisi eget porta cursus. Ut sit amet felis aliquet, pellentesque mi at, vulputate nunc. Vivamus ac
    facilisis tellus.
    <sit-link size="sm" variant="light" slot="action"
      ><a href="#">Action link<sit-icon name="arrow-right"></sit-icon></a
    ></sit-link>
  </sit-system-banner-item>
  <sit-system-banner-item>
    <sit-icon slot="icon" name="placeholder" size="md"></sit-icon>
    Etiam suscipit nisi eget porta cursus. Ut sit amet felis aliquet, pellentesque mi at, vulputate nunc. Vivamus ac
    facilisis tellus. Maecenas ac libero scelerisque tellus maximus accumsan a vehicula arcu. Aenean quis leo gravida,
    congue sapien eu, rhoncus
    <sit-button href="#" slot="action" size="sm" tone="fixed-light" variant="outline">
      Action button
      <sit-icon name="arrow-right" slot="rightIcon" size="md"></sit-icon>
    </sit-button>
  </sit-system-banner-item>
  <sit-system-banner-item>
    <sit-icon slot="icon" name="placeholder" size="md"></sit-icon>
    Etiam suscipit nisi eget porta cursus. Ut sit amet felis aliquet, pellentesque mi at, vulputate nunc. Vivamus ac
    facilisis tellus. Maecenas ac libero scelerisque tellus maximus accumsan a vehicula arcu. Aenean quis leo gravida,
    congue sapien eu, rhoncus
    <sit-link size="sm" variant="light" slot="action"
      ><a href="#">Action link<sit-icon name="arrow-right" size="md"></sit-icon></a
    ></sit-link>
  </sit-system-banner-item>
</sit-system-banner>`;

export const args = {
  show: true
};

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
