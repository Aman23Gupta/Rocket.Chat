function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/avatar/UserAvatarEditor/UserAvatarSuggestions.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["suggestions", "setAvatarObj", "setNewAvatarSource", "disabled"];

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
var Box, Button, Margins, Avatar;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Avatar: function (v) {
    Avatar = v;
  }
}, 0);
var React, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);

function UserAvatarSuggestions(_ref) {
  var suggestions = _ref.suggestions,
      setAvatarObj = _ref.setAvatarObj,
      setNewAvatarSource = _ref.setNewAvatarSource,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, _excluded);

  var handleClick = useCallback(function (suggestion) {
    return function () {
      setAvatarObj(suggestion);
      setNewAvatarSource(suggestion.blob);
    };
  }, [setAvatarObj, setNewAvatarSource]);
  return /*#__PURE__*/React.createElement(Margins, _extends({
    inline: "x4"
  }, props), Object.values(suggestions).map(function (suggestion) {
    return /*#__PURE__*/React.createElement(Button, {
      key: suggestion.service,
      disabled: disabled,
      square: true,
      onClick: handleClick(suggestion)
    }, /*#__PURE__*/React.createElement(Box, {
      mie: "x4"
    }, /*#__PURE__*/React.createElement(Avatar, {
      title: suggestion.service,
      url: suggestion.blob
    })));
  }));
}

module.exportDefault(UserAvatarSuggestions);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/avatar/UserAvatarEditor/97b849fe7c92e8ab98ea3812be2cc03d0a46fc2a.map
