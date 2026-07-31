import { __decorate } from 'tslib';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { OptionElement } from '../../base/option-element.js';
import { SitCheckbox } from '../Checkbox/sit-checkbox.js';
import { SitIcon } from '../Icon/sit-icon.js';

/**
 * @summary ComboBoxOption is the option of the Combobox
 *
 * @slot default - The label of the option
 */
class SitComboBoxOption extends OptionElement {
    constructor() {
        super(...arguments);
        /**
         * @internal If true, this item is rendered as a checkbox item.
         * This property is controlled by its combo box parent
         */
        this.checkbox = false;
        this._renderItemContent = () => {
            return this.checkbox
                ? html `
          <sit-checkbox .checked=${this.active} .disabled=${this.disabled}>
            <slot></slot>
          </sit-checkbox>
        `
                : html `
          <div class="normal-item-content" role="presentation">
            <slot></slot>
            ${this.active ? html ` <sit-icon name="check"></sit-icon> ` : nothing}
          </div>
        `;
        };
    }
    connectedCallback() {
        super.connectedCallback();
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        const parent = this.parentElement;
        if (parent === null || parent === void 0 ? void 0 : parent.multiSelect) {
            this.checkbox = true;
        }
    }
}
/** @internal */
SitComboBoxOption.dependencies = {
    "sit-icon": SitIcon,
    "sit-checkbox": SitCheckbox
};
__decorate([
    property({ type: Boolean, reflect: true })
], SitComboBoxOption.prototype, "checkbox", void 0);

export { SitComboBoxOption, SitComboBoxOption as default };
//# sourceMappingURL=sit-combo-box-option.js.map
