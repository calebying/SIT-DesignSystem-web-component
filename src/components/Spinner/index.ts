import { register } from "../../utils/ce-registry";
import { SitSpinner } from "./sgds-spinner";

register("sgds-spinner", SitSpinner);
declare global {
  interface HTMLElementTagNameMap {
    "sgds-spinner": SitSpinner;
  }
}
