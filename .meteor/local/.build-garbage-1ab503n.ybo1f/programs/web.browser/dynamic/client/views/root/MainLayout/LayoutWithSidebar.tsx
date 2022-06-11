function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/LayoutWithSidebar.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 0);
let useLayout;
module.link("../../../contexts/LayoutContext", {
  useLayout(v) {
    useLayout = v;
  }

}, 1);
let useCurrentRoute, useRoutePath;
module.link("../../../contexts/RouterContext", {
  useCurrentRoute(v) {
    useCurrentRoute = v;
  },

  useRoutePath(v) {
    useRoutePath = v;
  }

}, 2);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 3);
let useReactiveValue;
module.link("../../../hooks/useReactiveValue", {
  useReactiveValue(v) {
    useReactiveValue = v;
  }

}, 4);
let BlazeTemplate;
module.link("../BlazeTemplate", {
  default(v) {
    BlazeTemplate = v;
  }

}, 5);

const LayoutWithSidebar = _ref => {
  let {
    children
  } = _ref;
  const {
    isEmbedded: embeddedLayout
  } = useLayout();
  const [currentRouteName = '', currentParameters = {}] = useCurrentRoute();
  const currentRoutePath = useRoutePath(currentRouteName, currentParameters);
  const removeSidenav = useReactiveValue(useCallback(() => embeddedLayout && !(currentRoutePath !== null && currentRoutePath !== void 0 && currentRoutePath.startsWith('/admin')), [currentRoutePath, embeddedLayout]));
  const readReceiptsEnabled = useSetting('Message_Read_Receipt_Store_Users');
  return /*#__PURE__*/React.createElement("div", {
    id: "rocket-chat",
    className: [embeddedLayout ? 'embedded-view' : undefined, 'menu-nav'].filter(Boolean).join(' ')
  }, !removeSidenav ? /*#__PURE__*/React.createElement(BlazeTemplate, {
    template: "sideNav"
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: ['rc-old', 'main-content', 'content-background-color', readReceiptsEnabled ? 'read-receipts-enabled' : undefined].filter(Boolean).join(' ')
  }, children));
};

module.exportDefault(LayoutWithSidebar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/7202e3612c4f8eab09399764a96a8e538b0992af.map
