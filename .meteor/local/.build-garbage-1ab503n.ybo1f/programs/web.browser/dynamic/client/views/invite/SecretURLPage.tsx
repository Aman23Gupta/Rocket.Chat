function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/invite/SecretURLPage.tsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useQuery;
module.link("react-query", {
  useQuery(v) {
    useQuery = v;
  }

}, 1);
let KonchatNotification;
module.link("../../../app/ui", {
  KonchatNotification(v) {
    KonchatNotification = v;
  }

}, 2);
let useRouteParameter;
module.link("../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 3);
let useSessionDispatch;
module.link("../../contexts/SessionContext", {
  useSessionDispatch(v) {
    useSessionDispatch = v;
  }

}, 4);
let useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 5);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let call;
module.link("../../lib/utils/call", {
  call(v) {
    call = v;
  }

}, 7);
let PageLoading;
module.link("../root/PageLoading", {
  default(v) {
    PageLoading = v;
  }

}, 8);

const SecretURLPage = () => {
  const t = useTranslation();
  const hash = useRouteParameter('hash');
  const registrationForm = useSetting('Accounts_RegistrationForm');
  const setLoginDefaultState = useSessionDispatch('loginDefaultState');
  const {
    isLoading
  } = useQuery(['secretURL', hash], async () => {
    if (registrationForm !== 'Secret URL' || !hash) {
      return false;
    }

    return call('checkRegistrationSecretURL', hash);
  }, {
    onSuccess: valid => {
      if (!valid) {
        return;
      }

      setLoginDefaultState('register');
      KonchatNotification.getDesktopPermission();
    }
  });

  if (isLoading) {
    return /*#__PURE__*/React.createElement(PageLoading, null);
  }

  return /*#__PURE__*/React.createElement("section", {
    className: "rc-old full-page color-tertiary-font-color"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("a", {
    className: "logo",
    href: "/"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/logo/logo.svg?v=3"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "attention-message"
  }, /*#__PURE__*/React.createElement("i", {
    className: "icon-attention"
  }), t('Invalid_secret_URL_message')))));
};

module.exportDefault(SecretURLPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/invite/09b144a09262bad9c713a55ec3677312ca455537.map
