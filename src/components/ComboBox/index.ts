import { SitComboBox } from "./sgds-combo-box";
import { SitComboBoxOption } from "./sgds-combo-box-option";
import { register } from "../../utils/ce-registry";

register("sgds-combo-box", SitComboBox);
register("sgds-combo-box-option", SitComboBoxOption);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-combo-box": SitComboBox;
  }
}
