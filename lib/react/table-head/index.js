'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitTableHead } from '../components/Table/sit-table-head.js';
import { register } from '../utils/ce-registry.js';

register("sit-table-head", SitTableHead);
var index = createComponent({
    react: React,
    tagName: "sit-table-head",
    elementClass: SitTableHead,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
