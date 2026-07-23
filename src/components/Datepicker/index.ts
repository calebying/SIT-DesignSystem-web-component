import { SitDatepicker } from "./sgds-datepicker";
import { register } from "../../utils/ce-registry";

register("sgds-datepicker", SitDatepicker);
declare global {
  interface HTMLElementTagNameMap {
    "sgds-datepicker": SitDatepicker;
  }
}
