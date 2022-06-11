function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/appearance/AppearanceForm.tsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Field, TextInput, ToggleSwitch, Accordion, FieldGroup, InputBox, TextAreaInput, NumberInput;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  ToggleSwitch(v) {
    ToggleSwitch = v;
  },

  Accordion(v) {
    Accordion = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  InputBox(v) {
    InputBox = v;
  },

  TextAreaInput(v) {
    TextAreaInput = v;
  },

  NumberInput(v) {
    NumberInput = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const AppearanceForm = _ref => {
  let {
    values = {},
    handlers = {}
  } = _ref;
  const t = useTranslation();
  const {
    Livechat_title,
    Livechat_title_color,
    Livechat_show_agent_info,
    Livechat_show_agent_email,
    Livechat_display_offline_form,
    Livechat_offline_form_unavailable,
    Livechat_offline_message,
    Livechat_offline_title,
    Livechat_offline_title_color,
    Livechat_offline_email,
    Livechat_offline_success_message,
    Livechat_registration_form,
    Livechat_name_field_registration_form,
    Livechat_email_field_registration_form,
    Livechat_registration_form_message,
    Livechat_conversation_finished_message,
    Livechat_conversation_finished_text,
    Livechat_enable_message_character_limit,
    Livechat_message_character_limit
  } = values;
  const {
    handleLivechat_title,
    handleLivechat_title_color,
    handleLivechat_show_agent_info,
    handleLivechat_show_agent_email,
    handleLivechat_display_offline_form,
    handleLivechat_offline_form_unavailable,
    handleLivechat_offline_message,
    handleLivechat_offline_title,
    handleLivechat_offline_title_color,
    handleLivechat_offline_email,
    handleLivechat_offline_success_message,
    handleLivechat_registration_form,
    handleLivechat_name_field_registration_form,
    handleLivechat_email_field_registration_form,
    handleLivechat_registration_form_message,
    handleLivechat_conversation_finished_message,
    handleLivechat_conversation_finished_text,
    handleLivechat_enable_message_character_limit,
    handleLivechat_message_character_limit
  } = handlers;
  const onChangeCharacterLimit = useMutableCallback(_ref2 => {
    let {
      currentTarget: {
        value
      }
    } = _ref2;
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/appearance/0253eba13677f6a5bb6b45b3342f8cb690ef0530.map
