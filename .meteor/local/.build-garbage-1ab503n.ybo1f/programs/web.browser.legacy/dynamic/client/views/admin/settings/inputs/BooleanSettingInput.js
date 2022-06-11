function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/BooleanSettingInput.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Field, ToggleSwitch;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
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

function BooleanSettingInput(_ref) {
  var _id = _ref._id,
      label = _ref.label,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      value = _ref.value,
      hasResetButton = _ref.hasResetButton,
      onChangeValue = _ref.onChangeValue,
      onResetButtonClick = _ref.onResetButtonClick;

  var handleChange = function (event) {
    var value = event.currentTarget.checked;
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
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/e50bdd9fe6d7b3424d5d142952b818abef97e0c8.map
