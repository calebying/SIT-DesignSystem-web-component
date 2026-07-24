import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args =>
  html`
    <div class="container">
      <sit-image-card
        ?stretchedLink=${ifDefined(args.stretchedLink)}
        ?disabled=${ifDefined(args.disabled)}
        ?noPadding=${ifDefined(args.noPadding)}
        ?hideBorder=${ifDefined(args.hideBorder)}
        ?tinted=${ifDefined(args.tinted)}
        orientation=${ifDefined(args.orientation)}
        imagePosition=${ifDefined(args.imagePosition)}
        imageAdjustment=${ifDefined(args.imageAdjustment)}
      >
        <img
          slot="image"
          alt="img alternate text goes here"
          width="80"
          height="80"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        />
        <sit-badge variant="primary" slot="image-badge">New</sit-badge>
        <sit-icon-button name="heart" size="sm" slot="image-action"></sit-icon-button>
        <sit-badge variant="primary" slot="upper">Limited seat</sit-badge>
        <span slot="subtitle">EVENTS</span>
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
      </sit-image-card>
    </div>
  `;

export const args = { orientation: "vertical", imagePosition: "before", imageAdjustment: "default" };

export const parameters = {};

export const play = undefined;
