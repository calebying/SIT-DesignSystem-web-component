import { SitAccordion } from "./sgds-accordion";
import { SitAccordionItem } from "./sgds-accordion-item";
import { register } from "../../utils/ce-registry";

register("sgds-accordion", SitAccordion);
register("sgds-accordion-item", SitAccordionItem);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-accordion-item": SitAccordionItem;
    "sgds-accordion": SitAccordion;
  }
}
