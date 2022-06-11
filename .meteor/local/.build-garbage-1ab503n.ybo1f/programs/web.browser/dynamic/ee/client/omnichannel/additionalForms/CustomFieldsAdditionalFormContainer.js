function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/CustomFieldsAdditionalFormContainer.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, useMemo, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 0);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 1);
let useForm;
module.link("../../../../client/hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 2);
let CustomFieldsAdditionalForm;
module.link("./CustomFieldsAdditionalForm", {
  default(v) {
    CustomFieldsAdditionalForm = v;
  }

}, 3);

const getInitialValues = data => {
  var _data$defaultValue;

  return {
    type: data.type || 'input',
    required: !!data.required,
    defaultValue: (_data$defaultValue = data.defaultValue) !== null && _data$defaultValue !== void 0 ? _data$defaultValue : '',
    options: data.options || '',
    public: !!data.public
  };
};

const checkInvalidOptions = value => {
  if (!value || value.trim() === '') {
    return false;
  }

  return value.split(',').every(v => /^[a-zA-Z0-9-_ ]+$/.test(v));
};

const CustomFieldsAdditionalFormContainer = _ref => {
  let {
    data = {},
    state,
    onChange,
    className
  } = _ref;
  const t = useTranslation();
  const {
    values,
    handlers,
    hasUnsavedChanges
  } = useForm(getInitialValues(data));
  const errors = useMemo(() => ({
    optionsError: checkInvalidOptions(values.options) ? t('error-invalid-value') : undefined
  }), [t, values.options]);
  const hasError = useMemo(() => !!Object.values(errors).filter(Boolean).length, [errors]);
  useEffect(() => {
    onChange({
      data: values,
      hasError,
      hasUnsavedChanges
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/b000f5ac0a8dffc5596782d90f8177707255d62b.map
