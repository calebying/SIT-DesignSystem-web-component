import { SitSwitch } from "./sgds-switch";
import { register } from "../../utils/ce-registry";

register("sgds-switch", SitSwitch);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-switch": SitSwitch;
  }
}
