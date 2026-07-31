'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitDatepicker } from '../components/Datepicker/sit-datepicker.js';
import { register } from '../utils/ce-registry.js';

register("sit-datepicker", SitDatepicker);
var index = createComponent({
    react: React,
    tagName: "sit-datepicker",
    elementClass: SitDatepicker,
    events: {
        onSitChangeDate: "sit-change-date",
        onSitInvalid: "sit-invalid",
        onSitValid: "sit-valid",
        onSitShow: "sit-show",
        onSitAfterShow: "sit-after-show",
        onSitHide: "sit-hide",
        onSitAfterHide: "sit-after-hide"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
