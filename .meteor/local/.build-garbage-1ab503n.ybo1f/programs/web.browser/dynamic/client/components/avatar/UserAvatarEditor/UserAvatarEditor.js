function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/avatar/UserAvatarEditor/UserAvatarEditor.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Button, Icon, TextInput, Margins, Avatar;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Margins(v) {
    Margins = v;
  },

  Avatar(v) {
    Avatar = v;
  }

}, 0);
let React, useState, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let useFileInput;
module.link("../../../hooks/useFileInput", {
  useFileInput(v) {
    useFileInput = v;
  }

}, 3);
let UserAvatar;
module.link("../UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 4);
let UserAvatarSuggestions;
module.link("./UserAvatarSuggestions", {
  default(v) {
    UserAvatarSuggestions = v;
  }

}, 5);

function UserAvatarEditor(_ref) {
  let {
    currentUsername,
    username,
    setAvatarObj,
    suggestions,
    disabled,
    etag
  } = _ref;
  const t = useTranslation();
  const [avatarFromUrl, setAvatarFromUrl] = useState('');
  const [newAvatarSource, setNewAvatarSource] = useState();
  const [urlEmpty, setUrlEmpty] = useState(true);

  const toDataURL = (file, callback) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      callback(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const setUploadedPreview = useCallback(async (file, avatarObj) => {
    setAvatarObj(avatarObj);
    toDataURL(file, dataurl => {
      setNewAvatarSource(dataurl);
    });
  }, [setAvatarObj]);
  const [clickUpload] = useFileInput(setUploadedPreview);

  const clickUrl = () => {
    if (avatarFromUrl === '') {
      return;
    }

    setNewAvatarSource(avatarFromUrl);
    setAvatarObj({
      avatarUrl: avatarFromUrl
    });
  };

  const clickReset = () => {
    setNewAvatarSource("/avatar/%40".concat(username));
    setAvatarObj('reset');
  };

  const url = newAvatarSource;

  const handleAvatarFromUrlChange = event => {
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
    url: "/avatar/%40".concat(username)
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
//# sourceMappingURL=/dynamic/client/components/avatar/UserAvatarEditor/4e99139442edd141d4a7575c47ec083f7f1b59f2.map
