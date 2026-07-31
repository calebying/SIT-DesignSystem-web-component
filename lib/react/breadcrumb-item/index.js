'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitBreadcrumbItem } from '../components/Breadcrumb/sit-breadcrumb-item.js';
import { register } from '../utils/ce-registry.js';

register("sit-breadcrumb-item", SitBreadcrumbItem);
var index = createComponent({
    react: React,
    tagName: "sit-breadcrumb-item",
    elementClass: SitBreadcrumbItem,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
