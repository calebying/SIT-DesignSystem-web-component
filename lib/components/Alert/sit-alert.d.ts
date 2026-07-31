import { nothing } from "lit";
import SitElement from "../../base/sit-element";
import SitCloseButton from "../CloseButton/sit-close-button";
import SitIcon from "../Icon/sit-icon";
export type AlertVariant = "info" | "success" | "danger" | "warning" | "neutral";
/**
 * @summary Alerts provide short, timely, and relevant information for your users. It can be a simple text message or customised HTML content with paragraphs, headings and links.
 *
 * @slot default - The alert's main content.
 * @slot icon - An icon to show in the alert. Pass in sit-icon size="md" elements.
 * @slot action - An action button or link to show in the alert.
 *
 * @event sit-show - Emitted when the alert appears.
 * @event sit-hide - Emitted after the alert closes.
 *
 */
export declare class SitAlert extends SitElement {
    static styles: import("lit").CSSResult[];
    /**@internal */
    static dependencies: {
        "sit-close-button": typeof SitCloseButton;
        "sit-icon": typeof SitIcon;
    };
    /** Controls the appearance of the alert  */
    show: boolean;
    /** Enables a close button that allows the user to dismiss the alert. */
    dismissible: boolean;
    /** The alert's theme variant. */
    variant: AlertVariant;
    /** Controls the alert visual between a lighter outline and a solid darker variant. */
    outlined: boolean;
    /** The title of the alert. Only text is allowed */
    title: string;
    /** Closes the alert  */
    close(): void;
    /**@internal */
    _handleShowChange(): void;
    render(): import("lit-html").TemplateResult | typeof nothing;
}
export default SitAlert;
