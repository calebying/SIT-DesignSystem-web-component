import { PropertyValueMap } from "lit";
import { OptionElement } from "../../base/option-element";
import SitCheckbox from "../Checkbox/sit-checkbox";
import SitIcon from "../Icon/sit-icon";
/**
 * @summary ComboBoxOption is the option of the Combobox
 *
 * @slot default - The label of the option
 */
export declare class SitComboBoxOption extends OptionElement {
    /** @internal */
    static dependencies: {
        "sit-icon": typeof SitIcon;
        "sit-checkbox": typeof SitCheckbox;
    };
    /**
     * @internal If true, this item is rendered as a checkbox item.
     * This property is controlled by its combo box parent
     */
    checkbox: boolean;
    connectedCallback(): void;
    firstUpdated(changedProperties: PropertyValueMap<this>): void;
    protected _renderItemContent: () => import("lit-html").TemplateResult<1>;
}
export default SitComboBoxOption;
