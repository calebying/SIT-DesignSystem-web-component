'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitRadioGroup } from '../components/Radio/sit-radio-group.js';
import { register } from '../utils/ce-registry.js';

register("sit-radio-group", SitRadioGroup);
var index = createComponent({
    react: React,
    tagName: "sit-radio-group",
    elementClass: SitRadioGroup,
    events: {
        onSitChange: "sit-change",
        onSitInvalid: "sit-invalid",
        onSitValid: "sit-valid"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
