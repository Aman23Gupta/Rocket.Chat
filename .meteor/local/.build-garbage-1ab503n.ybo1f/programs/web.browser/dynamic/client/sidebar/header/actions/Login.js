function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/actions/Login.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Sidebar;
module.link("@rocket.chat/fuselage", {
  Sidebar(v) {
    Sidebar = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useSessionDispatch;
module.link("../../../contexts/SessionContext", {
  useSessionDispatch(v) {
    useSessionDispatch = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const Login = props => {
  const setForceLogin = useSessionDispatch('forceLogin');
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Sidebar.TopBar.Action, _extends({}, props, {
    primary: true,
    ghost: false,
    icon: "login",
    title: t('Sign_in_to_start_talking'),
    onClick: () => setForceLogin(true)
  }));
};

module.exportDefault(Login);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/actions/dd2a1a222338617fdd8280aab456fba63c70fec7.map
