function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/avatar/UserAvatarEditor/UserAvatarEditor.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var Box, Button, Icon, TextInput, Margins, Avatar;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Avatar: function (v) {
    Avatar = v;
  }
}, 0);
var React, useState, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var useFileInput;
module.link("../../../hooks/useFileInput", {
  useFileInput: function (v) {
    useFileInput = v;
  }
}, 3);
var UserAvatar;
module.link("../UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 4);
var UserAvatarSuggestions;
module.link("./UserAvatarSuggestions", {
  "default": function (v) {
    UserAvatarSuggestions = v;
  }
}, 5);

function UserAvatarEditor(_ref) {
  var currentUsername = _ref.currentUsername,
      username = _ref.username,
      setAvatarObj = _ref.setAvatarObj,
      suggestions = _ref.suggestions,
      disabled = _ref.disabled,
      etag = _ref.etag;
  var t = useTranslation();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      avatarFromUrl = _useState2[0],
      setAvatarFromUrl = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      newAvatarSource = _useState4[0],
      setNewAvatarSource = _useState4[1];

  var _useState5 = useState(true),
      _useState6 = _slicedToArray(_useState5, 2),
      urlEmpty = _useState6[0],
      setUrlEmpty = _useState6[1];

  var toDataURL = function (file, callback) {
    var reader = new FileReader();

    reader.onload = function (e) {
      callback(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  var setUploadedPreview = useCallback(function () {
    function _callee(file, avatarObj) {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setAvatarObj(avatarObj);
                toDataURL(file, function (dataurl) {
                  setNewAvatarSource(dataurl);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(), [setAvatarObj]);

  var _useFileInput = useFileInput(setUploadedPreview),
      _useFileInput2 = _slicedToArray(_useFileInput, 1),
      clickUpload = _useFileInput2[0];

  var clickUrl = function () {
    if (avatarFromUrl === '') {
      return;
    }

    setNewAvatarSource(avatarFromUrl);
    setAvatarObj({
      avatarUrl: avatarFromUrl
    });
  };

  var clickReset = function () {
    setNewAvatarSource("/avatar/%40" + username);
    setAvatarObj('reset');
  };

  var url = newAvatarSource;

  var handleAvatarFromUrlChange = function (event) {
    event.currentTarget.value !== '' ? setUrlEmpty(false) : setUrlEmpty(true);
    setAvatarFromUrl(event.currentTarget.value);
  };

  return /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    fontScale: "p2m"
  }, t('Profile_picture'), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    mbs: "x4"
  }, /*#__PURE__*/React.createElement(UserAvatar, {
    size: "x124",
    url: url,
    username: currentUsername,
    etag: etag,
    style: {
      objectFit: 'contain'
    },
    mie: "x4"
  }), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    justifyContent: "space-between",
    mis: "x4"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    mbs: "none"
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x4"
  }, /*#__PURE__*/React.createElement(Button, {
    square: true,
    mis: "none",
    onClick: clickReset,
    disabled: disabled,
    mie: "x4",
    title: t('Accounts_SetDefaultAvatar')
  }, /*#__PURE__*/React.createElement(Avatar, {
    url: "/avatar/%40" + username
  })), /*#__PURE__*/React.createElement(Button, {
    square: true,
    onClick: clickUpload,
    disabled: disabled,
    title: t('Upload')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload",
    size: "x20"
  })), /*#__PURE__*/React.createElement(Button, {
    square: true,
    mie: "none",
    onClick: clickUrl,
    disabled: disabled || urlEmpty,
    title: t('Add URL')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "permalink",
    size: "x20"
  })), suggestions && /*#__PURE__*/React.createElement(UserAvatarSuggestions, {
    suggestions: suggestions,
    setAvatarObj: setAvatarObj,
    setNewAvatarSource: setNewAvatarSource,
    disabled: disabled
  }))), /*#__PURE__*/React.createElement(Margins, {
    inlineStart: "x4"
  }, /*#__PURE__*/React.createElement(Box, null, t('Use_url_for_avatar')), /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 0,
    placeholder: t('Use_url_for_avatar'),
    value: avatarFromUrl,
    onChange: handleAvatarFromUrlChange
  })))));
}

module.exportDefault(UserAvatarEditor);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/avatar/UserAvatarEditor/dbd2a1b8c5c28088a740ceceacec17f4873c2719.map
