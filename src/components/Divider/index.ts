import { SitDivider } from "./sgds-divider";
import { register } from "../../utils/ce-registry";

register("sgds-divider", SitDivider);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-divider": SitDivider;
  }
}
