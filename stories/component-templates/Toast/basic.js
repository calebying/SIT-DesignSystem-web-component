import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args =>
  html`
    <div style="height:400px;">
      <sit-toast-container position=${ifDefined(args.position)}>
        <sit-toast
          ?show=${args.show}
          variant=${ifDefined(args.variant)}
          ?autohide=${args.autohide}
          delay=${ifDefined(args.delay)}
          ?noAnimation=${args.noAnimation}
          ?dismissable=${args.dismissable}
          title=${ifDefined(args.title)}
        >
          <sit-icon slot="icon" name="info-circle-fill" size="md"></sit-icon>
          This is a toast notifications
          <sit-link slot="action" size="sm"><a href="#" target="_blank">Action</a></sit-link>
        </sit-toast>
      </sit-toast-container>
    </div>
  `;

export const args = {
  show: true,
  position: "bottom-end"
};

export const parameters = {
  docs: {}
};

export const play = undefined;
