'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitCheckboxGroup } from '../components/Checkbox/sit-checkbox-group.js';
import { register } from '../utils/ce-registry.js';

register("sit-checkbox-group", SitCheckboxGroup);
var index = createComponent({
    react: React,
    tagName: "sit-checkbox-group",
    elementClass: SitCheckboxGroup,
    events: {
        onSitChange: "sit-change",
        onSitInvalid: "sit-invalid",
        onSitValid: "sit-valid"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
