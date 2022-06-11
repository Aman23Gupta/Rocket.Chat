function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/PasswordChangeCheck.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, lazy;
module.link("react", {
  default(v) {
    React = v;
  },

  lazy(v) {
    lazy = v;
  }

}, 0);
let useUser;
module.link("../../../contexts/UserContext", {
  useUser(v) {
    useUser = v;
  }

}, 1);
let TwoFactorAuthSetupCheck;
module.link("./TwoFactorAuthSetupCheck", {
  default(v) {
    TwoFactorAuthSetupCheck = v;
  }

}, 2);
const ResetPasswordPage = /*#__PURE__*/lazy(() => module.dynamicImport('../../login/ResetPassword/ResetPassword'));

const PasswordChangeCheck = _ref => {
  var _useUser;

  let {
    children
  } = _ref;
  const requirePasswordChange = ((_useUser = useUser()) === null || _useUser === void 0 ? void 0 : _useUser.requirePasswordChange) === true;

  if (requirePasswordChange) {
    return /*#__PURE__*/React.createElement(ResetPasswordPage, null);
  }

  return /*#__PURE__*/React.createElement(TwoFactorAuthSetupCheck, null, children);
};

module.exportDefault(PasswordChangeCheck);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/76c6fe55986eeb0d0416bb4de3e7e953c82f29f1.map
