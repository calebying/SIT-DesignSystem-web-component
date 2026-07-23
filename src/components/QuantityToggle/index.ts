import { SitQuantityToggle } from "./sgds-quantity-toggle";
import { register } from "../../utils/ce-registry";

register("sgds-quantity-toggle", SitQuantityToggle);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-quantity-toggle": SitQuantityToggle;
  }
}
