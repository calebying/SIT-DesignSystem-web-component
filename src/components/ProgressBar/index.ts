import { SitProgressBar } from "./sgds-progress-bar";
import { register } from "../../utils/ce-registry";

register("sgds-progress-bar", SitProgressBar);
declare global {
  interface HTMLElementTagNameMap {
    "sgds-progress-bar": SitProgressBar;
  }
}
