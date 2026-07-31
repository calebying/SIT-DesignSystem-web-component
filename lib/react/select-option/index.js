'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitSelectOption } from '../components/Select/sit-select-option.js';
import { register } from '../utils/ce-registry.js';

register("sit-select-option", SitSelectOption);
var index = createComponent({
    react: React,
    tagName: "sit-select-option",
    elementClass: SitSelectOption,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
