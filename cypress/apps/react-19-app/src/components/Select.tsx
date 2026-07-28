import React from "react";

import SitSelect from "@sit-canvas/canvas-web-component/react/select/index.js"
import SitSelectOption from "@sit-canvas/canvas-web-component/react/select-option/index.js"
// import "@sit-canvas/canvas-web-component/components/Select"
export const Select = () => {
    return (
      <div>
      <SitSelect
        label="Fruits" 
        hintText="single select" 
        name="combobox" 
        placeholder="ComboBox" 
        value="1"
        >
            <SitSelectOption value="1">One</SitSelectOption>
      </SitSelect>
     
      {/* <sit-select
        label="Fruits" 
        hintText="single select" 
        name="combobox" 
        placeholder="ComboBox" 
        value="1"
        >
            <sit-select-option value="1">One</sit-select-option>
      </sit-select> */}
     
      </div>
    )
}