import SitButton from "@sit-canvas/canvas-web-component/react/button";
import SitModal from "@sit-canvas/canvas-web-component/react/modal";
import { useRef } from "react";

export const Modal = () => {
    const modalRef = useRef(null);

    const showModal = () => {
        modalRef.current?.show();
    };
    const closeModal = () => {
        modalRef.current?.hide();
    };

    return (
        <>
            <SitButton onClick={showModal}>Open Modal</SitButton>
            <SitModal
                ref={modalRef}
                title="hello"
                titleicon="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;16&quot; height=&quot;16&quot; fill=&quot;currentColor&quot; class=&quot;bi bi-amd&quot; viewBox=&quot;0 0 16 16&quot;>
                            <path d=&quot;m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0H.334ZM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72Z&quot;/>
                            </svg>">
                This is a Modal
                <SitButton onClick={closeModal} slot="footer" variant="link" class="close-modal">Close</SitButton>
                <SitButton slot="footer" variant="primary" type="submit" form="formA">Submit</SitButton>
            </SitModal>
        </>
    )
}
