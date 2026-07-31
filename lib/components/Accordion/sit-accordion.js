import { __decorate } from 'tslib';
import { html } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import SitElement from '../../base/sit-element.js';
import css_248z from './accordion.js';

const VALID_KEYS = ["Enter", "ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"];
/**
 * @summary A dropdown mechanism that allow users to either show or hide related content. `SitAccordion` is a wrapper to manage the behaviour for multiple `SitAccordionItems`
 * @slot default - slot for accordion-item
 *
 */
class SitAccordion extends SitElement {
    constructor() {
        super(...arguments);
        /** Allows multiple accordion items to be opened at the same time */
        this.allowMultiple = false;
        /** The variant of accordion */
        this.variant = "default";
        /** The density of accordion */
        this.density = "default";
    }
    /** @internal */
    get items() {
        return [...(this.defaultNodes || [])].filter((node) => typeof node.tagName !== "undefined");
    }
    _handleSlotChange() {
        const items = [...this.items];
        items.forEach((item, index) => {
            if (items.length > 1) {
                switch (index) {
                    case 0:
                        item.setAttribute("first-of-type", "");
                        break;
                    case items.length - 1:
                        item.setAttribute("last-of-type", "");
                        break;
                    default:
                        item.setAttribute("nth-of-type", "");
                }
            }
            item.setAttribute("variant", this.variant);
            item.setAttribute("density", this.density);
        });
    }
    async _onToggle(event) {
        if (this.allowMultiple) {
            // No toggling when `allowMultiple` or the user prevents it.
            return;
        }
        const items = [...this.items];
        if (items && !items.length) {
            // no toggling when there aren't items.
            return;
        }
        items.forEach(item => {
            // Covers all elements within accordion-item
            if (!event.composedPath().includes(item)) {
                // Close all the items that didn't dispatch the event.
                item.open = false;
            }
        });
    }
    async _onKeyboardToggle(event) {
        if (!VALID_KEYS.includes(event.key))
            return;
        return this._onToggle(event);
    }
    render() {
        return html `
      <div class="accordion">
        <slot @slotchange=${this._handleSlotChange} @click=${this._onToggle} @keydown=${this._onKeyboardToggle}></slot>
      </div>
    `;
    }
}
SitAccordion.styles = [...SitElement.styles, css_248z];
__decorate([
    property({ type: Boolean, reflect: true })
], SitAccordion.prototype, "allowMultiple", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitAccordion.prototype, "variant", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitAccordion.prototype, "density", void 0);
__decorate([
    queryAssignedElements()
], SitAccordion.prototype, "defaultNodes", void 0);

export { SitAccordion, SitAccordion as default };
//# sourceMappingURL=sit-accordion.js.map
