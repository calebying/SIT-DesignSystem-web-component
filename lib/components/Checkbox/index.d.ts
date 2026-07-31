import { SitCheckbox } from "./sit-checkbox";
import { SitCheckboxGroup } from "./sit-checkbox-group";
declare global {
    interface HTMLElementTagNameMap {
        "sit-checkbox": SitCheckbox;
        "sit-checkbox-group": SitCheckboxGroup;
    }
}
