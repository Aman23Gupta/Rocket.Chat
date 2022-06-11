function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/StringSettingInput.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Field, Flex, TextAreaInput, TextInput;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Field(v) {
    Field = v;
  },

  Flex(v) {
    Flex = v;
  },

  TextAreaInput(v) {
    TextAreaInput = v;
  },

  TextInput(v) {
    TextInput = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let ResetSettingButton;
module.link("../ResetSettingButton", {
  default(v) {
    ResetSettingButton = v;
  }

}, 2);

function StringSettingInput(_ref) {
  let {
    _id,
    label,
    disabled,
    multiline,
    placeholder,
    readonly,
    autocomplete,
    value,
    hasResetButton,
    onChangeValue,
    onResetButtonClick
  } = _ref;

  const handleChange = event => {
    onChangeValue(event.currentTarget.value);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex.Container, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: _id,
    title: _id
  }, label), hasResetButton && /*#__PURE__*/React.createElement(ResetSettingButton, {
    "data-qa-reset-setting-id": _id,
    onClick: onResetButtonClick
  }))), /*#__PURE__*/React.createElement(Field.Row, null, multiline ? /*#__PURE__*/React.createElement(TextAreaInput, {
    "data-qa-setting-id": _id,
    id: _id,
    rows: 4,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readonly,
    autoComplete: autocomplete === false ? 'off' : undefined,
    onChange: handleChange
  }) : /*#__PURE__*/React.createElement(TextInput, {
    "data-qa-setting-id": _id,
    id: _id,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readonly,
    autoComplete: autocomplete === false ? 'off' : undefined,
    onChange: handleChange
  })));
}

module.exportDefault(StringSettingInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/a560dfe49b563920284fd182176da9dc26357750.map
