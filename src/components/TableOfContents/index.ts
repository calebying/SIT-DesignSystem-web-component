import { SitTableOfContents } from "./sit-table-of-contents";
import { register } from "../../utils/ce-registry";

register("sit-table-of-contents", SitTableOfContents);

declare global {
  interface HTMLElementTagNameMap {
    "sit-table-of-contents": SitTableOfContents;
  }
}
