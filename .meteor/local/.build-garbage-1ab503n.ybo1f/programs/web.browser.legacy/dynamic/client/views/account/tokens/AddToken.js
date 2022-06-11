function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/tokens/AddToken.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onDidAddToken"];

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

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var Box, TextInput, Button, Field, FieldGroup, Margins, CheckBox;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Button: function (v) {
    Button = v;
  },
  Field: function (v) {
    Field = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  CheckBox: function (v) {
    CheckBox = v;
  }
}, 0);
var useUniqueId;
module.link("@rocket.chat/fuselage-hooks", {
  useUniqueId: function (v) {
    useUniqueId = v;
  }
}, 1);
var React, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 2);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 3);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 4);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var useUserId;
module.link("../../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  }
}, 7);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 8);
var InfoModal;
module.link("./InfoModal", {
  "default": function (v) {
    InfoModal = v;
  }
}, 9);
var initialValues = {
  name: '',
  bypassTwoFactor: false
};

var AddToken = function (_ref) {
  var onDidAddToken = _ref.onDidAddToken,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var createTokenFn = useMethod('personalAccessTokens:generateToken');
  var dispatchToastMessage = useToastMessageDispatch();
  var setModal = useSetModal();
  var userId = useUserId();

  var _useForm = useForm(initialValues),
      values = _useForm.values,
      handlers = _useForm.handlers,
      reset = _useForm.reset;

  var name = values.name,
      bypassTwoFactor = values.bypassTwoFactor;
  var handleName = handlers.handleName,
      handleBypassTwoFactor = handlers.handleBypassTwoFactor;
  var closeModal = useCallback(function () {
    return setModal(null);
  }, [setModal]);
  var handleAdd = useCallback(function () {
    function _callee() {
      var token;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(createTokenFn({
                  tokenName: name,
                  bypassTwoFactor: bypassTwoFactor
                }));

              case 3:
                token = _context.sent;
                setModal( /*#__PURE__*/React.createElement(InfoModal, {
                  title: t('API_Personal_Access_Token_Generated'),
                  content: /*#__PURE__*/React.createElement(Box, {
                    dangerouslySetInnerHTML: {
                      __html: t('API_Personal_Access_Token_Generated_Text_Token_s_UserId_s', {
                        token: token,
                        userId: userId
                      })
                    }
                  }),
                  confirmText: t('ok'),
                  onConfirm: closeModal
                }));
                reset();
                onDidAddToken();
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 9]], Promise);
    }

    return _callee;
  }(), [bypassTwoFactor, closeModal, createTokenFn, dispatchToastMessage, name, onDidAddToken, reset, setModal, t, userId]);
  var bypassTwoFactorCheckboxId = useUniqueId();
  return /*#__PURE__*/React.createElement(FieldGroup, _extends({
    is: "form",
    marginBlock: "x8"
  }, props), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Margins, {
    inlineEnd: "x4"
  }, /*#__PURE__*/React.createElement(TextInput, {
    value: name,
    onChange: handleName,
    placeholder: t('API_Add_Personal_Access_Token')
  })), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: name.length === 0,
    onClick: handleAdd
  }, t('Add'))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    id: bypassTwoFactorCheckboxId,
    checked: bypassTwoFactor,
    onChange: handleBypassTwoFactor
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: bypassTwoFactorCheckboxId
  }, t('Ignore'), " ", t('Two Factor Authentication')))));
};

module.exportDefault(AddToken);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/tokens/5fd4e35008e2e2c5b14edac6f86460779903b6fa.map
