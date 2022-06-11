function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/LayoutWithSidebar.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var React, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 0);
var useLayout;
module.link("../../../contexts/LayoutContext", {
  useLayout: function (v) {
    useLayout = v;
  }
}, 1);
var useCurrentRoute, useRoutePath;
module.link("../../../contexts/RouterContext", {
  useCurrentRoute: function (v) {
    useCurrentRoute = v;
  },
  useRoutePath: function (v) {
    useRoutePath = v;
  }
}, 2);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 3);
var useReactiveValue;
module.link("../../../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 4);
var BlazeTemplate;
module.link("../BlazeTemplate", {
  "default": function (v) {
    BlazeTemplate = v;
  }
}, 5);

var LayoutWithSidebar = function (_ref) {
  var children = _ref.children;

  var _useLayout = useLayout(),
      embeddedLayout = _useLayout.isEmbedded;

  var _useCurrentRoute = useCurrentRoute(),
      _useCurrentRoute2 = _slicedToArray(_useCurrentRoute, 2),
      _useCurrentRoute2$ = _useCurrentRoute2[0],
      currentRouteName = _useCurrentRoute2$ === void 0 ? '' : _useCurrentRoute2$,
      _useCurrentRoute2$2 = _useCurrentRoute2[1],
      currentParameters = _useCurrentRoute2$2 === void 0 ? {} : _useCurrentRoute2$2;

  var currentRoutePath = useRoutePath(currentRouteName, currentParameters);
  var removeSidenav = useReactiveValue(useCallback(function () {
    return embeddedLayout && !(currentRoutePath !== null && currentRoutePath !== void 0 && currentRoutePath.startsWith('/admin'));
  }, [currentRoutePath, embeddedLayout]));
  var readReceiptsEnabled = useSetting('Message_Read_Receipt_Store_Users');
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
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/39ff60ab4a07bc25d9ef5b8cdaea51cd50c58180.map
