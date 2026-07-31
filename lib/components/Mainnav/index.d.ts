import { SitMainnav } from "./sit-mainnav";
import { SitMainnavDropdown } from "./sit-mainnav-dropdown";
import { SitMainnavItem } from "./sit-mainnav-item";
declare global {
    interface HTMLElementTagNameMap {
        "sit-mainnav": SitMainnav;
        "sit-mainnav-dropdown": SitMainnavDropdown;
        "sit-mainnav-item": SitMainnavItem;
    }
}
