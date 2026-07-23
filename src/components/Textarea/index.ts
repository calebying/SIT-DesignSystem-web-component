import { SitTextarea } from "./sit-textarea";
import { register } from "../../utils/ce-registry";

register("sit-textarea", SitTextarea);

declare global {
  interface HTMLElementTagNameMap {
    "sit-textarea": SitTextarea;
  }
}
