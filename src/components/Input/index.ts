import { SitInput } from "./sgds-input";
import { register } from "../../utils/ce-registry";

register("sgds-input", SitInput);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-input": SitInput;
  }
}
