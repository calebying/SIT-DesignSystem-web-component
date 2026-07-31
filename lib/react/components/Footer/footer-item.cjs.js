'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lit = require('lit');

var css_248z = lit.css`.footer-item{margin-bottom:var(--sit-margin-xs)}.footer-item,.links{display:flex;flex-direction:column;gap:var(--sit-gap-xs)}slot[name=title]::slotted(*){--sit-paragraph-spacing-xl:var(--sit-margin-none);--sit-font-weight-regular:var(--sit-font-weight-semibold);color:var(--sit-color-fixed-light);font-weight:var(--sit-font-weight-regular,--sit-font-weight-semibold);margin:var(--sit-paragraph-spacing-xl,--sit-margin-none)}.links{margin:0;padding:0}.links slot::slotted(a){--sit-link-color-default:var(--sit-color-fixed-light);color:var(--sit-link-color-default,--sit-fixed-light);width:fit-content}.links slot::slotted(a:focus),.links slot::slotted(a:focus-visible),slot::slotted(a:hover){--sit-link-color-emphasis:var(--sit-color-fixed-light);color:var(--sit-link-color-emphasis,--sit-color-fixed-light)}.links slot::slotted(a:focus-visible){outline:var(--sit-outline-focus);outline-offset:var(--sit-outline-offset-focus)}:host([tone=neutral]) slot[name=title]::slotted(*){color:var(--sit-color-default)}:host([tone=neutral]) .links slot::slotted(a){--sit-link-color-default:var(--sit-color-default);color:var(--sit-link-color-default)}:host([tone=neutral]) .links slot::slotted(a:focus),:host([tone=neutral]) .links slot::slotted(a:focus-visible),:host([tone=neutral]) .links slot::slotted(a:hover){--sit-link-color-emphasis:var(--sit-color-default);color:var(--sit-link-color-emphasis)}`;

exports["default"] = css_248z;
//# sourceMappingURL=footer-item.cjs.js.map
