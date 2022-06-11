function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/actions/Directory.js                                                                          //
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

const Directory = props => {
  const directoryRoute = useRoute('directory');
  const {
    sidebar
  } = useLayout();
  const handleDirectory = useMutableCallback(() => {
    sidebar.toggle();
    directoryRoute.push({});
  });
  return /*#__PURE__*/React.createElement(Sidebar.TopBar.Action, _extends({}, props, {
    icon: "globe",
    onClick: handleDirectory
  }));
};

module.exportDefault(Directory);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/actions/87b5e951086fd7309f0f91003bc045e4524c707b.map
