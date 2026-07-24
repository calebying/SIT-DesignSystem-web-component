import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args =>
  html`
    <div class="container">
      <sit-thumbnail-card
        ?stretchedLink=${ifDefined(args.stretchedLink)}
        ?disabled=${ifDefined(args.disabled)}
        ?noPadding=${ifDefined(args.noPadding)}
        ?hideBorder=${ifDefined(args.hideBorder)}
        ?tinted=${ifDefined(args.tinted)}
        orientation=${ifDefined(args.orientation)}
      >
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

export const args = { orientation: "vertical" };

export const parameters = {};

export const play = undefined;
