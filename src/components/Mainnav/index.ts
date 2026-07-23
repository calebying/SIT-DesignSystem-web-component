import { SitMainnav } from "./sgds-mainnav";
import { SitMainnavDropdown } from "./sgds-mainnav-dropdown";
import { SitMainnavItem } from "./sgds-mainnav-item";
import { register } from "../../utils/ce-registry";

register("sgds-mainnav", SitMainnav);
register("sgds-mainnav-dropdown", SitMainnavDropdown);
register("sgds-mainnav-item", SitMainnavItem);
declare global {
  interface HTMLElementTagNameMap {
    "sgds-mainnav": SitMainnav;
    "sgds-mainnav-dropdown": SitMainnavDropdown;
    "sgds-mainnav-item": SitMainnavItem;
  }
}
