function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/security/TwoFactorTOTP.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Box, Button, TextInput, Margins;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely(v) {
    useSafely = v;
  }

}, 1);
let React, useState, useCallback, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 2);
let qrcode;
module.link("yaqrcode", {
  default(v) {
    qrcode = v;
  }

}, 3);
let TextCopy;
module.link("../../../components/TextCopy", {
  default(v) {
    TextCopy = v;
  }

}, 4);
let TwoFactorTotpModal;
module.link("../../../components/TwoFactorModal/TwoFactorTotpModal", {
  default(v) {
    TwoFactorTotpModal = v;
  }

}, 5);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 6);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 7);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 8);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 9);
let useUser;
module.link("../../../contexts/UserContext", {
  useUser(v) {
    useUser = v;
  }

}, 10);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 11);
let BackupCodesModal;
module.link("./BackupCodesModal", {
  default(v) {
    BackupCodesModal = v;
  }

}, 12);

const TwoFactorTOTP = props => {
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const user = useUser();
  const setModal = useSetModal();
  const enableTotpFn = useMethod('2fa:enable');
  const disableTotpFn = useMethod('2fa:disable');
  const verifyCodeFn = useMethod('2fa:validateTempToken');
  const checkCodesRemainingFn = useMethod('2fa:checkCodesRemaining');
  const regenerateCodesFn = useMethod('2fa:regenerateCodes');
  const [registeringTotp, setRegisteringTotp] = useSafely(useState(false));
  const [qrCode, setQrCode] = useSafely(useState());
  const [totpSecret, setTotpSecret] = useSafely(useState());
  const [codesRemaining, setCodesRemaining] = useSafely(useState());
  const {
    values,
    handlers
  } = useForm({
    authCode: ''
  });
  const {
    authCode
  } = values;
  const {
    handleAuthCode
  } = handlers;
  const totpEnabled = user && user.services && user.services.totp && user.services.totp.enabled;
  const closeModal = useCallback(() => setModal(null), [setModal]);
  useEffect(() => {
    const updateCodesRemaining = async () => {
      if (!totpEnabled) {
        return false;
      }

      const result = await checkCodesRemainingFn();
      setCodesRemaining(result.remaining);
    };

    updateCodesRemaining();
  }, [checkCodesRemainingFn, setCodesRemaining, totpEnabled]);
  const handleEnableTotp = useCallback(async () => {
    try {
      const result = await enableTotpFn();
      setTotpSecret(result.secret);
      setQrCode(qrcode(result.url, {
        size: 200
      }));
      setRegisteringTotp(true);
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [dispatchToastMessage, enableTotpFn, setQrCode, setRegisteringTotp, setTotpSecret]);
  const handleDisableTotp = useCallback(async () => {
    const onDisable = async authCode => {
      try {
        const result = await disableTotpFn(authCode);

        if (!result) {
          return dispatchToastMessage({
            type: 'error',
            message: t('Invalid_two_factor_code')
          });
        }

        dispatchToastMessage({
          type: 'success',
          message: t('Two-factor_authentication_disabled')
        });
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }

      closeModal();
    };

    setModal( /*#__PURE__*/React.createElement(TwoFactorTotpModal, {
      onConfirm: onDisable,
      onClose: closeModal
    }));
  }, [closeModal, disableTotpFn, dispatchToastMessage, setModal, t]);
  const handleVerifyCode = useCallback(async () => {
    try {
      const result = await verifyCodeFn(authCode);

      if (!result) {
        return dispatchToastMessage({
          type: 'error',
          message: t('Invalid_two_factor_code')
        });
      }

      setModal( /*#__PURE__*/React.createElement(BackupCodesModal, {
        codes: result.codes,
        onClose: closeModal
      }));
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [authCode, closeModal, dispatchToastMessage, setModal, t, verifyCodeFn]);
  const handleRegenerateCodes = useCallback(() => {
    const onRegenerate = async authCode => {
      try {
        const result = await regenerateCodesFn(authCode);

        if (!result) {
          return dispatchToastMessage({
            type: 'error',
            message: t('Invalid_two_factor_code')
          });
        }

        setModal( /*#__PURE__*/React.createElement(BackupCodesModal, {
          codes: result.codes,
          onClose: closeModal
        }));
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }
    };

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
//# sourceMappingURL=/dynamic/client/views/account/security/6ab4881149f5114b736159994334815f72daf36c.map
