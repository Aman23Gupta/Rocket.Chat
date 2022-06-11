function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserAutoComplete/Avatar.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["value"];

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
let UserAvatar;
module.link("../avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 2);

const Avatar = _ref => {
  let {
    value
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(UserAvatar, _extends({
    size: Options.AvatarSize,
    username: value
  }, props));
};

module.exportDefault(Avatar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserAutoComplete/af3be8346b3aadd3c60eda3803f52516bf58d69a.map
