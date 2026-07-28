import SitTextarea from "@sit-canvas/canvas-web-component/react/textarea";

export const Textarea = () => {
    return <SitTextarea
        label="Label" 
        name="textarea"
        rows="4" 
        invalidfeedback="" 
        placeholder="Placeholder"
        maxlength="100" 
        resize="vertical" 
        defaultvalue="" />
}
