import { SitButton } from "./sgds-button";
import { register } from "../../utils/ce-registry";

register("sgds-button", SitButton);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-button": SitButton;
  }
}
