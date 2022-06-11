function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/webdav/AddWebdavAccountModal.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Modal, Field, FieldGroup, TextInput, PasswordInput, ButtonGroup, Button;
module.link("@rocket.chat/fuselage", {
  Modal(v) {
    Modal = v;
  },

  Field(v) {
    Field = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  PasswordInput(v) {
    PasswordInput = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  }

}, 0);
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let useForm;
module.link("react-hook-form", {
  useForm(v) {
    useForm = v;
  }

}, 2);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 3);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);

const AddWebdavAccountModal = _ref => {
  let {
    onClose,
    onConfirm
  } = _ref;
  const handleAddWebdavAccount = useMethod('addWebdavAccount');
  const dispatchToastMessage = useToastMessageDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm();
  const t = useTranslation();

  const onSubmit = async data => {
    setIsLoading(true);

    try {
      await handleAddWebdavAccount(data);
      return dispatchToastMessage({
        type: 'success',
        message: t('webdav-account-saved')
      });
    } catch (error) {
      console.error(error);
      return dispatchToastMessage({
        type: 'error',
        message: error
      });
    } finally {
      onConfirm();
      setIsLoading(false);
    }
  };

  return /*#__PURE__*/React.createElement(Modal, {
    is: "form",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, t('Webdav_add_new_account')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name_optional')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, _extends({
    placeholder: t('Name_optional')
  }, register('name'))))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Webdav_Server_URL')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, _extends({
    placeholder: t('Webdav_Server_URL')
  }, register('serverURL', {
    required: true
  })))), errors.serverURL && /*#__PURE__*/React.createElement(Field.Error, null, t('error-the-field-is-required', {
    field: t('Webdav_Server_URL')
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Username')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, _extends({
    placeholder: t('Username')
  }, register('username', {
    required: true
  })))), errors.username && /*#__PURE__*/React.createElement(Field.Error, null, t('error-the-field-is-required', {
    field: t('Username')
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Password')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(PasswordInput, _extends({
    placeholder: t('Password')
  }, register('password', {
    required: true
  })))), errors.password && /*#__PURE__*/React.createElement(Field.Error, null, t('error-the-field-is-required', {
    field: t('Password')
  }))))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    ghost: true,
    onClick: onClose
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    type: "submit",
    disabled: isLoading
  }, isLoading ? t('Please_wait') : t('Webdav_add_new_account')))));
};

module.exportDefault(AddWebdavAccountModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/webdav/f5f99ad07266c7acd12c49f903a60920111cae53.map
