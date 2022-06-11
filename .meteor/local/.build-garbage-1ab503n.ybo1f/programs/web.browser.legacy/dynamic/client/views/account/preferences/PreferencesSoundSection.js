function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/preferences/PreferencesSoundSection.js                                                         //
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
var Accordion, Field, Select, FieldGroup, ToggleSwitch, Tooltip, Box;
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
  Tooltip: function (v) {
    Tooltip = v;
  },
  Box: function (v) {
    Box = v;
  }
}, 0);
var React, useMemo, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var CustomSounds;
module.link("../../../../app/custom-sounds/client", {
  CustomSounds: function (v) {
    CustomSounds = v;
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

var useCustomSoundsOptions = function () {
  return useMemo(function () {
    return CustomSounds && CustomSounds.getList && CustomSounds.getList().map(function (_ref) {
      var _id = _ref._id,
          name = _ref.name;
      return [_id, name];
    });
  }, []);
};

var PreferencesSoundSection = function (_ref2) {
  var onChange = _ref2.onChange,
      commitRef = _ref2.commitRef,
      props = _objectWithoutProperties(_ref2, _excluded);

  var t = useTranslation();
  var soundsList = useCustomSoundsOptions();
  var settings = {
    newRoomNotification: useUserPreference('newRoomNotification'),
    newMessageNotification: useUserPreference('newMessageNotification'),
    muteFocusedConversations: useUserPreference('muteFocusedConversations'),
    notificationsSoundVolume: useUserPreference('notificationsSoundVolume')
  };

  var _useForm = useForm(settings, onChange),
      values = _useForm.values,
      handlers = _useForm.handlers,
      commit = _useForm.commit;

  var newRoomNotification = values.newRoomNotification,
      newMessageNotification = values.newMessageNotification,
      muteFocusedConversations = values.muteFocusedConversations,
      notificationsSoundVolume = values.notificationsSoundVolume;
  var handleNewRoomNotification = handlers.handleNewRoomNotification,
      handleNewMessageNotification = handlers.handleNewMessageNotification,
      handleMuteFocusedConversations = handlers.handleMuteFocusedConversations,
      handleNotificationsSoundVolume = handlers.handleNotificationsSoundVolume;
  var onChangeNotificationsSoundVolume = useCallback(function (e) {
    return handleNotificationsSoundVolume(Math.max(0, Math.min(Number(e.currentTarget.value), 100)));
  }, [handleNotificationsSoundVolume]);
  commitRef.current.sound = commit;
  return /*#__PURE__*/React.createElement(Accordion.Item, _extends({
    title: t('Sound')
  }, props), /*#__PURE__*/React.createElement(FieldGroup, null, useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('New_Room_Notification')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
      value: newRoomNotification,
      onChange: handleNewRoomNotification,
      options: soundsList
    })));
  }, [handleNewRoomNotification, newRoomNotification, soundsList, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('New_Message_Notification')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
      value: newMessageNotification,
      onChange: handleNewMessageNotification,
      options: soundsList
    })));
  }, [handleNewMessageNotification, newMessageNotification, soundsList, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, {
      display: "flex",
      flexDirection: "row",
      justifyContent: "spaceBetween",
      flexGrow: 1
    }, /*#__PURE__*/React.createElement(Field.Label, null, t('Mute_Focused_Conversations')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: muteFocusedConversations,
      onChange: handleMuteFocusedConversations
    })));
  }, [handleMuteFocusedConversations, muteFocusedConversations, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Notifications_Sound_Volume')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
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
    }, notificationsSoundVolume)));
  }, [notificationsSoundVolume, onChangeNotificationsSoundVolume, t])));
};

module.exportDefault(PreferencesSoundSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/preferences/8b39338e8106abcd83d9dab7d5bee9964fa05cf7.map
