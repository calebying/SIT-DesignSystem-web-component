import { SitBreadcrumb } from "./sit-breadcrumb";
import { SitBreadcrumbItem } from "./sit-breadcrumb-item";
import { register } from "../../utils/ce-registry";

register("sit-breadcrumb", SitBreadcrumb);
register("sit-breadcrumb-item", SitBreadcrumbItem);

declare global {
  interface HTMLElementTagNameMap {
    "sit-breadcrumb-item": SitBreadcrumbItem;
    "sit-breadcrumb": SitBreadcrumb;
  }
}
