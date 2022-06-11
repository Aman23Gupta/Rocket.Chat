function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/customFields/EditCustomFieldsPage.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Box, Button, Icon, ButtonGroup, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useCallback, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let useSubscription;
module.link("use-subscription", {
  useSubscription(v) {
    useSubscription = v;
  }

}, 3);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 4);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 5);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 6);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 7);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 8);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 9);
let formsSubscription;
module.link("../additionalForms", {
  formsSubscription(v) {
    formsSubscription = v;
  }

}, 10);
let CustomFieldsForm;
module.link("./CustomFieldsForm", {
  default(v) {
    CustomFieldsForm = v;
  }

}, 11);

const getInitialValues = cf => ({
  id: cf._id,
  field: cf._id,
  label: cf.label,
  scope: cf.scope,
  visibility: cf.visibility === 'visible',
  regexp: cf.regexp
});

const EditCustomFieldsPage = _ref => {
  let {
    customField,
    id,
    reload
  } = _ref;
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const [additionalValues, setAdditionalValues] = useState({});
  const {
    useCustomFieldsAdditionalForm = () => {}
  } = useSubscription(formsSubscription);
  const AdditionalForm = useCustomFieldsAdditionalForm();
  const router = useRoute('omnichannel-customfields');
  const handleReturn = useCallback(() => {
    router.push({});
  }, [router]);
  const {
    values,
    handlers,
    hasUnsavedChanges
  } = useForm(getInitialValues(customField));
  const save = useMethod('livechat:saveCustomField');
  const {
    hasError,
    data: additionalData,
    hasUnsavedChanges: additionalFormChanged
  } = additionalValues;
  const {
    label,
    field
  } = values;
  const canSave = !hasError && label && field && (additionalFormChanged || hasUnsavedChanges);
  const handleSave = useMutableCallback(async () => {
    try {
      await save(id, _objectSpread(_objectSpread(_objectSpread({}, additionalData), values), {}, {
        visibility: values.visibility ? 'visible' : 'hidden'
      }));
      dispatchToastMessage({
        type: 'success',
        message: t('Saved')
      });
      reload();
      router.push({});
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
  const handleAdditionalForm = useMutableCallback(val => {
    setAdditionalValues(_objectSpread(_objectSpread({}, additionalValues), val));
  });
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Edit_Custom_Field')
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleReturn
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "x16",
    name: "back"
  }), t('Back')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleSave,
    disabled: !canSave
  }, t('Save')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    maxWidth: "x600",
    w: "full",
    alignSelf: "center"
  }, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(CustomFieldsForm, {
    values: values,
    handlers: handlers
  }), AdditionalForm && /*#__PURE__*/React.createElement(AdditionalForm, {
    onChange: handleAdditionalForm,
    state: values,
    data: customField
  })))));
};

module.exportDefault(EditCustomFieldsPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/customFields/3dd958f0df6dccffb5384cd589b088ceb0b68ad1.map
