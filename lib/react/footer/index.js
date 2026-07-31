'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitFooter } from '../components/Footer/sit-footer.js';
import { register } from '../utils/ce-registry.js';

register("sit-footer", SitFooter);
var index = createComponent({
    react: React,
    tagName: "sit-footer",
    elementClass: SitFooter,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
