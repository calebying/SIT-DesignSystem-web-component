import { register } from "../../utils/ce-registry";
import { SitSpinner } from "./sit-spinner";

register("sit-spinner", SitSpinner);
declare global {
  interface HTMLElementTagNameMap {
    "sit-spinner": SitSpinner;
  }
}
