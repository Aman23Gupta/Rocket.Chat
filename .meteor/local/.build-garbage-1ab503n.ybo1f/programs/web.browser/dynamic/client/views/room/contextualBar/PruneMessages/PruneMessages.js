function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/PruneMessages/PruneMessages.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Field, ButtonGroup, Button, CheckBox, Callout;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  CheckBox(v) {
    CheckBox = v;
  },

  Callout(v) {
    Callout = v;
  }

}, 0);
let useUniqueId;
module.link("@rocket.chat/fuselage-hooks", {
  useUniqueId(v) {
    useUniqueId = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let UserAutoCompleteMultiple;
module.link("../../../../components/UserAutoCompleteMultiple", {
  default(v) {
    UserAutoCompleteMultiple = v;
  }

}, 3);
let VerticalBar;
module.link("../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 4);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let DateTimeRow;
module.link("./DateTimeRow", {
  default(v) {
    DateTimeRow = v;
  }

}, 6);

const PruneMessages = _ref => {
  let {
    callOutText,
    validateText,
    newerDateTime,
    handleNewerDateTime,
    olderDateTime,
    handleOlderDateTime,
    users,
    inclusive,
    pinned,
    discussion,
    threads,
    attached,
    handleInclusive,
    handlePinned,
    handleDiscussion,
    handleThreads,
    handleAttached,
    onClickClose,
    onClickPrune,
    onChangeUsers
  } = _ref;
  const t = useTranslation();
  const inclusiveCheckboxId = useUniqueId();
  const pinnedCheckboxId = useUniqueId();
  const discussionCheckboxId = useUniqueId();
  const threadsCheckboxId = useUniqueId();
  const attachedCheckboxId = useUniqueId();
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/PruneMessages/aff1923a9eb4f677bf85d042107fdedd7fccc6b2.map
