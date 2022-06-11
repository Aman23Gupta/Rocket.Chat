function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/DescriptionList.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["children", "title"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Box, Table;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
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
var DescriptionListEntry;
module.link("./DescriptionListEntry", {
  "default": function (v) {
    DescriptionListEntry = v;
  }
}, 2);

var DescriptionList = function (_ref) {
  var children = _ref.children,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "flex-end",
    width: "30%",
    paddingInline: "x8"
  }, title), /*#__PURE__*/React.createElement(Table, _extends({
    striped: true,
    marginBlockEnd: "x32",
    width: "full"
  }, props), /*#__PURE__*/React.createElement(Table.Body, null, children)));
};

module.exportDefault(Object.assign( /*#__PURE__*/memo(DescriptionList), {
  Entry: DescriptionListEntry
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/91328005ad35f81ef49f2b20e96c70b8f24e9bdf.map
