import { SitDropdown } from "./sit-dropdown";
import { SitDropdownItem } from "./sit-dropdown-item";
import { register } from "../../utils/ce-registry";

register("sit-dropdown", SitDropdown);
register("sit-dropdown-item", SitDropdownItem);

declare global {
  interface HTMLElementTagNameMap {
    "sit-dropdown": SitDropdown;
    "sit-dropdown-item": SitDropdownItem;
  }
}
