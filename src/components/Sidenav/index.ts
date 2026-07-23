import { SitSidenav } from "./sit-sidenav";
import { SitSidenavItem } from "./sit-sidenav-item";
import { SitSidenavLink } from "./sit-sidenav-link";
import { register } from "../../utils/ce-registry";

register("sit-sidenav", SitSidenav);
register("sit-sidenav-item", SitSidenavItem);
register("sit-sidenav-link", SitSidenavLink);
declare global {
  interface HTMLElementTagNameMap {
    "sit-sidenav": SitSidenav;
    "sit-sidenav-item": SitSidenavItem;
    "sit-sidenav-link": SitSidenavLink;
  }
}
