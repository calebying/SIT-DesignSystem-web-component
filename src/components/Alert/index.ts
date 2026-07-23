import { SitAlert } from "./sit-alert";
import { SitAlertLink } from "./sit-alert-link";
import { register } from "../../utils/ce-registry";

register("sit-alert", SitAlert);
register("sit-alert-link", SitAlertLink);

declare global {
  interface HTMLElementTagNameMap {
    "sit-alert-link": SitAlertLink;
    "sit-alert": SitAlert;
  }
}
