import { SitDivider } from "./sit-divider";
import { register } from "../../utils/ce-registry";

register("sit-divider", SitDivider);

declare global {
  interface HTMLElementTagNameMap {
    "sit-divider": SitDivider;
  }
}
