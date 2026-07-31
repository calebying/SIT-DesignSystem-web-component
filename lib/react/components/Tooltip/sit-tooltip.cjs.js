'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var ref_js = require('lit/directives/ref.js');
var dom = require('@floating-ui/dom');
var sitElement = require('../../base/sit-element.cjs.js');
var tooltip = require('./tooltip.cjs.js');

/**
 * @summary Tooltips display more information when users hover over, focus on, or interact with an element.
 * @slot default - The element to target the tooltip to.
 *
 * @event sit-show - Emitted event when show instance is called
 * @event sit-after-show - Emitted event when tooltip has been made visible to the user and CSS transitions have completed
 * @event sit-hide - Emitted event when hide instance is called
 * @event sit-after-hide - Emitted event when tooltip has hidden to the user and CSS transitions have completed
 *
 */
class SitTooltip extends sitElement["default"] {
    constructor() {
        super(...arguments);
        /** Internal ref to the tooltip container */
        this._myTooltip = ref_js.createRef();
        /** Internal ref to the actual tooltip bubble */
        this._tooltipBubble = ref_js.createRef();
        /** The tooltip's content. Must be text */
        this.content = "";
        /** The placement of tooltip relative to its target */
        this.placement = "top";
        /** The method to invoke the tooltip. `hover focus` is the default value which allows tooltip to be triggered via mouse hover and keyboard focus. Add `tabindex=0` for HTMLelements that are not tabbable. */
        this.trigger = "hover focus";
        /** Is tooltip currently open */
        this.open = false;
        this._handleClickOutOfElement = (e) => {
            if (!this.open)
                return;
            if (!e.composedPath().includes(this)) {
                this.hide();
            }
        };
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.trigger.includes("click")) {
            document.addEventListener("click", this._handleClickOutOfElement);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener("click", this._handleClickOutOfElement);
        if (this._cleanupAutoUpdate) {
            this._cleanupAutoUpdate();
            this._cleanupAutoUpdate = undefined;
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this._tooltipTargetElements.forEach(el => {
            el.setAttribute("data-sit-tooltip", this.content);
            if (this.trigger.includes("hover")) {
                el.addEventListener("mouseenter", () => this.show());
                el.addEventListener("mouseleave", () => this.hide());
            }
            if (this.trigger.includes("focus")) {
                el.addEventListener("focus", () => this.show());
                el.addEventListener("blur", () => this.hide());
            }
            if (this.trigger === "click") {
                el.addEventListener("click", () => this.toggle());
            }
        });
    }
    _handleSlotChange() {
        this._tooltipTargetElements.forEach(el => el.setAttribute("data-sit-tooltip", this.content));
    }
    async updateFloatingPosition() {
        if (!this._myTooltip.value || !this._tooltipBubble.value)
            return;
        const { x, y, placement, strategy, middlewareData } = await dom.computePosition(this._tooltipTargetElements[0], this._tooltipBubble.value, {
            strategy: "fixed",
            placement: this.placement,
            middleware: [dom.offset(8), dom.flip(), dom.shift(), dom.hide()]
        });
        this._tooltipBubble.value.setAttribute("data-placement", placement);
        Object.assign(this._tooltipBubble.value.style, {
            position: strategy,
            left: `${x}px`,
            top: `${y}px`
        });
        const { referenceHidden, escaped } = middlewareData.hide || {};
        if (referenceHidden || escaped) {
            this._tooltipBubble.value.style.visibility = "hidden";
        }
        else {
            this._tooltipBubble.value.style.visibility = "visible";
        }
    }
    /** Show tooltip */
    async show() {
        if (this.open)
            return;
        this.open = true;
        this.emit("sit-show");
        await this.updateComplete;
        await this.updateFloatingPosition();
        if (this._myTooltip.value && this._tooltipBubble.value) {
            this._cleanupAutoUpdate = dom.autoUpdate(this._tooltipTargetElements[0], this._tooltipBubble.value, () => this.updateFloatingPosition());
        }
        this.emit("sit-after-show");
    }
    /** Hide tooltip */
    hide() {
        if (!this.open)
            return;
        this.emit("sit-hide");
        this.open = false;
        if (this._cleanupAutoUpdate) {
            this._cleanupAutoUpdate();
            this._cleanupAutoUpdate = undefined;
        }
        setTimeout(() => this.emit("sit-after-hide"), 0);
    }
    /** Toggle tooltip */
    toggle() {
        this.open ? this.hide() : this.show();
    }
    render() {
        return lit.html `
      <div ${ref_js.ref(this._myTooltip)} class="tooltip-placeholder">
        <slot @slotchange=${() => this._handleSlotChange()}></slot>
        ${this.open
            ? lit.html `<div ${ref_js.ref(this._tooltipBubble)} class="tooltip" role="tooltip">${this.content}</div>`
            : null}
      </div>
    `;
    }
}
SitTooltip.styles = [...sitElement["default"].styles, tooltip["default"]];
tslib.__decorate([
    decorators_js.property({ type: String })
], SitTooltip.prototype, "content", void 0);
tslib.__decorate([
    decorators_js.property({ type: String })
], SitTooltip.prototype, "placement", void 0);
tslib.__decorate([
    decorators_js.property({ type: String })
], SitTooltip.prototype, "trigger", void 0);
tslib.__decorate([
    decorators_js.state()
], SitTooltip.prototype, "open", void 0);
tslib.__decorate([
    decorators_js.queryAssignedElements()
], SitTooltip.prototype, "_tooltipTargetElements", void 0);

exports.SitTooltip = SitTooltip;
exports["default"] = SitTooltip;
//# sourceMappingURL=sit-tooltip.cjs.js.map
