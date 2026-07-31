'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitDropdown } from '../components/Dropdown/sit-dropdown.js';
import { register } from '../utils/ce-registry.js';

register("sit-dropdown", SitDropdown);
var index = createComponent({
    react: React,
    tagName: "sit-dropdown",
    elementClass: SitDropdown,
    events: {
        onSitSelect: "sit-select",
        onSitShow: "sit-show",
        onSitAfterShow: "sit-after-show",
        onSitHide: "sit-hide",
        onSitAfterHide: "sit-after-hide"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
