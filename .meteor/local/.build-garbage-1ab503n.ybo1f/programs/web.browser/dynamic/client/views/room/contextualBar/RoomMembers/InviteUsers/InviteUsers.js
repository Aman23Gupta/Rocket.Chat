function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/InviteUsers/InviteUsers.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Field, UrlInput, Icon, Button, InputBox, Callout;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Field(v) {
    Field = v;
  },

  UrlInput(v) {
    UrlInput = v;
  },

  Icon(v) {
    Icon = v;
  },

  Button(v) {
    Button = v;
  },

  InputBox(v) {
    InputBox = v;
  },

  Callout(v) {
    Callout = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let VerticalBar;
module.link("../../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useClipboardWithToast;
module.link("../../../../../hooks/useClipboardWithToast", {
  default(v) {
    useClipboardWithToast = v;
  }

}, 4);

const InviteUsers = _ref => {
  let {
    onClickBack,
    onClickClose,
    onClickEdit,
    captionText,
    linkText,
    error
  } = _ref;
  const t = useTranslation();
  const {
    copy
  } = useClipboardWithToast(linkText);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, onClickBack && /*#__PURE__*/React.createElement(VerticalBar.Back, {
    onClick: onClickBack
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Invite_Users')), onClickClose && /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: onClickClose
  })), /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    flexGrow: 0
  }, t('Invite_Link')), /*#__PURE__*/React.createElement(Field.Row, null, linkText === undefined ? /*#__PURE__*/React.createElement(InputBox.Skeleton, null) : /*#__PURE__*/React.createElement(UrlInput, {
    value: linkText,
    addon: /*#__PURE__*/React.createElement(Icon, {
      onClick: copy,
      name: "copy",
      size: "x16"
    })
  }))), /*#__PURE__*/React.createElement(Box, {
    pb: "x8",
    color: "neutral-600",
    fontScale: "c2"
  }, captionText), error && /*#__PURE__*/React.createElement(Callout, {
    mi: "x24",
    type: "danger"
  }, error.toString()), /*#__PURE__*/React.createElement(Box, {
    pb: "x16"
  }, onClickEdit && /*#__PURE__*/React.createElement(Button, {
    onClick: onClickEdit
  }, t('Edit_Invite')))));
};

module.exportDefault(InviteUsers);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/InviteUsers/f318dff6bc97926120c4c1dbdaaae28c440d900a.map
