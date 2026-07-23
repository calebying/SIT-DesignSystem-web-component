import { SitTooltip } from "./sit-tooltip";
import { register } from "../../utils/ce-registry";

register("sit-tooltip", SitTooltip);

declare global {
  interface HTMLElementTagNameMap {
    "sit-tooltip": SitTooltip;
  }
}
