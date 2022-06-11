function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/TeamAutocomplete/Avatar.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["_id", "type", "avatarETag", "test"];

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
module.link("../../../../components/avatar/RoomAvatar", {
  "default": function (v) {
    RoomAvatar = v;
  }
}, 2);

var Avatar = function (_ref) {
  var _id = _ref._id,
      type = _ref.type,
      avatarETag = _ref.avatarETag,
      test = _ref.test,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(RoomAvatar, _extends({
    size: Options.AvatarSize,
    room: {
      type: type,
      _id: _id,
      avatarETag: avatarETag
    }
  }, props));
};

module.exportDefault(Avatar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/TeamAutocomplete/e6b5577392e11f44ea40424fce581516f4120e68.map
