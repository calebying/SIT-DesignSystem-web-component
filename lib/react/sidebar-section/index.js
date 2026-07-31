'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitSidebarSection } from '../components/Sidebar/sit-sidebar-section.js';
import { register } from '../utils/ce-registry.js';

register("sit-sidebar-section", SitSidebarSection);
var index = createComponent({
    react: React,
    tagName: "sit-sidebar-section",
    elementClass: SitSidebarSection,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
