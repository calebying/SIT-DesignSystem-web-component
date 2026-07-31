'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitSystemBanner } from '../components/SystemBanner/sit-system-banner.js';
import { register } from '../utils/ce-registry.js';

register("sit-system-banner", SitSystemBanner);
var index = createComponent({
    react: React,
    tagName: "sit-system-banner",
    elementClass: SitSystemBanner,
    events: {
        onSitShow: "sit-show",
        onSitHide: "sit-hide"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
