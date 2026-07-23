import { SitIconCard } from "./sgds-icon-card";
import { register } from "../../utils/ce-registry";

register("sgds-icon-card", SitIconCard);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-icon-card": SitIconCard;
  }
}
