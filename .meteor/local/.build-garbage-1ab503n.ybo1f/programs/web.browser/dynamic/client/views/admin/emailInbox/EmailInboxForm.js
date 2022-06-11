function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/emailInbox/EmailInboxForm.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Accordion, Button, ButtonGroup, TextInput, TextAreaInput, Field, ToggleSwitch, FieldGroup, Box, Margins;
module.link("@rocket.chat/fuselage", {
  Accordion(v) {
    Accordion = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  TextAreaInput(v) {
    TextAreaInput = v;
  },

  Field(v) {
    Field = v;
  },

  ToggleSwitch(v) {
    ToggleSwitch = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  Box(v) {
    Box = v;
  },

  Margins(v) {
    Margins = v;
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
let validateEmail;
module.link("../../../../lib/emailValidator", {
  validateEmail(v) {
    validateEmail = v;
  }

}, 3);
let AutoCompleteDepartment;
module.link("../../../components/AutoCompleteDepartment", {
  default(v) {
    AutoCompleteDepartment = v;
  }

}, 4);
let GenericModal;
module.link("../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 5);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 6);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 7);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 8);
let useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 9);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 10);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 11);
let useComponentDidUpdate;
module.link("../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate(v) {
    useComponentDidUpdate = v;
  }

}, 12);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 13);
const initialValues = {
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

const getInitialValues = data => {
  var _smtp$server, _smtp$port, _smtp$username, _smtp$password, _smtp$secure, _imap$server, _imap$port, _imap$username, _imap$password, _imap$secure;

  if (!data) {
    return initialValues;
  }

  const {
    active,
    name,
    email,
    description,
    senderInfo,
    department,
    smtp,
    imap
  } = data;
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
  let {
    id,
    data
  } = _ref;
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const setModal = useSetModal();
  const [emailError, setEmailError] = useState();
  const {
    values,
    handlers,
    hasUnsavedChanges
  } = useForm(getInitialValues(data));
  const {
    handleActive,
    handleName,
    handleEmail,
    handleDescription,
    handleSenderInfo,
    handleDepartment,
    // SMTP
    handleSmtpServer,
    handleSmtpPort,
    handleSmtpUsername,
    handleSmtpPassword,
    handleSmtpSecure,
    // IMAP
    handleImapServer,
    handleImapPort,
    handleImapUsername,
    handleImapPassword,
    handleImapSecure
  } = handlers;
  const {
    active,
    name,
    email,
    description,
    senderInfo,
    department,
    // SMTP
    smtpServer,
    smtpPort,
    smtpUsername,
    smtpPassword,
    smtpSecure,
    // IMAP
    imapServer,
    imapPort,
    imapUsername,
    imapPassword,
    imapSecure
  } = values;
  const router = useRoute('admin-email-inboxes');
  const close = useCallback(() => router.push({}), [router]);
  const saveEmailInbox = useEndpoint('POST', 'email-inbox');
  const deleteAction = useEndpoint('DELETE', "email-inbox/".concat(id));
  const emailAlreadyExistsAction = useEndpoint('GET', "email-inbox.search?email=".concat(email));
  useComponentDidUpdate(() => {
    setEmailError(!validateEmail(email) ? t('Validate_email_address') : null);
  }, [t, email]);
  useComponentDidUpdate(() => {
    !email && setEmailError(null);
  }, [email]);
  const handleRemoveClick = useMutableCallback(async () => {
    const result = await deleteAction();

    if (result.success === true) {
      close();
    }
  });
  const handleDelete = useMutableCallback(e => {
    e.stopPropagation();

    const onDeleteManager = async () => {
      try {
        await handleRemoveClick();
        dispatchToastMessage({
          type: 'success',
          message: t('Removed')
        });
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }

      setModal();
    };

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: onDeleteManager,
      onCancel: () => setModal(),
      confirmText: t('Delete')
    }, t('You_will_not_be_able_to_recover_email_inbox')));
  });
  const handleSave = useMutableCallback(async () => {
    const smtp = {
      server: smtpServer,
      port: parseInt(smtpPort),
      username: smtpUsername,
      password: smtpPassword,
      secure: smtpSecure
    };
    const imap = {
      server: imapServer,
      port: parseInt(imapPort),
      username: imapUsername,
      password: imapPassword,
      secure: imapSecure
    };
    const departmentValue = department.value;
    const payload = {
      active,
      name,
      email,
      description,
      senderInfo,
      department: departmentValue,
      smtp,
      imap
    };

    if (id) {
      payload._id = id;
    }

    try {
      await saveEmailInbox(payload);
      dispatchToastMessage({
        type: 'success',
        message: t('Saved')
      });
      close();
    } catch (e) {
      dispatchToastMessage({
        type: 'error',
        message: e
      });
    }
  });
  const checkEmailExists = useMutableCallback(async () => {
    if (!email && !validateEmail(email)) {
      return;
    }

    const {
      emailInbox
    } = await emailAlreadyExistsAction();

    if (!emailInbox || id && emailInbox._id === id) {
      return;
    }

    setEmailError(t('Email_already_exists'));
  });
  const canSave = hasUnsavedChanges && name && email && validateEmail(email) && !emailError && smtpServer && smtpPort && smtpUsername && smtpPassword && imapServer && imapPort && imapUsername && imapPassword;
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
//# sourceMappingURL=/dynamic/client/views/admin/emailInbox/e87f7d6c92c46cb923246e8569f7fb0da306d86d.map
