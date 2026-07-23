import { SitCheckbox } from "./sit-checkbox";
import { SitCheckboxGroup } from "./sit-checkbox-group";
import { register } from "../../utils/ce-registry";

register("sit-checkbox", SitCheckbox);
register("sit-checkbox-group", SitCheckboxGroup);

declare global {
  interface HTMLElementTagNameMap {
    "sit-checkbox": SitCheckbox;
    "sit-checkbox-group": SitCheckboxGroup;
  }
}
