function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/preferences/PreferencesSoundSection.js                                                         //
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
let Accordion, Field, Select, FieldGroup, ToggleSwitch, Tooltip, Box;
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

  Tooltip(v) {
    Tooltip = v;
  },

  Box(v) {
    Box = v;
  }

}, 0);
let React, useMemo, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let CustomSounds;
module.link("../../../../app/custom-sounds/client", {
  CustomSounds(v) {
    CustomSounds = v;
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

const useCustomSoundsOptions = () => useMemo(() => CustomSounds && CustomSounds.getList && CustomSounds.getList().map(_ref => {
  let {
    _id,
    name
  } = _ref;
  return [_id, name];
}), []);

const PreferencesSoundSection = _ref2 => {
  let {
    onChange,
    commitRef
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded);

  const t = useTranslation();
  const soundsList = useCustomSoundsOptions();
  const settings = {
    newRoomNotification: useUserPreference('newRoomNotification'),
    newMessageNotification: useUserPreference('newMessageNotification'),
    muteFocusedConversations: useUserPreference('muteFocusedConversations'),
    notificationsSoundVolume: useUserPreference('notificationsSoundVolume')
  };
  const {
    values,
    handlers,
    commit
  } = useForm(settings, onChange);
  const {
    newRoomNotification,
    newMessageNotification,
    muteFocusedConversations,
    notificationsSoundVolume
  } = values;
  const {
    handleNewRoomNotification,
    handleNewMessageNotification,
    handleMuteFocusedConversations,
    handleNotificationsSoundVolume
  } = handlers;
  const onChangeNotificationsSoundVolume = useCallback(e => handleNotificationsSoundVolume(Math.max(0, Math.min(Number(e.currentTarget.value), 100))), [handleNotificationsSoundVolume]);
  commitRef.current.sound = commit;
  return /*#__PURE__*/React.createElement(Accordion.Item, _extends({
    title: t('Sound')
  }, props), /*#__PURE__*/React.createElement(FieldGroup, null, useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('New_Room_Notification')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    value: newRoomNotification,
    onChange: handleNewRoomNotification,
    options: soundsList
  }))), [handleNewRoomNotification, newRoomNotification, soundsList, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('New_Message_Notification')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    value: newMessageNotification,
    onChange: handleNewMessageNotification,
    options: soundsList
  }))), [handleNewMessageNotification, newMessageNotification, soundsList, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Mute_Focused_Conversations')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: muteFocusedConversations,
    onChange: handleMuteFocusedConversations
  }))), [handleMuteFocusedConversations, muteFocusedConversations, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Notifications_Sound_Volume')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    is: "input",
    flexGrow: 1,
    type: "range",
    value: notificationsSoundVolume,
    onChange: onChangeNotificationsSoundVolume,
    min: "0",
    max: "100"
  }), /*#__PURE__*/React.createElement(Tooltip, {
    placement: "right-left",
    mis: "x8"
  }, notificationsSoundVolume))), [notificationsSoundVolume, onChangeNotificationsSoundVolume, t])));
};

module.exportDefault(PreferencesSoundSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/preferences/3a610807adc4980aa02edb4bbdd5f8066faec178.map
