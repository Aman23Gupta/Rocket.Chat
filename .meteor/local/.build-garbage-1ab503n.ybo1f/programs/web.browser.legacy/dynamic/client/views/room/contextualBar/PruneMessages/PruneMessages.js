function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/PruneMessages/PruneMessages.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Field, ButtonGroup, Button, CheckBox, Callout;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  CheckBox: function (v) {
    CheckBox = v;
  },
  Callout: function (v) {
    Callout = v;
  }
}, 0);
var useUniqueId;
module.link("@rocket.chat/fuselage-hooks", {
  useUniqueId: function (v) {
    useUniqueId = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var UserAutoCompleteMultiple;
module.link("../../../../components/UserAutoCompleteMultiple", {
  "default": function (v) {
    UserAutoCompleteMultiple = v;
  }
}, 3);
var VerticalBar;
module.link("../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 4);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var DateTimeRow;
module.link("./DateTimeRow", {
  "default": function (v) {
    DateTimeRow = v;
  }
}, 6);

var PruneMessages = function (_ref) {
  var callOutText = _ref.callOutText,
      validateText = _ref.validateText,
      newerDateTime = _ref.newerDateTime,
      handleNewerDateTime = _ref.handleNewerDateTime,
      olderDateTime = _ref.olderDateTime,
      handleOlderDateTime = _ref.handleOlderDateTime,
      users = _ref.users,
      inclusive = _ref.inclusive,
      pinned = _ref.pinned,
      discussion = _ref.discussion,
      threads = _ref.threads,
      attached = _ref.attached,
      handleInclusive = _ref.handleInclusive,
      handlePinned = _ref.handlePinned,
      handleDiscussion = _ref.handleDiscussion,
      handleThreads = _ref.handleThreads,
      handleAttached = _ref.handleAttached,
      onClickClose = _ref.onClickClose,
      onClickPrune = _ref.onClickPrune,
      onChangeUsers = _ref.onChangeUsers;
  var t = useTranslation();
  var inclusiveCheckboxId = useUniqueId();
  var pinnedCheckboxId = useUniqueId();
  var discussionCheckboxId = useUniqueId();
  var threadsCheckboxId = useUniqueId();
  var attachedCheckboxId = useUniqueId();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "eraser"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Prune_Messages')), onClickClose && /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: onClickClose
  })), /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, null, /*#__PURE__*/React.createElement(DateTimeRow, {
    label: t('Newer_than'),
    dateTime: newerDateTime,
    handleDateTime: handleNewerDateTime
  }), /*#__PURE__*/React.createElement(DateTimeRow, {
    label: t('Older_than'),
    dateTime: olderDateTime,
    handleDateTime: handleOlderDateTime
  }), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    flexGrow: 0
  }, t('Only_from_users')), /*#__PURE__*/React.createElement(UserAutoCompleteMultiple, {
    value: users,
    onChange: onChangeUsers,
    placeholder: t('Please_enter_usernames')
  })), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    id: inclusiveCheckboxId,
    checked: inclusive,
    onChange: handleInclusive
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: inclusiveCheckboxId
  }, t('Inclusive')))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    id: pinnedCheckboxId,
    checked: pinned,
    onChange: handlePinned
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: pinnedCheckboxId
  }, t('RetentionPolicy_DoNotPrunePinned')))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    id: discussionCheckboxId,
    checked: discussion,
    onChange: handleDiscussion
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: discussionCheckboxId
  }, t('RetentionPolicy_DoNotPruneDiscussion')))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    id: threadsCheckboxId,
    checked: threads,
    onChange: handleThreads
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: threadsCheckboxId
  }, t('RetentionPolicy_DoNotPruneThreads')))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    id: attachedCheckboxId,
    checked: attached,
    onChange: handleAttached
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: attachedCheckboxId
  }, t('Files_only')))), callOutText && !validateText && /*#__PURE__*/React.createElement(Callout, {
    type: "warning"
  }, callOutText), validateText && /*#__PURE__*/React.createElement(Callout, {
    type: "warning"
  }, validateText)), /*#__PURE__*/React.createElement(VerticalBar.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    disabled: validateText && true,
    onClick: onClickPrune
  }, t('Prune')))));
};

module.exportDefault(PruneMessages);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/PruneMessages/cd3cf898bc243ad41101f84cc92d571a4dff3a13.map
