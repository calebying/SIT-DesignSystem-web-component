'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var react = require('@lit/react');
var sitFileUpload = require('../components/FileUpload/sit-file-upload.cjs.js');
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

ceRegistry.register("sit-file-upload", sitFileUpload.SitFileUpload);
var index = react.createComponent({
    react: React__namespace,
    tagName: "sit-file-upload",
    elementClass: sitFileUpload.SitFileUpload,
    events: {
        onSitFilesSelected: "sit-files-selected",
        onSitAddFiles: "sit-add-files",
        onSitRemoveFile: "sit-remove-file",
        onSitChange: "sit-change"
    }
});

exports["default"] = index;
//# sourceMappingURL=index.cjs.js.map
