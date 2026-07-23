import { SitSubnav } from "./sit-subnav";
import { SitSubnavItem } from "./sit-subnav-item";
import { register } from "../../utils/ce-registry";

register("sit-subnav", SitSubnav);
register("sit-subnav-item", SitSubnavItem);

declare global {
  interface HTMLElementTagNameMap {
    "sit-subnav": SitSubnav;
    "sit-subnav-item": SitSubnavItem;
  }
}
