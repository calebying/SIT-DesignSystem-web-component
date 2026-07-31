'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitTabGroup } from '../components/Tab/sit-tab-group.js';
import { register } from '../utils/ce-registry.js';

register("sit-tab-group", SitTabGroup);
var index = createComponent({
    react: React,
    tagName: "sit-tab-group",
    elementClass: SitTabGroup,
    events: {
        onSitTabShow: "sit-tab-show",
        onSitTabHide: "sit-tab-hide"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
