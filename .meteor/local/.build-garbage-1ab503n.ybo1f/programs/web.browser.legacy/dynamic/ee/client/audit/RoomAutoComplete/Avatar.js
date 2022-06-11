function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/RoomAutoComplete/Avatar.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["value", "type", "avatarETag"];

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
var RoomAvatar;
module.link("../../../../client/components/avatar/RoomAvatar", {
  "default": function (v) {
    RoomAvatar = v;
  }
}, 2);

var Avatar = function (_ref) {
  var value = _ref.value,
      type = _ref.type,
      avatarETag = _ref.avatarETag,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(RoomAvatar, _extends({
    size: Options.AvatarSize,
    room: {
      type: type,
      _id: value,
      avatarETag: avatarETag
    }
  }, props));
};

module.exportDefault(Avatar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/audit/RoomAutoComplete/c4f7ee5ff80e1d7b091d54c82a6fb23fb7956f21.map
