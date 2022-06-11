function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/AuthenticationCheck.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useSession;
module.link("../../../contexts/SessionContext", {
  useSession(v) {
    useSession = v;
  }

}, 1);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 2);
let useUserId;
module.link("../../../contexts/UserContext", {
  useUserId(v) {
    useUserId = v;
  }

}, 3);
let LoginPage;
module.link("./LoginPage", {
  default(v) {
    LoginPage = v;
  }

}, 4);
let UsernameCheck;
module.link("./UsernameCheck", {
  default(v) {
    UsernameCheck = v;
  }

}, 5);

const AuthenticationCheck = _ref => {
  let {
    children
  } = _ref;
  const uid = useUserId();
  const allowAnonymousRead = useSetting('Accounts_AllowAnonymousRead');
  const forceLogin = useSession('forceLogin');
  const showLogin = !uid && (allowAnonymousRead !== true || forceLogin === true);

  if (showLogin) {
    return /*#__PURE__*/React.createElement(LoginPage, null);
  }

  return /*#__PURE__*/React.createElement(UsernameCheck, null, children);
};

module.exportDefault(AuthenticationCheck);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/d1afbf9572985d2c68e4e914e450d28159263192.map
