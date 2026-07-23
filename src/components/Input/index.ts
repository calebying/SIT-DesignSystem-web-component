import { SitInput } from "./sit-input";
import { register } from "../../utils/ce-registry";

register("sit-input", SitInput);

declare global {
  interface HTMLElementTagNameMap {
    "sit-input": SitInput;
  }
}
