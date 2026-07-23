import { SitOverflowMenu } from "./sgds-overflow-menu";
import { register } from "../../utils/ce-registry";

register("sgds-overflow-menu", SitOverflowMenu);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-overflow-menu": SitOverflowMenu;
  }
}
