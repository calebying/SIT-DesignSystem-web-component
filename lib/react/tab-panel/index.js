'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitTabPanel } from '../components/Tab/sit-tab-panel.js';
import { register } from '../utils/ce-registry.js';

register("sit-tab-panel", SitTabPanel);
var index = createComponent({
    react: React,
    tagName: "sit-tab-panel",
    elementClass: SitTabPanel,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
