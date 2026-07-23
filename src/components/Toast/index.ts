import { SitToast } from "./sit-toast";
import { SitToastContainer } from "./sit-toast-container";
import { register } from "../../utils/ce-registry";

register("sit-toast", SitToast);
register("sit-toast-container", SitToastContainer);
declare global {
  interface HTMLElementTagNameMap {
    "sit-toast-container": SitToastContainer;
    "sit-toast": SitToast;
  }
}
