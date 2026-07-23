import { SitSystemBanner } from "./sit-system-banner";
import SitSystemBannerItem from "./sit-system-banner-item";

customElements.define("sit-system-banner", SitSystemBanner);
customElements.define("sit-system-banner-item", SitSystemBannerItem);

declare global {
  interface HTMLElementTagNameMap {
    "sit-system-banner": SitSystemBanner;
  }
}
