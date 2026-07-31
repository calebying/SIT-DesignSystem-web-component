import { __decorate } from 'tslib';
import { property } from 'lit/decorators.js';
import SitElement from '../../base/sit-element.js';
import css_248z from './divider.js';

/**
 * @summary A divider is a thin line that groups content in lists and layouts. They bring clarity to a layout by grouping and dividing content in close proximity.
 */
class SitDivider extends SitElement {
    constructor() {
        super(...arguments);
        /** Sets the orientation of divider to vertical. Defaults to horizontal */
        this.orientation = "horizontal";
        /** Sets the orientation of divider to vertical. Defaults to false */
        this.thickness = "thin";
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("role", "separator");
        this.setAttribute("aria-orientation", this.orientation);
    }
}
SitDivider.styles = [css_248z];
__decorate([
    property({ type: String, reflect: true })
], SitDivider.prototype, "orientation", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitDivider.prototype, "thickness", void 0);

export { SitDivider, SitDivider as default };
//# sourceMappingURL=sit-divider.js.map
