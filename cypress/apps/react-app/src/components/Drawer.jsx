import SitButton from "@sit-canvas/canvas-web-component/react/button";
import SitDrawer from "@sit-canvas/canvas-web-component/react/drawer";
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
            <SitButton onClick={showDrawer}>Open end Drawer</SitButton>
            <SitDrawer ref={drawerRef} label="" placement="end">
                This is a Drawer
                <SitButton onClick={closeDrawer} slot="footer" variant="link" class="close-drawer">Close</SitButton>
                <SitButton slot="footer" variant="primary" type="submit" form="formA">Submit</SitButton>
            </SitDrawer>
        </>
    )
}
