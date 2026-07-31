import { PropertyValueMap } from "lit";
import { SelectElement } from "../../base/select-element";
import SitIcon from "../Icon/sit-icon";
import SitSelectOption from "./sit-select-option";
import SitSpinner from "../Spinner/sit-spinner";
/**
 * @summary Select is used to make one selection from a list through keyboard or mouse actions
 *
 * @event sit-select - Emitted when an option is selected.
 * @event sit-change - Emitted when the select value changes.
 * @event sit-focus -  Emitted when user input is focused.
 * @event sit-blur -  Emitted when user input is blurred.
 * @event sit-invalid - Emitted when the select's invalid state is set to true.
 * @event sit-valid - Emitted when the select's invalid state is set to false.
 *
 * @slot default - slot for sit-select-option passed into select's menu
 */
export declare class SitSelect extends SelectElement {
    static styles: import("lit").CSSResult[];
    static childName: string;
    /** @internal */
    static dependencies: {
        [SitSelect.childName]: typeof SitSelectOption;
        "sit-icon": typeof SitIcon;
        "sit-spinner": typeof SitSpinner;
    };
    /** Disables native and sit validation for the select. */
    noValidate: boolean;
    connectedCallback(): void;
    protected options: SitSelectOption[];
    firstUpdated(changedProperties: PropertyValueMap<this>): Promise<void>;
    private _handleSlotChange;
    private _updateDisplayValue;
    private _setActiveToOption;
    _handleValueChange(): Promise<void>;
    protected _handleItemSelected(e: Event): Promise<void>;
    protected _handleFocus(): void;
    protected _handleInputBlur(e: Event): Promise<void>;
    /** For form reset  */
    protected _mixinResetFormControl(): Promise<void>;
    private _blockInputKeydown;
    /** Applicable for menuList prop only */
    protected _renderMenu(): import("lit-html").TemplateResult<1> | import("lit-html").TemplateResult<1>[];
    protected _renderInput(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
}
export default SitSelect;
