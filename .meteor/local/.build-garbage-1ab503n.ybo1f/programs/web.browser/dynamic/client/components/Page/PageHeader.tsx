function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Page/PageHeader.tsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["children", "title"];

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
let React, useContext;
module.link("react", {
  default(v) {
    React = v;
  },

  useContext(v) {
    useContext = v;
  }

}, 1);
let useLayout;
module.link("../../contexts/LayoutContext", {
  useLayout(v) {
    useLayout = v;
  }

}, 2);
let BurgerMenu;
module.link("../BurgerMenu", {
  default(v) {
    BurgerMenu = v;
  }

}, 3);
let TemplateHeader;
module.link("../Header", {
  default(v) {
    TemplateHeader = v;
  }

}, 4);
let PageContext;
module.link("./PageContext", {
  default(v) {
    PageContext = v;
  }

}, 5);

const PageHeader = _ref => {
  let {
    children = undefined,
    title
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [border] = useContext(PageContext);
  const {
    isMobile
  } = useLayout();
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
//# sourceMappingURL=/dynamic/client/components/Page/f7358fdaaade8a79922f551b9b271157ff37e173.map
