function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/CodeSettingInput.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Box, Button, Field, Flex;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  Field: function (v) {
    Field = v;
  },
  Flex: function (v) {
    Flex = v;
  }
}, 0);
var useToggle;
module.link("@rocket.chat/fuselage-hooks", {
  useToggle: function (v) {
    useToggle = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var ResetSettingButton;
module.link("../ResetSettingButton", {
  "default": function (v) {
    ResetSettingButton = v;
  }
}, 4);
var CodeMirror;
module.link("./CodeMirror", {
  "default": function (v) {
    CodeMirror = v;
  }
}, 5);

function CodeSettingInput(_ref) {
  var _id = _ref._id,
      label = _ref.label,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      code = _ref.code,
      placeholder = _ref.placeholder,
      readonly = _ref.readonly,
      autocomplete = _ref.autocomplete,
      disabled = _ref.disabled,
      hasResetButton = _ref.hasResetButton,
      onChangeValue = _ref.onChangeValue,
      onResetButtonClick = _ref.onResetButtonClick;
  var t = useTranslation();

  var _useToggle = useToggle(false),
      _useToggle2 = _slicedToArray(_useToggle, 2),
      fullScreen = _useToggle2[0],
      toggleFullScreen = _useToggle2[1];

  var handleChange = function (value) {
    onChangeValue(value);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex.Container, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: _id,
    title: _id
  }, label), hasResetButton && /*#__PURE__*/React.createElement(ResetSettingButton, {
    "data-qa-reset-setting-id": _id,
    onClick: onResetButtonClick
  }))), /*#__PURE__*/React.createElement("div", {
    className: ['code-mirror-box', fullScreen && 'code-mirror-box-fullscreen content-background-color'].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, label), /*#__PURE__*/React.createElement(CodeMirror, {
    "data-qa-setting-id": _id,
    id: _id,
    mode: code,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readonly,
    autoComplete: autocomplete === false ? 'off' : undefined,
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: function () {
      return toggleFullScreen();
    }
  }, fullScreen ? t('Exit_Full_Screen') : t('Full_Screen')))));
}

module.exportDefault(CodeSettingInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/5eafc0c7df142af1190a4ccbbb3cf6b38a3e1ff1.map
