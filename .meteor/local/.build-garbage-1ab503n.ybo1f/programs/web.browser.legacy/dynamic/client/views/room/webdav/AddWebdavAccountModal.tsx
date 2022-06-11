function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/webdav/AddWebdavAccountModal.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var Modal, Field, FieldGroup, TextInput, PasswordInput, ButtonGroup, Button;
module.link("@rocket.chat/fuselage", {
  Modal: function (v) {
    Modal = v;
  },
  Field: function (v) {
    Field = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  PasswordInput: function (v) {
    PasswordInput = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 0);
var React, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var useForm;
module.link("react-hook-form", {
  useForm: function (v) {
    useForm = v;
  }
}, 2);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 3);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);

var AddWebdavAccountModal = function (_ref) {
  var onClose = _ref.onClose,
      onConfirm = _ref.onConfirm;
  var handleAddWebdavAccount = useMethod('addWebdavAccount');
  var dispatchToastMessage = useToastMessageDispatch();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useForm = useForm(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors;

  var t = useTranslation();

  var onSubmit = function () {
    function _callee(data) {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setIsLoading(true);
                _context.prev = 1;
                _context.next = 4;
                return _regeneratorRuntime.awrap(handleAddWebdavAccount(data));

              case 4:
                return _context.abrupt("return", dispatchToastMessage({
                  type: 'success',
                  message: t('webdav-account-saved')
                }));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);
                return _context.abrupt("return", dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                }));

              case 11:
                _context.prev = 11;
                onConfirm();
                setIsLoading(false);
                return _context.finish(11);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[1, 7, 11, 15]], Promise);
    }

    return _callee;
  }();

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
//# sourceMappingURL=/dynamic/client/views/room/webdav/2a8614245c88cb69340aa645c985b1ec4eb1125a.map
