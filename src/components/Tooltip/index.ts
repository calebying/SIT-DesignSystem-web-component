import { SitTooltip } from "./sgds-tooltip";
import { register } from "../../utils/ce-registry";

register("sgds-tooltip", SitTooltip);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-tooltip": SitTooltip;
  }
}
