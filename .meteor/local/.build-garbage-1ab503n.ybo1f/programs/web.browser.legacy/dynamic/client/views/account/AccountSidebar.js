function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/AccountSidebar.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);

var _toArray;

module.link("@babel/runtime/helpers/toArray", {
  default: function (v) {
    _toArray = v;
  }
}, 1);
var React, memo, useCallback, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);
var useSubscription;
module.link("use-subscription", {
  useSubscription: function (v) {
    useSubscription = v;
  }
}, 1);
var menu, SideNav;
module.link("../../../app/ui-utils/client", {
  menu: function (v) {
    menu = v;
  },
  SideNav: function (v) {
    SideNav = v;
  }
}, 2);
var Sidebar;
module.link("../../components/Sidebar", {
  "default": function (v) {
    Sidebar = v;
  }
}, 3);
var useRoutePath, useCurrentRoute;
module.link("../../contexts/RouterContext", {
  useRoutePath: function (v) {
    useRoutePath = v;
  },
  useCurrentRoute: function (v) {
    useCurrentRoute = v;
  }
}, 4);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var isLayoutEmbedded;
module.link("../../lib/utils/isLayoutEmbedded", {
  isLayoutEmbedded: function (v) {
    isLayoutEmbedded = v;
  }
}, 6);
var SettingsProvider;
module.link("../../providers/SettingsProvider", {
  "default": function (v) {
    SettingsProvider = v;
  }
}, 7);
var itemsSubscription;
module.link("./sidebarItems", {
  itemsSubscription: function (v) {
    itemsSubscription = v;
  }
}, 8);

var AccountSidebar = function () {
  var t = useTranslation();
  var items = useSubscription(itemsSubscription);
  var closeFlex = useCallback(function () {
    if (isLayoutEmbedded()) {
      menu.close();
      return;
    }

    SideNav.closeFlex();
  }, []);

  var _useCurrentRoute = useCurrentRoute(),
      _useCurrentRoute2 = _toArray(_useCurrentRoute),
      currentRouteName = _useCurrentRoute2[0],
      rest = _useCurrentRoute2.slice(1);

  var currentPath = useRoutePath.apply(void 0, [currentRouteName].concat(_toConsumableArray(rest)));
  useEffect(function () {
    if (currentRouteName !== 'account') {
      SideNav.closeFlex();
    }
  }, [currentRouteName]); // TODO: uplift this provider

  return /*#__PURE__*/React.createElement(SettingsProvider, {
    privileged: true
  }, /*#__PURE__*/React.createElement(Sidebar, null, /*#__PURE__*/React.createElement(Sidebar.Header, {
    onClose: closeFlex,
    title: t('Account')
  }), /*#__PURE__*/React.createElement(Sidebar.Content, null, /*#__PURE__*/React.createElement(Sidebar.ItemsAssembler, {
    items: items,
    currentPath: currentPath
  }))));
};

module.exportDefault( /*#__PURE__*/memo(AccountSidebar));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/75c477e366436ae3cd7d5c342ebbe41f026035f4.map
