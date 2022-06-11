function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/EngagementDashboardPage.tsx                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Box, Select, Tabs;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Select: function (v) {
    Select = v;
  },
  Tabs: function (v) {
    Tabs = v;
  }
}, 0);
var React, useCallback, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var Page;
module.link("../../../../../client/components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var ChannelsTab;
module.link("./channels/ChannelsTab", {
  "default": function (v) {
    ChannelsTab = v;
  }
}, 4);
var MessagesTab;
module.link("./messages/MessagesTab", {
  "default": function (v) {
    MessagesTab = v;
  }
}, 5);
var UsersTab;
module.link("./users/UsersTab", {
  "default": function (v) {
    UsersTab = v;
  }
}, 6);

var EngagementDashboardPage = function (_ref) {
  var _ref$tab = _ref.tab,
      tab = _ref$tab === void 0 ? 'users' : _ref$tab,
      onSelectTab = _ref.onSelectTab;
  var t = useTranslation();
  var timezoneOptions = useMemo(function () {
    return [['utc', t('UTC_Timezone')], ['local', t('Local_Timezone')]];
  }, [t]);

  var _useState = useState('utc'),
      _useState2 = _slicedToArray(_useState, 2),
      timezoneId = _useState2[0],
      setTimezoneId = _useState2[1];

  var handleTimezoneChange = function (timezoneId) {
    return setTimezoneId(timezoneId);
  };

  var handleTabClick = useCallback(function (tab) {
    return onSelectTab ? function () {
      return onSelectTab(tab);
    } : undefined;
  }, [onSelectTab]);
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/37207d68b844ca7076ba3926496603216e51e40f.map
