function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/EngagementDashboardPage.tsx                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Select, Tabs;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Select(v) {
    Select = v;
  },

  Tabs(v) {
    Tabs = v;
  }

}, 0);
let React, useCallback, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let Page;
module.link("../../../../../client/components/Page", {
  default(v) {
    Page = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let ChannelsTab;
module.link("./channels/ChannelsTab", {
  default(v) {
    ChannelsTab = v;
  }

}, 4);
let MessagesTab;
module.link("./messages/MessagesTab", {
  default(v) {
    MessagesTab = v;
  }

}, 5);
let UsersTab;
module.link("./users/UsersTab", {
  default(v) {
    UsersTab = v;
  }

}, 6);

const EngagementDashboardPage = _ref => {
  let {
    tab = 'users',
    onSelectTab
  } = _ref;
  const t = useTranslation();
  const timezoneOptions = useMemo(() => [['utc', t('UTC_Timezone')], ['local', t('Local_Timezone')]], [t]);
  const [timezoneId, setTimezoneId] = useState('utc');

  const handleTimezoneChange = timezoneId => setTimezoneId(timezoneId);

  const handleTabClick = useCallback(tab => onSelectTab ? () => onSelectTab(tab) : undefined, [onSelectTab]);
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Engagement_Dashboard')
  }, /*#__PURE__*/React.createElement(Select, {
    options: timezoneOptions,
    value: timezoneId,
    onChange: handleTimezoneChange
  })), /*#__PURE__*/React.createElement(Tabs, null, /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: tab === 'users',
    onClick: handleTabClick('users')
  }, t('Users')), /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: tab === 'messages',
    onClick: handleTabClick('messages')
  }, t('Messages')), /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: tab === 'channels',
    onClick: handleTabClick('channels')
  }, t('Channels'))), /*#__PURE__*/React.createElement(Page.ScrollableContent, {
    padding: 0
  }, /*#__PURE__*/React.createElement(Box, {
    m: "x24"
  }, tab === 'users' && /*#__PURE__*/React.createElement(UsersTab, {
    timezone: timezoneId
  }) || tab === 'messages' && /*#__PURE__*/React.createElement(MessagesTab, null) || tab === 'channels' && /*#__PURE__*/React.createElement(ChannelsTab, null))));
};

module.exportDefault(EngagementDashboardPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/b139e4b27e2dc4a4a2c1f6837474b2bfcece8b51.map
