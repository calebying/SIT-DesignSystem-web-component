import { html, PropertyValueMap } from "lit";
import { property } from "lit/decorators.js";
import SitIcon from "../Icon/sgds-icon";
import SitLink from "../Link/sgds-link";
import breadcrumbItemStyle from "./breadcrumb-item.css";
import SitElement from "../../base/sgds-element";
/**
 * @summary Breadcrumb Item are navigational links used in Breadcrumb component
 *
 * @slot default - The link of the item. Pass in anchor tags into this slot
 */
export class SitBreadcrumbItem extends SitElement {
  static styles = [breadcrumbItemStyle];
  static dependencies: Record<string, typeof SitElement> = {
    "sgds-link": SitLink,
    "sgds-icon": SitIcon
  };
  /** Indicates the link matches the current location of the page. Programmatically handled by SitBreadcrumb to set this prop to true for the last breadcrumb item  */
  @property({ type: Boolean, reflect: true }) active = false;

  private _preventNavigation = (e: MouseEvent) => e.preventDefault();

  override updated(changedProperties: PropertyValueMap<this>) {
    super.updated(changedProperties);
    if (changedProperties.has("active")) {
      const anchor = this.querySelector<HTMLAnchorElement>("a");
      if (anchor) {
        if (this.active) {
          anchor.setAttribute("tabindex", "-1");
          anchor.addEventListener("click", this._preventNavigation);
        } else {
          anchor.removeEventListener("click", this._preventNavigation);
        }
      }
    }
  }

  render() {
    return html`
      <sgds-link><slot class="nav-link"></slot></sgds-link>
      <div class="separator">
        <sgds-icon name="chevron-right" size="sm"></sgds-icon>
      </div>
    `;
  }
}

export default SitBreadcrumbItem;
