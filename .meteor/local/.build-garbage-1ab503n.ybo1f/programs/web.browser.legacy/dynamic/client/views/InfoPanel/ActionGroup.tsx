function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/InfoPanel/ActionGroup.tsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var ButtonGroup;
module.link("@rocket.chat/fuselage", {
  ButtonGroup: function (v) {
    ButtonGroup = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var Section;
module.link("./Section", {
  "default": function (v) {
    Section = v;
  }
}, 2);

var ActionGroup = function (props) {
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(ButtonGroup, _extends({
    flexShrink: 0,
    flexWrap: "nowrap",
    withTruncatedText: true,
    justifyContent: "center"
  }, props)));
};

module.exportDefault(ActionGroup);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/InfoPanel/216a11eb0adc393eaf4c97e3a8b658b03dd4455c.map
