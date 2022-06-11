function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/AdministrationLayout.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 0);
let SideNav;
module.link("../../../app/ui-utils/client", {
  SideNav(v) {
    SideNav = v;
  }

}, 1);

const AdministrationLayout = _ref => {
  let {
    children
  } = _ref;
  useEffect(() => {
    SideNav.setFlex('adminFlex');
    SideNav.openFlex();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};

module.exportDefault(AdministrationLayout);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/8335dd1cf1d12b6b42e8d6309e7b437d7e59af90.map
