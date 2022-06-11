function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/ColorSettingInput.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Field, Flex, InputBox, Margins, TextInput, Select;
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
  },

  Margins(v) {
    Margins = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Select(v) {
    Select = v;
  }

}, 0);
let React, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
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

function ColorSettingInput(_ref) {
  let {
    _id,
    label,
    value,
    editor,
    allowedTypes = [],
    placeholder,
    readonly,
    autocomplete,
    disabled,
    hasResetButton,
    onChangeValue,
    onChangeEditor,
    onResetButtonClick
  } = _ref;
  const t = useTranslation();
  const handleChange = useCallback(event => {
    onChangeValue && onChangeValue(event.currentTarget.value);
  }, [onChangeValue]);
  const handleEditorTypeChange = useCallback(value => {
    onChangeEditor && onChangeEditor(value);
  }, [onChangeEditor]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex.Container, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: _id,
    title: _id
  }, label), hasResetButton && /*#__PURE__*/React.createElement(ResetSettingButton, {
    "data-qa-reset-setting-id": _id,
    onClick: onResetButtonClick
  }))), /*#__PURE__*/React.createElement(Margins, {
    inline: "x4"
  }, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Margins, {
    inline: "x4"
  }, /*#__PURE__*/React.createElement(Flex.Item, {
    grow: 2
  }, editor === 'color' && /*#__PURE__*/React.createElement(InputBox, {
    "data-qa-setting-id": _id,
    type: "color",
    id: _id,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readonly,
    autoComplete: autocomplete === false ? 'off' : undefined,
    onChange: handleChange
  }), editor === 'expression' && /*#__PURE__*/React.createElement(TextInput, {
    "data-qa-setting-id": _id,
    id: _id,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readonly,
    autoComplete: autocomplete === false ? 'off' : undefined,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement(Select, {
    "data-qa-setting-id": "".concat(_id, "_editor"),
    type: "color",
    id: "".concat(_id, "_editor"),
    value: editor,
    disabled: disabled,
    readOnly: readonly,
    autoComplete: autocomplete === false ? 'off' : undefined,
    onChange: handleEditorTypeChange,
    options: allowedTypes.map(type => [type, t(type)])
  })))), /*#__PURE__*/React.createElement(Field.Hint, null, "Variable name: ", _id.replace(/theme-color-/, '@')));
}

module.exportDefault(ColorSettingInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/aee6134bf994d67f2c370f0a5b41df6b03d97cc1.map
