
export const Badge = () => {
    return (
        <>
            <sit-badge>primary</sit-badge>
            <sit-badge>
                <i slot="leftIcon" className="bi bi-credit-card-fill"></i>
                leftIcon slot
            </sit-badge>
            <sit-badge>
                <i slot="rightIcon" className="bi bi-credit-card-fill"></i>
                rightIcon slot
            </sit-badge>
        </>

    )
}
