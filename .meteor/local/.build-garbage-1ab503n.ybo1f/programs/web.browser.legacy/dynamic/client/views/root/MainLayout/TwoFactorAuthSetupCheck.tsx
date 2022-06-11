function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/TwoFactorAuthSetupCheck.tsx                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, lazy, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  lazy: function (v) {
    lazy = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 0);
var Roles;
module.link("../../../../app/models/client", {
  Roles: function (v) {
    Roles = v;
  }
}, 1);
var useLayout;
module.link("../../../contexts/LayoutContext", {
  useLayout: function (v) {
    useLayout = v;
  }
}, 2);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 3);
var useUser;
module.link("../../../contexts/UserContext", {
  useUser: function (v) {
    useUser = v;
  }
}, 4);
var useReactiveValue;
module.link("../../../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 5);
var LayoutWithSidebar;
module.link("./LayoutWithSidebar", {
  "default": function (v) {
    LayoutWithSidebar = v;
  }
}, 6);
var AccountSecurityPage = /*#__PURE__*/lazy(function () {
  return module.dynamicImport('../../account/security/AccountSecurityPage');
});

var TwoFactorAuthSetupCheck = function (_ref) {
  var children = _ref.children;

  var _useLayout = useLayout(),
      embeddedLayout = _useLayout.isEmbedded;

  var user = useUser();
  var tfaEnabled = useSetting('Accounts_TwoFactorAuthentication_Enabled');
  var require2faSetup = useReactiveValue(useCallback(function () {
    var _user$services, _user$services$totp, _user$services2, _user$services2$email;

    // User is already using 2fa
    if (!user || user !== null && user !== void 0 && (_user$services = user.services) !== null && _user$services !== void 0 && (_user$services$totp = _user$services.totp) !== null && _user$services$totp !== void 0 && _user$services$totp.enabled || user !== null && user !== void 0 && (_user$services2 = user.services) !== null && _user$services2 !== void 0 && (_user$services2$email = _user$services2.email2fa) !== null && _user$services2$email !== void 0 && _user$services2$email.enabled) {
      return false;
    }

    var mandatoryRole = Roles.findOne({
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
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/fc5a023029714962909963c3042bad89e4ee1454.map
