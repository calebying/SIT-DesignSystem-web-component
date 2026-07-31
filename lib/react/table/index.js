'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitTable } from '../components/Table/sit-table.js';
import { register } from '../utils/ce-registry.js';

register("sit-table", SitTable);
var index = createComponent({
    react: React,
    tagName: "sit-table",
    elementClass: SitTable,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
