function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/directory/DirectoryPage.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Tabs;
module.link("@rocket.chat/fuselage", {
  Tabs(v) {
    Tabs = v;
  }

}, 0);
let React, useEffect, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let Page;
module.link("../../components/Page", {
  default(v) {
    Page = v;
  }

}, 2);
let useCurrentRoute, useRoute, useRouteParameter;
module.link("../../contexts/RouterContext", {
  useCurrentRoute(v) {
    useCurrentRoute = v;
  },

  useRoute(v) {
    useRoute = v;
  },

  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 3);
let useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 4);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let ChannelsTab;
module.link("./ChannelsTab", {
  default(v) {
    ChannelsTab = v;
  }

}, 6);
let TeamsTab;
module.link("./TeamsTab", {
  default(v) {
    TeamsTab = v;
  }

}, 7);
let UserTab;
module.link("./UserTab", {
  default(v) {
    UserTab = v;
  }

}, 8);

function DirectoryPage() {
  const t = useTranslation();
  const defaultTab = useSetting('Accounts_Directory_DefaultView');
  const federationEnabled = useSetting('FEDERATION_Enabled');
  const [routeName] = useCurrentRoute();
  const tab = useRouteParameter('tab');
  const directoryRoute = useRoute('directory');
  useEffect(() => {
    if (routeName !== 'directory') {
      return;
    }

    if (!tab || tab === 'external' && !federationEnabled) {
      return directoryRoute.replace({
        tab: defaultTab
      });
    }
  }, [routeName, directoryRoute, tab, federationEnabled, defaultTab]);
  const handleTabClick = useCallback(tab => () => directoryRoute.push({
    tab
  }), [directoryRoute]);
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
//# sourceMappingURL=/dynamic/client/views/directory/d592e0f7649dfcffc7f5d1285a5fb42768c102b1.map
