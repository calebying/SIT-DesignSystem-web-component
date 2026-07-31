'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitPagination } from '../components/Pagination/sit-pagination.js';
import { register } from '../utils/ce-registry.js';

register("sit-pagination", SitPagination);
var index = createComponent({
    react: React,
    tagName: "sit-pagination",
    elementClass: SitPagination,
    events: {
        onSitPageChange: "sit-page-change"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
