'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitMainnav } from '../components/Mainnav/sit-mainnav.js';
import { register } from '../utils/ce-registry.js';

register("sit-mainnav", SitMainnav);
var index = createComponent({
    react: React,
    tagName: "sit-mainnav",
    elementClass: SitMainnav,
    events: {
        onSitShow: "sit-show",
        onSitAfterShow: "sit-after-show",
        onSitHide: "sit-hide",
        onSitAfterHide: "sit-after-hide"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
