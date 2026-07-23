import { SitDatepicker } from "./sit-datepicker";
import { register } from "../../utils/ce-registry";

register("sit-datepicker", SitDatepicker);
declare global {
  interface HTMLElementTagNameMap {
    "sit-datepicker": SitDatepicker;
  }
}
