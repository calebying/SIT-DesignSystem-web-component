'use client';
import { __decorate } from 'tslib';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import SitElement from '../../base/sit-element.js';
import css_248z from './description-list.js';

let id = 0;
/**
 *
 * @summary Description Lists are used with description list group as list components. A description list (often referred to as a “definition list”) is a type of list used in web design and documentation to pair terms with their corresponding descriptions or values.
 *
 * @slot default - The slot for the label
 * @slot data - The slot for the data
 */
class SitDescriptionList extends SitElement {
    constructor() {
        super(...arguments);
        this.attrId = ++id;
        this.componentId = `sit-description-list-${this.attrId}`;
        /** Makes the label and the data stacked */
        this.stacked = false;
        /** Changes the border bottom styles for bordered description list group */
        this.bordered = false;
    }
    connectedCallback() {
        super.connectedCallback();
        // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
        this.id = this.id.length > 0 ? this.id : this.componentId;
        this.setAttribute("role", "listitem");
    }
    render() {
        return html `
      <div class="container">
        <div class="label-container">
          <span class="label">
            <slot></slot>
          </span>
        </div>
        <div class="data-container">
          <span class="data">
            <slot name="data"></slot>
          </span>
        </div>
      </div>
    `;
    }
}
SitDescriptionList.styles = [...SitElement.styles, css_248z];
__decorate([
    property({ type: Boolean, reflect: true })
], SitDescriptionList.prototype, "stacked", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitDescriptionList.prototype, "bordered", void 0);

export { SitDescriptionList, SitDescriptionList as default };
//# sourceMappingURL=sit-description-list.js.map
