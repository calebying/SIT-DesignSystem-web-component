import { nothing, PropertyValueMap, TemplateResult } from "lit";
import { SelectElement, SitOptionData } from "../../base/select-element";
import { SitBadge } from "../Badge/sit-badge";
import SitIcon from "../Icon/sit-icon";
import { SitComboBoxOption } from "./sit-combo-box-option";
import SitSpinner from "../Spinner/sit-spinner";
import { ISitComboBoxInputEventDetail } from "./types";
/**
 * Each item in the ComboBox has a label to display
 * and a value (the actual data / ID).
 */
type SitComboBoxOptionData = SitOptionData;
export type { ISitComboBoxInputEventDetail };
/**
 * @summary ComboBox component is used for users to make one or more selections from a list through user input, keyboard or mouse actions
 *
 * @slot default - default slot to pass in sit-combo-box-option
 *
 * @event sit-select - Emitted when the combo box's selected value changes.
 * @event sit-change - Emitted when the combo box's value changes.
 * @event sit-input -  Emitted when user input is received and its value changes. `event.detail = { displayValue }`
 * @eventDetail {ISitComboBoxInputEventDetail} sit-input
 * @event sit-focus -  Emitted when user input is focused.
 * @event sit-blur -  Emitted when user input is blurred.
 * @event sit-invalid - Emitted when the combo box's invalid state is set to true.
 * @event sit-valid - Emitted when the combo box's invalid state is set to false.
 * @event sit-scroll-end - Emitted once when the menu is scrolled to within `scrollBottomOffset` pixels of the bottom. Resets when the user scrolls back up.
 */
export declare class SitComboBox extends SelectElement {
    static styles: import("lit").CSSResult[];
    static childName: string;
    /** @internal */
    static dependencies: {
        [SitComboBox.childName]: typeof SitComboBoxOption;
        "sit-icon": typeof SitIcon;
        "sit-badge": typeof SitBadge;
        "sit-spinner": typeof SitSpinner;
    };
    /** If true, renders multiple checkbox selection items. If false, single-select. */
    multiSelect: boolean;
    /** If true, renders badge that fills width of combobox */
    badgeFullWidth: boolean;
    /** If true, a clear button will be enabled on focus */
    clearable: boolean;
    /** Disables native and sit validation for the combo box. */
    noValidate: boolean;
    /** Enables the asynchronous behaviour of a combo box. When true, filterFunction is ignored and filtering is done remotely. */
    async: boolean;
    /** When filtering remotely and there are no results, set this to true to enable no options feedback on the menu. Applicable for async combo box only. */
    emptyMenuAsync: boolean;
    /** Number of pixels from the bottom of the menu at which the sit-scroll-end event fires. */
    scrollBottomOffset: number;
    /** The function used to filter the menu list, given the user's input value. */
    filterFunction: (inputValue: string, item: SitComboBoxOptionData) => boolean;
    private _multiSelectInput;
    protected options: SitComboBoxOption[];
    private optionList;
    private emptyMenuAfterFiltering;
    protected isFocused: boolean;
    protected isScrollEnd: boolean;
    connectedCallback(): void;
    firstUpdated(changedProperties: PropertyValueMap<this>): Promise<void>;
    protected _handleDefaultSlotChange(e: Event): Promise<void>;
    private _setupValidation;
    _handleValueChange(): Promise<void>;
    /** Emits sit-change and sit-select events. Call after setting this.value from user interaction. */
    private _emitChangeEvents;
    _handleOptionListChange(): void;
    _handleMenuListChange(): void;
    private _updateValueAndDisplayValue;
    protected _handleInputChange(e: CustomEvent): Promise<void>;
    /**
     * Called whenever an <sit-combo-box-option> dispatches sit-select"
     */
    protected _handleItemSelected(e: Event): Promise<void>;
    private _handleItemUnselect;
    private _handleBadgeDismissed;
    private _handleMultiSelectKeyDown;
    protected _handleFocus(): void;
    protected _handleInputBlur(e: Event): Promise<void>;
    protected _handleClear(): Promise<void>;
    /** For form reset  */
    protected _mixinResetFormControl(): Promise<void>;
    /**
     * Handles scroll events on the menu. Emits `sit-scroll-end` once when the
     * scroll position reaches within `scrollBottomOffset` pixels of the bottom.
     * The event is suppressed until the user scrolls back up, preventing repeated
     * emissions while the menu stays at the bottom.
     */
    private _handleScroll;
    /** Template for the suffix icon */
    protected suffixIconTemplate: TemplateResult;
    protected prefixIconTemplate: TemplateResult;
    /**
     * Used `repeat` helper from Lit to render instead of .map:
     * The reassigning of value is affecting the truncation on badge as it is not triggering the slot change event.
     *
     * To compare this to lit-html's default handling for lists, consider reversing a large list of names:
     * For a list created using Array.map, lit-html maintains the DOM nodes for the list items, but reassigns the values
     * For a list created using repeat, the repeat directive reorders the existing DOM nodes, so the nodes representing the first list item move to the last position.
     */
    protected _renderInput(showClearButton: boolean): TemplateResult;
    protected _renderFeedbackMenu(): TemplateResult<1> | typeof nothing;
    render(): TemplateResult<1>;
}
export default SitComboBox;
