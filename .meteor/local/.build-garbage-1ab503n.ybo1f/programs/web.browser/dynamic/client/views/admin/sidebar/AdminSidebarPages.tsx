function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/sidebar/AdminSidebarPages.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let useSubscription;
module.link("use-subscription", {
  useSubscription(v) {
    useSubscription = v;
  }

}, 2);
let Sidebar;
module.link("../../../components/Sidebar", {
  default(v) {
    Sidebar = v;
  }

}, 3);
let itemsSubscription;
module.link("../sidebarItems", {
  itemsSubscription(v) {
    itemsSubscription = v;
  }

}, 4);

const AdminSidebarPages = _ref => {
  let {
    currentPath
  } = _ref;
  const items = useSubscription(itemsSubscription);
  return /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    pb: "x8"
  }, /*#__PURE__*/React.createElement(Sidebar.ItemsAssembler, {
    items: items,
    currentPath: currentPath
  }));
};

module.exportDefault( /*#__PURE__*/memo(AdminSidebarPages));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/sidebar/220dfbd9694c3816892423879f514171d8ee6e59.map
