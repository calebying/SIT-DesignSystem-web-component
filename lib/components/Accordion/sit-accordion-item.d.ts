import SitElement from "../../base/sit-element";
import { AccordionDensity } from "./sit-accordion";
/**
 *
 * @event sit-show - Emitted on show.
 * @event sit-after-show - Emitted on show after animation has completed.
 * @event sit-hide - Emitted on hide.
 * @event sit-after-hide - Emitted on hide after animation has completed.
 *
 * @slot icon - An icon placed before the header text, typically used to provide visual context for the accordion item.
 * @slot header - The accordion-item button header slot.
 * @slot badge - A badge placed after the header text, aligned to the right via auto left margin.
 * @slot content - The accordion-item content slot.
 * @slot caret - The caret icon of accordion-item. Defaults to a chevron-down icon.
 *
 */
export declare class SitAccordionItem extends SitElement {
    static styles: import("lit").CSSResult[];
    /** @internal */
    accordion: HTMLElement;
    /** @internal */
    header: HTMLElement;
    /** @internal */
    body: HTMLElement;
    /** Controls whether accordion-item is open or close */
    open: boolean;
    /** Disables the accordion item */
    disabled: boolean;
    /** Controls the density of the individual accordion item. This value is controlled by sit-accordion */
    density: AccordionDensity;
    /** The aria-label attribute forwarded to the accordion item button. */
    ariaLabel: string;
    private handleSummaryClick;
    private handleSummaryKeyDown;
    handleOpenChange(): Promise<void>;
    /** Shows the accordion. */
    show(): Promise<void>;
    /** Hide the accordion */
    hide(): Promise<void>;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export default SitAccordionItem;
