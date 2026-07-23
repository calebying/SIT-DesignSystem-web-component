import { SitMainnav } from "./sit-mainnav";
import { SitMainnavDropdown } from "./sit-mainnav-dropdown";
import { SitMainnavItem } from "./sit-mainnav-item";
import { register } from "../../utils/ce-registry";

register("sit-mainnav", SitMainnav);
register("sit-mainnav-dropdown", SitMainnavDropdown);
register("sit-mainnav-item", SitMainnavItem);
declare global {
  interface HTMLElementTagNameMap {
    "sit-mainnav": SitMainnav;
    "sit-mainnav-dropdown": SitMainnavDropdown;
    "sit-mainnav-item": SitMainnavItem;
  }
}
