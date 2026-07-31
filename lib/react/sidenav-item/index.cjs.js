'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var react = require('@lit/react');
var sitSidenavItem = require('../components/Sidenav/sit-sidenav-item.cjs.js');
var ceRegistry = require('../utils/ce-registry.cjs.js');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

ceRegistry.register("sit-sidenav-item", sitSidenavItem.SitSidenavItem);
var index = react.createComponent({
    react: React__namespace,
    tagName: "sit-sidenav-item",
    elementClass: sitSidenavItem.SitSidenavItem,
    events: {
        onSitToggle: "sit-toggle",
        onSitShow: "sit-show",
        onSitAfterShow: "sit-after-show",
        onSitHide: "sit-hide",
        onSitAfterHide: "sit-after-hide"
    }
});

exports["default"] = index;
//# sourceMappingURL=index.cjs.js.map
