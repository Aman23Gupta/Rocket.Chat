function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/customFields/CustomFieldsForm.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Field, TextInput, ToggleSwitch, Select;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  ToggleSwitch(v) {
    ToggleSwitch = v;
  },

  Select(v) {
    Select = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const CustomFieldsForm = _ref => {
  let {
    values = {},
    handlers = {},
    className
  } = _ref;
  const t = useTranslation();
  const {
    id,
    field,
    label,
    scope,
    visibility,
    regexp
  } = values;
  const {
    handleField,
    handleLabel,
    handleScope,
    handleVisibility,
    handleRegexp
  } = handlers;
  const scopeOptions = useMemo(() => [['visitor', t('Visitor')], ['room', t('Room')]], [t]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Field'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    disabled: id,
    value: field,
    onChange: handleField,
    placeholder: t('Field')
  }))), /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Label'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: label,
    onChange: handleLabel,
    placeholder: t('Label')
  }))), /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Scope')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    options: scopeOptions,
    value: scope,
    onChange: handleScope
  }))), /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: "visible"
  }, t('Visible')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    id: "visible",
    checked: visibility,
    onChange: handleVisibility
  })))), /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Validation')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: regexp,
    onChange: handleRegexp,
    placeholder: t('Validation')
  }))));
};

module.exportDefault(CustomFieldsForm);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/customFields/3af4fd92c42723e6be6c068bac5681c4d0432881.map
