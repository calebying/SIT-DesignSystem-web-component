<script setup lang="ts">
import type { ISitComboBoxInputEventDetail } from '@sit-canvas/canvas-web-component/components/ComboBox/sit-combo-box.js';


const inputHandler = (e: CustomEvent<ISitComboBoxInputEventDetail>) => {
  const detail = e.detail
}

</script>
<template>
      <sit-combo-box placeholder="Single select combo box with default filter" id="default-filter-combobox-example" @sit-input="inputHandler">
      <sit-combo-box-option value="apple">Apple</sit-combo-box-option>
      <sit-combo-box-option value="banana">Banana</sit-combo-box-option>
      <sit-combo-box-option value="carrot">Carrot</sit-combo-box-option>
      <sit-combo-box-option value="durian">Durian</sit-combo-box-option>
      <sit-combo-box-option value="eggplant">Eggplant</sit-combo-box-option>
    </sit-combo-box>

    <sit-combo-box value="1;2;3;4;5;6;7;8" .menuList='[
      { "label": "John Smith", "value": "1" },
      { "label": "Jack Adams", "value": "2" },
      { "label": "Regina Bride", "value": "3" },
      { "label": "Christian Dior", "value": "4" },
      { "label": "Prada Low", "value": "5" },
      { "label": "Chloe Delight", "value": "6" },
      { "label": "Jade Apheremal", "value": "7" },
      { "label": "Louis Vuitton", "value": "8" }
      ]' multiSelect label="label" hintText="multiple" hasFeedback="true" invalidFeedback="test"
    >
    </sit-combo-box>
</template>
