function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Page/PageScrollableContentWithShadow.tsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onScrollContent"],
      _excluded2 = ["top"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 1);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);
let React, useContext;
module.link("react", {
  default(v) {
    React = v;
  },

  useContext(v) {
    useContext = v;
  }

}, 0);
let PageContext;
module.link("./PageContext", {
  default(v) {
    PageContext = v;
  }

}, 1);
let PageScrollableContent;
module.link("./PageScrollableContent", {
  default(v) {
    PageScrollableContent = v;
  }

}, 2);

const PageScrollableContentWithShadow = _ref => {
  let {
    onScrollContent
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [, setBorder] = useContext(PageContext);
  return /*#__PURE__*/React.createElement(PageScrollableContent, _extends({
    onScrollContent: _ref2 => {
      let {
        top
      } = _ref2,
          args = _objectWithoutProperties(_ref2, _excluded2);

      setBorder(!!top);
      onScrollContent === null || onScrollContent === void 0 ? void 0 : onScrollContent(_objectSpread({
        top
      }, args));
    }
  }, props));
};

module.exportDefault(PageScrollableContentWithShadow);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Page/35941d6c5e2955188f02d3f6379f6a3bb878e267.map
