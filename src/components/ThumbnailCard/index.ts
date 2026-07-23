import { SitThumbnailCard } from "./sit-thumbnail-card";
import { register } from "../../utils/ce-registry";

register("sit-thumbnail-card", SitThumbnailCard);

declare global {
  interface HTMLElementTagNameMap {
    "sit-thumbnail-card": SitThumbnailCard;
  }
}
