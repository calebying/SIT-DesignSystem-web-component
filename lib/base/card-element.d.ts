import { CardOrientation } from "../components/Card/types";
import SitElement from "./sit-element";
export declare class CardElement extends SitElement {
    static styles: import("lit").CSSResult[];
    /** @internal */
    card: HTMLAnchorElement;
    /** Extends the link passed in either `footer` or `link`(deprecated) slot.
     */
    stretchedLink: boolean;
    /** Disables the card  */
    disabled: boolean;
    /** When true, hides the default border of the card. */
    hideBorder: boolean;
    /** When true, applies a tinted background color to the card. */
    tinted: boolean;
    /** Sets the orientation of the card. Available options: `vertical`, `horizontal` */
    orientation: CardOrientation;
    handleTitleSlotChange(e: Event): void;
    protected _forwardAnchorAttributes(anchor: HTMLAnchorElement | null): void;
    warnLinkSlotMisused(e: Event): void;
}
