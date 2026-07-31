'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitSystemBannerItem } from '../components/SystemBanner/sit-system-banner-item.js';
import { register } from '../utils/ce-registry.js';

register("sit-system-banner-item", SitSystemBannerItem);
var index = createComponent({
    react: React,
    tagName: "sit-system-banner-item",
    elementClass: SitSystemBannerItem,
    events: {
        onSitShowMore: "sit-show-more"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
