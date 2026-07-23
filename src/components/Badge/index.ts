import { SitBadge } from "./sgds-badge";
import { register } from "../../utils/ce-registry";

register("sgds-badge", SitBadge);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-badge": SitBadge;
  }
}
