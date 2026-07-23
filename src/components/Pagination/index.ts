import { SitPagination } from "./sgds-pagination";
import { register } from "../../utils/ce-registry";

register("sgds-pagination", SitPagination);
declare global {
  interface HTMLElementTagNameMap {
    "sgds-pagination": SitPagination;
  }
}
