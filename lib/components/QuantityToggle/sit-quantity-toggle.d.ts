import FormControlElement from "../../base/form-control-element";
import { SitFormControl } from "../../utils/formSubmitController";
import SitIconButton from "../IconButton/sit-icon-button";
import SitInput from "../Input/sit-input";
declare const SitQuantityToggle_base: (new (...args: any[]) => import("../../utils/validatorMixin").ToBeValidatedElementInterface) & typeof FormControlElement;
/**
 * @summary The quantity toggle component is used to increase or decrease an incremental venue,  best used when the user needs to enter or adjust the quantity of a selected item.
 *
 * @slot invalidIcon - The slot for invalid icon
 *
 * @event sit-change - Emitted when an alteration to the control's value is committed by the user.
 * @event sit-input - Emitted when the control receives input and its value changes.
 *
 */
export declare class SitQuantityToggle extends SitQuantityToggle_base implements SitFormControl {
    static styles: import("lit").CSSResult[];
    /** @internal */
    static dependencies: {
        "sit-input": typeof SitInput;
        "sit-icon-button": typeof SitIconButton;
    };
    /** @internal */
    private plusBtn;
    /** @internal */
    private minusBtn;
    /** The input's value. Set to 0 by default */
    value: number;
    /**  Controls the incremental / decremental value of the input */
    step: number;
    /** The input's minimum value. Only applies number input types. */
    min: number;
    /** The input's maximum value. Only applies number input types. */
    max: number;
    /** Allows invalidFeedback, invalid and valid styles to be visible with the input */
    hasFeedback: "style" | "text" | "both";
    /**Feedback text for error state when validated */
    invalidFeedback: string;
    /** Sets the quantity toggle as readonly  */
    readonly: boolean;
    /** Gets or sets the default value used to reset this element. The initial value corresponds to the one originally specified in the HTML that created this element. */
    defaultValue: number;
    private _sitInput;
    /**
     * Checks for validity. Under the hood, HTMLFormElement's reportValidity method calls this method to check for component's validity state
     * Note that the native error popup is prevented for Canvas form components by default. Instead the validation message shows up in the feedback container of SitInput
     */
    reportValidity(): boolean;
    /**
     * Checks for validity without any native error popup message
     */
    checkValidity(): boolean;
    /**
     * Returns the ValidityState object
     */
    get validity(): ValidityState;
    /**
     * Returns the validation message based on the ValidityState
     */
    get validationMessage(): string;
    private _handleChange;
    private _handleInputChange;
    private _mixinResetFormControl;
    private _handleKeyDown;
    private _handleInvalid;
    private _handleValid;
    /** Simulates a click on the plus button */
    plus(): void;
    /** Simulates a click on the minus button */
    minus(): void;
    private _onPlus;
    private _onMinus;
    /**
     * Validates the input on button clicks of the toggle.
     * Input is validated every time the button is click to update the invalid state
     * to indiciate the validity of quantity toggle
     * @param input native HTMLInputElement
     */
    private _validateOnClick;
    protected _renderFeedback(): import("lit-html").TemplateResult;
    protected _renderLabel(): import("lit-html").TemplateResult;
    protected _renderHintText(): import("lit-html").TemplateResult;
    render(): import("lit-html").TemplateResult;
}
export default SitQuantityToggle;
