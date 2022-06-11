function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/avatar/UserAvatarEditor/UserAvatarSuggestions.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["suggestions", "setAvatarObj", "setNewAvatarSource", "disabled"];

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
let Box, Button, Margins, Avatar;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  Margins(v) {
    Margins = v;
  },

  Avatar(v) {
    Avatar = v;
  }

}, 0);
let React, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);

function UserAvatarSuggestions(_ref) {
  let {
    suggestions,
    setAvatarObj,
    setNewAvatarSource,
    disabled
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const handleClick = useCallback(suggestion => () => {
    setAvatarObj(suggestion);
    setNewAvatarSource(suggestion.blob);
  }, [setAvatarObj, setNewAvatarSource]);
  return /*#__PURE__*/React.createElement(Margins, _extends({
    inline: "x4"
  }, props), Object.values(suggestions).map(suggestion => /*#__PURE__*/React.createElement(Button, {
    key: suggestion.service,
    disabled: disabled,
    square: true,
    onClick: handleClick(suggestion)
  }, /*#__PURE__*/React.createElement(Box, {
    mie: "x4"
  }, /*#__PURE__*/React.createElement(Avatar, {
    title: suggestion.service,
    url: suggestion.blob
  })))));
}

module.exportDefault(UserAvatarSuggestions);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/avatar/UserAvatarEditor/c29f8904b14b98eb31fb98fb7b160605f03e05e4.map
