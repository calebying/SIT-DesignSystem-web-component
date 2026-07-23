import { SitIconButton } from "./sgds-icon-button";
import { register } from "../../utils/ce-registry";

register("sgds-icon-button", SitIconButton);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-icon-button": SitIconButton;
  }
}
