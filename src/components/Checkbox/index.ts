import { SitCheckbox } from "./sgds-checkbox";
import { SitCheckboxGroup } from "./sgds-checkbox-group";
import { register } from "../../utils/ce-registry";

register("sgds-checkbox", SitCheckbox);
register("sgds-checkbox-group", SitCheckboxGroup);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-checkbox": SitCheckbox;
    "sgds-checkbox-group": SitCheckboxGroup;
  }
}
