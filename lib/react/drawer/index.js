'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitDrawer } from '../components/Drawer/sit-drawer.js';
import { register } from '../utils/ce-registry.js';

register("sit-drawer", SitDrawer);
var index = createComponent({
    react: React,
    tagName: "sit-drawer",
    elementClass: SitDrawer,
    events: {
        onSitShow: "sit-show",
        onSitAfterShow: "sit-after-show",
        onSitHide: "sit-hide",
        onSitAfterHide: "sit-after-hide",
        onSitInitialFocus: "sit-initial-focus",
        onSitRequestClose: "sit-request-close"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
