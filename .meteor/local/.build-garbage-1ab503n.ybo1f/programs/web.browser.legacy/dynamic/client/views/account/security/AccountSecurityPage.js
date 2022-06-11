function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/security/AccountSecurityPage.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Accordion;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Accordion: function (v) {
    Accordion = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 2);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var EndToEnd;
module.link("./EndToEnd", {
  "default": function (v) {
    EndToEnd = v;
  }
}, 6);
var TwoFactorEmail;
module.link("./TwoFactorEmail", {
  "default": function (v) {
    TwoFactorEmail = v;
  }
}, 7);
var TwoFactorTOTP;
module.link("./TwoFactorTOTP", {
  "default": function (v) {
    TwoFactorTOTP = v;
  }
}, 8);

var AccountSecurityPage = function () {
  var t = useTranslation();
  var twoFactorEnabled = useSetting('Accounts_TwoFactorAuthentication_Enabled');
  var twoFactorTOTP = useSetting('Accounts_TwoFactorAuthentication_By_TOTP_Enabled');
  var twoFactorByEmailEnabled = useSetting('Accounts_TwoFactorAuthentication_By_Email_Enabled');
  var e2eEnabled = useSetting('E2E_Enable');

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
//# sourceMappingURL=/dynamic/client/views/account/security/0616ce52c9cd50631fe4ee700e5dc34751695072.map
