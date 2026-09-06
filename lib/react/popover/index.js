'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitPopover } from '../components/Popover/sit-popover.js';
import { register } from '../utils/ce-registry.js';

register("sit-popover", SitPopover);
var index = createComponent({
    react: React,
    tagName: "sit-popover",
    elementClass: SitPopover,
    events: {
        onSitShow: "sit-show",
        onSitAfterShow: "sit-after-show",
        onSitHide: "sit-hide",
        onSitAfterHide: "sit-after-hide"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
