'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitSidebarItem } from '../components/Sidebar/sit-sidebar-item.js';
import { register } from '../utils/ce-registry.js';

register("sit-sidebar-item", SitSidebarItem);
var index = createComponent({
    react: React,
    tagName: "sit-sidebar-item",
    elementClass: SitSidebarItem,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
