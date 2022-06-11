function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/counter/CounterRow.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["children"];

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
let Box, Divider;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Divider(v) {
    Divider = v;
  }

}, 0);
let React, Fragment;
module.link("react", {
  default(v) {
    React = v;
  },

  Fragment(v) {
    Fragment = v;
  }

}, 1);
let flattenChildren;
module.link("react-keyed-flatten-children", {
  default(v) {
    flattenChildren = v;
  }

}, 2);

const CounterRow = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Box, _extends({
    pb: "x28",
    pi: "x20",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexGrow: 1
  }, props), children && flattenChildren(children).reduce((acc, child, i) => {
    acc = children.length - 1 !== i ? [...acc, /*#__PURE__*/React.createElement(Fragment, {
      key: i
    }, child), /*#__PURE__*/React.createElement(Divider, {
      key: (i + 1) * children.length,
      width: "x2",
      m: "none",
      alignSelf: "stretch"
    })] : [...acc, child];
    return acc;
  }, []));
};

module.exportDefault(CounterRow);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/counter/5c6f3641628737bfd5ddf079ae19fb74f727b4ca.map
