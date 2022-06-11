function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/BurgerMenu/BurgerMenu.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
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
let useLayout;
module.link("../../contexts/LayoutContext", {
  useLayout(v) {
    useLayout = v;
  }

}, 2);
let useSession;
module.link("../../contexts/SessionContext", {
  useSession(v) {
    useSession = v;
  }

}, 3);
let useEmbeddedLayout;
module.link("../../hooks/useEmbeddedLayout", {
  useEmbeddedLayout(v) {
    useEmbeddedLayout = v;
  }

}, 4);
let BurgerMenuButton;
module.link("./BurgerMenuButton", {
  default(v) {
    BurgerMenuButton = v;
  }

}, 5);

const BurgerMenu = () => {
  const {
    sidebar
  } = useLayout();
  const isLayoutEmbedded = useEmbeddedLayout();
  const unreadMessagesBadge = useSession('unread');
  const isSidebarOpen = sidebar.isOpen();
  const toggleSidebar = useMutableCallback(() => sidebar.toggle());
  return /*#__PURE__*/React.createElement(BurgerMenuButton, {
    open: isSidebarOpen,
    onClick: toggleSidebar,
    badge: !isLayoutEmbedded && unreadMessagesBadge && unreadMessagesBadge
  });
};

module.exportDefault( /*#__PURE__*/memo(BurgerMenu));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/BurgerMenu/5ba164c7eaa59ef908ed1e2e31c67c5e5d3946b2.map
