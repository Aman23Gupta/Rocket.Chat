function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/appearance/AppearanceForm.tsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Field, TextInput, ToggleSwitch, Accordion, FieldGroup, InputBox, TextAreaInput, NumberInput;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  },
  Accordion: function (v) {
    Accordion = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  InputBox: function (v) {
    InputBox = v;
  },
  TextAreaInput: function (v) {
    TextAreaInput = v;
  },
  NumberInput: function (v) {
    NumberInput = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var AppearanceForm = function (_ref) {
  var _ref$values = _ref.values,
      values = _ref$values === void 0 ? {} : _ref$values,
      _ref$handlers = _ref.handlers,
      handlers = _ref$handlers === void 0 ? {} : _ref$handlers;
  var t = useTranslation();
  var Livechat_title = values.Livechat_title,
      Livechat_title_color = values.Livechat_title_color,
      Livechat_show_agent_info = values.Livechat_show_agent_info,
      Livechat_show_agent_email = values.Livechat_show_agent_email,
      Livechat_display_offline_form = values.Livechat_display_offline_form,
      Livechat_offline_form_unavailable = values.Livechat_offline_form_unavailable,
      Livechat_offline_message = values.Livechat_offline_message,
      Livechat_offline_title = values.Livechat_offline_title,
      Livechat_offline_title_color = values.Livechat_offline_title_color,
      Livechat_offline_email = values.Livechat_offline_email,
      Livechat_offline_success_message = values.Livechat_offline_success_message,
      Livechat_registration_form = values.Livechat_registration_form,
      Livechat_name_field_registration_form = values.Livechat_name_field_registration_form,
      Livechat_email_field_registration_form = values.Livechat_email_field_registration_form,
      Livechat_registration_form_message = values.Livechat_registration_form_message,
      Livechat_conversation_finished_message = values.Livechat_conversation_finished_message,
      Livechat_conversation_finished_text = values.Livechat_conversation_finished_text,
      Livechat_enable_message_character_limit = values.Livechat_enable_message_character_limit,
      Livechat_message_character_limit = values.Livechat_message_character_limit;
  var handleLivechat_title = handlers.handleLivechat_title,
      handleLivechat_title_color = handlers.handleLivechat_title_color,
      handleLivechat_show_agent_info = handlers.handleLivechat_show_agent_info,
      handleLivechat_show_agent_email = handlers.handleLivechat_show_agent_email,
      handleLivechat_display_offline_form = handlers.handleLivechat_display_offline_form,
      handleLivechat_offline_form_unavailable = handlers.handleLivechat_offline_form_unavailable,
      handleLivechat_offline_message = handlers.handleLivechat_offline_message,
      handleLivechat_offline_title = handlers.handleLivechat_offline_title,
      handleLivechat_offline_title_color = handlers.handleLivechat_offline_title_color,
      handleLivechat_offline_email = handlers.handleLivechat_offline_email,
      handleLivechat_offline_success_message = handlers.handleLivechat_offline_success_message,
      handleLivechat_registration_form = handlers.handleLivechat_registration_form,
      handleLivechat_name_field_registration_form = handlers.handleLivechat_name_field_registration_form,
      handleLivechat_email_field_registration_form = handlers.handleLivechat_email_field_registration_form,
      handleLivechat_registration_form_message = handlers.handleLivechat_registration_form_message,
      handleLivechat_conversation_finished_message = handlers.handleLivechat_conversation_finished_message,
      handleLivechat_conversation_finished_text = handlers.handleLivechat_conversation_finished_text,
      handleLivechat_enable_message_character_limit = handlers.handleLivechat_enable_message_character_limit,
      handleLivechat_message_character_limit = handlers.handleLivechat_message_character_limit;
  var onChangeCharacterLimit = useMutableCallback(function (_ref2) {
    var value = _ref2.currentTarget.value;
    handleLivechat_message_character_limit === null || handleLivechat_message_character_limit === void 0 ? void 0 : handleLivechat_message_character_limit(Number(value) < 0 ? 0 : value);
  });
  return /*#__PURE__*/React.createElement(Accordion, null, /*#__PURE__*/React.createElement(Accordion.Item, {
    defaultExpanded: true,
    title: t('Livechat_online')
  }, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Title')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: Livechat_title,
    onChange: handleLivechat_title,
    placeholder: t('Title')
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Title_bar_color')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(InputBox, {
    type: "color",
    value: Livechat_title_color,
    onChange: handleLivechat_title_color
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Message_Characther_Limit')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: Livechat_enable_message_character_limit,
    onChange: handleLivechat_enable_message_character_limit
  }))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(NumberInput, {
    disabled: !Livechat_enable_message_character_limit,
    value: Livechat_message_character_limit,
    onChange: onChangeCharacterLimit
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Show_agent_info')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: Livechat_show_agent_info,
    onChange: handleLivechat_show_agent_info
  })))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Show_agent_email')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: Livechat_show_agent_email,
    onChange: handleLivechat_show_agent_email
  })))))), /*#__PURE__*/React.createElement(Accordion.Item, {
    title: t('Livechat_offline')
  }, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Display_offline_form')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: Livechat_display_offline_form,
    onChange: handleLivechat_display_offline_form
  })))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Offline_form_unavailable_message')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 3,
    value: Livechat_offline_form_unavailable,
    onChange: handleLivechat_offline_form_unavailable,
    placeholder: t('Offline_form_unavailable_message')
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Offline_message')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 3,
    value: Livechat_offline_message,
    onChange: handleLivechat_offline_message,
    placeholder: t('Offline_message')
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Title_offline')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: Livechat_offline_title,
    onChange: handleLivechat_offline_title,
    placeholder: t('Title_offline')
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Title_bar_color_offline')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(InputBox, {
    type: "color",
    value: Livechat_offline_title_color,
    onChange: handleLivechat_offline_title_color
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Email_address_to_send_offline_messages')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: Livechat_offline_email,
    onChange: handleLivechat_offline_email,
    placeholder: t('Email_address_to_send_offline_messages')
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Offline_success_message')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 3,
    value: Livechat_offline_success_message,
    onChange: handleLivechat_offline_success_message,
    placeholder: t('Offline_success_message')
  }))))), /*#__PURE__*/React.createElement(Accordion.Item, {
    title: t('Livechat_registration_form')
  }, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Enabled')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: Livechat_registration_form,
    onChange: handleLivechat_registration_form
  })))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Show_name_field')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: Livechat_name_field_registration_form,
    onChange: handleLivechat_name_field_registration_form
  })))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Show_email_field')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: Livechat_email_field_registration_form,
    onChange: handleLivechat_email_field_registration_form
  })))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Livechat_registration_form_message')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 3,
    value: Livechat_registration_form_message,
    onChange: handleLivechat_registration_form_message,
    placeholder: t('Offline_message')
  }))))), /*#__PURE__*/React.createElement(Accordion.Item, {
    title: t('Conversation_finished')
  }, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Conversation_finished_message')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 3,
    value: Livechat_conversation_finished_message,
    onChange: handleLivechat_conversation_finished_message,
    placeholder: t('Offline_message')
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Conversation_finished_text')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 3,
    value: Livechat_conversation_finished_text,
    onChange: handleLivechat_conversation_finished_text,
    placeholder: t('Offline_message')
  }))))));
};

module.exportDefault(AppearanceForm);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/appearance/120179aba1275049d0caa912af52b1f4754a5367.map
