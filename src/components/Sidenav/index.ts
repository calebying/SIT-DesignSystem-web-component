import { SitSidenav } from "./sgds-sidenav";
import { SitSidenavItem } from "./sgds-sidenav-item";
import { SitSidenavLink } from "./sgds-sidenav-link";
import { register } from "../../utils/ce-registry";

register("sgds-sidenav", SitSidenav);
register("sgds-sidenav-item", SitSidenavItem);
register("sgds-sidenav-link", SitSidenavLink);
declare global {
  interface HTMLElementTagNameMap {
    "sgds-sidenav": SitSidenav;
    "sgds-sidenav-item": SitSidenavItem;
    "sgds-sidenav-link": SitSidenavLink;
  }
}
