function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/CustomFieldsAdditionalFormContainer.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, useMemo, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 1);
var useForm;
module.link("../../../../client/hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 2);
var CustomFieldsAdditionalForm;
module.link("./CustomFieldsAdditionalForm", {
  "default": function (v) {
    CustomFieldsAdditionalForm = v;
  }
}, 3);

var getInitialValues = function (data) {
  var _data$defaultValue;

  return {
    type: data.type || 'input',
    required: !!data.required,
    defaultValue: (_data$defaultValue = data.defaultValue) !== null && _data$defaultValue !== void 0 ? _data$defaultValue : '',
    options: data.options || '',
    "public": !!data.public
  };
};

var checkInvalidOptions = function (value) {
  if (!value || value.trim() === '') {
    return false;
  }

  return value.split(',').every(function (v) {
    return /^[a-zA-Z0-9-_ ]+$/.test(v);
  });
};

var CustomFieldsAdditionalFormContainer = function (_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      state = _ref.state,
      onChange = _ref.onChange,
      className = _ref.className;
  var t = useTranslation();

  var _useForm = useForm(getInitialValues(data)),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges;

  var errors = useMemo(function () {
    return {
      optionsError: checkInvalidOptions(values.options) ? t('error-invalid-value') : undefined
    };
  }, [t, values.options]);
  var hasError = useMemo(function () {
    return !!Object.values(errors).filter(Boolean).length;
  }, [errors]);
  useEffect(function () {
    onChange({
      data: values,
      hasError: hasError,
      hasUnsavedChanges: hasUnsavedChanges
    });
  }, [hasError, hasUnsavedChanges, onChange, values]);
  return /*#__PURE__*/React.createElement(CustomFieldsAdditionalForm, {
    values: values,
    handlers: handlers,
    state: state,
    className: className,
    errors: errors
  });
};

module.exportDefault(CustomFieldsAdditionalFormContainer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/354b85b759d361027b9906c2370be138b7371ec8.map
