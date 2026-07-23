import { SitButton } from "./sit-button";
import { register } from "../../utils/ce-registry";

register("sit-button", SitButton);

declare global {
  interface HTMLElementTagNameMap {
    "sit-button": SitButton;
  }
}
