import SitButton from "@sit-canvas/canvas-web-component/react/button";

export const Button = () => {
    return (
        <>
            <SitButton variant="primary"> primary </SitButton>
            <SitButton variant="secondary"> secondary </SitButton>
            <SitButton variant="success"> success </SitButton>
            <SitButton variant="danger"> danger </SitButton>
            <SitButton variant="warning"> warning </SitButton>
            <SitButton variant="info"> info </SitButton>
            <SitButton variant="light"> light </SitButton>
            <SitButton variant="dark"> dark </SitButton>
        </>
    )
}
