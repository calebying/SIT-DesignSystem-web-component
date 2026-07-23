import { html, nothing } from "lit";
import { OptionElement } from "../../base/option-element";
import SitIcon from "../Icon/sgds-icon";

/**
 * @summary SelectOption is the option of the Select
 *
 * @slot default - The label of the option
 */
export class SitSelectOption extends OptionElement {
  /** @internal */
  static dependencies = {
    "sgds-icon": SitIcon
  };

  protected _renderItemContent = () => {
    return html`<div class="normal-item-content" role="presentation">
      <slot></slot>
      ${this.active ? html` <sgds-icon name="check"></sgds-icon> ` : nothing}
    </div>`;
  };
}

export default SitSelectOption;
