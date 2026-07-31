'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitTooltip } from '../components/Tooltip/sit-tooltip.js';
import { register } from '../utils/ce-registry.js';

register("sit-tooltip", SitTooltip);
var index = createComponent({
    react: React,
    tagName: "sit-tooltip",
    elementClass: SitTooltip,
    events: {
        onSitShow: "sit-show",
        onSitAfterShow: "sit-after-show",
        onSitHide: "sit-hide",
        onSitAfterHide: "sit-after-hide"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
