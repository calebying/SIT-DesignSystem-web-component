'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitSidebar } from '../components/Sidebar/sit-sidebar.js';
import { register } from '../utils/ce-registry.js';

register("sit-sidebar", SitSidebar);
var index = createComponent({
    react: React,
    tagName: "sit-sidebar",
    elementClass: SitSidebar,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
