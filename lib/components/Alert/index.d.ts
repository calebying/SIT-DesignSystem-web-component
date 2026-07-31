import { SitAlert } from "./sit-alert";
import { SitAlertLink } from "./sit-alert-link";
declare global {
    interface HTMLElementTagNameMap {
        "sit-alert-link": SitAlertLink;
        "sit-alert": SitAlert;
    }
}
