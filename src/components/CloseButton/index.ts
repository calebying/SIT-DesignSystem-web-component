import { SitCloseButton } from "./sgds-close-button";
import { register } from "../../utils/ce-registry";

register("sgds-close-button", SitCloseButton);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-close-button": SitCloseButton;
  }
}
