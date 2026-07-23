import { SitPagination } from "./sit-pagination";
import { register } from "../../utils/ce-registry";

register("sit-pagination", SitPagination);
declare global {
  interface HTMLElementTagNameMap {
    "sit-pagination": SitPagination;
  }
}
