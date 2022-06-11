function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/data/Growth.js                                                                                    //
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
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var NegativeGrowthSymbol;
module.link("./NegativeGrowthSymbol", {
  "default": function (v) {
    NegativeGrowthSymbol = v;
  }
}, 2);
var PositiveGrowthSymbol;
module.link("./PositiveGrowthSymbol", {
  "default": function (v) {
    PositiveGrowthSymbol = v;
  }
}, 3);

function Growth(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  if (children === 0) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "span",
    color: children < 0 ? 'danger' : 'success'
  }, props), children < 0 ? /*#__PURE__*/React.createElement(NegativeGrowthSymbol, null) : /*#__PURE__*/React.createElement(PositiveGrowthSymbol, null), String(Math.abs(children)));
}

module.exportDefault(Growth);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/data/b5e97bf9baa60f7244d22c3ea742c0cba19be4c9.map
