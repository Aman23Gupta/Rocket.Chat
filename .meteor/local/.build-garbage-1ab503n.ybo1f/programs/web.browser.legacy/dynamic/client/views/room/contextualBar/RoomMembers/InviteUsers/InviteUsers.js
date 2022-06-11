function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/InviteUsers/InviteUsers.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Field, UrlInput, Icon, Button, InputBox, Callout;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Field: function (v) {
    Field = v;
  },
  UrlInput: function (v) {
    UrlInput = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Button: function (v) {
    Button = v;
  },
  InputBox: function (v) {
    InputBox = v;
  },
  Callout: function (v) {
    Callout = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var VerticalBar;
module.link("../../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useClipboardWithToast;
module.link("../../../../../hooks/useClipboardWithToast", {
  "default": function (v) {
    useClipboardWithToast = v;
  }
}, 4);

var InviteUsers = function (_ref) {
  var onClickBack = _ref.onClickBack,
      onClickClose = _ref.onClickClose,
      onClickEdit = _ref.onClickEdit,
      captionText = _ref.captionText,
      linkText = _ref.linkText,
      error = _ref.error;
  var t = useTranslation();

  var _useClipboardWithToas = useClipboardWithToast(linkText),
      copy = _useClipboardWithToas.copy;

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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/InviteUsers/ab62cfb500830b9aafe3ee470753b5791339b747.map
