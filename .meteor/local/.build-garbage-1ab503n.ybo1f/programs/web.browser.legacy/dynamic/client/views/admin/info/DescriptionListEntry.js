function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/DescriptionListEntry.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["children", "label"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);
var Table;
module.link("@rocket.chat/fuselage", {
  Table: function (v) {
    Table = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var style = {
  wordBreak: 'break-word'
};

var DescriptionListEntry = function (_ref) {
  var children = _ref.children,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Table.Row, props, /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    scope: "col",
    align: "end",
    color: "hint",
    backgroundColor: "surface",
    fontScale: "p2m",
    style: style
  }, label), /*#__PURE__*/React.createElement(Table.Cell, {
    align: "start",
    color: "default",
    style: style
  }, children));
};

module.exportDefault( /*#__PURE__*/memo(DescriptionListEntry));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/56cb168ea55c21b70bfa6928deb4d030b0798e83.map
