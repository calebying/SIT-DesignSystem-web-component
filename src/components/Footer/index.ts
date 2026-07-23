import { SitFooter } from "./sgds-footer";
import { SitFooterItem } from "./sgds-footer-item";
import { register } from "../../utils/ce-registry";

register("sgds-footer", SitFooter);
register("sgds-footer-item", SitFooterItem);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-footer": SitFooter;
    "sgds-footer-item": SitFooterItem;
  }
}
