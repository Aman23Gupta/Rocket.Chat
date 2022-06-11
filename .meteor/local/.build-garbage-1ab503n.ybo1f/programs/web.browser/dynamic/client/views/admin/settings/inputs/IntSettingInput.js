function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/IntSettingInput.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Field, Flex, InputBox;
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

  InputBox(v) {
    InputBox = v;
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

function IntSettingInput(_ref) {
  let {
    _id,
    label,
    value,
    placeholder,
    readonly,
    autocomplete,
    disabled,
    onChangeValue,
    hasResetButton,
    onResetButtonClick
  } = _ref;

  const handleChange = event => {
    onChangeValue && onChangeValue(parseInt(event.currentTarget.value, 10));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex.Container, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: _id,
    title: _id
  }, label), hasResetButton && /*#__PURE__*/React.createElement(ResetSettingButton, {
    "data-qa-reset-setting-id": _id,
    onClick: onResetButtonClick
  }))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(InputBox, {
    "data-qa-setting-id": _id,
    id: _id,
    type: "number",
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readonly,
    autoComplete: autocomplete === false ? 'off' : undefined,
    onChange: handleChange
  })));
}

module.exportDefault(IntSettingInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/42a182912785e9f6e61d0b664422ba73111b66b5.map
