function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/triggers/TriggersPage.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, Icon;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 2);
let NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 3);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 4);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 5);
let usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 6);
let useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  },

  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 7);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 8);
let EditTriggerPageContainer;
module.link("./EditTriggerPageContainer", {
  default(v) {
    EditTriggerPageContainer = v;
  }

}, 9);
let NewTriggerPage;
module.link("./NewTriggerPage", {
  default(v) {
    NewTriggerPage = v;
  }

}, 10);
let TriggersTableContainer;
module.link("./TriggersTableContainer", {
  default(v) {
    TriggersTableContainer = v;
  }

}, 11);

const MonitorsPage = () => {
  const t = useTranslation();
  const canViewTriggers = usePermission('view-livechat-triggers');
  const router = useRoute('omnichannel-triggers');
  const reload = useRef(() => {});
  const context = useRouteParameter('context');
  const id = useRouteParameter('id');
  const handleAdd = useMutableCallback(() => {
    router.push({
      context: 'new'
    });
  });
  const handleCloseVerticalBar = useMutableCallback(() => {
    router.push({});
  });

  if (!canViewTriggers) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Livechat_Triggers')
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleAdd
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", t('New'))), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(TriggersTableContainer, {
    reloadRef: reload
  }))), context && /*#__PURE__*/React.createElement(VerticalBar, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, t('Trigger'), /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: handleCloseVerticalBar
  })), /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, null, context === 'edit' && /*#__PURE__*/React.createElement(EditTriggerPageContainer, {
    id: id,
    onSave: reload.current
  }), context === 'new' && /*#__PURE__*/React.createElement(NewTriggerPage, {
    onSave: reload.current
  }))));
};

module.exportDefault(MonitorsPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/triggers/58716a562c063f046e530c5c3580ea2b20267746.map
