import { SitDrawer } from "./sit-drawer";
import { register } from "../../utils/ce-registry";

register("sit-drawer", SitDrawer);

declare global {
  interface HTMLElementTagNameMap {
    "sit-drawer": SitDrawer;
  }
}
