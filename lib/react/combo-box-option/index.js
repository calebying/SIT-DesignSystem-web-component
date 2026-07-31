'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitComboBoxOption } from '../components/ComboBox/sit-combo-box-option.js';
import { register } from '../utils/ce-registry.js';

register("sit-combo-box-option", SitComboBoxOption);
var index = createComponent({
    react: React,
    tagName: "sit-combo-box-option",
    elementClass: SitComboBoxOption,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
