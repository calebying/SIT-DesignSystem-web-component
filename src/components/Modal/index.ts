import { SitModal } from "./sgds-modal";
import { register } from "../../utils/ce-registry";

register("sgds-modal", SitModal);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-modal": SitModal;
  }
}
