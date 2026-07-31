import ButtonElement from "../../base/button-element";
import SitIcon from "../Icon/sit-icon";
import SitSpinner from "../Spinner/sit-spinner";
/**
 * @summary An icon button is a user interface element that combines an icon and a button, serving as a clickable or tabbable component.
 *
 * @event sit-blur - Emitted when the button is blurred.
 * @event sit-focus - Emitted when the button is focused.
 */
export declare class SitIconButton extends ButtonElement {
    static styles: import("lit").CSSResult[];
    /** @internal */
    static dependencies: {
        "sit-icon": typeof SitIcon;
        "sit-spinner": typeof SitSpinner;
    };
    /** The name of the icon from sit icon library */
    name: string;
    private _assignIconSize;
    render(): import("lit-html").TemplateResult;
}
export default SitIconButton;
