function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/TwoFactorAuthSetupCheck.tsx                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, lazy, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  lazy(v) {
    lazy = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 0);
let Roles;
module.link("../../../../app/models/client", {
  Roles(v) {
    Roles = v;
  }

}, 1);
let useLayout;
module.link("../../../contexts/LayoutContext", {
  useLayout(v) {
    useLayout = v;
  }

}, 2);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 3);
let useUser;
module.link("../../../contexts/UserContext", {
  useUser(v) {
    useUser = v;
  }

}, 4);
let useReactiveValue;
module.link("../../../hooks/useReactiveValue", {
  useReactiveValue(v) {
    useReactiveValue = v;
  }

}, 5);
let LayoutWithSidebar;
module.link("./LayoutWithSidebar", {
  default(v) {
    LayoutWithSidebar = v;
  }

}, 6);
const AccountSecurityPage = /*#__PURE__*/lazy(() => module.dynamicImport('../../account/security/AccountSecurityPage'));

const TwoFactorAuthSetupCheck = _ref => {
  let {
    children
  } = _ref;
  const {
    isEmbedded: embeddedLayout
  } = useLayout();
  const user = useUser();
  const tfaEnabled = useSetting('Accounts_TwoFactorAuthentication_Enabled');
  const require2faSetup = useReactiveValue(useCallback(() => {
    var _user$services, _user$services$totp, _user$services2, _user$services2$email;

    // User is already using 2fa
    if (!user || user !== null && user !== void 0 && (_user$services = user.services) !== null && _user$services !== void 0 && (_user$services$totp = _user$services.totp) !== null && _user$services$totp !== void 0 && _user$services$totp.enabled || user !== null && user !== void 0 && (_user$services2 = user.services) !== null && _user$services2 !== void 0 && (_user$services2$email = _user$services2.email2fa) !== null && _user$services2$email !== void 0 && _user$services2$email.enabled) {
      return false;
    }

    const mandatoryRole = Roles.findOne({
      _id: {
        $in: user.roles
      },
      mandatory2fa: true
    });
    return mandatoryRole !== undefined && tfaEnabled;
  }, [tfaEnabled, user]));

  if (require2faSetup) {
    return /*#__PURE__*/React.createElement("main", {
      id: "rocket-chat",
      className: embeddedLayout ? 'embedded-view' : undefined
    }, /*#__PURE__*/React.createElement("div", {
      className: "rc-old main-content content-background-color"
    }, /*#__PURE__*/React.createElement(AccountSecurityPage, null)));
  }

  return /*#__PURE__*/React.createElement(LayoutWithSidebar, null, children);
};

module.exportDefault(TwoFactorAuthSetupCheck);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/77e719d63366ac65e40385eccd2d8596ce1c3f1f.map
