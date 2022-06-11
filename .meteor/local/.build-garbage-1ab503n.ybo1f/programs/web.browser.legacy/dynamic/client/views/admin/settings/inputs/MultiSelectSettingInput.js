function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/MultiSelectSettingInput.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Field, Flex, Box, MultiSelectFiltered, MultiSelect;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  Flex: function (v) {
    Flex = v;
  },
  Box: function (v) {
    Box = v;
  },
  MultiSelectFiltered: function (v) {
    MultiSelectFiltered = v;
  },
  MultiSelect: function (v) {
    MultiSelect = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var ResetSettingButton;
module.link("../ResetSettingButton", {
  "default": function (v) {
    ResetSettingButton = v;
  }
}, 3);

function MultiSelectSettingInput(_ref) {
  var _id = _ref._id,
      label = _ref.label,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      placeholder = _ref.placeholder,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      _ref$values = _ref.values,
      values = _ref$values === void 0 ? [] : _ref$values,
      hasResetButton = _ref.hasResetButton,
      onChangeValue = _ref.onChangeValue,
      onResetButtonClick = _ref.onResetButtonClick,
      autocomplete = _ref.autocomplete;
  var t = useTranslation();

  var handleChange = function (value) {
    onChangeValue && onChangeValue(value); // onChangeValue && onChangeValue([...event.currentTarget.querySelectorAll('option')].filter((e) => e.selected).map((el) => el.value));
  };

  var Component = autocomplete ? MultiSelectFiltered : MultiSelect;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex.Container, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: _id,
    title: _id
  }, label), hasResetButton && /*#__PURE__*/React.createElement(ResetSettingButton, {
    "data-qa-reset-setting-id": _id,
    onClick: onResetButtonClick
  }))), /*#__PURE__*/React.createElement(Component, {
    "data-qa-setting-id": _id,
    id: _id,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readonly // autoComplete={autocomplete === false ? 'off' : undefined}
    ,
    onChange: handleChange,
    options: values.map(function (_ref2) {
      var key = _ref2.key,
          i18nLabel = _ref2.i18nLabel;
      return [key, t(i18nLabel)];
    })
  }));
}

module.exportDefault(MultiSelectSettingInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/0500836fb46e688f77514ebfcd9e51fa27b1f7de.map
