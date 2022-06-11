function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/security/AccountSecurityPage.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Accordion;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Accordion(v) {
    Accordion = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 2);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let EndToEnd;
module.link("./EndToEnd", {
  default(v) {
    EndToEnd = v;
  }

}, 6);
let TwoFactorEmail;
module.link("./TwoFactorEmail", {
  default(v) {
    TwoFactorEmail = v;
  }

}, 7);
let TwoFactorTOTP;
module.link("./TwoFactorTOTP", {
  default(v) {
    TwoFactorTOTP = v;
  }

}, 8);

const AccountSecurityPage = () => {
  const t = useTranslation();
  const twoFactorEnabled = useSetting('Accounts_TwoFactorAuthentication_Enabled');
  const twoFactorTOTP = useSetting('Accounts_TwoFactorAuthentication_By_TOTP_Enabled');
  const twoFactorByEmailEnabled = useSetting('Accounts_TwoFactorAuthentication_By_Email_Enabled');
  const e2eEnabled = useSetting('E2E_Enable');

  if (!twoFactorEnabled && !e2eEnabled) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Security')
  }), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    maxWidth: "x600",
    w: "full",
    alignSelf: "center"
  }, /*#__PURE__*/React.createElement(Accordion, null, (twoFactorTOTP || twoFactorByEmailEnabled) && twoFactorEnabled && /*#__PURE__*/React.createElement(Accordion.Item, {
    title: t('Two Factor Authentication'),
    defaultExpanded: true
  }, twoFactorTOTP && /*#__PURE__*/React.createElement(TwoFactorTOTP, null), twoFactorByEmailEnabled && /*#__PURE__*/React.createElement(TwoFactorEmail, null)), e2eEnabled && /*#__PURE__*/React.createElement(Accordion.Item, {
    title: t('E2E Encryption'),
    defaultExpanded: !twoFactorEnabled
  }, /*#__PURE__*/React.createElement(EndToEnd, null))))));
};

module.exportDefault(AccountSecurityPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/security/d13084ea8981cf5f609dd4a80981446985a3554f.map
