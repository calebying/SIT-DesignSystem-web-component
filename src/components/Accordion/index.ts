import { SitAccordion } from "./sit-accordion";
import { SitAccordionItem } from "./sit-accordion-item";
import { register } from "../../utils/ce-registry";

register("sit-accordion", SitAccordion);
register("sit-accordion-item", SitAccordionItem);

declare global {
  interface HTMLElementTagNameMap {
    "sit-accordion-item": SitAccordionItem;
    "sit-accordion": SitAccordion;
  }
}
