function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/sidebar/AdminSidebarPages.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var useSubscription;
module.link("use-subscription", {
  useSubscription: function (v) {
    useSubscription = v;
  }
}, 2);
var Sidebar;
module.link("../../../components/Sidebar", {
  "default": function (v) {
    Sidebar = v;
  }
}, 3);
var itemsSubscription;
module.link("../sidebarItems", {
  itemsSubscription: function (v) {
    itemsSubscription = v;
  }
}, 4);

var AdminSidebarPages = function (_ref) {
  var currentPath = _ref.currentPath;
  var items = useSubscription(itemsSubscription);
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
//# sourceMappingURL=/dynamic/client/views/admin/sidebar/4fa06fb9885bac59f27ccaa4946fe826f7de866b.map
