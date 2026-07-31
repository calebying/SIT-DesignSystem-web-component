import { SitAccordion } from "./sit-accordion";
import { SitAccordionItem } from "./sit-accordion-item";
declare global {
    interface HTMLElementTagNameMap {
        "sit-accordion-item": SitAccordionItem;
        "sit-accordion": SitAccordion;
    }
}
