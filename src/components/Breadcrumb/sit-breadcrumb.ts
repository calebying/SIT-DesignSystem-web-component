import { property, query } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { html } from "lit/static-html.js";
import SitElement from "../../base/sit-element";
import SitOverflowMenu from "../OverflowMenu/sit-overflow-menu";
import breadcrumbStyle from "./breadcrumb.css";
import type SitBreadcrumbItem from "./sit-breadcrumb-item";
/**
 * @summary Breadcrumbs help users to navigate and understand where they are on the current website or service.
 *
 * @slot default - The slot to pass in custom elements of `SitBreadcrumbItems`.
 *
 */
export class SitBreadcrumb extends SitElement {
  static styles = [...SitElement.styles, breadcrumbStyle];
  static dependencies = {
    "sit-overflow-menu": SitOverflowMenu
  };
  /** The aria-label of nav element within breadcrumb component. */
  @property({ type: String }) ariaLabel = "breadcrumb";

  /**@internal */
  @query("slot") defaultSlot: HTMLSlotElement;
  /**
   * creates `<sit-breadcrumb-item>
   *            <sit-overflow-menu>
   *              <sit-dropdown-item></sit-dropdown-item>
   *               ...
   *            </sit-overflow-menu>
   *          <sit-breadcrumb-item>`
   */
  private _replaceExcessItemsWithDropdown(items: SitBreadcrumbItem[]) {
    const breadcrumbItem = document.createElement("sit-breadcrumb-item");
    const overflowMenu = document.createElement("sit-overflow-menu");
    overflowMenu.setAttribute("aria-haspopup", "menu");
    overflowMenu.setAttribute("size", "sm");
    const mapItems = items.filter((item, index) => {
      if (index > 0 && index < items.length - 2) {
        const clonedAnchor = item.querySelector("a");
        const clonedAnchorNode = clonedAnchor.cloneNode(true);
        const dropdownItem = document.createElement("sit-dropdown-item");
        dropdownItem.appendChild(clonedAnchorNode);
        overflowMenu.appendChild(dropdownItem);
        return;
      } else {
        return item;
      }
    });
    breadcrumbItem.classList.add("overflow-menu");
    breadcrumbItem.appendChild(overflowMenu);
    mapItems.splice(1, 0, breadcrumbItem);

    this.defaultSlot.replaceWith(...mapItems);
  }

  private _handleSlotChange(e: Event) {
    const items = (e.target as HTMLSlotElement)
      .assignedElements({ flatten: true })
      .filter(
        (item: SitBreadcrumbItem) => item.tagName.toLowerCase() === "sit-breadcrumb-item"
      ) as SitBreadcrumbItem[];
    items.forEach((item, index) => {
      if (index === items.length - 1) {
        item.setAttribute("aria-current", "page");
        item.active = true;
      } else {
        item.removeAttribute("aria-current");
      }
    });

    if (items.length >= 5) {
      this._replaceExcessItemsWithDropdown(items);
    }
  }

  render() {
    return html`
      <div aria-label=${ifDefined(this.ariaLabel)}>
        <div class="breadcrumb">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `;
  }
}

export default SitBreadcrumb;
