function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/security/TwoFactorTOTP.js                                                                      //
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
var Box, Button, TextInput, Margins;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely: function (v) {
    useSafely = v;
  }
}, 1);
var React, useState, useCallback, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 2);
var qrcode;
module.link("yaqrcode", {
  "default": function (v) {
    qrcode = v;
  }
}, 3);
var TextCopy;
module.link("../../../components/TextCopy", {
  "default": function (v) {
    TextCopy = v;
  }
}, 4);
var TwoFactorTotpModal;
module.link("../../../components/TwoFactorModal/TwoFactorTotpModal", {
  "default": function (v) {
    TwoFactorTotpModal = v;
  }
}, 5);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 6);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 7);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 8);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 9);
var useUser;
module.link("../../../contexts/UserContext", {
  useUser: function (v) {
    useUser = v;
  }
}, 10);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 11);
var BackupCodesModal;
module.link("./BackupCodesModal", {
  "default": function (v) {
    BackupCodesModal = v;
  }
}, 12);

var TwoFactorTOTP = function (props) {
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var user = useUser();
  var setModal = useSetModal();
  var enableTotpFn = useMethod('2fa:enable');
  var disableTotpFn = useMethod('2fa:disable');
  var verifyCodeFn = useMethod('2fa:validateTempToken');
  var checkCodesRemainingFn = useMethod('2fa:checkCodesRemaining');
  var regenerateCodesFn = useMethod('2fa:regenerateCodes');

  var _useSafely = useSafely(useState(false)),
      _useSafely2 = _slicedToArray(_useSafely, 2),
      registeringTotp = _useSafely2[0],
      setRegisteringTotp = _useSafely2[1];

  var _useSafely3 = useSafely(useState()),
      _useSafely4 = _slicedToArray(_useSafely3, 2),
      qrCode = _useSafely4[0],
      setQrCode = _useSafely4[1];

  var _useSafely5 = useSafely(useState()),
      _useSafely6 = _slicedToArray(_useSafely5, 2),
      totpSecret = _useSafely6[0],
      setTotpSecret = _useSafely6[1];

  var _useSafely7 = useSafely(useState()),
      _useSafely8 = _slicedToArray(_useSafely7, 2),
      codesRemaining = _useSafely8[0],
      setCodesRemaining = _useSafely8[1];

  var _useForm = useForm({
    authCode: ''
  }),
      values = _useForm.values,
      handlers = _useForm.handlers;

  var authCode = values.authCode;
  var handleAuthCode = handlers.handleAuthCode;
  var totpEnabled = user && user.services && user.services.totp && user.services.totp.enabled;
  var closeModal = useCallback(function () {
    return setModal(null);
  }, [setModal]);
  useEffect(function () {
    var updateCodesRemaining = function () {
      function _callee() {
        var result;
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (totpEnabled) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", false);

                case 2:
                  _context.next = 4;
                  return _regeneratorRuntime.awrap(checkCodesRemainingFn());

                case 4:
                  result = _context.sent;
                  setCodesRemaining(result.remaining);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, null, Promise);
      }

      return _callee;
    }();

    updateCodesRemaining();
  }, [checkCodesRemainingFn, setCodesRemaining, totpEnabled]);
  var handleEnableTotp = useCallback(function () {
    function _callee2() {
      var result;
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _regeneratorRuntime.awrap(enableTotpFn());

              case 3:
                result = _context2.sent;
                setTotpSecret(result.secret);
                setQrCode(qrcode(result.url, {
                  size: 200
                }));
                setRegisteringTotp(true);
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context2.t0
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, [[0, 9]], Promise);
    }

    return _callee2;
  }(), [dispatchToastMessage, enableTotpFn, setQrCode, setRegisteringTotp, setTotpSecret]);
  var handleDisableTotp = useCallback(function () {
    function _callee4() {
      var onDisable;
      return _regeneratorRuntime.async(function () {
        function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                onDisable = function () {
                  function _callee3(authCode) {
                    var result;
                    return _regeneratorRuntime.async(function () {
                      function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              _context3.prev = 0;
                              _context3.next = 3;
                              return _regeneratorRuntime.awrap(disableTotpFn(authCode));

                            case 3:
                              result = _context3.sent;

                              if (result) {
                                _context3.next = 6;
                                break;
                              }

                              return _context3.abrupt("return", dispatchToastMessage({
                                type: 'error',
                                message: t('Invalid_two_factor_code')
                              }));

                            case 6:
                              dispatchToastMessage({
                                type: 'success',
                                message: t('Two-factor_authentication_disabled')
                              });
                              _context3.next = 12;
                              break;

                            case 9:
                              _context3.prev = 9;
                              _context3.t0 = _context3["catch"](0);
                              dispatchToastMessage({
                                type: 'error',
                                message: _context3.t0
                              });

                            case 12:
                              closeModal();

                            case 13:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }

                      return _callee3$;
                    }(), null, null, [[0, 9]], Promise);
                  }

                  return _callee3;
                }();

                setModal( /*#__PURE__*/React.createElement(TwoFactorTotpModal, {
                  onConfirm: onDisable,
                  onClose: closeModal
                }));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }

        return _callee4$;
      }(), null, null, null, Promise);
    }

    return _callee4;
  }(), [closeModal, disableTotpFn, dispatchToastMessage, setModal, t]);
  var handleVerifyCode = useCallback(function () {
    function _callee5() {
      var result;
      return _regeneratorRuntime.async(function () {
        function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _regeneratorRuntime.awrap(verifyCodeFn(authCode));

              case 3:
                result = _context5.sent;

                if (result) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", dispatchToastMessage({
                  type: 'error',
                  message: t('Invalid_two_factor_code')
                }));

              case 6:
                setModal( /*#__PURE__*/React.createElement(BackupCodesModal, {
                  codes: result.codes,
                  onClose: closeModal
                }));
                _context5.next = 12;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context5.t0
                });

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }

        return _callee5$;
      }(), null, null, [[0, 9]], Promise);
    }

    return _callee5;
  }(), [authCode, closeModal, dispatchToastMessage, setModal, t, verifyCodeFn]);
  var handleRegenerateCodes = useCallback(function () {
    var onRegenerate = function () {
      function _callee6(authCode) {
        var result;
        return _regeneratorRuntime.async(function () {
          function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.prev = 0;
                  _context6.next = 3;
                  return _regeneratorRuntime.awrap(regenerateCodesFn(authCode));

                case 3:
                  result = _context6.sent;

                  if (result) {
                    _context6.next = 6;
                    break;
                  }

                  return _context6.abrupt("return", dispatchToastMessage({
                    type: 'error',
                    message: t('Invalid_two_factor_code')
                  }));

                case 6:
                  setModal( /*#__PURE__*/React.createElement(BackupCodesModal, {
                    codes: result.codes,
                    onClose: closeModal
                  }));
                  _context6.next = 12;
                  break;

                case 9:
                  _context6.prev = 9;
                  _context6.t0 = _context6["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context6.t0
                  });

                case 12:
                case "end":
                  return _context6.stop();
              }
            }
          }

          return _callee6$;
        }(), null, null, [[0, 9]], Promise);
      }

      return _callee6;
    }();

    setModal( /*#__PURE__*/React.createElement(TwoFactorTotpModal, {
      onConfirm: onRegenerate,
      onClose: closeModal
    }));
  }, [closeModal, dispatchToastMessage, regenerateCodesFn, setModal, t]);
  return /*#__PURE__*/React.createElement(Box, _extends({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  }, props), /*#__PURE__*/React.createElement(Margins, {
    blockEnd: "x8"
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4"
  }, t('Two-factor_authentication')), !totpEnabled && !registeringTotp && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, null, t('Two-factor_authentication_is_currently_disabled')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleEnableTotp
  }, t('Enable_two-factor_authentication'))), !totpEnabled && registeringTotp && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, null, t('Scan_QR_code')), /*#__PURE__*/React.createElement(Box, null, t('Scan_QR_code_alternative_s')), /*#__PURE__*/React.createElement(TextCopy, {
    text: totpSecret
  }), /*#__PURE__*/React.createElement(Box, {
    is: "img",
    size: "x200",
    src: qrCode,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    w: "full"
  }, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: t('Enter_authentication_code'),
    value: authCode,
    onChange: handleAuthCode
  }), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleVerifyCode
  }, t('Verify')))), totpEnabled && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    onClick: handleDisableTotp
  }, t('Disable_two-factor_authentication')), /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2m",
    mbs: "x8"
  }, t('Backup_codes')), /*#__PURE__*/React.createElement(Box, null, t('You_have_n_codes_remaining', {
    number: codesRemaining
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: handleRegenerateCodes
  }, t('Regenerate_codes')))));
};

module.exportDefault(TwoFactorTOTP);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/security/de0dfd5a513af63a8fadd06880f656281c74a502.map
