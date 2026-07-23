import { SitDrawer } from "./sgds-drawer";
import { register } from "../../utils/ce-registry";

register("sgds-drawer", SitDrawer);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-drawer": SitDrawer;
  }
}
