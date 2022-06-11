function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Card/CardIcon.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Box, Icon;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const hasChildrenProp = props => 'children' in props;

const CardIcon = props => /*#__PURE__*/React.createElement(Box, {
  minWidth: "x16",
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "flex-end",
  justifyContent: "center"
}, hasChildrenProp(props) ? props.children : /*#__PURE__*/React.createElement(Icon, _extends({
  size: "x16"
}, props)));

module.exportDefault(CardIcon);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Card/5d13e8dcdee201573f0ad488adb69e7690d11e58.map
