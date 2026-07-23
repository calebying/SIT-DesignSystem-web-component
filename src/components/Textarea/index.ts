import { SitTextarea } from "./sgds-textarea";
import { register } from "../../utils/ce-registry";

register("sgds-textarea", SitTextarea);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-textarea": SitTextarea;
  }
}
