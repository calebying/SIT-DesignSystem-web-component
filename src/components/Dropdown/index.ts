import { SitDropdown } from "./sgds-dropdown";
import { SitDropdownItem } from "./sgds-dropdown-item";
import { register } from "../../utils/ce-registry";

register("sgds-dropdown", SitDropdown);
register("sgds-dropdown-item", SitDropdownItem);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-dropdown": SitDropdown;
    "sgds-dropdown-item": SitDropdownItem;
  }
}
