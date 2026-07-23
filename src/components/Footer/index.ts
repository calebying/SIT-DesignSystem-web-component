import { SitFooter } from "./sit-footer";
import { SitFooterItem } from "./sit-footer-item";
import { register } from "../../utils/ce-registry";

register("sit-footer", SitFooter);
register("sit-footer-item", SitFooterItem);

declare global {
  interface HTMLElementTagNameMap {
    "sit-footer": SitFooter;
    "sit-footer-item": SitFooterItem;
  }
}
