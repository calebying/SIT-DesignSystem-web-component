import { html, nothing, PropertyValueMap } from "lit";
import { property } from "lit/decorators.js";
import { OptionElement } from "../../base/option-element";
import SitCheckbox from "../Checkbox/sit-checkbox";
import SitIcon from "../Icon/sit-icon";
import SitComboBox from "./sit-combo-box";

/**
 * @summary ComboBoxOption is the option of the Combobox
 *
 * @slot default - The label of the option
 */
export class SitComboBoxOption extends OptionElement {
  /** @internal */
  static override dependencies = {
    "sit-icon": SitIcon,
    "sit-checkbox": SitCheckbox
  };

  /**
   * @internal If true, this item is rendered as a checkbox item.
   * This property is controlled by its combo box parent
   */
  @property({ type: Boolean, reflect: true }) checkbox = false;

  connectedCallback(): void {
    super.connectedCallback();
  }

  firstUpdated(changedProperties: PropertyValueMap<this>) {
    super.firstUpdated(changedProperties);
    const parent = this.parentElement as SitComboBox;
    if (parent?.multiSelect) {
      this.checkbox = true;
    }
  }

  protected _renderItemContent = () => {
    return this.checkbox
      ? html`
          <sit-checkbox .checked=${this.active} .disabled=${this.disabled}>
            <slot></slot>
          </sit-checkbox>
        `
      : html`
          <div class="normal-item-content" role="presentation">
            <slot></slot>
            ${this.active ? html` <sit-icon name="check"></sit-icon> ` : nothing}
          </div>
        `;
  };
}

export default SitComboBoxOption;
