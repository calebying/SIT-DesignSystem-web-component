import { SitFooter } from "./sit-footer";
import { SitFooterItem } from "./sit-footer-item";
declare global {
    interface HTMLElementTagNameMap {
        "sit-footer": SitFooter;
        "sit-footer-item": SitFooterItem;
    }
}
