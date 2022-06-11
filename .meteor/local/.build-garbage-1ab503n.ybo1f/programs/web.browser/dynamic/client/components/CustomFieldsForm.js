function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/CustomFieldsForm.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["formValues", "formHandlers", "customFields"],
      _excluded2 = ["jsonCustomFields", "customFieldsData", "setCustomFieldsData", "onLoadFields"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 1);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);
module.export({
  default: () => CustomFieldsForm
});
let TextInput, Select, Field;
module.link("@rocket.chat/fuselage", {
  TextInput(v) {
    TextInput = v;
  },

  Select(v) {
    Select = v;
  },

  Field(v) {
    Field = v;
  }

}, 0);
let capitalize;
module.link("@rocket.chat/string-helpers", {
  capitalize(v) {
    capitalize = v;
  }

}, 1);
let React, useMemo, useEffect, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let useSetting;
module.link("../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 3);
let useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let useComponentDidUpdate;
module.link("../hooks/useComponentDidUpdate", {
  useComponentDidUpdate(v) {
    useComponentDidUpdate = v;
  }

}, 5);
let useForm;
module.link("../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 6);

const CustomTextInput = _ref => {
  let {
    label,
    name,
    required,
    minLength,
    maxLength,
    setState,
    state,
    className,
    setCustomFieldsError = () => []
  } = _ref;
  const t = useTranslation();
  const [inputError, setInputError] = useState('');
  const verify = useMemo(() => {
    const errors = [];

    if (!state && required) {
      errors.push(t('The_field_is_required', label || name));
    }

    if (state.length < minLength && state.length > 0) {
      errors.push(t('Min_length_is', minLength));
    }

    return errors.join(', ');
  }, [state, required, minLength, t, label, name]);
  useEffect(() => {
    setCustomFieldsError(oldErrors => verify ? [...oldErrors, {
      name
    }] : oldErrors.filter(item => item.name !== name));
  }, [name, setCustomFieldsError, verify]);
  useComponentDidUpdate(() => {
    setInputError(verify);
  }, [verify]);
  return useMemo(() => /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, label || t(name), required && '*'), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    name: name,
    error: inputError,
    maxLength: maxLength,
    flexGrow: 1,
    value: state,
    onChange: e => setState(e.currentTarget.value)
  })), /*#__PURE__*/React.createElement(Field.Error, null, inputError)), [className, label, t, name, required, inputError, maxLength, state, setState]);
};

const CustomSelect = _ref2 => {
  let {
    label,
    name,
    required,
    options = {},
    setState,
    state,
    className,
    setCustomFieldsError = () => []
  } = _ref2;
  const t = useTranslation();
  const [selectError, setSelectError] = useState('');
  const mappedOptions = useMemo(() => Object.values(options).map(value => [value, value]), [options]);
  const verify = useMemo(() => !state.length && required ? t('The_field_is_required', label || name) : '', [name, label, required, state.length, t]);
  useEffect(() => {
    setCustomFieldsError(oldErrors => verify ? [...oldErrors, {
      name
    }] : oldErrors.filter(item => item.name !== name));
  }, [name, setCustomFieldsError, verify]);
  useComponentDidUpdate(() => {
    setSelectError(verify);
  }, [verify]);
  return useMemo(() => /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, label || t(name), required && '*'), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    name: name,
    error: selectError,
    flexGrow: 1,
    value: state,
    options: mappedOptions,
    onChange: val => setState(val)
  })), /*#__PURE__*/React.createElement(Field.Error, null, selectError)), [className, label, t, name, required, selectError, state, mappedOptions, setState]);
};

const CustomFieldsAssembler = _ref3 => {
  let {
    formValues,
    formHandlers,
    customFields
  } = _ref3,
      props = _objectWithoutProperties(_ref3, _excluded);

  return Object.entries(customFields).map(_ref4 => {
    let [key, value] = _ref4;

    const extraProps = _objectSpread({
      key,
      name: key,
      setState: formHandlers["handle".concat(capitalize(key))],
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

function CustomFieldsForm(_ref5) {
  let {
    jsonCustomFields,
    customFieldsData,
    setCustomFieldsData,
    onLoadFields = () => {}
  } = _ref5,
      props = _objectWithoutProperties(_ref5, _excluded2);

  const accountsCustomFieldsJson = useSetting('Accounts_CustomFields');
  const [customFields] = useState(() => {
    try {
      return jsonCustomFields || JSON.parse(accountsCustomFieldsJson || '{}');
    } catch (_unused) {
      return {};
    }
  });
  const hasCustomFields = Boolean(Object.values(customFields).length);
  const defaultFields = useMemo(() => Object.entries(customFields).reduce((data, _ref6) => {
    var _value$defaultValue;

    let [key, value] = _ref6;
    data[key] = (_value$defaultValue = value.defaultValue) !== null && _value$defaultValue !== void 0 ? _value$defaultValue : '';
    return data;
  }, {}), [customFields]);
  const {
    values,
    handlers
  } = useForm(_objectSpread(_objectSpread({}, defaultFields), customFieldsData));
  useEffect(() => {
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
//# sourceMappingURL=/dynamic/client/components/9789644ef7e2f9d54aa3e7ce6529fb94ca6c493d.map
