'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitTableRow } from '../components/Table/sit-table-row.js';
import { register } from '../utils/ce-registry.js';

register("sit-table-row", SitTableRow);
var index = createComponent({
    react: React,
    tagName: "sit-table-row",
    elementClass: SitTableRow,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
