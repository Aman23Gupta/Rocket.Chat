function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/preferences/PreferencesNotificationsSection.js                                                 //
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
let Accordion, Field, Select, FieldGroup, ToggleSwitch, Button, Box;
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
  },

  Button(v) {
    Button = v;
  },

  Box(v) {
    Box = v;
  }

}, 0);
let React, useCallback, useEffect, useState, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let KonchatNotification;
module.link("../../../../app/ui", {
  KonchatNotification(v) {
    KonchatNotification = v;
  }

}, 2);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let useUserPreference;
module.link("../../../contexts/UserContext", {
  useUserPreference(v) {
    useUserPreference = v;
  }

}, 5);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 6);
const notificationOptionsLabelMap = {
  all: 'All_messages',
  mentions: 'Mentions',
  nothing: 'Nothing'
};
const emailNotificationOptionsLabelMap = {
  mentions: 'Email_Notification_Mode_All',
  nothing: 'Email_Notification_Mode_Disabled'
};

const PreferencesNotificationsSection = _ref => {
  let {
    onChange,
    commitRef
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const [notificationsPermission, setNotificationsPermission] = useState();
  const userDesktopNotificationRequireInteraction = useUserPreference('desktopNotificationRequireInteraction');
  const userDesktopNotifications = useUserPreference('desktopNotifications');
  const userMobileNotifications = useUserPreference('pushNotifications');
  const userEmailNotificationMode = useUserPreference('emailNotificationMode');
  const defaultDesktopNotifications = useSetting('Accounts_Default_User_Preferences_desktopNotifications');
  const defaultMobileNotifications = useSetting('Accounts_Default_User_Preferences_pushNotifications');
  const canChangeEmailNotification = useSetting('Accounts_AllowEmailNotifications');
  const {
    values,
    handlers,
    commit
  } = useForm({
    desktopNotificationRequireInteraction: userDesktopNotificationRequireInteraction,
    desktopNotifications: userDesktopNotifications,
    pushNotifications: userMobileNotifications,
    emailNotificationMode: userEmailNotificationMode
  }, onChange);
  const {
    desktopNotificationRequireInteraction,
    desktopNotifications,
    pushNotifications,
    emailNotificationMode
  } = values;
  const {
    handleDesktopNotificationRequireInteraction,
    handleDesktopNotifications,
    handlePushNotifications,
    handleEmailNotificationMode
  } = handlers;
  useEffect(() => setNotificationsPermission(window.Notification && Notification.permission), []);
  commitRef.current.notifications = commit;
  const onSendNotification = useCallback(() => {
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
  const onAskNotificationPermission = useCallback(() => {
    window.Notification && Notification.requestPermission().then(val => setNotificationsPermission(val));
  }, []);
  const notificationOptions = useMemo(() => Object.entries(notificationOptionsLabelMap).map(_ref2 => {
    let [key, val] = _ref2;
    return [key, t(val)];
  }), [t]);
  const desktopNotificationOptions = useMemo(() => {
    const optionsCp = notificationOptions.slice();
    optionsCp.unshift(['default', "".concat(t('Default'), " (").concat(t(notificationOptionsLabelMap[defaultDesktopNotifications]), ")")]);
    return optionsCp;
  }, [defaultDesktopNotifications, notificationOptions, t]);
  const mobileNotificationOptions = useMemo(() => {
    const optionsCp = notificationOptions.slice();
    optionsCp.unshift(['default', "".concat(t('Default'), " (").concat(t(notificationOptionsLabelMap[defaultMobileNotifications]), ")")]);
    return optionsCp;
  }, [defaultMobileNotifications, notificationOptions, t]);
  const emailNotificationOptions = useMemo(() => {
    const options = Object.entries(emailNotificationOptionsLabelMap).map(_ref3 => {
      let [key, val] = _ref3;
      return [key, t(val)];
    });
    options.unshift(['default', "".concat(t('Default'), " (").concat(t(emailNotificationOptionsLabelMap[userEmailNotificationMode]), ")")]);
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
//# sourceMappingURL=/dynamic/client/views/account/preferences/487e30c1353cc549b7ab93009ce99dd6a0851a4a.map
