import { SitProgressBar } from "./sit-progress-bar";
import { register } from "../../utils/ce-registry";

register("sit-progress-bar", SitProgressBar);
declare global {
  interface HTMLElementTagNameMap {
    "sit-progress-bar": SitProgressBar;
  }
}
