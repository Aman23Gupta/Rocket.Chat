function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/MultiSelectSettingInput.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Field, Flex, Box, MultiSelectFiltered, MultiSelect;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  Flex(v) {
    Flex = v;
  },

  Box(v) {
    Box = v;
  },

  MultiSelectFiltered(v) {
    MultiSelectFiltered = v;
  },

  MultiSelect(v) {
    MultiSelect = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let ResetSettingButton;
module.link("../ResetSettingButton", {
  default(v) {
    ResetSettingButton = v;
  }

}, 3);

function MultiSelectSettingInput(_ref) {
  let {
    _id,
    label,
    value = [],
    placeholder,
    readonly,
    disabled,
    values = [],
    hasResetButton,
    onChangeValue,
    onResetButtonClick,
    autocomplete
  } = _ref;
  const t = useTranslation();

  const handleChange = value => {
    onChangeValue && onChangeValue(value); // onChangeValue && onChangeValue([...event.currentTarget.querySelectorAll('option')].filter((e) => e.selected).map((el) => el.value));
  };

  const Component = autocomplete ? MultiSelectFiltered : MultiSelect;
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
    options: values.map(_ref2 => {
      let {
        key,
        i18nLabel
      } = _ref2;
      return [key, t(i18nLabel)];
    })
  }));
}

module.exportDefault(MultiSelectSettingInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/5b05cd82edfef1425c5807e30c4f01b821f7ff90.map
