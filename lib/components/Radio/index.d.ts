import { SitRadio } from "./sit-radio";
import { SitRadioGroup } from "./sit-radio-group";
declare global {
    interface HTMLElementTagNameMap {
        "sit-radio": SitRadio;
        "sit-radio-group": SitRadioGroup;
    }
}
