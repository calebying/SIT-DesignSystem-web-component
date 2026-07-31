import { SitDropdown } from "./sit-dropdown";
import { SitDropdownItem } from "./sit-dropdown-item";
declare global {
    interface HTMLElementTagNameMap {
        "sit-dropdown": SitDropdown;
        "sit-dropdown-item": SitDropdownItem;
    }
}
