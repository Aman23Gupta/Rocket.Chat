function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarHeader.tsx                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["children"];

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
var Box, Margins;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Margins: function (v) {
    Margins = v;
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

var VerticalBarHeader = function (_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Box, _extends({
    display: "flex",
    alignItems: "center",
    minHeight: "56px",
    maxHeight: "56px",
    is: "h3",
    pi: "x24",
    borderBlockEndWidth: "x2",
    borderBlockColor: "neutral-200"
  }, props), /*#__PURE__*/React.createElement(Box, {
    marginInline: "neg-x4",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontScale: "h4",
    flexGrow: 1,
    overflow: "hidden",
    color: "neutral-800"
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x4"
  }, children)));
};

module.exportDefault( /*#__PURE__*/memo(VerticalBarHeader));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/1afa08c5aba7fdbcc0a7806aeaf7fcd2432a5198.map
