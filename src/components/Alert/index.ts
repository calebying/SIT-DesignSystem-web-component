import { SitAlert } from "./sgds-alert";
import { SitAlertLink } from "./sgds-alert-link";
import { register } from "../../utils/ce-registry";

register("sgds-alert", SitAlert);
register("sgds-alert-link", SitAlertLink);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-alert-link": SitAlertLink;
    "sgds-alert": SitAlert;
  }
}
