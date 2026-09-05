import { SitAvatar } from "./sit-avatar";
import { register } from "../../utils/ce-registry";

register("sit-avatar", SitAvatar);

declare global {
  interface HTMLElementTagNameMap {
    "sit-avatar": SitAvatar;
  }
}
