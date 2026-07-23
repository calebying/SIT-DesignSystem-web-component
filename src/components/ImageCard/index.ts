import { SitImageCard } from "./sit-image-card";
import { register } from "../../utils/ce-registry";

register("sit-image-card", SitImageCard);

declare global {
  interface HTMLElementTagNameMap {
    "sit-image-card": SitImageCard;
  }
}
