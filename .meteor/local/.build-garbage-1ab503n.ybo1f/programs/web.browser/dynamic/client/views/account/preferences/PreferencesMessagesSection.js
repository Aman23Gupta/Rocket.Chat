function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/preferences/PreferencesMessagesSection.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onChange", "commitRef"];

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
let Accordion, Field, Select, FieldGroup, ToggleSwitch;
module.link("@rocket.chat/fuselage", {
  Accordion(v) {
    Accordion = v;
  },

  Field(v) {
    Field = v;
  },

  Select(v) {
    Select = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  ToggleSwitch(v) {
    ToggleSwitch = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useUserPreference;
module.link("../../../contexts/UserContext", {
  useUserPreference(v) {
    useUserPreference = v;
  }

}, 4);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 5);

const PreferencesMessagesSection = _ref => {
  var _useUserPreference;

  let {
    onChange,
    commitRef
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const showRoles = useSetting('UI_DisplayRoles');
  const settings = {
    unreadAlert: useUserPreference('unreadAlert'),
    showMessageInMainThread: useUserPreference('showMessageInMainThread'),
    useEmojis: useUserPreference('useEmojis'),
    convertAsciiEmoji: useUserPreference('convertAsciiEmoji'),
    autoImageLoad: useUserPreference('autoImageLoad'),
    saveMobileBandwidth: useUserPreference('saveMobileBandwidth'),
    collapseMediaByDefault: useUserPreference('collapseMediaByDefault'),
    hideUsernames: useUserPreference('hideUsernames'),
    hideRoles: useUserPreference('hideRoles'),
    hideFlexTab: useUserPreference('hideFlexTab'),
    clockMode: (_useUserPreference = useUserPreference('clockMode')) !== null && _useUserPreference !== void 0 ? _useUserPreference : 0,
    sendOnEnter: useUserPreference('sendOnEnter'),
    messageViewMode: useUserPreference('messageViewMode'),
    displayAvatars: useUserPreference('displayAvatars')
  };
  const {
    values,
    handlers,
    commit
  } = useForm(settings, onChange);
  const {
    unreadAlert,
    showMessageInMainThread,
    useEmojis,
    convertAsciiEmoji,
    autoImageLoad,
    saveMobileBandwidth,
    collapseMediaByDefault,
    hideUsernames,
    hideRoles,
    hideFlexTab,
    displayAvatars,
    clockMode,
    sendOnEnter,
    messageViewMode
  } = values;
  const {
    handleUnreadAlert,
    handleShowMessageInMainThread,
    handleUseEmojis,
    handleConvertAsciiEmoji,
    handleAutoImageLoad,
    handleSaveMobileBandwidth,
    handleCollapseMediaByDefault,
    handleHideUsernames,
    handleHideRoles,
    handleHideFlexTab,
    handleDisplayAvatars,
    handleClockMode,
    handleSendOnEnter,
    handleMessageViewMode
  } = handlers;
  const timeFormatOptions = useMemo(() => [[0, t('Default')], [1, t('12_Hour')], [2, t('24_Hour')]], [t]);
  const sendOnEnterOptions = useMemo(() => [['normal', t('Enter_Normal')], ['alternative', t('Enter_Alternative')], ['desktop', t('Only_On_Desktop')]], [t]);
  const messageViewModeOptions = useMemo(() => [[0, t('Normal')], [1, t('Cozy')], [2, t('Compact')]], [t]);
  commitRef.current.messages = commit; // TODO: Weird behaviour when saving clock mode, and then changing it.

  return /*#__PURE__*/React.createElement(Accordion.Item, _extends({
    title: t('Messages')
  }, props), /*#__PURE__*/React.createElement(FieldGroup, null, useMemo(() => /*#__PURE__*/React.createElement(Field, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Unread_Tray_Icon_Alert')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: unreadAlert,
    onChange: handleUnreadAlert
  }))), [handleUnreadAlert, t, unreadAlert]), useMemo(() => /*#__PURE__*/React.createElement(Field, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Show_Message_In_Main_Thread')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: showMessageInMainThread,
    onChange: handleShowMessageInMainThread
  }))), [handleShowMessageInMainThread, showMessageInMainThread, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Message_TimeFormat')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    value: clockMode,
    onChange: handleClockMode,
    options: timeFormatOptions
  }))), [clockMode, handleClockMode, t, timeFormatOptions]), useMemo(() => /*#__PURE__*/React.createElement(Field, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Use_Emojis')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: useEmojis,
    onChange: handleUseEmojis
  }))), [handleUseEmojis, t, useEmojis]), useMemo(() => /*#__PURE__*/React.createElement(Field, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Convert_Ascii_Emojis')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: convertAsciiEmoji,
    onChange: handleConvertAsciiEmoji
  }))), [convertAsciiEmoji, handleConvertAsciiEmoji, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Auto_Load_Images')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: autoImageLoad,
    onChange: handleAutoImageLoad
  }))), [autoImageLoad, handleAutoImageLoad, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Save_Mobile_Bandwidth')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: saveMobileBandwidth,
    onChange: handleSaveMobileBandwidth
  }))), [handleSaveMobileBandwidth, saveMobileBandwidth, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Collapse_Embedded_Media_By_Default')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: collapseMediaByDefault,
    onChange: handleCollapseMediaByDefault
  }))), [collapseMediaByDefault, handleCollapseMediaByDefault, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Hide_usernames')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: hideUsernames,
    onChange: handleHideUsernames
  }))), [handleHideUsernames, hideUsernames, t]), useMemo(() => showRoles && /*#__PURE__*/React.createElement(Field, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Hide_roles')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: hideRoles,
    onChange: handleHideRoles
  }))), [handleHideRoles, hideRoles, showRoles, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Hide_flextab')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: hideFlexTab,
    onChange: handleHideFlexTab
  }))), [handleHideFlexTab, hideFlexTab, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Display_avatars')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: displayAvatars,
    onChange: handleDisplayAvatars
  }))), [handleDisplayAvatars, displayAvatars, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Enter_Behaviour')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    value: sendOnEnter,
    onChange: handleSendOnEnter,
    options: sendOnEnterOptions
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Enter_Behaviour_Description'))), [handleSendOnEnter, sendOnEnter, sendOnEnterOptions, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('View_mode')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    value: messageViewMode,
    onChange: handleMessageViewMode,
    options: messageViewModeOptions
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Message_view_mode_info'))), [handleMessageViewMode, messageViewMode, messageViewModeOptions, t])));
};

module.exportDefault(PreferencesMessagesSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/preferences/a82102632aec9c6ca51b3c24931d3fadedbfda31.map
