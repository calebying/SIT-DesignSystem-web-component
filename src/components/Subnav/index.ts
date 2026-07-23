import { SitSubnav } from "./sgds-subnav";
import { SitSubnavItem } from "./sgds-subnav-item";
import { register } from "../../utils/ce-registry";

register("sgds-subnav", SitSubnav);
register("sgds-subnav-item", SitSubnavItem);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-subnav": SitSubnav;
    "sgds-subnav-item": SitSubnavItem;
  }
}
