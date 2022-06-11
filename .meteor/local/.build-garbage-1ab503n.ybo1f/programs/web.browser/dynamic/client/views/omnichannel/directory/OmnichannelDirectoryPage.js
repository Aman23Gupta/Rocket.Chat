function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/OmnichannelDirectoryPage.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Tabs;
module.link("@rocket.chat/fuselage", {
  Tabs(v) {
    Tabs = v;
  }

}, 0);
let React, useEffect, useCallback, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 2);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 4);
let useCurrentRoute, useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useCurrentRoute(v) {
    useCurrentRoute = v;
  },

  useRoute(v) {
    useRoute = v;
  },

  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 5);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let ContextualBar;
module.link("./ContextualBar", {
  default(v) {
    ContextualBar = v;
  }

}, 7);
let ChatTab;
module.link("./chats/ChatTab", {
  default(v) {
    ChatTab = v;
  }

}, 8);
let ContactTab;
module.link("./contacts/ContactTab", {
  default(v) {
    ContactTab = v;
  }

}, 9);

const OmnichannelDirectoryPage = () => {
  const defaultTab = 'contacts';
  const [routeName] = useCurrentRoute();
  const tab = useRouteParameter('page');
  const directoryRoute = useRoute('omnichannel-directory');
  const canViewDirectory = usePermission('view-omnichannel-contact-center');
  useEffect(() => {
    if (routeName !== 'omnichannel-directory') {
      return;
    }

    if (!tab) {
      return directoryRoute.replace({
        page: defaultTab
      });
    }
  }, [routeName, directoryRoute, tab, defaultTab]);
  const handleTabClick = useCallback(tab => () => directoryRoute.push({
    tab
  }), [directoryRoute]);
  const [contactReload, setContactReload] = useState();
  const [chatReload, setChatReload] = useState();
  const t = useTranslation();

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
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/427f3ecea3d615c023f2c40e7c0562d350bfbfcf.map
