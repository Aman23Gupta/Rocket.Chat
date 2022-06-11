function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/directory/DirectoryPage.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Tabs;
module.link("@rocket.chat/fuselage", {
  Tabs: function (v) {
    Tabs = v;
  }
}, 0);
var React, useEffect, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var Page;
module.link("../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 2);
var useCurrentRoute, useRoute, useRouteParameter;
module.link("../../contexts/RouterContext", {
  useCurrentRoute: function (v) {
    useCurrentRoute = v;
  },
  useRoute: function (v) {
    useRoute = v;
  },
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 3);
var useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 4);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var ChannelsTab;
module.link("./ChannelsTab", {
  "default": function (v) {
    ChannelsTab = v;
  }
}, 6);
var TeamsTab;
module.link("./TeamsTab", {
  "default": function (v) {
    TeamsTab = v;
  }
}, 7);
var UserTab;
module.link("./UserTab", {
  "default": function (v) {
    UserTab = v;
  }
}, 8);

function DirectoryPage() {
  var t = useTranslation();
  var defaultTab = useSetting('Accounts_Directory_DefaultView');
  var federationEnabled = useSetting('FEDERATION_Enabled');

  var _useCurrentRoute = useCurrentRoute(),
      _useCurrentRoute2 = _slicedToArray(_useCurrentRoute, 1),
      routeName = _useCurrentRoute2[0];

  var tab = useRouteParameter('tab');
  var directoryRoute = useRoute('directory');
  useEffect(function () {
    if (routeName !== 'directory') {
      return;
    }

    if (!tab || tab === 'external' && !federationEnabled) {
      return directoryRoute.replace({
        tab: defaultTab
      });
    }
  }, [routeName, directoryRoute, tab, federationEnabled, defaultTab]);
  var handleTabClick = useCallback(function (tab) {
    return function () {
      return directoryRoute.push({
        tab: tab
      });
    };
  }, [directoryRoute]);
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Directory')
  }), /*#__PURE__*/React.createElement(Tabs, {
    flexShrink: 0
  }, /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: tab === 'channels',
    onClick: handleTabClick('channels')
  }, t('Channels')), /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: tab === 'users',
    onClick: handleTabClick('users')
  }, t('Users')), /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: tab === 'teams',
    onClick: handleTabClick('teams')
  }, t('Teams')), federationEnabled && /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: tab === 'external',
    onClick: handleTabClick('external')
  }, t('External_Users'))), /*#__PURE__*/React.createElement(Page.Content, null, tab === 'users' && /*#__PURE__*/React.createElement(UserTab, null) || tab === 'channels' && /*#__PURE__*/React.createElement(ChannelsTab, null) || tab === 'teams' && /*#__PURE__*/React.createElement(TeamsTab, null) || federationEnabled && tab === 'external' && /*#__PURE__*/React.createElement(UserTab, {
    workspace: "external"
  })));
}

DirectoryPage.displayName = 'DirectoryPage';
module.exportDefault(DirectoryPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/directory/74f7b03b129805b24889280a2d5fdbb4575ba648.map
