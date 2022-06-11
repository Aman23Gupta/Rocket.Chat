function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/contacts/contextualBar/ContactNewEdit.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Field, TextInput, ButtonGroup, Button;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useState, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let useSubscription;
module.link("use-subscription", {
  useSubscription(v) {
    useSubscription = v;
  }

}, 3);
let hasAtLeastOnePermission;
module.link("../../../../../../app/authorization/client", {
  hasAtLeastOnePermission(v) {
    hasAtLeastOnePermission = v;
  }

}, 4);
let validateEmail;
module.link("../../../../../../lib/emailValidator", {
  validateEmail(v) {
    validateEmail = v;
  }

}, 5);
let CustomFieldsForm;
module.link("../../../../../components/CustomFieldsForm", {
  default(v) {
    CustomFieldsForm = v;
  }

}, 6);
let VerticalBar;
module.link("../../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 7);
let useEndpoint;
module.link("../../../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 8);
let useToastMessageDispatch;
module.link("../../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 9);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 10);
let AsyncStatePhase;
module.link("../../../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 11);
let useComponentDidUpdate;
module.link("../../../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate(v) {
    useComponentDidUpdate = v;
  }

}, 12);
let useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 13);
let useForm;
module.link("../../../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 14);
let createToken;
module.link("../../../../../lib/utils/createToken", {
  createToken(v) {
    createToken = v;
  }

}, 15);
let formsSubscription;
module.link("../../../additionalForms", {
  formsSubscription(v) {
    formsSubscription = v;
  }

}, 16);
let FormSkeleton;
module.link("../../Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 17);
const initialValues = {
  token: '',
  name: '',
  email: '',
  phone: '',
  username: ''
};

const getInitialValues = data => {
  var _contactManager$usern;

  if (!data) {
    return initialValues;
  }

  const {
    contact: {
      name,
      token,
      phone,
      visitorEmails,
      livechatData,
      contactManager
    }
  } = data;
  return {
    token: token !== null && token !== void 0 ? token : '',
    name: name !== null && name !== void 0 ? name : '',
    email: visitorEmails ? visitorEmails[0].address : '',
    phone: phone ? phone[0].phoneNumber : '',
    livechatData: livechatData !== null && livechatData !== void 0 ? livechatData : {},
    username: (_contactManager$usern = contactManager === null || contactManager === void 0 ? void 0 : contactManager.username) !== null && _contactManager$usern !== void 0 ? _contactManager$usern : ''
  };
};

function ContactNewEdit(_ref) {
  let {
    id,
    data,
    close
  } = _ref;
  const t = useTranslation();

  const canViewCustomFields = () => hasAtLeastOnePermission(['view-livechat-room-customfields', 'edit-livechat-room-customfields']);

  const {
    values,
    handlers,
    hasUnsavedChanges: hasUnsavedChangesContact
  } = useForm(getInitialValues(data));
  const eeForms = useSubscription(formsSubscription);
  const {
    useContactManager = () => {}
  } = eeForms;
  const ContactManager = useContactManager();
  const {
    handleName,
    handleEmail,
    handlePhone,
    handleUsername
  } = handlers;
  const {
    token,
    name,
    email,
    phone,
    username
  } = values;
  const {
    values: valueCustom,
    handlers: handleValueCustom,
    hasUnsavedChanges: hasUnsavedChangesCustomFields
  } = useForm({
    livechatData: values.livechatData
  });
  const {
    handleLivechatData
  } = handleValueCustom;
  const {
    livechatData
  } = valueCustom;
  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [customFieldsError, setCustomFieldsError] = useState([]);
  const {
    value: allCustomFields,
    phase: state
  } = useEndpointData('livechat/custom-fields');

  const jsonConverterToValidFormat = customFields => {
    const jsonObj = {};
    customFields.forEach(_ref2 => {
      let {
        _id,
        label,
        visibility,
        options,
        scope,
        defaultValue,
        required
      } = _ref2;
      visibility === 'visible' & scope === 'visitor' && (jsonObj[_id] = {
        label,
        type: options ? 'select' : 'text',
        required,
        defaultValue,
        options: options && options.split(',').map(item => item.trim())
      });
    });
    return jsonObj;
  };

  const jsonCustomField = useMemo(() => allCustomFields && allCustomFields.customFields ? jsonConverterToValidFormat(allCustomFields.customFields) : {}, [allCustomFields]);
  const saveContact = useEndpoint('POST', 'omnichannel/contact');
  const emailAlreadyExistsAction = useEndpoint('GET', "omnichannel/contact.search?email=".concat(email));
  const phoneAlreadyExistsAction = useEndpoint('GET', "omnichannel/contact.search?phone=".concat(phone));
  const checkEmailExists = useMutableCallback(async () => {
    if (!validateEmail(email)) {
      return;
    }

    const {
      contact
    } = await emailAlreadyExistsAction();

    if (!contact || id && contact._id === id) {
      return setEmailError(null);
    }

    setEmailError(t('Email_already_exists'));
  });
  const checkPhoneExists = useMutableCallback(async () => {
    if (!phone) {
      return;
    }

    const {
      contact
    } = await phoneAlreadyExistsAction();

    if (!contact || id && contact._id === id) {
      return setPhoneError(null);
    }

    setPhoneError(t('Phone_already_exists'));
  });
  const dispatchToastMessage = useToastMessageDispatch();
  useComponentDidUpdate(() => {
    setNameError(!name ? t('The_field_is_required', t('Name')) : '');
  }, [t, name]);
  useComponentDidUpdate(() => {
    setEmailError(email && !validateEmail(email) ? t('Validate_email_address') : null);
  }, [t, email]);
  useComponentDidUpdate(() => {
    !phone && setPhoneError(null);
  }, [phone]);
  const handleSave = useMutableCallback(async e => {
    e.preventDefault();
    let error = false;

    if (!name) {
      setNameError(t('The_field_is_required', 'name'));
      error = true;
    }

    if (email && !validateEmail(email)) {
      setEmailError(t('Validate_email_address'));
      error = true;
    }

    if (error) {
      return;
    }

    const payload = {
      name
    };
    payload.phone = phone;
    payload.email = email;
    payload.customFields = livechatData || {};
    payload.contactManager = username ? {
      username
    } : {};

    if (id) {
      payload._id = id;
      payload.token = token;
    } else {
      payload.token = createToken();
    }

    try {
      await saveContact(payload);
      dispatchToastMessage({
        type: 'success',
        message: t('Saved')
      });
      close();
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
  const formIsValid = (hasUnsavedChangesContact || hasUnsavedChangesCustomFields) && name && !emailError && !phoneError && customFieldsError.length === 0;

  if ([state].includes(AsyncStatePhase.LOADING)) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, {
    is: "form"
  }, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    error: nameError,
    flexGrow: 1,
    value: name,
    onChange: handleName
  })), /*#__PURE__*/React.createElement(Field.Error, null, nameError)), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Email')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    onBlur: checkEmailExists,
    error: emailError,
    flexGrow: 1,
    value: email,
    onChange: handleEmail
  })), /*#__PURE__*/React.createElement(Field.Error, null, t(emailError))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Phone')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    onBlur: checkPhoneExists,
    error: phoneError,
    flexGrow: 1,
    value: phone,
    onChange: handlePhone
  })), /*#__PURE__*/React.createElement(Field.Error, null, t(phoneError))), canViewCustomFields() && allCustomFields && /*#__PURE__*/React.createElement(CustomFieldsForm, {
    jsonCustomFields: jsonCustomField,
    customFieldsData: livechatData,
    setCustomFieldsData: handleLivechatData,
    setCustomFieldsError: setCustomFieldsError
  }), ContactManager && /*#__PURE__*/React.createElement(ContactManager, {
    value: username,
    handler: handleUsername
  })), /*#__PURE__*/React.createElement(VerticalBar.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true
  }, /*#__PURE__*/React.createElement(Button, {
    flexGrow: 1,
    onClick: close
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    mie: "none",
    flexGrow: 1,
    onClick: handleSave,
    disabled: !formIsValid,
    primary: true
  }, t('Save')))));
}

module.exportDefault(ContactNewEdit);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/contacts/contextualBar/61cf41c616b49284aaf585c3c9bf79fecc618fdc.map
