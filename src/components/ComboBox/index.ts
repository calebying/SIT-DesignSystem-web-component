import { SitComboBox } from "./sit-combo-box";
import { SitComboBoxOption } from "./sit-combo-box-option";
import { register } from "../../utils/ce-registry";

register("sit-combo-box", SitComboBox);
register("sit-combo-box-option", SitComboBoxOption);

declare global {
  interface HTMLElementTagNameMap {
    "sit-combo-box": SitComboBox;
  }
}
