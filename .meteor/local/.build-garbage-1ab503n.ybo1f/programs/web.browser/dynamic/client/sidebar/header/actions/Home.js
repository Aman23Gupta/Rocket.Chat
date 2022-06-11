function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/actions/Home.js                                                                               //
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
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let useLayout;
module.link("../../../contexts/LayoutContext", {
  useLayout(v) {
    useLayout = v;
  }

}, 3);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 4);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 5);

const Home = props => {
  const homeRoute = useRoute('home');
  const {
    sidebar
  } = useLayout();
  const showHome = useSetting('Layout_Show_Home_Button');
  const handleHome = useMutableCallback(() => {
    sidebar.toggle();
    homeRoute.push({});
  });
  return showHome ? /*#__PURE__*/React.createElement(Sidebar.TopBar.Action, _extends({}, props, {
    icon: "home",
    onClick: handleHome
  })) : null;
};

module.exportDefault(Home);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/actions/17653543c800372fefe92f41ac906b435bba21fc.map
