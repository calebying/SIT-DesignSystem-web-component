import { SitIconList } from "./sit-icon-list";
import { register } from "../../utils/ce-registry";

register("sit-icon-list", SitIconList);

declare global {
  interface HTMLElementTagNameMap {
    "sit-icon-list": SitIconList;
  }
}
