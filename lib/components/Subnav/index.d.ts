import { SitSubnav } from "./sit-subnav";
import { SitSubnavItem } from "./sit-subnav-item";
declare global {
    interface HTMLElementTagNameMap {
        "sit-subnav": SitSubnav;
        "sit-subnav-item": SitSubnavItem;
    }
}
