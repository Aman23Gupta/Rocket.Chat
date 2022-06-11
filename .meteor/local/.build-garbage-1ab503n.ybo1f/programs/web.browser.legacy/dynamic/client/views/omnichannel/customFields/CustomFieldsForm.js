function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/customFields/CustomFieldsForm.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Field, TextInput, ToggleSwitch, Select;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  },
  Select: function (v) {
    Select = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var CustomFieldsForm = function (_ref) {
  var _ref$values = _ref.values,
      values = _ref$values === void 0 ? {} : _ref$values,
      _ref$handlers = _ref.handlers,
      handlers = _ref$handlers === void 0 ? {} : _ref$handlers,
      className = _ref.className;
  var t = useTranslation();
  var id = values.id,
      field = values.field,
      label = values.label,
      scope = values.scope,
      visibility = values.visibility,
      regexp = values.regexp;
  var handleField = handlers.handleField,
      handleLabel = handlers.handleLabel,
      handleScope = handlers.handleScope,
      handleVisibility = handlers.handleVisibility,
      handleRegexp = handlers.handleRegexp;
  var scopeOptions = useMemo(function () {
    return [['visitor', t('Visitor')], ['room', t('Room')]];
  }, [t]);
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/customFields/913aceeaef5a830ff2453624a00ead909fece0b8.map
