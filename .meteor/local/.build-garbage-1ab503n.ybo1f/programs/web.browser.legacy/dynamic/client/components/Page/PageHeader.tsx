function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Page/PageHeader.tsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["children", "title"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React, useContext;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useContext: function (v) {
    useContext = v;
  }
}, 1);
var useLayout;
module.link("../../contexts/LayoutContext", {
  useLayout: function (v) {
    useLayout = v;
  }
}, 2);
var BurgerMenu;
module.link("../BurgerMenu", {
  "default": function (v) {
    BurgerMenu = v;
  }
}, 3);
var TemplateHeader;
module.link("../Header", {
  "default": function (v) {
    TemplateHeader = v;
  }
}, 4);
var PageContext;
module.link("./PageContext", {
  "default": function (v) {
    PageContext = v;
  }
}, 5);

var PageHeader = function (_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? undefined : _ref$children,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useContext = useContext(PageContext),
      _useContext2 = _slicedToArray(_useContext, 1),
      border = _useContext2[0];

  var _useLayout = useLayout(),
      isMobile = _useLayout.isMobile;

  return /*#__PURE__*/React.createElement(Box, {
    borderBlockEndWidth: "x2",
    borderBlockEndColor: border ? 'neutral-200' : 'transparent'
  }, /*#__PURE__*/React.createElement(Box, _extends({
    marginBlock: "x16",
    marginInline: "x24",
    minHeight: "x40",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    color: "neutral-800"
  }, props), isMobile && /*#__PURE__*/React.createElement(TemplateHeader.ToolBox, null, /*#__PURE__*/React.createElement(BurgerMenu, null)), /*#__PURE__*/React.createElement(Box, {
    is: "h2",
    fontScale: "h2",
    flexGrow: 1
  }, title), children));
};

module.exportDefault(PageHeader);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Page/6495ff5bea00e20af7de5c9e9538df4b831ea673.map
