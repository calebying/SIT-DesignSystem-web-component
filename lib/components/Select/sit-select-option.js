import { html, nothing } from 'lit';
import { OptionElement } from '../../base/option-element.js';
import { SitIcon } from '../Icon/sit-icon.js';

/**
 * @summary SelectOption is the option of the Select
 *
 * @slot default - The label of the option
 */
class SitSelectOption extends OptionElement {
    constructor() {
        super(...arguments);
        this._renderItemContent = () => {
            return html `<div class="normal-item-content" role="presentation">
      <slot></slot>
      ${this.active ? html ` <sit-icon name="check"></sit-icon> ` : nothing}
    </div>`;
        };
    }
}
/** @internal */
SitSelectOption.dependencies = {
    "sit-icon": SitIcon
};

export { SitSelectOption, SitSelectOption as default };
//# sourceMappingURL=sit-select-option.js.map
