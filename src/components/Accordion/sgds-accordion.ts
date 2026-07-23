import { html } from "lit";
import { property, queryAssignedElements } from "lit/decorators.js";
import SitElement from "../../base/sgds-element";
import type SitAccordionItem from "./sgds-accordion-item";
import accordionStyle from "./accordion.css";

export type AccordionDensity = "default" | "compact" | "spacious";
export type AccordionVariant = "default" | "border";

const VALID_KEYS = ["Enter", "ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"];

/**
 * @summary A dropdown mechanism that allow users to either show or hide related content. `SitAccordion` is a wrapper to manage the behaviour for multiple `SitAccordionItems`
 * @slot default - slot for accordion-item
 *
 */

export class SitAccordion extends SitElement {
  static styles = [...SitElement.styles, accordionStyle];

  /** Allows multiple accordion items to be opened at the same time */
  @property({ type: Boolean, reflect: true }) allowMultiple = false;

  /** The variant of accordion */
  @property({ type: String, reflect: true }) variant: AccordionVariant = "default";

  /** The density of accordion */
  @property({ type: String, reflect: true }) density: AccordionDensity = "default";

  /** @internal */
  @queryAssignedElements() private defaultNodes!: SitAccordionItem[];

  /** @internal */
  get items(): SitAccordionItem[] {
    return [...(this.defaultNodes || [])].filter(
      (node: HTMLElement) => typeof node.tagName !== "undefined"
    ) as SitAccordionItem[];
  }

  private _handleSlotChange() {
    const items = [...this.items] as SitAccordionItem[];
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

  private async _onToggle(event: Event) {
    if (this.allowMultiple) {
      // No toggling when `allowMultiple` or the user prevents it.
      return;
    }
    const items = [...this.items] as SitAccordionItem[];
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

  private async _onKeyboardToggle(event: KeyboardEvent) {
    if (!VALID_KEYS.includes(event.key)) return;
    return this._onToggle(event);
  }

  render() {
    return html`
      <div class="accordion">
        <slot @slotchange=${this._handleSlotChange} @click=${this._onToggle} @keydown=${this._onKeyboardToggle}></slot>
      </div>
    `;
  }
}

export default SitAccordion;
