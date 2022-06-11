function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/IntSettingInput.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Field, Flex, InputBox;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Field: function (v) {
    Field = v;
  },
  Flex: function (v) {
    Flex = v;
  },
  InputBox: function (v) {
    InputBox = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var ResetSettingButton;
module.link("../ResetSettingButton", {
  "default": function (v) {
    ResetSettingButton = v;
  }
}, 2);

function IntSettingInput(_ref) {
  var _id = _ref._id,
      label = _ref.label,
      value = _ref.value,
      placeholder = _ref.placeholder,
      readonly = _ref.readonly,
      autocomplete = _ref.autocomplete,
      disabled = _ref.disabled,
      onChangeValue = _ref.onChangeValue,
      hasResetButton = _ref.hasResetButton,
      onResetButtonClick = _ref.onResetButtonClick;

  var handleChange = function (event) {
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
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/5329d0a476c67507f099e8827bef2f9427888783.map
