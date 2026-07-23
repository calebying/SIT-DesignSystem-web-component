import { SitMasthead } from "./sit-masthead";
import { register } from "../../utils/ce-registry";

register("sit-masthead", SitMasthead);

declare global {
  interface HTMLElementTagNameMap {
    "sit-masthead": SitMasthead;
  }
}
