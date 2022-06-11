function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/BooleanSettingInput.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Field, ToggleSwitch;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  ToggleSwitch(v) {
    ToggleSwitch = v;
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

function BooleanSettingInput(_ref) {
  let {
    _id,
    label,
    disabled,
    readonly,
    value,
    hasResetButton,
    onChangeValue,
    onResetButtonClick
  } = _ref;

  const handleChange = event => {
    const value = event.currentTarget.checked;
    onChangeValue && onChangeValue(value);
  };

  return /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    "data-qa-setting-id": _id,
    id: _id,
    value: "true",
    checked: value === true,
    disabled: disabled,
    readOnly: readonly,
    onChange: handleChange
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: _id,
    title: _id
  }, label), hasResetButton && /*#__PURE__*/React.createElement(ResetSettingButton, {
    "data-qa-reset-setting-id": _id,
    onClick: onResetButtonClick
  }));
}

module.exportDefault(BooleanSettingInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/72ce605d859f68f6a20cdfc3a03b11d9acedb692.map
