function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/ActionConfirmModal.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Box, PasswordInput, TextInput, FieldGroup, Field;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  PasswordInput: function (v) {
    PasswordInput = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  Field: function (v) {
    Field = v;
  }
}, 0);
var React, useState, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var GenericModal;
module.link("../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 2);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var ActionConfirmModal = function (_ref) {
  var isPassword = _ref.isPassword,
      onConfirm = _ref.onConfirm,
      onCancel = _ref.onCancel;
  var t = useTranslation();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      inputText = _useState2[0],
      setInputText = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      inputError = _useState4[0],
      setInputError = _useState4[1];

  var handleChange = useCallback(function (e) {
    e.target.value !== '' && setInputError(undefined);
    setInputText(e.currentTarget.value);
  }, [setInputText]);
  var handleSave = useCallback(function () {
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
//# sourceMappingURL=/dynamic/client/views/account/e7ef7143303d71f7d73215343c6374a86d36cc7f.map
