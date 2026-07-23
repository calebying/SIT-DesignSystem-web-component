import { SitSkeleton } from "./sit-skeleton";
import { register } from "../../utils/ce-registry";

register("sit-skeleton", SitSkeleton);

declare global {
  interface HTMLElementTagNameMap {
    "sit-skeleton": SitSkeleton;
  }
}
