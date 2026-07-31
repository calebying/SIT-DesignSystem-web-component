'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitSidebarGroup } from '../components/Sidebar/sit-sidebar-group.js';
import { register } from '../utils/ce-registry.js';

register("sit-sidebar-group", SitSidebarGroup);
var index = createComponent({
    react: React,
    tagName: "sit-sidebar-group",
    elementClass: SitSidebarGroup,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
