'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitBadge } from '../components/Badge/sit-badge.js';
import { register } from '../utils/ce-registry.js';

register("sit-badge", SitBadge);
var index = createComponent({
    react: React,
    tagName: "sit-badge",
    elementClass: SitBadge,
    events: {
        onSitShow: "sit-show",
        onSitHide: "sit-hide",
        onSitAfterShow: "sit-after-show",
        onSitAfterHide: "sit-after-hide"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
