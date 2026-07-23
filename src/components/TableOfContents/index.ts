import { SitTableOfContents } from "./sgds-table-of-contents";
import { register } from "../../utils/ce-registry";

register("sgds-table-of-contents", SitTableOfContents);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-table-of-contents": SitTableOfContents;
  }
}
