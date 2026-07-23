import { SitIconButton } from "./sit-icon-button";
import { register } from "../../utils/ce-registry";

register("sit-icon-button", SitIconButton);

declare global {
  interface HTMLElementTagNameMap {
    "sit-icon-button": SitIconButton;
  }
}
