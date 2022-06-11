function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/CustomFieldsForm.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["formValues", "formHandlers", "customFields"],
    _excluded2 = ["jsonCustomFields", "customFieldsData", "setCustomFieldsData", "onLoadFields"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 3);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 4);
module.export({
  "default": function () {
    return CustomFieldsForm;
  }
});
var TextInput, Select, Field;
module.link("@rocket.chat/fuselage", {
  TextInput: function (v) {
    TextInput = v;
  },
  Select: function (v) {
    Select = v;
  },
  Field: function (v) {
    Field = v;
  }
}, 0);
var capitalize;
module.link("@rocket.chat/string-helpers", {
  capitalize: function (v) {
    capitalize = v;
  }
}, 1);
var React, useMemo, useEffect, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var useSetting;
module.link("../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 3);
var useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var useComponentDidUpdate;
module.link("../hooks/useComponentDidUpdate", {
  useComponentDidUpdate: function (v) {
    useComponentDidUpdate = v;
  }
}, 5);
var useForm;
module.link("../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 6);

var CustomTextInput = function (_ref) {
  var label = _ref.label,
      name = _ref.name,
      required = _ref.required,
      minLength = _ref.minLength,
      maxLength = _ref.maxLength,
      setState = _ref.setState,
      state = _ref.state,
      className = _ref.className,
      _ref$setCustomFieldsE = _ref.setCustomFieldsError,
      setCustomFieldsError = _ref$setCustomFieldsE === void 0 ? function () {
    return [];
  } : _ref$setCustomFieldsE;
  var t = useTranslation();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      inputError = _useState2[0],
      setInputError = _useState2[1];

  var verify = useMemo(function () {
    var errors = [];

    if (!state && required) {
      errors.push(t('The_field_is_required', label || name));
    }

    if (state.length < minLength && state.length > 0) {
      errors.push(t('Min_length_is', minLength));
    }

    return errors.join(', ');
  }, [state, required, minLength, t, label, name]);
  useEffect(function () {
    setCustomFieldsError(function (oldErrors) {
      return verify ? [].concat(_toConsumableArray(oldErrors), [{
        name: name
      }]) : oldErrors.filter(function (item) {
        return item.name !== name;
      });
    });
  }, [name, setCustomFieldsError, verify]);
  useComponentDidUpdate(function () {
    setInputError(verify);
  }, [verify]);
  return useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, {
      className: className
    }, /*#__PURE__*/React.createElement(Field.Label, null, label || t(name), required && '*'), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      name: name,
      error: inputError,
      maxLength: maxLength,
      flexGrow: 1,
      value: state,
      onChange: function (e) {
        return setState(e.currentTarget.value);
      }
    })), /*#__PURE__*/React.createElement(Field.Error, null, inputError));
  }, [className, label, t, name, required, inputError, maxLength, state, setState]);
};

var CustomSelect = function (_ref2) {
  var label = _ref2.label,
      name = _ref2.name,
      required = _ref2.required,
      _ref2$options = _ref2.options,
      options = _ref2$options === void 0 ? {} : _ref2$options,
      setState = _ref2.setState,
      state = _ref2.state,
      className = _ref2.className,
      _ref2$setCustomFields = _ref2.setCustomFieldsError,
      setCustomFieldsError = _ref2$setCustomFields === void 0 ? function () {
    return [];
  } : _ref2$setCustomFields;
  var t = useTranslation();

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      selectError = _useState4[0],
      setSelectError = _useState4[1];

  var mappedOptions = useMemo(function () {
    return Object.values(options).map(function (value) {
      return [value, value];
    });
  }, [options]);
  var verify = useMemo(function () {
    return !state.length && required ? t('The_field_is_required', label || name) : '';
  }, [name, label, required, state.length, t]);
  useEffect(function () {
    setCustomFieldsError(function (oldErrors) {
      return verify ? [].concat(_toConsumableArray(oldErrors), [{
        name: name
      }]) : oldErrors.filter(function (item) {
        return item.name !== name;
      });
    });
  }, [name, setCustomFieldsError, verify]);
  useComponentDidUpdate(function () {
    setSelectError(verify);
  }, [verify]);
  return useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, {
      className: className
    }, /*#__PURE__*/React.createElement(Field.Label, null, label || t(name), required && '*'), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
      name: name,
      error: selectError,
      flexGrow: 1,
      value: state,
      options: mappedOptions,
      onChange: function (val) {
        return setState(val);
      }
    })), /*#__PURE__*/React.createElement(Field.Error, null, selectError));
  }, [className, label, t, name, required, selectError, state, mappedOptions, setState]);
};

var CustomFieldsAssembler = function (_ref3) {
  var formValues = _ref3.formValues,
      formHandlers = _ref3.formHandlers,
      customFields = _ref3.customFields,
      props = _objectWithoutProperties(_ref3, _excluded);

  return Object.entries(customFields).map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        key = _ref5[0],
        value = _ref5[1];

    var extraProps = _objectSpread({
      key: key,
      name: key,
      setState: formHandlers["handle" + capitalize(key)],
      state: formValues[key]
    }, value);

    if (value.type === 'select') {
      return /*#__PURE__*/React.createElement(CustomSelect, _extends({}, extraProps, props));
    }

    if (value.type === 'text') {
      return /*#__PURE__*/React.createElement(CustomTextInput, _extends({}, extraProps, props));
    }

    return null;
  });
};

function CustomFieldsForm(_ref6) {
  var jsonCustomFields = _ref6.jsonCustomFields,
      customFieldsData = _ref6.customFieldsData,
      setCustomFieldsData = _ref6.setCustomFieldsData,
      _ref6$onLoadFields = _ref6.onLoadFields,
      onLoadFields = _ref6$onLoadFields === void 0 ? function () {} : _ref6$onLoadFields,
      props = _objectWithoutProperties(_ref6, _excluded2);

  var accountsCustomFieldsJson = useSetting('Accounts_CustomFields');

  var _useState5 = useState(function () {
    try {
      return jsonCustomFields || JSON.parse(accountsCustomFieldsJson || '{}');
    } catch (_unused) {
      return {};
    }
  }),
      _useState6 = _slicedToArray(_useState5, 1),
      customFields = _useState6[0];

  var hasCustomFields = Boolean(Object.values(customFields).length);
  var defaultFields = useMemo(function () {
    return Object.entries(customFields).reduce(function (data, _ref7) {
      var _value$defaultValue;

      var _ref8 = _slicedToArray(_ref7, 2),
          key = _ref8[0],
          value = _ref8[1];

      data[key] = (_value$defaultValue = value.defaultValue) !== null && _value$defaultValue !== void 0 ? _value$defaultValue : '';
      return data;
    }, {});
  }, [customFields]);

  var _useForm = useForm(_objectSpread(_objectSpread({}, defaultFields), customFieldsData)),
      values = _useForm.values,
      handlers = _useForm.handlers;

  useEffect(function () {
    onLoadFields(hasCustomFields);

    if (hasCustomFields) {
      setCustomFieldsData(values);
    }
  }, [hasCustomFields, onLoadFields, setCustomFieldsData, values]);

  if (!hasCustomFields) {
    return null;
  }

  return /*#__PURE__*/React.createElement(CustomFieldsAssembler, _extends({
    formValues: values,
    formHandlers: handlers,
    customFields: customFields
  }, props));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/66a4a61a88bbe3df4bcd326fb8be74d0404706a0.map
