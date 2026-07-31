'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitSidenavItem } from '../components/Sidenav/sit-sidenav-item.js';
import { register } from '../utils/ce-registry.js';

register("sit-sidenav-item", SitSidenavItem);
var index = createComponent({
    react: React,
    tagName: "sit-sidenav-item",
    elementClass: SitSidenavItem,
    events: {
        onSitToggle: "sit-toggle",
        onSitShow: "sit-show",
        onSitAfterShow: "sit-after-show",
        onSitHide: "sit-hide",
        onSitAfterHide: "sit-after-hide"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
