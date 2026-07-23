import { SitLink } from "./sgds-link";
import { register } from "../../utils/ce-registry";

register("sgds-link", SitLink);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-link": SitLink;
  }
}
