function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/security/TwoFactorEmail.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Box, Button, Margins;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let React, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let useUser;
module.link("../../../contexts/UserContext", {
  useUser(v) {
    useUser = v;
  }

}, 3);
let useEndpointAction;
module.link("../../../hooks/useEndpointAction", {
  useEndpointAction(v) {
    useEndpointAction = v;
  }

}, 4);

const TwoFactorEmail = props => {
  const t = useTranslation();
  const user = useUser();
  const isEnabled = user && user.services && user.services.email2fa && user.services.email2fa.enabled;
  const enable2faAction = useEndpointAction('POST', 'users.2fa.enableEmail', undefined, t('Two-factor_authentication_enabled'));
  const disable2faAction = useEndpointAction('POST', 'users.2fa.disableEmail', undefined, t('Two-factor_authentication_disabled'));
  const handleEnable = useCallback(async () => {
    await enable2faAction();
  }, [enable2faAction]);
  const handleDisable = useCallback(async () => {
    await disable2faAction();
  }, [disable2faAction]);
  return /*#__PURE__*/React.createElement(Box, _extends({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    mbs: "x16"
  }, props), /*#__PURE__*/React.createElement(Margins, {
    blockEnd: "x8"
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4"
  }, t('Two-factor_authentication_email')), isEnabled && /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    onClick: handleDisable
  }, t('Disable_two-factor_authentication_email')), !isEnabled && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, null, t('Two-factor_authentication_email_is_currently_disabled')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleEnable
  }, t('Enable_two-factor_authentication_email')))));
};

module.exportDefault(TwoFactorEmail);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/security/9c9121a589427cb104ef2d335e0435b199815caa.map
