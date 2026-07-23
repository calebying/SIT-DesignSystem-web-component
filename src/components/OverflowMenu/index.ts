import { SitOverflowMenu } from "./sit-overflow-menu";
import { register } from "../../utils/ce-registry";

register("sit-overflow-menu", SitOverflowMenu);

declare global {
  interface HTMLElementTagNameMap {
    "sit-overflow-menu": SitOverflowMenu;
  }
}
