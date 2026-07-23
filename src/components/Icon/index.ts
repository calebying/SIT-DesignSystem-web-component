import { SitIcon } from "./sgds-icon";
import { register } from "../../utils/ce-registry";

register("sgds-icon", SitIcon);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-icon": SitIcon;
  }
}
