import { SitCloseButton } from "./sit-close-button";
import { register } from "../../utils/ce-registry";

register("sit-close-button", SitCloseButton);

declare global {
  interface HTMLElementTagNameMap {
    "sit-close-button": SitCloseButton;
  }
}
