function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Card/CardIcon.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var Box, Icon;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var hasChildrenProp = function (props) {
  return 'children' in props;
};

var CardIcon = function (props) {
  return /*#__PURE__*/React.createElement(Box, {
    minWidth: "x16",
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center"
  }, hasChildrenProp(props) ? props.children : /*#__PURE__*/React.createElement(Icon, _extends({
    size: "x16"
  }, props)));
};

module.exportDefault(CardIcon);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Card/23b86e09e402b3a1e7e785e852cabedda4584600.map
