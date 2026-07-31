import { SitToast } from "./sit-toast";
import { SitToastContainer } from "./sit-toast-container";
declare global {
    interface HTMLElementTagNameMap {
        "sit-toast-container": SitToastContainer;
        "sit-toast": SitToast;
    }
}
