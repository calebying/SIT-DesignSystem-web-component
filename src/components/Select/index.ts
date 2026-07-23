import { register } from "../../utils/ce-registry";
import { SitSelect } from "./sgds-select";
import { SitSelectOption } from "./sgds-select-option";

register("sgds-select", SitSelect);
register("sgds-select-option", SitSelectOption);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-select": SitSelect;
  }
}
