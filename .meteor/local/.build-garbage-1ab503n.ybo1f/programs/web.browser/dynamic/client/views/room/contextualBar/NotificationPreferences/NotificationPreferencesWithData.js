function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/NotificationPreferences/NotificationPreferencesWithData.js                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let useCustomSound;
module.link("../../../../contexts/CustomSoundContext", {
  useCustomSound(v) {
    useCustomSound = v;
  }

}, 2);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useUserSubscription;
module.link("../../../../contexts/UserContext", {
  useUserSubscription(v) {
    useUserSubscription = v;
  }

}, 4);
let useEndpointActionExperimental;
module.link("../../../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental(v) {
    useEndpointActionExperimental = v;
  }

}, 5);
let useForm;
module.link("../../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 6);
let useTabBarClose;
module.link("../../providers/ToolboxProvider", {
  useTabBarClose(v) {
    useTabBarClose = v;
  }

}, 7);
let NotificationPreferences;
module.link("./NotificationPreferences", {
  default(v) {
    NotificationPreferences = v;
  }

}, 8);

const NotificationPreferencesWithData = _ref => {
  let {
    rid
  } = _ref;
  const t = useTranslation();
  const subscription = useUserSubscription(rid);
  const customSound = useCustomSound();
  const handleClose = useTabBarClose();
  const saveSettings = useEndpointActionExperimental('POST', 'rooms.saveNotification', t('Room_updated_successfully'));
  const {
    values,
    handlers,
    hasUnsavedChanges,
    commit
  } = useForm({
    turnOn: !(subscription !== null && subscription !== void 0 && subscription.disableNotifications),
    muteGroupMentions: subscription === null || subscription === void 0 ? void 0 : subscription.muteGroupMentions,
    showCounter: !(subscription !== null && subscription !== void 0 && subscription.hideUnreadStatus),
    desktopAlert: (subscription === null || subscription === void 0 ? void 0 : subscription.desktopPrefOrigin) === 'subscription' && subscription.desktopNotifications || 'default',
    desktopSound: (subscription === null || subscription === void 0 ? void 0 : subscription.audioNotificationValue) || 'default',
    mobileAlert: (subscription === null || subscription === void 0 ? void 0 : subscription.mobilePrefOrigin) === 'subscription' && subscription.mobilePushNotifications || 'default',
    emailAlert: (subscription === null || subscription === void 0 ? void 0 : subscription.emailPrefOrigin) === 'subscription' && subscription.emailNotifications || 'default'
  });
  const defaultOption = [['default', t('Default')], ['all', t('All_messages')], ['mentions', t('Mentions')], ['nothing', t('Nothing')]];
  const customSoundAsset = Object.entries(customSound.list.get()).map(value => [value[0], value[1].name]);
  const handleOptions = {
    alerts: defaultOption,
    audio: defaultOption,
    sound: [['none None', t('None')], ['default', t('Default')], ...customSoundAsset]
  };

  const handlePlaySound = () => customSound.play(values.desktopSound);

  const handleSaveButton = useMutableCallback(() => {
    const notifications = {};
    notifications.disableNotifications = values.turnOn ? '0' : '1';
    notifications.muteGroupMentions = values.muteGroupMentions ? '1' : '0';
    notifications.hideUnreadStatus = values.showCounter ? '0' : '1';
    notifications.desktopNotifications = values.desktopAlert;
    notifications.audioNotificationValue = values.desktopSound;
    notifications.mobilePushNotifications = values.mobileAlert;
    notifications.emailNotifications = values.emailAlert;
    saveSettings({
      roomId: rid,
      notifications
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/NotificationPreferences/13d9bf35f441abc6a88535c9ec8e257c05cfaec6.map
