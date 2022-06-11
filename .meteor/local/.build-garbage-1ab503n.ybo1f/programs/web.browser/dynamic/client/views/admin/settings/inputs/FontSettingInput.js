function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/FontSettingInput.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Field, Flex, TextInput;
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

function FontSettingInput(_ref) {
  let {
    _id,
    label,
    value,
    placeholder,
    readonly,
    autocomplete,
    disabled,
    hasResetButton,
    onChangeValue,
    onResetButtonClick
  } = _ref;

  const handleChange = event => {
    onChangeValue && onChangeValue(event.currentTarget.value);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex.Container, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: _id,
    title: _id
  }, label), hasResetButton && /*#__PURE__*/React.createElement(ResetSettingButton, {
    "data-qa-reset-setting-id": _id,
    onClick: onResetButtonClick
  }))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
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

module.exportDefault(FontSettingInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/2e2446080678b8bcea3a6e19f8ab8a49686d751d.map
