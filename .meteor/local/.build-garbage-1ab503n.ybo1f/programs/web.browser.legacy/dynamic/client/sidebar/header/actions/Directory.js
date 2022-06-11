function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/actions/Directory.js                                                                          //
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
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var useLayout;
module.link("../../../contexts/LayoutContext", {
  useLayout: function (v) {
    useLayout = v;
  }
}, 3);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 4);

var Directory = function (props) {
  var directoryRoute = useRoute('directory');

  var _useLayout = useLayout(),
      sidebar = _useLayout.sidebar;

  var handleDirectory = useMutableCallback(function () {
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
//# sourceMappingURL=/dynamic/client/sidebar/header/actions/91264278154370870479bedb05768868f2d6d54a.map
