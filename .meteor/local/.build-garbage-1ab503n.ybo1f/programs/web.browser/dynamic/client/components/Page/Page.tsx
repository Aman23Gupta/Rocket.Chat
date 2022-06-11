function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Page/Page.tsx                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let PageContext;
module.link("./PageContext", {
  default(v) {
    PageContext = v;
  }

}, 2);

const Page = props => {
  const [border, setBorder] = useState(false);
  return /*#__PURE__*/React.createElement(PageContext.Provider, {
    value: [border, setBorder]
  }, /*#__PURE__*/React.createElement(Box, _extends({
    backgroundColor: "surface",
    is: "section",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 1,
    height: "full",
    overflow: "hidden"
  }, props)));
};

module.exportDefault(Page);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Page/473659c795b36c6d2dd147e169bdd881d032120a.map
