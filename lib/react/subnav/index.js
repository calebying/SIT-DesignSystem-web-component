'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitSubnav } from '../components/Subnav/sit-subnav.js';
import { register } from '../utils/ce-registry.js';

register("sit-subnav", SitSubnav);
var index = createComponent({
    react: React,
    tagName: "sit-subnav",
    elementClass: SitSubnav,
    events: {
        onSitShow: "sit-show",
        onSitAfterShow: "sit-after-show",
        onSitHide: "sit-hide",
        onSitAfterHide: "sit-after-hide"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
