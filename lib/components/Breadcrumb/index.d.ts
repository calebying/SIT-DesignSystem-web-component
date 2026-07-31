import { SitBreadcrumb } from "./sit-breadcrumb";
import { SitBreadcrumbItem } from "./sit-breadcrumb-item";
declare global {
    interface HTMLElementTagNameMap {
        "sit-breadcrumb-item": SitBreadcrumbItem;
        "sit-breadcrumb": SitBreadcrumb;
    }
}
