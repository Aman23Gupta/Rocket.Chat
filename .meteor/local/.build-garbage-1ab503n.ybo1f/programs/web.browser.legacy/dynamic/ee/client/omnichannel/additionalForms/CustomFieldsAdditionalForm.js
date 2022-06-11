function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/CustomFieldsAdditionalForm.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Field, TextInput, ToggleSwitch, Select;
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
  Select: function (v) {
    Select = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var CustomFieldsAdditionalForm = function (_ref) {
  var _ref$values = _ref.values,
      values = _ref$values === void 0 ? {} : _ref$values,
      _ref$handlers = _ref.handlers,
      handlers = _ref$handlers === void 0 ? {} : _ref$handlers,
      state = _ref.state,
      className = _ref.className,
      errors = _ref.errors;
  var t = useTranslation();
  var type = values.type,
      required = values.required,
      defaultValue = values.defaultValue,
      options = values.options,
      isPublic = values.public;
  var handleType = handlers.handleType,
      handleRequired = handlers.handleRequired,
      handleDefaultValue = handlers.handleDefaultValue,
      handleOptions = handlers.handleOptions,
      handlePublic = handlers.handlePublic;
  var optionsError = errors.optionsError;
  var typeOptions = useMemo(function () {
    return [['input', t('Input')], ['select', t('Select')]];
  }, [t]);
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/18f024d464ea7e177ee540904511863ec70f40a3.map
