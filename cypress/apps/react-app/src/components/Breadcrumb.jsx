import SitBreadcrumb from "@sit-canvas/canvas-web-component/react/breadcrumb";
import SitBreadcrumbItem from "@sit-canvas/canvas-web-component/react/breadcrumb-item";

export const Breadcrumb = () => {
    return (
        <SitBreadcrumb arialabel="breadcrumb">
            <SitBreadcrumbItem>
            <a href="https://www.google.com/">Home</a>
            </SitBreadcrumbItem>
            <SitBreadcrumbItem>
            <a href="https://www.google.com/">Home</a>
            </SitBreadcrumbItem>
            <SitBreadcrumbItem><a href="https://www.google.com/">Home</a></SitBreadcrumbItem>
            <SitBreadcrumbItem ><a href="https://www.google.com/">Home</a></SitBreadcrumbItem>
            <SitBreadcrumbItem>Last Item</SitBreadcrumbItem>
        </SitBreadcrumb>
    )
}
