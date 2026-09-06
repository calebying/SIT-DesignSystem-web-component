import { SitPopover } from "./sit-popover";
import { register } from "../../utils/ce-registry";

register("sit-popover", SitPopover);

declare global {
  interface HTMLElementTagNameMap {
    "sit-popover": SitPopover;
  }
}
