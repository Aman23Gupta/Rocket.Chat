function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/data/Growth.js                                                                                    //
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
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let NegativeGrowthSymbol;
module.link("./NegativeGrowthSymbol", {
  default(v) {
    NegativeGrowthSymbol = v;
  }

}, 2);
let PositiveGrowthSymbol;
module.link("./PositiveGrowthSymbol", {
  default(v) {
    PositiveGrowthSymbol = v;
  }

}, 3);

function Growth(_ref) {
  let {
    children
  } = _ref,
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
//# sourceMappingURL=/dynamic/client/components/data/008b62e0bd6005a36506e10559492a5977837e2b.map
