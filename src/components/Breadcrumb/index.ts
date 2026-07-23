import { SitBreadcrumb } from "./sgds-breadcrumb";
import { SitBreadcrumbItem } from "./sgds-breadcrumb-item";
import { register } from "../../utils/ce-registry";

register("sgds-breadcrumb", SitBreadcrumb);
register("sgds-breadcrumb-item", SitBreadcrumbItem);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-breadcrumb-item": SitBreadcrumbItem;
    "sgds-breadcrumb": SitBreadcrumb;
  }
}
