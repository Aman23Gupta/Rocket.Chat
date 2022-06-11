function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/ColorSettingInput.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Field, Flex, InputBox, Margins, TextInput, Select;
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
  },
  Margins: function (v) {
    Margins = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Select: function (v) {
    Select = v;
  }
}, 0);
var React, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
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

function ColorSettingInput(_ref) {
  var _id = _ref._id,
      label = _ref.label,
      value = _ref.value,
      editor = _ref.editor,
      _ref$allowedTypes = _ref.allowedTypes,
      allowedTypes = _ref$allowedTypes === void 0 ? [] : _ref$allowedTypes,
      placeholder = _ref.placeholder,
      readonly = _ref.readonly,
      autocomplete = _ref.autocomplete,
      disabled = _ref.disabled,
      hasResetButton = _ref.hasResetButton,
      onChangeValue = _ref.onChangeValue,
      onChangeEditor = _ref.onChangeEditor,
      onResetButtonClick = _ref.onResetButtonClick;
  var t = useTranslation();
  var handleChange = useCallback(function (event) {
    onChangeValue && onChangeValue(event.currentTarget.value);
  }, [onChangeValue]);
  var handleEditorTypeChange = useCallback(function (value) {
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
    "data-qa-setting-id": _id + "_editor",
    type: "color",
    id: _id + "_editor",
    value: editor,
    disabled: disabled,
    readOnly: readonly,
    autoComplete: autocomplete === false ? 'off' : undefined,
    onChange: handleEditorTypeChange,
    options: allowedTypes.map(function (type) {
      return [type, t(type)];
    })
  })))), /*#__PURE__*/React.createElement(Field.Hint, null, "Variable name: ", _id.replace(/theme-color-/, '@')));
}

module.exportDefault(ColorSettingInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/8de0c4a393a8a3294a6048a1e73fe66f503d9994.map
