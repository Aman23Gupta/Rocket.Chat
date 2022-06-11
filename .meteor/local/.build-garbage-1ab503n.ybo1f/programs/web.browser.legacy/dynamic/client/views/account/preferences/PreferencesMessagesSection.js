function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/preferences/PreferencesMessagesSection.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onChange", "commitRef"];

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
var Accordion, Field, Select, FieldGroup, ToggleSwitch;
module.link("@rocket.chat/fuselage", {
  Accordion: function (v) {
    Accordion = v;
  },
  Field: function (v) {
    Field = v;
  },
  Select: function (v) {
    Select = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useUserPreference;
module.link("../../../contexts/UserContext", {
  useUserPreference: function (v) {
    useUserPreference = v;
  }
}, 4);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 5);

var PreferencesMessagesSection = function (_ref) {
  var _useUserPreference;

  var onChange = _ref.onChange,
      commitRef = _ref.commitRef,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var showRoles = useSetting('UI_DisplayRoles');
  var settings = {
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

  var _useForm = useForm(settings, onChange),
      values = _useForm.values,
      handlers = _useForm.handlers,
      commit = _useForm.commit;

  var unreadAlert = values.unreadAlert,
      showMessageInMainThread = values.showMessageInMainThread,
      useEmojis = values.useEmojis,
      convertAsciiEmoji = values.convertAsciiEmoji,
      autoImageLoad = values.autoImageLoad,
      saveMobileBandwidth = values.saveMobileBandwidth,
      collapseMediaByDefault = values.collapseMediaByDefault,
      hideUsernames = values.hideUsernames,
      hideRoles = values.hideRoles,
      hideFlexTab = values.hideFlexTab,
      displayAvatars = values.displayAvatars,
      clockMode = values.clockMode,
      sendOnEnter = values.sendOnEnter,
      messageViewMode = values.messageViewMode;
  var handleUnreadAlert = handlers.handleUnreadAlert,
      handleShowMessageInMainThread = handlers.handleShowMessageInMainThread,
      handleUseEmojis = handlers.handleUseEmojis,
      handleConvertAsciiEmoji = handlers.handleConvertAsciiEmoji,
      handleAutoImageLoad = handlers.handleAutoImageLoad,
      handleSaveMobileBandwidth = handlers.handleSaveMobileBandwidth,
      handleCollapseMediaByDefault = handlers.handleCollapseMediaByDefault,
      handleHideUsernames = handlers.handleHideUsernames,
      handleHideRoles = handlers.handleHideRoles,
      handleHideFlexTab = handlers.handleHideFlexTab,
      handleDisplayAvatars = handlers.handleDisplayAvatars,
      handleClockMode = handlers.handleClockMode,
      handleSendOnEnter = handlers.handleSendOnEnter,
      handleMessageViewMode = handlers.handleMessageViewMode;
  var timeFormatOptions = useMemo(function () {
    return [[0, t('Default')], [1, t('12_Hour')], [2, t('24_Hour')]];
  }, [t]);
  var sendOnEnterOptions = useMemo(function () {
    return [['normal', t('Enter_Normal')], ['alternative', t('Enter_Alternative')], ['desktop', t('Only_On_Desktop')]];
  }, [t]);
  var messageViewModeOptions = useMemo(function () {
    return [[0, t('Normal')], [1, t('Cozy')], [2, t('Compact')]];
  }, [t]);
  commitRef.current.messages = commit; // TODO: Weird behaviour when saving clock mode, and then changing it.

  return /*#__PURE__*/React.createElement(Accordion.Item, _extends({
    title: t('Messages')
  }, props), /*#__PURE__*/React.createElement(FieldGroup, null, useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, {
      display: "flex",
      flexDirection: "row",
      justifyContent: "spaceBetween",
      flexGrow: 1
    }, /*#__PURE__*/React.createElement(Field.Label, null, t('Unread_Tray_Icon_Alert')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: unreadAlert,
      onChange: handleUnreadAlert
    })));
  }, [handleUnreadAlert, t, unreadAlert]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, {
      display: "flex",
      flexDirection: "row",
      justifyContent: "spaceBetween",
      flexGrow: 1
    }, /*#__PURE__*/React.createElement(Field.Label, null, t('Show_Message_In_Main_Thread')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: showMessageInMainThread,
      onChange: handleShowMessageInMainThread
    })));
  }, [handleShowMessageInMainThread, showMessageInMainThread, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Message_TimeFormat')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
      value: clockMode,
      onChange: handleClockMode,
      options: timeFormatOptions
    })));
  }, [clockMode, handleClockMode, t, timeFormatOptions]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, {
      display: "flex",
      flexDirection: "row",
      justifyContent: "spaceBetween",
      flexGrow: 1
    }, /*#__PURE__*/React.createElement(Field.Label, null, t('Use_Emojis')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: useEmojis,
      onChange: handleUseEmojis
    })));
  }, [handleUseEmojis, t, useEmojis]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, {
      display: "flex",
      flexDirection: "row",
      justifyContent: "spaceBetween",
      flexGrow: 1
    }, /*#__PURE__*/React.createElement(Field.Label, null, t('Convert_Ascii_Emojis')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: convertAsciiEmoji,
      onChange: handleConvertAsciiEmoji
    })));
  }, [convertAsciiEmoji, handleConvertAsciiEmoji, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, {
      display: "flex",
      flexDirection: "row",
      justifyContent: "spaceBetween",
      flexGrow: 1
    }, /*#__PURE__*/React.createElement(Field.Label, null, t('Auto_Load_Images')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: autoImageLoad,
      onChange: handleAutoImageLoad
    })));
  }, [autoImageLoad, handleAutoImageLoad, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, {
      display: "flex",
      flexDirection: "row",
      justifyContent: "spaceBetween",
      flexGrow: 1
    }, /*#__PURE__*/React.createElement(Field.Label, null, t('Save_Mobile_Bandwidth')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: saveMobileBandwidth,
      onChange: handleSaveMobileBandwidth
    })));
  }, [handleSaveMobileBandwidth, saveMobileBandwidth, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, {
      display: "flex",
      flexDirection: "row",
      justifyContent: "spaceBetween",
      flexGrow: 1
    }, /*#__PURE__*/React.createElement(Field.Label, null, t('Collapse_Embedded_Media_By_Default')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: collapseMediaByDefault,
      onChange: handleCollapseMediaByDefault
    })));
  }, [collapseMediaByDefault, handleCollapseMediaByDefault, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, {
      display: "flex",
      flexDirection: "row",
      justifyContent: "spaceBetween",
      flexGrow: 1
    }, /*#__PURE__*/React.createElement(Field.Label, null, t('Hide_usernames')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: hideUsernames,
      onChange: handleHideUsernames
    })));
  }, [handleHideUsernames, hideUsernames, t]), useMemo(function () {
    return showRoles && /*#__PURE__*/React.createElement(Field, {
      display: "flex",
      flexDirection: "row",
      justifyContent: "spaceBetween",
      flexGrow: 1
    }, /*#__PURE__*/React.createElement(Field.Label, null, t('Hide_roles')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: hideRoles,
      onChange: handleHideRoles
    })));
  }, [handleHideRoles, hideRoles, showRoles, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, {
      display: "flex",
      flexDirection: "row",
      justifyContent: "spaceBetween",
      flexGrow: 1
    }, /*#__PURE__*/React.createElement(Field.Label, null, t('Hide_flextab')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: hideFlexTab,
      onChange: handleHideFlexTab
    })));
  }, [handleHideFlexTab, hideFlexTab, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, {
      display: "flex",
      flexDirection: "row",
      justifyContent: "spaceBetween",
      flexGrow: 1
    }, /*#__PURE__*/React.createElement(Field.Label, null, t('Display_avatars')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: displayAvatars,
      onChange: handleDisplayAvatars
    })));
  }, [handleDisplayAvatars, displayAvatars, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Enter_Behaviour')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
      value: sendOnEnter,
      onChange: handleSendOnEnter,
      options: sendOnEnterOptions
    })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Enter_Behaviour_Description')));
  }, [handleSendOnEnter, sendOnEnter, sendOnEnterOptions, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('View_mode')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
      value: messageViewMode,
      onChange: handleMessageViewMode,
      options: messageViewModeOptions
    })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Message_view_mode_info')));
  }, [handleMessageViewMode, messageViewMode, messageViewModeOptions, t])));
};

module.exportDefault(PreferencesMessagesSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/preferences/d1308eecf9cf1f19ef897cce120668f0abfa5d1f.map
