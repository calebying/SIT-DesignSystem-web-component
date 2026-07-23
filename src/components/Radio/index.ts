import { SitRadio } from "./sit-radio";
import { SitRadioGroup } from "./sit-radio-group";
import { register } from "../../utils/ce-registry";

register("sit-radio", SitRadio);
register("sit-radio-group", SitRadioGroup);

declare global {
  interface HTMLElementTagNameMap {
    "sit-radio": SitRadio;
    "sit-radio-group": SitRadioGroup;
  }
}
