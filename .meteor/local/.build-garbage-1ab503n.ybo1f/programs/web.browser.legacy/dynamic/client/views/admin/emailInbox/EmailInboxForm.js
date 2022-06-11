function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/emailInbox/EmailInboxForm.js                                                                     //
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
var Accordion, Button, ButtonGroup, TextInput, TextAreaInput, Field, ToggleSwitch, FieldGroup, Box, Margins;
module.link("@rocket.chat/fuselage", {
  Accordion: function (v) {
    Accordion = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  TextAreaInput: function (v) {
    TextAreaInput = v;
  },
  Field: function (v) {
    Field = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  Box: function (v) {
    Box = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useCallback, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var validateEmail;
module.link("../../../../lib/emailValidator", {
  validateEmail: function (v) {
    validateEmail = v;
  }
}, 3);
var AutoCompleteDepartment;
module.link("../../../components/AutoCompleteDepartment", {
  "default": function (v) {
    AutoCompleteDepartment = v;
  }
}, 4);
var GenericModal;
module.link("../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 5);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 6);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 7);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 8);
var useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 9);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 10);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 11);
var useComponentDidUpdate;
module.link("../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate: function (v) {
    useComponentDidUpdate = v;
  }
}, 12);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 13);
var initialValues = {
  active: true,
  name: '',
  email: '',
  description: '',
  senderInfo: '',
  department: '',
  // SMTP
  smtpServer: '',
  smtpPort: 587,
  smtpUsername: '',
  smtpPassword: '',
  smtpSecure: false,
  // IMAP
  imapServer: '',
  imapPort: 993,
  imapUsername: '',
  imapPassword: '',
  imapSecure: false
};

var getInitialValues = function (data) {
  var _smtp$server, _smtp$port, _smtp$username, _smtp$password, _smtp$secure, _imap$server, _imap$port, _imap$username, _imap$password, _imap$secure;

  if (!data) {
    return initialValues;
  }

  var active = data.active,
      name = data.name,
      email = data.email,
      description = data.description,
      senderInfo = data.senderInfo,
      department = data.department,
      smtp = data.smtp,
      imap = data.imap;
  return {
    active: active !== null && active !== void 0 ? active : true,
    name: name !== null && name !== void 0 ? name : '',
    email: email !== null && email !== void 0 ? email : '',
    description: description !== null && description !== void 0 ? description : '',
    senderInfo: senderInfo !== null && senderInfo !== void 0 ? senderInfo : '',
    department: department !== null && department !== void 0 ? department : '',
    // SMTP
    smtpServer: (_smtp$server = smtp.server) !== null && _smtp$server !== void 0 ? _smtp$server : '',
    smtpPort: (_smtp$port = smtp.port) !== null && _smtp$port !== void 0 ? _smtp$port : 587,
    smtpUsername: (_smtp$username = smtp.username) !== null && _smtp$username !== void 0 ? _smtp$username : '',
    smtpPassword: (_smtp$password = smtp.password) !== null && _smtp$password !== void 0 ? _smtp$password : '',
    smtpSecure: (_smtp$secure = smtp.secure) !== null && _smtp$secure !== void 0 ? _smtp$secure : false,
    // IMAP
    imapServer: (_imap$server = imap.server) !== null && _imap$server !== void 0 ? _imap$server : '',
    imapPort: (_imap$port = imap.port) !== null && _imap$port !== void 0 ? _imap$port : 993,
    imapUsername: (_imap$username = imap.username) !== null && _imap$username !== void 0 ? _imap$username : '',
    imapPassword: (_imap$password = imap.password) !== null && _imap$password !== void 0 ? _imap$password : '',
    imapSecure: (_imap$secure = imap.secure) !== null && _imap$secure !== void 0 ? _imap$secure : false
  };
};

function EmailInboxForm(_ref) {
  var id = _ref.id,
      data = _ref.data;
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var setModal = useSetModal();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      emailError = _useState2[0],
      setEmailError = _useState2[1];

  var _useForm = useForm(getInitialValues(data)),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges;

  var handleActive = handlers.handleActive,
      handleName = handlers.handleName,
      handleEmail = handlers.handleEmail,
      handleDescription = handlers.handleDescription,
      handleSenderInfo = handlers.handleSenderInfo,
      handleDepartment = handlers.handleDepartment,
      handleSmtpServer = handlers.handleSmtpServer,
      handleSmtpPort = handlers.handleSmtpPort,
      handleSmtpUsername = handlers.handleSmtpUsername,
      handleSmtpPassword = handlers.handleSmtpPassword,
      handleSmtpSecure = handlers.handleSmtpSecure,
      handleImapServer = handlers.handleImapServer,
      handleImapPort = handlers.handleImapPort,
      handleImapUsername = handlers.handleImapUsername,
      handleImapPassword = handlers.handleImapPassword,
      handleImapSecure = handlers.handleImapSecure;
  var active = values.active,
      name = values.name,
      email = values.email,
      description = values.description,
      senderInfo = values.senderInfo,
      department = values.department,
      smtpServer = values.smtpServer,
      smtpPort = values.smtpPort,
      smtpUsername = values.smtpUsername,
      smtpPassword = values.smtpPassword,
      smtpSecure = values.smtpSecure,
      imapServer = values.imapServer,
      imapPort = values.imapPort,
      imapUsername = values.imapUsername,
      imapPassword = values.imapPassword,
      imapSecure = values.imapSecure;
  var router = useRoute('admin-email-inboxes');
  var close = useCallback(function () {
    return router.push({});
  }, [router]);
  var saveEmailInbox = useEndpoint('POST', 'email-inbox');
  var deleteAction = useEndpoint('DELETE', "email-inbox/" + id);
  var emailAlreadyExistsAction = useEndpoint('GET', "email-inbox.search?email=" + email);
  useComponentDidUpdate(function () {
    setEmailError(!validateEmail(email) ? t('Validate_email_address') : null);
  }, [t, email]);
  useComponentDidUpdate(function () {
    !email && setEmailError(null);
  }, [email]);
  var handleRemoveClick = useMutableCallback(function () {
    function _callee() {
      var result;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(deleteAction());

              case 2:
                result = _context.sent;

                if (result.success === true) {
                  close();
                }

              case 4:
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
  var handleDelete = useMutableCallback(function (e) {
    e.stopPropagation();

    var onDeleteManager = function () {
      function _callee2() {
        return _regeneratorRuntime.async(function () {
          function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _regeneratorRuntime.awrap(handleRemoveClick());

                case 3:
                  dispatchToastMessage({
                    type: 'success',
                    message: t('Removed')
                  });
                  _context2.next = 9;
                  break;

                case 6:
                  _context2.prev = 6;
                  _context2.t0 = _context2["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context2.t0
                  });

                case 9:
                  setModal();

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }

          return _callee2$;
        }(), null, null, [[0, 6]], Promise);
      }

      return _callee2;
    }();

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: onDeleteManager,
      onCancel: function () {
        return setModal();
      },
      confirmText: t('Delete')
    }, t('You_will_not_be_able_to_recover_email_inbox')));
  });
  var handleSave = useMutableCallback(function () {
    function _callee3() {
      var smtp, imap, departmentValue, payload;
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                smtp = {
                  server: smtpServer,
                  port: parseInt(smtpPort),
                  username: smtpUsername,
                  password: smtpPassword,
                  secure: smtpSecure
                };
                imap = {
                  server: imapServer,
                  port: parseInt(imapPort),
                  username: imapUsername,
                  password: imapPassword,
                  secure: imapSecure
                };
                departmentValue = department.value;
                payload = {
                  active: active,
                  name: name,
                  email: email,
                  description: description,
                  senderInfo: senderInfo,
                  department: departmentValue,
                  smtp: smtp,
                  imap: imap
                };

                if (id) {
                  payload._id = id;
                }

                _context3.prev = 5;
                _context3.next = 8;
                return _regeneratorRuntime.awrap(saveEmailInbox(payload));

              case 8:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Saved')
                });
                close();
                _context3.next = 15;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](5);
                dispatchToastMessage({
                  type: 'error',
                  message: _context3.t0
                });

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, [[5, 12]], Promise);
    }

    return _callee3;
  }());
  var checkEmailExists = useMutableCallback(function () {
    function _callee4() {
      var _await$emailAlreadyEx, emailInbox;

      return _regeneratorRuntime.async(function () {
        function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(!email && !validateEmail(email))) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                _context4.next = 4;
                return _regeneratorRuntime.awrap(emailAlreadyExistsAction());

              case 4:
                _await$emailAlreadyEx = _context4.sent;
                emailInbox = _await$emailAlreadyEx.emailInbox;

                if (!(!emailInbox || id && emailInbox._id === id)) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return");

              case 8:
                setEmailError(t('Email_already_exists'));

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }

        return _callee4$;
      }(), null, null, null, Promise);
    }

    return _callee4;
  }());
  var canSave = hasUnsavedChanges && name && email && validateEmail(email) && !emailError && smtpServer && smtpPort && smtpUsername && smtpPassword && imapServer && imapPort && imapUsername && imapPassword;
  return /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    maxWidth: "x600",
    w: "full",
    alignSelf: "center"
  }, /*#__PURE__*/React.createElement(Accordion, null, /*#__PURE__*/React.createElement(Accordion.Item, {
    defaultExpanded: true,
    title: t('Inbox_Info')
  }, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    display: "flex",
    justifyContent: "space-between",
    w: "full"
  }, t('Active'), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: active,
    onChange: handleActive
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: name,
    onChange: handleName
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Email'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    onBlur: checkEmailExists,
    error: emailError,
    value: email,
    onChange: handleEmail
  })), /*#__PURE__*/React.createElement(Field.Error, null, t(emailError))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Description')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    value: description,
    rows: 4,
    onChange: handleDescription
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Sender_Info')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: senderInfo,
    onChange: handleSenderInfo,
    placeholder: t('Optional')
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Will_Appear_In_From'))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Department')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(AutoCompleteDepartment, {
    value: department,
    onChange: handleDepartment
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Only_Members_Selected_Department_Can_View_Channel'))))), /*#__PURE__*/React.createElement(Accordion.Item, {
    title: t('Configure_Outgoing_Mail_SMTP')
  }, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Server'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: smtpServer,
    onChange: handleSmtpServer
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Port'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    type: "number",
    value: smtpPort,
    onChange: handleSmtpPort
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Username'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: smtpUsername,
    onChange: handleSmtpUsername
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Password'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    type: "password",
    value: smtpPassword,
    onChange: handleSmtpPassword
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    display: "flex",
    justifyContent: "space-between",
    w: "full"
  }, t('Connect_SSL_TLS'), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: smtpSecure,
    onChange: handleSmtpSecure
  }))))), /*#__PURE__*/React.createElement(Accordion.Item, {
    title: t('Configure_Incoming_Mail_IMAP')
  }, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Server'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: imapServer,
    onChange: handleImapServer
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Port'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    type: "number",
    value: imapPort,
    onChange: handleImapPort
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Username'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: imapUsername,
    onChange: handleImapUsername
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Password'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    type: "password",
    value: imapPassword,
    onChange: handleImapPassword
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    display: "flex",
    justifyContent: "space-between",
    w: "full"
  }, t('Connect_SSL_TLS'), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: imapSecure,
    onChange: handleImapSecure
  }))))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    w: "full"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: close
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    disabled: !canSave,
    primary: true,
    onClick: handleSave
  }, t('Save')))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Margins, {
    blockStart: "x16"
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    w: "full"
  }, id && /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    onClick: handleDelete
  }, t('Delete')))))))));
}

module.exportDefault(EmailInboxForm);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/emailInbox/623d4f2f6752b358bfc54ba2360d59bcff74b49f.map
