function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/TeamAutocomplete/Avatar.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["_id", "type", "avatarETag", "test"];

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
let Options;
module.link("@rocket.chat/fuselage", {
  Options(v) {
    Options = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let RoomAvatar;
module.link("../../../../components/avatar/RoomAvatar", {
  default(v) {
    RoomAvatar = v;
  }

}, 2);

const Avatar = _ref => {
  let {
    _id,
    type,
    avatarETag,
    test
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(RoomAvatar, _extends({
    size: Options.AvatarSize,
    room: {
      type,
      _id,
      avatarETag
    }
  }, props));
};

module.exportDefault(Avatar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/TeamAutocomplete/0bcd77939e9a115c3cafff9fe0b62b9219362590.map
