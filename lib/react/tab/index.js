'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitTab } from '../components/Tab/sit-tab.js';
import { register } from '../utils/ce-registry.js';

register("sit-tab", SitTab);
var index = createComponent({
    react: React,
    tagName: "sit-tab",
    elementClass: SitTab,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
