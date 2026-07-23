import { SitBadge } from "./sit-badge";
import { register } from "../../utils/ce-registry";

register("sit-badge", SitBadge);

declare global {
  interface HTMLElementTagNameMap {
    "sit-badge": SitBadge;
  }
}
