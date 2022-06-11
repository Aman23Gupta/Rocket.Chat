function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/PasswordChangeCheck.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, lazy;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  lazy: function (v) {
    lazy = v;
  }
}, 0);
var useUser;
module.link("../../../contexts/UserContext", {
  useUser: function (v) {
    useUser = v;
  }
}, 1);
var TwoFactorAuthSetupCheck;
module.link("./TwoFactorAuthSetupCheck", {
  "default": function (v) {
    TwoFactorAuthSetupCheck = v;
  }
}, 2);
var ResetPasswordPage = /*#__PURE__*/lazy(function () {
  return module.dynamicImport('../../login/ResetPassword/ResetPassword');
});

var PasswordChangeCheck = function (_ref) {
  var _useUser;

  var children = _ref.children;
  var requirePasswordChange = ((_useUser = useUser()) === null || _useUser === void 0 ? void 0 : _useUser.requirePasswordChange) === true;

  if (requirePasswordChange) {
    return /*#__PURE__*/React.createElement(ResetPasswordPage, null);
  }

  return /*#__PURE__*/React.createElement(TwoFactorAuthSetupCheck, null, children);
};

module.exportDefault(PasswordChangeCheck);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/2e0522f82a1d5ad8d99791b3c8878c3e2c1cc55d.map
