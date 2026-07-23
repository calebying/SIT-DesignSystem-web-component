import { SitCard } from "./sit-card";
import { register } from "../../utils/ce-registry";

register("sit-card", SitCard);

declare global {
  interface HTMLElementTagNameMap {
    "sit-card": SitCard;
  }
}
