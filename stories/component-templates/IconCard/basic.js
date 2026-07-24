import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args =>
  html`
    <div class="container">
      <sit-icon-card
        ?stretchedLink=${ifDefined(args.stretchedLink)}
        ?disabled=${ifDefined(args.disabled)}
        ?noPadding=${ifDefined(args.noPadding)}
        ?hideBorder=${ifDefined(args.hideBorder)}
        ?tinted=${ifDefined(args.tinted)}
        orientation=${ifDefined(args.orientation)}
      >
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

export const args = { orientation: "vertical" };

export const parameters = {};

export const play = undefined;
