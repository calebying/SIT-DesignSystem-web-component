import { SitIcon } from "./sit-icon";
import { register } from "../../utils/ce-registry";

register("sit-icon", SitIcon);

declare global {
  interface HTMLElementTagNameMap {
    "sit-icon": SitIcon;
  }
}
