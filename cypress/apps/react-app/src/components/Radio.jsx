import SitRadio from "@sit-canvas/canvas-web-component/react/radio";
import SitRadioGroup from "@sit-canvas/canvas-web-component/react/radio-group";

export const Radio = () => {
    return (
        <SitRadioGroup>
            <span slot="label">Select an option</span>
            <SitRadio>Option 1</SitRadio>
            <SitRadio value="2">Option 2</SitRadio>
            <SitRadio value="3">Option 3</SitRadio>
        </SitRadioGroup>
    )
}
