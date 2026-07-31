'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var react = require('@lit/react');
var sitTabGroup = require('../components/Tab/sit-tab-group.cjs.js');
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

ceRegistry.register("sit-tab-group", sitTabGroup.SitTabGroup);
var index = react.createComponent({
    react: React__namespace,
    tagName: "sit-tab-group",
    elementClass: sitTabGroup.SitTabGroup,
    events: {
        onSitTabShow: "sit-tab-show",
        onSitTabHide: "sit-tab-hide"
    }
});

exports["default"] = index;
//# sourceMappingURL=index.cjs.js.map
