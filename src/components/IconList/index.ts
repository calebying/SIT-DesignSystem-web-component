import { SitIconList } from "./sgds-icon-list";
import { register } from "../../utils/ce-registry";

register("sgds-icon-list", SitIconList);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-icon-list": SitIconList;
  }
}
