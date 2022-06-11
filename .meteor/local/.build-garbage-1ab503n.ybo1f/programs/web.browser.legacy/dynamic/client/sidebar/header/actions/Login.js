function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/actions/Login.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var Sidebar;
module.link("@rocket.chat/fuselage", {
  Sidebar: function (v) {
    Sidebar = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useSessionDispatch;
module.link("../../../contexts/SessionContext", {
  useSessionDispatch: function (v) {
    useSessionDispatch = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var Login = function (props) {
  var setForceLogin = useSessionDispatch('forceLogin');
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Sidebar.TopBar.Action, _extends({}, props, {
    primary: true,
    ghost: false,
    icon: "login",
    title: t('Sign_in_to_start_talking'),
    onClick: function () {
      return setForceLogin(true);
    }
  }));
};

module.exportDefault(Login);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/actions/37550dab0cdc5913240393d3f3396af1578280f8.map
