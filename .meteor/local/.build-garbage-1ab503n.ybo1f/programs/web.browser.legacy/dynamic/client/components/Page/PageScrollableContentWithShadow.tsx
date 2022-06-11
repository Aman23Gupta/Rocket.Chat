function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Page/PageScrollableContentWithShadow.tsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onScrollContent"],
    _excluded2 = ["top"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
var React, useContext;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useContext: function (v) {
    useContext = v;
  }
}, 0);
var PageContext;
module.link("./PageContext", {
  "default": function (v) {
    PageContext = v;
  }
}, 1);
var PageScrollableContent;
module.link("./PageScrollableContent", {
  "default": function (v) {
    PageScrollableContent = v;
  }
}, 2);

var PageScrollableContentWithShadow = function (_ref) {
  var onScrollContent = _ref.onScrollContent,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useContext = useContext(PageContext),
      _useContext2 = _slicedToArray(_useContext, 2),
      setBorder = _useContext2[1];

  return /*#__PURE__*/React.createElement(PageScrollableContent, _extends({
    onScrollContent: function (_ref2) {
      var top = _ref2.top,
          args = _objectWithoutProperties(_ref2, _excluded2);

      setBorder(!!top);
      onScrollContent === null || onScrollContent === void 0 ? void 0 : onScrollContent(_objectSpread({
        top: top
      }, args));
    }
  }, props));
};

module.exportDefault(PageScrollableContentWithShadow);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Page/dc12ee063a212a16af9eb83d691dc66e002c2463.map
