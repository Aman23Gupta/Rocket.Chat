function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/CodeSettingInput.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Button, Field, Flex;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  Field(v) {
    Field = v;
  },

  Flex(v) {
    Flex = v;
  }

}, 0);
let useToggle;
module.link("@rocket.chat/fuselage-hooks", {
  useToggle(v) {
    useToggle = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let ResetSettingButton;
module.link("../ResetSettingButton", {
  default(v) {
    ResetSettingButton = v;
  }

}, 4);
let CodeMirror;
module.link("./CodeMirror", {
  default(v) {
    CodeMirror = v;
  }

}, 5);

function CodeSettingInput(_ref) {
  let {
    _id,
    label,
    value = '',
    code,
    placeholder,
    readonly,
    autocomplete,
    disabled,
    hasResetButton,
    onChangeValue,
    onResetButtonClick
  } = _ref;
  const t = useTranslation();
  const [fullScreen, toggleFullScreen] = useToggle(false);

  const handleChange = value => {
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
    onClick: () => toggleFullScreen()
  }, fullScreen ? t('Exit_Full_Screen') : t('Full_Screen')))));
}

module.exportDefault(CodeSettingInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/394d356da923c6ba71a6bd5cf15ae6341171855b.map
