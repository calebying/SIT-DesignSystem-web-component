import { SitSidenav } from "./sit-sidenav";
import { SitSidenavItem } from "./sit-sidenav-item";
import { SitSidenavLink } from "./sit-sidenav-link";
declare global {
    interface HTMLElementTagNameMap {
        "sit-sidenav": SitSidenav;
        "sit-sidenav-item": SitSidenavItem;
        "sit-sidenav-link": SitSidenavLink;
    }
}
