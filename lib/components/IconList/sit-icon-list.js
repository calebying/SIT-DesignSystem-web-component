import { __decorate } from 'tslib';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import SitElement from '../../base/sit-element.js';
import css_248z from './icon-list.js';

/**
 * @summary A IconList can be used to display content related to the same topic. Each list item begins an icon.
 *
 * @slot default - The list items of IconList. Each list items should have aria attribute role="listitem" added
 */
class SitIconList extends SitElement {
    constructor() {
        super(...arguments);
        /** Sets the aria-role of the sit-icon-list */
        this.role = "list";
        /** The size of icon list. Changes the font-size the list items */
        this.size = "md";
    }
    render() {
        return html `
      <div class=${classMap({ [this.size]: this.size })}>
        <slot></slot>
      </div>
    `;
    }
}
SitIconList.styles = [...SitElement.styles, css_248z];
__decorate([
    property({ type: String, reflect: true })
], SitIconList.prototype, "role", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitIconList.prototype, "size", void 0);

export { SitIconList, SitIconList as default };
//# sourceMappingURL=sit-icon-list.js.map
