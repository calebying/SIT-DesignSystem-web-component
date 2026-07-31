'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitSelect } from '../components/Select/sit-select.js';
import { register } from '../utils/ce-registry.js';

register("sit-select", SitSelect);
var index = createComponent({
    react: React,
    tagName: "sit-select",
    elementClass: SitSelect,
    events: {
        onSitSelect: "sit-select",
        onSitChange: "sit-change",
        onSitFocus: "sit-focus",
        onSitBlur: "sit-blur",
        onSitInvalid: "sit-invalid",
        onSitValid: "sit-valid",
        onSitShow: "sit-show",
        onSitAfterShow: "sit-after-show",
        onSitHide: "sit-hide",
        onSitAfterHide: "sit-after-hide"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
