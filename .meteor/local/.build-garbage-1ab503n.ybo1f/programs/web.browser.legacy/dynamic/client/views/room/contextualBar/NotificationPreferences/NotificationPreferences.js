function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/NotificationPreferences/NotificationPreferences.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Button, ButtonGroup, FieldGroup, Icon;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var VerticalBar;
module.link("../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 2);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var NotificationByDevice;
module.link("./components/NotificationByDevice", {
  "default": function (v) {
    NotificationByDevice = v;
  }
}, 4);
var NotificationToogle;
module.link("./components/NotificationToogle", {
  "default": function (v) {
    NotificationToogle = v;
  }
}, 5);
var Preferences;
module.link("./components/Preferences", {
  Preferences: function (v) {
    Preferences = v;
  }
}, 6);

var NotificationPreferences = function (_ref) {
  var handleClose = _ref.handleClose,
      formValues = _ref.formValues,
      formHandlers = _ref.formHandlers,
      formHasUnsavedChanges = _ref.formHasUnsavedChanges,
      handlePlaySound = _ref.handlePlaySound,
      handleOptions = _ref.handleOptions,
      handleSaveButton = _ref.handleSaveButton;
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "bell"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Notifications_Preferences')), handleClose && /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: handleClose
  })), /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, null, /*#__PURE__*/React.createElement(NotificationToogle, {
    label: t('Turn_ON'),
    description: t('Receive_alerts'),
    onChange: formHandlers === null || formHandlers === void 0 ? void 0 : formHandlers.handleTurnOn,
    defaultChecked: formValues === null || formValues === void 0 ? void 0 : formValues.turnOn
  }), /*#__PURE__*/React.createElement(NotificationToogle, {
    label: t('Mute_Group_Mentions'),
    onChange: formHandlers === null || formHandlers === void 0 ? void 0 : formHandlers.handleMuteGroupMentions,
    defaultChecked: formValues === null || formValues === void 0 ? void 0 : formValues.muteGroupMentions
  }), /*#__PURE__*/React.createElement(NotificationToogle, {
    label: t('Show_counter'),
    description: t('Display_unread_counter'),
    onChange: formHandlers === null || formHandlers === void 0 ? void 0 : formHandlers.handleShowCounter,
    defaultChecked: formValues === null || formValues === void 0 ? void 0 : formValues.showCounter
  }), /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(NotificationByDevice, {
    device: t('Desktop'),
    icon: 'computer'
  }, /*#__PURE__*/React.createElement(Preferences, {
    id: 'DesktopAlert',
    onChange: formHandlers === null || formHandlers === void 0 ? void 0 : formHandlers.handleDesktopAlert,
    name: t('Alerts'),
    options: handleOptions.alerts,
    optionDefault: formValues === null || formValues === void 0 ? void 0 : formValues.desktopAlert
  }), /*#__PURE__*/React.createElement(Preferences, {
    id: 'DesktopSound',
    onChange: formHandlers === null || formHandlers === void 0 ? void 0 : formHandlers.handleDesktopSound,
    name: t('Sound'),
    options: handleOptions.sound,
    optionDefault: formValues === null || formValues === void 0 ? void 0 : formValues.desktopSound
  }, /*#__PURE__*/React.createElement(Button, {
    mis: "x4",
    square: true,
    ghost: true,
    onClick: handlePlaySound
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: "x18"
  })))), /*#__PURE__*/React.createElement(NotificationByDevice, {
    device: t('Mobile'),
    icon: 'mobile'
  }, /*#__PURE__*/React.createElement(Preferences, {
    id: 'MobileAlert',
    onChange: formHandlers === null || formHandlers === void 0 ? void 0 : formHandlers.handleMobileAlert,
    name: t('Alerts'),
    options: handleOptions.alerts,
    optionDefault: formValues === null || formValues === void 0 ? void 0 : formValues.mobileAlert
  })), /*#__PURE__*/React.createElement(NotificationByDevice, {
    device: t('Email'),
    icon: 'mail'
  }, /*#__PURE__*/React.createElement(Preferences, {
    id: 'EmailAlert',
    onChange: formHandlers === null || formHandlers === void 0 ? void 0 : formHandlers.handleEmailAlert,
    name: t('Alerts'),
    options: handleOptions.alerts,
    optionDefault: formValues === null || formValues === void 0 ? void 0 : formValues.emailAlert
  })))), /*#__PURE__*/React.createElement(VerticalBar.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true
  }, handleClose && /*#__PURE__*/React.createElement(Button, {
    onClick: handleClose
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: !formHasUnsavedChanges,
    onClick: handleSaveButton
  }, t('Save')))));
};

module.exportDefault(NotificationPreferences);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/NotificationPreferences/27549833645995bfc8f6ff8004a3a950845d4c91.map
