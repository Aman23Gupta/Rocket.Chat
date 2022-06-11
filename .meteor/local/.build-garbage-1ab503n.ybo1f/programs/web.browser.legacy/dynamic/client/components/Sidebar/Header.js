function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Sidebar/Header.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["title", "onClose", "children"];

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
var Box, ActionButton;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  ActionButton: function (v) {
    ActionButton = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var Header = function (_ref) {
  var title = _ref.title,
      onClose = _ref.onClose,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? undefined : _ref$children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "header",
    display: "flex",
    flexDirection: "column",
    pb: "x16"
  }, props), (title || onClose) && /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    pi: "x24",
    justifyContent: "space-between",
    flexGrow: 1
  }, title && /*#__PURE__*/React.createElement(Box, {
    color: "neutral-800",
    fontSize: "p2",
    fontWeight: "p2",
    flexShrink: 1,
    withTruncatedText: true
  }, title), onClose && /*#__PURE__*/React.createElement(ActionButton, {
    ghost: true,
    small: true,
    icon: "cross",
    onClick: onClose
  })), children);
};

module.exportDefault(Header);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Sidebar/1bb24279f18309d117b30b5fe180c0c64b2380ff.map
