function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/sidebar/OmnichannelSidebar.tsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var React, useCallback, useEffect, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var useSubscription;
module.link("use-subscription", {
  useSubscription: function (v) {
    useSubscription = v;
  }
}, 1);
var menu, SideNav;
module.link("../../../../app/ui-utils/client", {
  menu: function (v) {
    menu = v;
  },
  SideNav: function (v) {
    SideNav = v;
  }
}, 2);
var Sidebar;
module.link("../../../components/Sidebar", {
  "default": function (v) {
    Sidebar = v;
  }
}, 3);
var useRoutePath, useCurrentRoute;
module.link("../../../contexts/RouterContext", {
  useRoutePath: function (v) {
    useRoutePath = v;
  },
  useCurrentRoute: function (v) {
    useCurrentRoute = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var isLayoutEmbedded;
module.link("../../../lib/utils/isLayoutEmbedded", {
  isLayoutEmbedded: function (v) {
    isLayoutEmbedded = v;
  }
}, 6);
var SettingsProvider;
module.link("../../../providers/SettingsProvider", {
  "default": function (v) {
    SettingsProvider = v;
  }
}, 7);
var itemsSubscription;
module.link("../sidebarItems", {
  itemsSubscription: function (v) {
    itemsSubscription = v;
  }
}, 8);

var OmnichannelSidebar = function () {
  var items = useSubscription(itemsSubscription);
  var t = useTranslation();
  var closeOmnichannelFlex = useCallback(function () {
    if (isLayoutEmbedded()) {
      menu.close();
      return;
    }

    SideNav.closeFlex();
  }, []);
  var currentRoute = useCurrentRoute();

  var _currentRoute = _slicedToArray(currentRoute, 4),
      currentRouteName = _currentRoute[0],
      currentRouteParams = _currentRoute[1],
      currentQueryStringParams = _currentRoute[2],
      currentRouteGroupName = _currentRoute[3];

  var currentPath = useRoutePath(currentRouteName !== null && currentRouteName !== void 0 ? currentRouteName : '', currentRouteParams, currentQueryStringParams);
  useEffect(function () {
    if (currentRouteGroupName !== 'omnichannel') {
      SideNav.closeFlex();
    }
  }, [currentRouteGroupName]);
  return /*#__PURE__*/React.createElement(SettingsProvider, {
    privileged: true
  }, /*#__PURE__*/React.createElement(Sidebar, null, /*#__PURE__*/React.createElement(Sidebar.Header, {
    onClose: closeOmnichannelFlex,
    title: /*#__PURE__*/React.createElement(React.Fragment, null, t('Omnichannel'))
  }), /*#__PURE__*/React.createElement(Sidebar.Content, null, /*#__PURE__*/React.createElement(Sidebar.ItemsAssembler, {
    items: items,
    currentPath: currentPath
  }))));
};

module.exportDefault( /*#__PURE__*/memo(OmnichannelSidebar));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/sidebar/5a71ede9b957cd378562b4d2f39de08aa147480a.map
