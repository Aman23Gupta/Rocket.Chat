function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Page/Page.tsx                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var PageContext;
module.link("./PageContext", {
  "default": function (v) {
    PageContext = v;
  }
}, 2);

var Page = function (props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      border = _useState2[0],
      setBorder = _useState2[1];

  return /*#__PURE__*/React.createElement(PageContext.Provider, {
    value: [border, setBorder]
  }, /*#__PURE__*/React.createElement(Box, _extends({
    backgroundColor: "surface",
    is: "section",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 1,
    height: "full",
    overflow: "hidden"
  }, props)));
};

module.exportDefault(Page);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Page/fbe55a3ebf38436d94cb51a70efb7d61e1c4809f.map
