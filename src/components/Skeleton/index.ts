import { SitSkeleton } from "./sgds-skeleton";
import { register } from "../../utils/ce-registry";

register("sgds-skeleton", SitSkeleton);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-skeleton": SitSkeleton;
  }
}
