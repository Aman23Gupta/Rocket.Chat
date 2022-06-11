function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/CustomFieldsAdditionalForm.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Field, TextInput, ToggleSwitch, Select;
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

  Select(v) {
    Select = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const CustomFieldsAdditionalForm = _ref => {
  let {
    values = {},
    handlers = {},
    state,
    className,
    errors
  } = _ref;
  const t = useTranslation();
  const {
    type,
    required,
    defaultValue,
    options,
    public: isPublic
  } = values;
  const {
    handleType,
    handleRequired,
    handleDefaultValue,
    handleOptions,
    handlePublic
  } = handlers;
  const {
    optionsError
  } = errors;
  const typeOptions = useMemo(() => [['input', t('Input')], ['select', t('Select')]], [t]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: "required"
  }, t('Required')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    id: "required",
    checked: required,
    onChange: handleRequired
  })))), /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Type')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    options: typeOptions,
    value: type,
    onChange: handleType
  }))), /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Default_value')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: defaultValue,
    onChange: handleDefaultValue,
    placeholder: t('Default_value')
  }))), /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Options')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: options,
    onChange: handleOptions,
    error: optionsError,
    disabled: type === 'input',
    placeholder: t('Options')
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Livechat_custom_fields_options_placeholder')), optionsError && /*#__PURE__*/React.createElement(Field.Error, null, optionsError)), /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: "public"
  }, t('Public')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    disabled: !state.visibility,
    id: "public",
    checked: isPublic,
    onChange: handlePublic
  }))), /*#__PURE__*/React.createElement(Field.Hint, null, t('Livechat_custom_fields_public_description'))));
};

module.exportDefault(CustomFieldsAdditionalForm);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/a0a5ab1fc028db1a8cd85c10c33a4256c1cd8f79.map
