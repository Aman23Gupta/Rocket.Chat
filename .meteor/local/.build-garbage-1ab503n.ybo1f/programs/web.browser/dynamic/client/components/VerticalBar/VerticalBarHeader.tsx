function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarHeader.tsx                                                                 //
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
let Box, Margins;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);

const VerticalBarHeader = _ref => {
  let {
    children
  } = _ref,
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
//# sourceMappingURL=/dynamic/client/components/VerticalBar/b1703339ec48ba729be2e7077882daff21989d7d.map
