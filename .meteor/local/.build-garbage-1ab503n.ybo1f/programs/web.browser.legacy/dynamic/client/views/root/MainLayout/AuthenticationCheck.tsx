function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/AuthenticationCheck.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useSession;
module.link("../../../contexts/SessionContext", {
  useSession: function (v) {
    useSession = v;
  }
}, 1);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 2);
var useUserId;
module.link("../../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  }
}, 3);
var LoginPage;
module.link("./LoginPage", {
  "default": function (v) {
    LoginPage = v;
  }
}, 4);
var UsernameCheck;
module.link("./UsernameCheck", {
  "default": function (v) {
    UsernameCheck = v;
  }
}, 5);

var AuthenticationCheck = function (_ref) {
  var children = _ref.children;
  var uid = useUserId();
  var allowAnonymousRead = useSetting('Accounts_AllowAnonymousRead');
  var forceLogin = useSession('forceLogin');
  var showLogin = !uid && (allowAnonymousRead !== true || forceLogin === true);

  if (showLogin) {
    return /*#__PURE__*/React.createElement(LoginPage, null);
  }

  return /*#__PURE__*/React.createElement(UsernameCheck, null, children);
};

module.exportDefault(AuthenticationCheck);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/49e34d1aede855499a64f729007d37221d49f870.map
