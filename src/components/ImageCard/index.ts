import { SitImageCard } from "./sgds-image-card";
import { register } from "../../utils/ce-registry";

register("sgds-image-card", SitImageCard);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-image-card": SitImageCard;
  }
}
