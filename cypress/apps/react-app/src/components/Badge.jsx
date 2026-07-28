import SitBadge from "@sit-canvas/canvas-web-component/react/badge";

export const Badge = () => {
    return (
        <>
            <SitBadge>primary</SitBadge>
            <SitBadge>
                <i slot="leftIcon" className="bi bi-credit-card-fill"></i>
                leftIcon slot
            </SitBadge>
            <SitBadge>
                <i slot="rightIcon" className="bi bi-credit-card-fill"></i>
                rightIcon slot
            </SitBadge>
        </>

    )
}
