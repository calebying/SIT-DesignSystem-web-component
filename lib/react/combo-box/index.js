'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitComboBox } from '../components/ComboBox/sit-combo-box.js';
import { register } from '../utils/ce-registry.js';

register("sit-combo-box", SitComboBox);
var index = createComponent({
    react: React,
    tagName: "sit-combo-box",
    elementClass: SitComboBox,
    events: {
        onSitSelect: "sit-select",
        onSitChange: "sit-change",
        onSitInput: "sit-input",
        onSitFocus: "sit-focus",
        onSitBlur: "sit-blur",
        onSitInvalid: "sit-invalid",
        onSitValid: "sit-valid",
        onSitScrollEnd: "sit-scroll-end",
        onSitShow: "sit-show",
        onSitAfterShow: "sit-after-show",
        onSitHide: "sit-hide",
        onSitAfterHide: "sit-after-hide"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
