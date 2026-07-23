import { SitCard } from "./sgds-card";
import { register } from "../../utils/ce-registry";

register("sgds-card", SitCard);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-card": SitCard;
  }
}
