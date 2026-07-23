import { SitSystemBanner } from "./sgds-system-banner";
import SitSystemBannerItem from "./sgds-system-banner-item";

customElements.define("sgds-system-banner", SitSystemBanner);
customElements.define("sgds-system-banner-item", SitSystemBannerItem);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-system-banner": SitSystemBanner;
  }
}
