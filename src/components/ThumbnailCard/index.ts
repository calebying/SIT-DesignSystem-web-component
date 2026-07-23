import { SitThumbnailCard } from "./sgds-thumbnail-card";
import { register } from "../../utils/ce-registry";

register("sgds-thumbnail-card", SitThumbnailCard);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-thumbnail-card": SitThumbnailCard;
  }
}
