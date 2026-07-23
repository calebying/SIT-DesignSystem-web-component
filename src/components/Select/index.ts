import { register } from "../../utils/ce-registry";
import { SitSelect } from "./sit-select";
import { SitSelectOption } from "./sit-select-option";

register("sit-select", SitSelect);
register("sit-select-option", SitSelectOption);

declare global {
  interface HTMLElementTagNameMap {
    "sit-select": SitSelect;
  }
}
