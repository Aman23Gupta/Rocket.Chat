function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/AdministrationLayout.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);
var SideNav;
module.link("../../../app/ui-utils/client", {
  SideNav: function (v) {
    SideNav = v;
  }
}, 1);

var AdministrationLayout = function (_ref) {
  var children = _ref.children;
  useEffect(function () {
    SideNav.setFlex('adminFlex');
    SideNav.openFlex();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};

module.exportDefault(AdministrationLayout);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/7ba7d4d7980f1eb4d71519a92f99ffec0b959c87.map
