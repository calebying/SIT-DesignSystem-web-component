'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitTableCell } from '../components/Table/sit-table-cell.js';
import { register } from '../utils/ce-registry.js';

register("sit-table-cell", SitTableCell);
var index = createComponent({
    react: React,
    tagName: "sit-table-cell",
    elementClass: SitTableCell,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
