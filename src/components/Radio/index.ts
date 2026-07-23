import { SitRadio } from "./sgds-radio";
import { SitRadioGroup } from "./sgds-radio-group";
import { register } from "../../utils/ce-registry";

register("sgds-radio", SitRadio);
register("sgds-radio-group", SitRadioGroup);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-radio": SitRadio;
    "sgds-radio-group": SitRadioGroup;
  }
}
