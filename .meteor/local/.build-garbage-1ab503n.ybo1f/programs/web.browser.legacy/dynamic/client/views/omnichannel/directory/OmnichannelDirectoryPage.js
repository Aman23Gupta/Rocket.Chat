function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/OmnichannelDirectoryPage.js                                                      //
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
var React, useEffect, useCallback, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 2);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 4);
var useCurrentRoute, useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useCurrentRoute: function (v) {
    useCurrentRoute = v;
  },
  useRoute: function (v) {
    useRoute = v;
  },
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var ContextualBar;
module.link("./ContextualBar", {
  "default": function (v) {
    ContextualBar = v;
  }
}, 7);
var ChatTab;
module.link("./chats/ChatTab", {
  "default": function (v) {
    ChatTab = v;
  }
}, 8);
var ContactTab;
module.link("./contacts/ContactTab", {
  "default": function (v) {
    ContactTab = v;
  }
}, 9);

var OmnichannelDirectoryPage = function () {
  var defaultTab = 'contacts';

  var _useCurrentRoute = useCurrentRoute(),
      _useCurrentRoute2 = _slicedToArray(_useCurrentRoute, 1),
      routeName = _useCurrentRoute2[0];

  var tab = useRouteParameter('page');
  var directoryRoute = useRoute('omnichannel-directory');
  var canViewDirectory = usePermission('view-omnichannel-contact-center');
  useEffect(function () {
    if (routeName !== 'omnichannel-directory') {
      return;
    }

    if (!tab) {
      return directoryRoute.replace({
        page: defaultTab
      });
    }
  }, [routeName, directoryRoute, tab, defaultTab]);
  var handleTabClick = useCallback(function (tab) {
    return function () {
      return directoryRoute.push({
        tab: tab
      });
    };
  }, [directoryRoute]);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      contactReload = _useState2[0],
      setContactReload = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      chatReload = _useState4[0],
      setChatReload = _useState4[1];

  var t = useTranslation();

  if (!canViewDirectory) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Omnichannel_Contact_Center')
  }), /*#__PURE__*/React.createElement(Tabs, {
    flexShrink: 0
  }, /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: tab === 'contacts',
    onClick: handleTabClick('contacts')
  }, t('Contacts')), /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: tab === 'chats',
    onClick: handleTabClick('chats')
  }, t('Chats'))), /*#__PURE__*/React.createElement(Page.Content, null, tab === 'contacts' && /*#__PURE__*/React.createElement(ContactTab, {
    setContactReload: setContactReload
  }) || tab === 'chats' && /*#__PURE__*/React.createElement(ChatTab, {
    setChatReload: setChatReload
  }))), /*#__PURE__*/React.createElement(ContextualBar, {
    chatReload: chatReload,
    contactReload: contactReload
  }));
};

module.exportDefault(OmnichannelDirectoryPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/05bb0cbddbad8391032d4d35654c9ab7267f729a.map
