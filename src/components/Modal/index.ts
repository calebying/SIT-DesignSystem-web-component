import { SitModal } from "./sit-modal";
import { register } from "../../utils/ce-registry";

register("sit-modal", SitModal);

declare global {
  interface HTMLElementTagNameMap {
    "sit-modal": SitModal;
  }
}
