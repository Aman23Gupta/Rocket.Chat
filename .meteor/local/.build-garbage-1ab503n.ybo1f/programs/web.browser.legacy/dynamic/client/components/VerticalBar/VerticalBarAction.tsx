function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarAction.tsx                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["name"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var ActionButton;
module.link("@rocket.chat/fuselage", {
  ActionButton: function (v) {
    ActionButton = v;
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

var VerticalBarAction = function (_ref) {
  var name = _ref.name,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(ActionButton, _extends({
    flexShrink: 0,
    icon: name,
    ghost: true
  }, props, {
    tiny: true
  }));
};

module.exportDefault( /*#__PURE__*/memo(VerticalBarAction));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/17d10037aecb241748d118e2ddb8afb22f69cc2b.map
