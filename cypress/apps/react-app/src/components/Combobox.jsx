import SitCombobox from "@sit-canvas/canvas-web-component/react/combo-box";

export const Combobox = () => {
    return (
      <SitCombobox 
        label="Items" 
        hinttext="" 
        name="undefined" 
        placeholder="ComboBox" 
        value="" 
        close="default"
        menuList={["apple", "orange", "pear"]}>
      </SitCombobox>
    )
}