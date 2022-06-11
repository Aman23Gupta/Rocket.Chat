function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/ActionConfirmModal.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, PasswordInput, TextInput, FieldGroup, Field;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  PasswordInput(v) {
    PasswordInput = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  Field(v) {
    Field = v;
  }

}, 0);
let React, useState, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let GenericModal;
module.link("../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 2);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const ActionConfirmModal = _ref => {
  let {
    isPassword,
    onConfirm,
    onCancel
  } = _ref;
  const t = useTranslation();
  const [inputText, setInputText] = useState('');
  const [inputError, setInputError] = useState();
  const handleChange = useCallback(e => {
    e.target.value !== '' && setInputError(undefined);
    setInputText(e.currentTarget.value);
  }, [setInputText]);
  const handleSave = useCallback(() => {
    if (inputText === '') {
      setInputError(t('Invalid_field'));
      return;
    }

    onConfirm(inputText);
    onCancel();
  }, [inputText, onConfirm, onCancel, t]);
  return /*#__PURE__*/React.createElement(GenericModal, {
    onClose: onCancel,
    onConfirm: handleSave,
    onCancel: onCancel,
    variant: "danger",
    title: t('Are_you_sure_you_want_to_delete_your_account'),
    confirmText: t('Delete')
  }, /*#__PURE__*/React.createElement(Box, {
    mb: "x8"
  }, isPassword ? t('For_your_security_you_must_enter_your_current_password_to_continue') : t('If_you_are_sure_type_in_your_username')), /*#__PURE__*/React.createElement(FieldGroup, {
    w: "full"
  }, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, isPassword && /*#__PURE__*/React.createElement(PasswordInput, {
    value: inputText,
    onChange: handleChange
  }), !isPassword && /*#__PURE__*/React.createElement(TextInput, {
    value: inputText,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement(Field.Error, null, inputError))));
};

module.exportDefault(ActionConfirmModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/3617ab329fd7bcf0f6846e7cfc059d0797e4b3aa.map
