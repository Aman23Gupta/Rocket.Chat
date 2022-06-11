function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/NotificationPreferences/NotificationPreferencesWithData.js                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var useCustomSound;
module.link("../../../../contexts/CustomSoundContext", {
  useCustomSound: function (v) {
    useCustomSound = v;
  }
}, 2);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useUserSubscription;
module.link("../../../../contexts/UserContext", {
  useUserSubscription: function (v) {
    useUserSubscription = v;
  }
}, 4);
var useEndpointActionExperimental;
module.link("../../../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental: function (v) {
    useEndpointActionExperimental = v;
  }
}, 5);
var useForm;
module.link("../../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 6);
var useTabBarClose;
module.link("../../providers/ToolboxProvider", {
  useTabBarClose: function (v) {
    useTabBarClose = v;
  }
}, 7);
var NotificationPreferences;
module.link("./NotificationPreferences", {
  "default": function (v) {
    NotificationPreferences = v;
  }
}, 8);

var NotificationPreferencesWithData = function (_ref) {
  var rid = _ref.rid;
  var t = useTranslation();
  var subscription = useUserSubscription(rid);
  var customSound = useCustomSound();
  var handleClose = useTabBarClose();
  var saveSettings = useEndpointActionExperimental('POST', 'rooms.saveNotification', t('Room_updated_successfully'));

  var _useForm = useForm({
    turnOn: !(subscription !== null && subscription !== void 0 && subscription.disableNotifications),
    muteGroupMentions: subscription === null || subscription === void 0 ? void 0 : subscription.muteGroupMentions,
    showCounter: !(subscription !== null && subscription !== void 0 && subscription.hideUnreadStatus),
    desktopAlert: (subscription === null || subscription === void 0 ? void 0 : subscription.desktopPrefOrigin) === 'subscription' && subscription.desktopNotifications || 'default',
    desktopSound: (subscription === null || subscription === void 0 ? void 0 : subscription.audioNotificationValue) || 'default',
    mobileAlert: (subscription === null || subscription === void 0 ? void 0 : subscription.mobilePrefOrigin) === 'subscription' && subscription.mobilePushNotifications || 'default',
    emailAlert: (subscription === null || subscription === void 0 ? void 0 : subscription.emailPrefOrigin) === 'subscription' && subscription.emailNotifications || 'default'
  }),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges,
      commit = _useForm.commit;

  var defaultOption = [['default', t('Default')], ['all', t('All_messages')], ['mentions', t('Mentions')], ['nothing', t('Nothing')]];
  var customSoundAsset = Object.entries(customSound.list.get()).map(function (value) {
    return [value[0], value[1].name];
  });
  var handleOptions = {
    alerts: defaultOption,
    audio: defaultOption,
    sound: [['none None', t('None')], ['default', t('Default')]].concat(_toConsumableArray(customSoundAsset))
  };

  var handlePlaySound = function () {
    return customSound.play(values.desktopSound);
  };

  var handleSaveButton = useMutableCallback(function () {
    var notifications = {};
    notifications.disableNotifications = values.turnOn ? '0' : '1';
    notifications.muteGroupMentions = values.muteGroupMentions ? '1' : '0';
    notifications.hideUnreadStatus = values.showCounter ? '0' : '1';
    notifications.desktopNotifications = values.desktopAlert;
    notifications.audioNotificationValue = values.desktopSound;
    notifications.mobilePushNotifications = values.mobileAlert;
    notifications.emailNotifications = values.emailAlert;
    saveSettings({
      roomId: rid,
      notifications: notifications
    });
    commit();
  });
  return /*#__PURE__*/React.createElement(NotificationPreferences, {
    handleClose: handleClose,
    formValues: values,
    formHandlers: handlers,
    formHasUnsavedChanges: hasUnsavedChanges,
    handlePlaySound: handlePlaySound,
    handleOptions: handleOptions,
    handleSaveButton: handleSaveButton
  });
};

module.exportDefault( /*#__PURE__*/memo(NotificationPreferencesWithData));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/NotificationPreferences/9f455c3bfc99be84b5f381e19184ae4714cbdefe.map
