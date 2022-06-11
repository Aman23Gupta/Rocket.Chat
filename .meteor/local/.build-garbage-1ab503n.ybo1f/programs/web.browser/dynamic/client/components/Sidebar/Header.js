function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Sidebar/Header.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["title", "onClose", "children"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Box, ActionButton;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  ActionButton(v) {
    ActionButton = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const Header = _ref => {
  let {
    title,
    onClose,
    children = undefined
  } = _ref,
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
//# sourceMappingURL=/dynamic/client/components/Sidebar/1037bd186167ed98480957c7666c0ffb09a64b01.map
