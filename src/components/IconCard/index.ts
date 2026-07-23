import { SitIconCard } from "./sit-icon-card";
import { register } from "../../utils/ce-registry";

register("sit-icon-card", SitIconCard);

declare global {
  interface HTMLElementTagNameMap {
    "sit-icon-card": SitIconCard;
  }
}
