
import { useRef } from "react";

export const Drawer = () => {
    const drawerRef = useRef(null);

    const showDrawer = () => {
        drawerRef.current?.show();
    };
    const closeDrawer = () => {
        drawerRef.current?.hide();
    };

    return (
        <>
            <sit-button onClick={showDrawer}>Open end Drawer</sit-button>
            <sit-drawer ref={drawerRef} label="" placement="end">
                This is a Drawer
                <sit-button onClick={closeDrawer} slot="footer" variant="link" class="close-drawer">Close</sit-button>
                <sit-button slot="footer" variant="primary" type="submit" form="formA">Submit</sit-button>
            </sit-drawer>
        </>
    )
}
