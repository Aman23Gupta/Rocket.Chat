function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/counter/CounterRow.js                                                   //
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

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var Box, Divider;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Divider: function (v) {
    Divider = v;
  }
}, 0);
var React, Fragment;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  Fragment: function (v) {
    Fragment = v;
  }
}, 1);
var flattenChildren;
module.link("react-keyed-flatten-children", {
  "default": function (v) {
    flattenChildren = v;
  }
}, 2);

var CounterRow = function (_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Box, _extends({
    pb: "x28",
    pi: "x20",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexGrow: 1
  }, props), children && flattenChildren(children).reduce(function (acc, child, i) {
    acc = children.length - 1 !== i ? [].concat(_toConsumableArray(acc), [/*#__PURE__*/React.createElement(Fragment, {
      key: i
    }, child), /*#__PURE__*/React.createElement(Divider, {
      key: (i + 1) * children.length,
      width: "x2",
      m: "none",
      alignSelf: "stretch"
    })]) : [].concat(_toConsumableArray(acc), [child]);
    return acc;
  }, []));
};

module.exportDefault(CounterRow);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/counter/c2632178690baffb325973f3ca370dd212a83a86.map
