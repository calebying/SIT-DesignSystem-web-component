import { SitSwitch } from "./sit-switch";
import { register } from "../../utils/ce-registry";

register("sit-switch", SitSwitch);

declare global {
  interface HTMLElementTagNameMap {
    "sit-switch": SitSwitch;
  }
}
