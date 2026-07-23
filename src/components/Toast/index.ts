import { SitToast } from "./sgds-toast";
import { SitToastContainer } from "./sgds-toast-container";
import { register } from "../../utils/ce-registry";

register("sgds-toast", SitToast);
register("sgds-toast-container", SitToastContainer);
declare global {
  interface HTMLElementTagNameMap {
    "sgds-toast-container": SitToastContainer;
    "sgds-toast": SitToast;
  }
}
