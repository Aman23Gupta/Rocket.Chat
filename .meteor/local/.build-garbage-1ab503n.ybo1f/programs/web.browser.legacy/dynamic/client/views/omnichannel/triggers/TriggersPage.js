function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/triggers/TriggersPage.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Button, Icon;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 2);
var NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 3);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 4);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 5);
var usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 6);
var useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  },
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 7);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 8);
var EditTriggerPageContainer;
module.link("./EditTriggerPageContainer", {
  "default": function (v) {
    EditTriggerPageContainer = v;
  }
}, 9);
var NewTriggerPage;
module.link("./NewTriggerPage", {
  "default": function (v) {
    NewTriggerPage = v;
  }
}, 10);
var TriggersTableContainer;
module.link("./TriggersTableContainer", {
  "default": function (v) {
    TriggersTableContainer = v;
  }
}, 11);

var MonitorsPage = function () {
  var t = useTranslation();
  var canViewTriggers = usePermission('view-livechat-triggers');
  var router = useRoute('omnichannel-triggers');
  var reload = useRef(function () {});
  var context = useRouteParameter('context');
  var id = useRouteParameter('id');
  var handleAdd = useMutableCallback(function () {
    router.push({
      context: 'new'
    });
  });
  var handleCloseVerticalBar = useMutableCallback(function () {
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/triggers/6242e167a1d71e3ac400ef0fb70a14b978482561.map
