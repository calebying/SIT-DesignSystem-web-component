import { SitQuantityToggle } from "./sit-quantity-toggle";
import { register } from "../../utils/ce-registry";

register("sit-quantity-toggle", SitQuantityToggle);

declare global {
  interface HTMLElementTagNameMap {
    "sit-quantity-toggle": SitQuantityToggle;
  }
}
