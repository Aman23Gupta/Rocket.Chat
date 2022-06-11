function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserAutoComplete/Avatar.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["value"];

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
var Options;
module.link("@rocket.chat/fuselage", {
  Options: function (v) {
    Options = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var UserAvatar;
module.link("../avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 2);

var Avatar = function (_ref) {
  var value = _ref.value,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(UserAvatar, _extends({
    size: Options.AvatarSize,
    username: value
  }, props));
};

module.exportDefault(Avatar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserAutoComplete/ded2d02973fb1e119778df025ef67ee41600c832.map
