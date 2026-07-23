import { SitLink } from "./sit-link";
import { register } from "../../utils/ce-registry";

register("sit-link", SitLink);

declare global {
  interface HTMLElementTagNameMap {
    "sit-link": SitLink;
  }
}
