import { SitMasthead } from "./sgds-masthead";
import { register } from "../../utils/ce-registry";

register("sgds-masthead", SitMasthead);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-masthead": SitMasthead;
  }
}
