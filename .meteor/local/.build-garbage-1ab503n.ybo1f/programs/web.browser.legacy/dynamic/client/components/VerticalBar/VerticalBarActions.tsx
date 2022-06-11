function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarActions.tsx                                                                //
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
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);

var VerticalBarActions = function (props) {
  return /*#__PURE__*/React.createElement(ButtonGroup, _extends({
    medium: true
  }, props));
};

module.exportDefault( /*#__PURE__*/memo(VerticalBarActions));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/96d18f94b057b30785371c1c8cdaf57b66821395.map
