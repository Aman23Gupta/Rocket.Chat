function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/contacts/contextualBar/ContactNewEdit.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var Field, TextInput, ButtonGroup, Button;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useState, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var useSubscription;
module.link("use-subscription", {
  useSubscription: function (v) {
    useSubscription = v;
  }
}, 3);
var hasAtLeastOnePermission;
module.link("../../../../../../app/authorization/client", {
  hasAtLeastOnePermission: function (v) {
    hasAtLeastOnePermission = v;
  }
}, 4);
var validateEmail;
module.link("../../../../../../lib/emailValidator", {
  validateEmail: function (v) {
    validateEmail = v;
  }
}, 5);
var CustomFieldsForm;
module.link("../../../../../components/CustomFieldsForm", {
  "default": function (v) {
    CustomFieldsForm = v;
  }
}, 6);
var VerticalBar;
module.link("../../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 7);
var useEndpoint;
module.link("../../../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 8);
var useToastMessageDispatch;
module.link("../../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 9);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 10);
var AsyncStatePhase;
module.link("../../../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 11);
var useComponentDidUpdate;
module.link("../../../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate: function (v) {
    useComponentDidUpdate = v;
  }
}, 12);
var useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 13);
var useForm;
module.link("../../../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 14);
var createToken;
module.link("../../../../../lib/utils/createToken", {
  createToken: function (v) {
    createToken = v;
  }
}, 15);
var formsSubscription;
module.link("../../../additionalForms", {
  formsSubscription: function (v) {
    formsSubscription = v;
  }
}, 16);
var FormSkeleton;
module.link("../../Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 17);
var initialValues = {
  token: '',
  name: '',
  email: '',
  phone: '',
  username: ''
};

var getInitialValues = function (data) {
  var _contactManager$usern;

  if (!data) {
    return initialValues;
  }

  var _data$contact = data.contact,
      name = _data$contact.name,
      token = _data$contact.token,
      phone = _data$contact.phone,
      visitorEmails = _data$contact.visitorEmails,
      livechatData = _data$contact.livechatData,
      contactManager = _data$contact.contactManager;
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
  var id = _ref.id,
      data = _ref.data,
      close = _ref.close;
  var t = useTranslation();

  var canViewCustomFields = function () {
    return hasAtLeastOnePermission(['view-livechat-room-customfields', 'edit-livechat-room-customfields']);
  };

  var _useForm = useForm(getInitialValues(data)),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChangesContact = _useForm.hasUnsavedChanges;

  var eeForms = useSubscription(formsSubscription);
  var _eeForms$useContactMa = eeForms.useContactManager,
      useContactManager = _eeForms$useContactMa === void 0 ? function () {} : _eeForms$useContactMa;
  var ContactManager = useContactManager();
  var handleName = handlers.handleName,
      handleEmail = handlers.handleEmail,
      handlePhone = handlers.handlePhone,
      handleUsername = handlers.handleUsername;
  var token = values.token,
      name = values.name,
      email = values.email,
      phone = values.phone,
      username = values.username;

  var _useForm2 = useForm({
    livechatData: values.livechatData
  }),
      valueCustom = _useForm2.values,
      handleValueCustom = _useForm2.handlers,
      hasUnsavedChangesCustomFields = _useForm2.hasUnsavedChanges;

  var handleLivechatData = handleValueCustom.handleLivechatData;
  var livechatData = valueCustom.livechatData;

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      nameError = _useState2[0],
      setNameError = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      emailError = _useState4[0],
      setEmailError = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      phoneError = _useState6[0],
      setPhoneError = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      customFieldsError = _useState8[0],
      setCustomFieldsError = _useState8[1];

  var _useEndpointData = useEndpointData('livechat/custom-fields'),
      allCustomFields = _useEndpointData.value,
      state = _useEndpointData.phase;

  var jsonConverterToValidFormat = function (customFields) {
    var jsonObj = {};
    customFields.forEach(function (_ref2) {
      var _id = _ref2._id,
          label = _ref2.label,
          visibility = _ref2.visibility,
          options = _ref2.options,
          scope = _ref2.scope,
          defaultValue = _ref2.defaultValue,
          required = _ref2.required;
      visibility === 'visible' & scope === 'visitor' && (jsonObj[_id] = {
        label: label,
        type: options ? 'select' : 'text',
        required: required,
        defaultValue: defaultValue,
        options: options && options.split(',').map(function (item) {
          return item.trim();
        })
      });
    });
    return jsonObj;
  };

  var jsonCustomField = useMemo(function () {
    return allCustomFields && allCustomFields.customFields ? jsonConverterToValidFormat(allCustomFields.customFields) : {};
  }, [allCustomFields]);
  var saveContact = useEndpoint('POST', 'omnichannel/contact');
  var emailAlreadyExistsAction = useEndpoint('GET', "omnichannel/contact.search?email=" + email);
  var phoneAlreadyExistsAction = useEndpoint('GET', "omnichannel/contact.search?phone=" + phone);
  var checkEmailExists = useMutableCallback(function () {
    function _callee() {
      var _await$emailAlreadyEx, contact;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (validateEmail(email)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return _regeneratorRuntime.awrap(emailAlreadyExistsAction());

              case 4:
                _await$emailAlreadyEx = _context.sent;
                contact = _await$emailAlreadyEx.contact;

                if (!(!contact || id && contact._id === id)) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", setEmailError(null));

              case 8:
                setEmailError(t('Email_already_exists'));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }());
  var checkPhoneExists = useMutableCallback(function () {
    function _callee2() {
      var _await$phoneAlreadyEx, contact;

      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (phone) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.next = 4;
                return _regeneratorRuntime.awrap(phoneAlreadyExistsAction());

              case 4:
                _await$phoneAlreadyEx = _context2.sent;
                contact = _await$phoneAlreadyEx.contact;

                if (!(!contact || id && contact._id === id)) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", setPhoneError(null));

              case 8:
                setPhoneError(t('Phone_already_exists'));

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, null, Promise);
    }

    return _callee2;
  }());
  var dispatchToastMessage = useToastMessageDispatch();
  useComponentDidUpdate(function () {
    setNameError(!name ? t('The_field_is_required', t('Name')) : '');
  }, [t, name]);
  useComponentDidUpdate(function () {
    setEmailError(email && !validateEmail(email) ? t('Validate_email_address') : null);
  }, [t, email]);
  useComponentDidUpdate(function () {
    !phone && setPhoneError(null);
  }, [phone]);
  var handleSave = useMutableCallback(function () {
    function _callee3(e) {
      var error, payload;
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                e.preventDefault();
                error = false;

                if (!name) {
                  setNameError(t('The_field_is_required', 'name'));
                  error = true;
                }

                if (email && !validateEmail(email)) {
                  setEmailError(t('Validate_email_address'));
                  error = true;
                }

                if (!error) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return");

              case 6:
                payload = {
                  name: name
                };
                payload.phone = phone;
                payload.email = email;
                payload.customFields = livechatData || {};
                payload.contactManager = username ? {
                  username: username
                } : {};

                if (id) {
                  payload._id = id;
                  payload.token = token;
                } else {
                  payload.token = createToken();
                }

                _context3.prev = 12;
                _context3.next = 15;
                return _regeneratorRuntime.awrap(saveContact(payload));

              case 15:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Saved')
                });
                close();
                _context3.next = 22;
                break;

              case 19:
                _context3.prev = 19;
                _context3.t0 = _context3["catch"](12);
                dispatchToastMessage({
                  type: 'error',
                  message: _context3.t0
                });

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, [[12, 19]], Promise);
    }

    return _callee3;
  }());
  var formIsValid = (hasUnsavedChangesContact || hasUnsavedChangesCustomFields) && name && !emailError && !phoneError && customFieldsError.length === 0;

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
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/contacts/contextualBar/fd5435239a128be2b84010c7ce7da05bbe895f7d.map
