function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/preferences/PreferencesNotificationsSection.js                                                 //
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

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var Accordion, Field, Select, FieldGroup, ToggleSwitch, Button, Box;
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
  },
  Button: function (v) {
    Button = v;
  },
  Box: function (v) {
    Box = v;
  }
}, 0);
var React, useCallback, useEffect, useState, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var KonchatNotification;
module.link("../../../../app/ui", {
  KonchatNotification: function (v) {
    KonchatNotification = v;
  }
}, 2);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var useUserPreference;
module.link("../../../contexts/UserContext", {
  useUserPreference: function (v) {
    useUserPreference = v;
  }
}, 5);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 6);
var notificationOptionsLabelMap = {
  all: 'All_messages',
  mentions: 'Mentions',
  nothing: 'Nothing'
};
var emailNotificationOptionsLabelMap = {
  mentions: 'Email_Notification_Mode_All',
  nothing: 'Email_Notification_Mode_Disabled'
};

var PreferencesNotificationsSection = function (_ref) {
  var onChange = _ref.onChange,
      commitRef = _ref.commitRef,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      notificationsPermission = _useState2[0],
      setNotificationsPermission = _useState2[1];

  var userDesktopNotificationRequireInteraction = useUserPreference('desktopNotificationRequireInteraction');
  var userDesktopNotifications = useUserPreference('desktopNotifications');
  var userMobileNotifications = useUserPreference('pushNotifications');
  var userEmailNotificationMode = useUserPreference('emailNotificationMode');
  var defaultDesktopNotifications = useSetting('Accounts_Default_User_Preferences_desktopNotifications');
  var defaultMobileNotifications = useSetting('Accounts_Default_User_Preferences_pushNotifications');
  var canChangeEmailNotification = useSetting('Accounts_AllowEmailNotifications');

  var _useForm = useForm({
    desktopNotificationRequireInteraction: userDesktopNotificationRequireInteraction,
    desktopNotifications: userDesktopNotifications,
    pushNotifications: userMobileNotifications,
    emailNotificationMode: userEmailNotificationMode
  }, onChange),
      values = _useForm.values,
      handlers = _useForm.handlers,
      commit = _useForm.commit;

  var desktopNotificationRequireInteraction = values.desktopNotificationRequireInteraction,
      desktopNotifications = values.desktopNotifications,
      pushNotifications = values.pushNotifications,
      emailNotificationMode = values.emailNotificationMode;
  var handleDesktopNotificationRequireInteraction = handlers.handleDesktopNotificationRequireInteraction,
      handleDesktopNotifications = handlers.handleDesktopNotifications,
      handlePushNotifications = handlers.handlePushNotifications,
      handleEmailNotificationMode = handlers.handleEmailNotificationMode;
  useEffect(function () {
    return setNotificationsPermission(window.Notification && Notification.permission);
  }, []);
  commitRef.current.notifications = commit;
  var onSendNotification = useCallback(function () {
    KonchatNotification.notify({
      payload: {
        sender: {
          username: 'rocket.cat'
        }
      },
      title: t('Desktop_Notification_Test'),
      text: t('This_is_a_desktop_notification')
    });
  }, [t]);
  var onAskNotificationPermission = useCallback(function () {
    window.Notification && Notification.requestPermission().then(function (val) {
      return setNotificationsPermission(val);
    });
  }, []);
  var notificationOptions = useMemo(function () {
    return Object.entries(notificationOptionsLabelMap).map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          val = _ref3[1];

      return [key, t(val)];
    });
  }, [t]);
  var desktopNotificationOptions = useMemo(function () {
    var optionsCp = notificationOptions.slice();
    optionsCp.unshift(['default', t('Default') + " (" + t(notificationOptionsLabelMap[defaultDesktopNotifications]) + ")"]);
    return optionsCp;
  }, [defaultDesktopNotifications, notificationOptions, t]);
  var mobileNotificationOptions = useMemo(function () {
    var optionsCp = notificationOptions.slice();
    optionsCp.unshift(['default', t('Default') + " (" + t(notificationOptionsLabelMap[defaultMobileNotifications]) + ")"]);
    return optionsCp;
  }, [defaultMobileNotifications, notificationOptions, t]);
  var emailNotificationOptions = useMemo(function () {
    var options = Object.entries(emailNotificationOptionsLabelMap).map(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          key = _ref5[0],
          val = _ref5[1];

      return [key, t(val)];
    });
    options.unshift(['default', t('Default') + " (" + t(emailNotificationOptionsLabelMap[userEmailNotificationMode]) + ")"]);
    return options;
  }, [t, userEmailNotificationMode]);
  return /*#__PURE__*/React.createElement(Accordion.Item, _extends({
    title: t('Notifications')
  }, props), /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Desktop_Notifications')), /*#__PURE__*/React.createElement(Field.Row, null, notificationsPermission === 'denied' && t('Desktop_Notifications_Disabled'), notificationsPermission === 'granted' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: onSendNotification
  }, t('Test_Desktop_Notifications'))), notificationsPermission !== 'denied' && notificationsPermission !== 'granted' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: onAskNotificationPermission
  }, t('Enable_Desktop_Notifications'))))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Notification_RequireInteraction')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: desktopNotificationRequireInteraction,
    onChange: handleDesktopNotificationRequireInteraction
  }))), /*#__PURE__*/React.createElement(Field.Hint, null, t('Only_works_with_chrome_version_greater_50'))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Notification_Desktop_Default_For')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    value: desktopNotifications,
    onChange: handleDesktopNotifications,
    options: desktopNotificationOptions
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Notification_Push_Default_For')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    value: pushNotifications,
    onChange: handlePushNotifications,
    options: mobileNotificationOptions
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Email_Notification_Mode')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    disabled: !canChangeEmailNotification,
    value: emailNotificationMode,
    onChange: handleEmailNotificationMode,
    options: emailNotificationOptions
  })), /*#__PURE__*/React.createElement(Field.Hint, null, canChangeEmailNotification && t('You_need_to_verifiy_your_email_address_to_get_notications'), !canChangeEmailNotification && t('Email_Notifications_Change_Disabled')))));
};

module.exportDefault(PreferencesNotificationsSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/preferences/11c414acec2d6b50618c925ee4d613a457db5d4a.map
