function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/BurgerMenu/BurgerMenu.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
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
var useLayout;
module.link("../../contexts/LayoutContext", {
  useLayout: function (v) {
    useLayout = v;
  }
}, 2);
var useSession;
module.link("../../contexts/SessionContext", {
  useSession: function (v) {
    useSession = v;
  }
}, 3);
var useEmbeddedLayout;
module.link("../../hooks/useEmbeddedLayout", {
  useEmbeddedLayout: function (v) {
    useEmbeddedLayout = v;
  }
}, 4);
var BurgerMenuButton;
module.link("./BurgerMenuButton", {
  "default": function (v) {
    BurgerMenuButton = v;
  }
}, 5);

var BurgerMenu = function () {
  var _useLayout = useLayout(),
      sidebar = _useLayout.sidebar;

  var isLayoutEmbedded = useEmbeddedLayout();
  var unreadMessagesBadge = useSession('unread');
  var isSidebarOpen = sidebar.isOpen();
  var toggleSidebar = useMutableCallback(function () {
    return sidebar.toggle();
  });
  return /*#__PURE__*/React.createElement(BurgerMenuButton, {
    open: isSidebarOpen,
    onClick: toggleSidebar,
    badge: !isLayoutEmbedded && unreadMessagesBadge && unreadMessagesBadge
  });
};

module.exportDefault( /*#__PURE__*/memo(BurgerMenu));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/BurgerMenu/e6aa89670df8986959975d3c8093766c277cecf2.map
