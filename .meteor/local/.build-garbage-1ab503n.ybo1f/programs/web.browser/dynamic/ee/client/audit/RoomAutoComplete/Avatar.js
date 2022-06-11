function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/RoomAutoComplete/Avatar.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["value", "type", "avatarETag"];

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
module.link("../../../../client/components/avatar/RoomAvatar", {
  default(v) {
    RoomAvatar = v;
  }

}, 2);

const Avatar = _ref => {
  let {
    value,
    type,
    avatarETag
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(RoomAvatar, _extends({
    size: Options.AvatarSize,
    room: {
      type,
      _id: value,
      avatarETag
    }
  }, props));
};

module.exportDefault(Avatar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/audit/RoomAutoComplete/69a4fc025c25fa642a97854f805a67ea6166fe3d.map
