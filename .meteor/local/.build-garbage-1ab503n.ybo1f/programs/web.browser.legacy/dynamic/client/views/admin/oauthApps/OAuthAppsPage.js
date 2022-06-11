function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/oauthApps/OAuthAppsPage.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  OAuthAppsPage: function () {
    return OAuthAppsPage;
  }
});
var Button, Icon;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 2);
var useRouteParameter, useRoute;
module.link("../../../contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  },
  useRoute: function (v) {
    useRoute = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var EditOauthAppWithData;
module.link("./EditOauthAppWithData", {
  "default": function (v) {
    EditOauthAppWithData = v;
  }
}, 5);
var OAuthAddApp;
module.link("./OAuthAddApp", {
  "default": function (v) {
    OAuthAddApp = v;
  }
}, 6);
var OAuthAppsTable;
module.link("./OAuthAppsTable", {
  "default": function (v) {
    OAuthAppsTable = v;
  }
}, 7);

function OAuthAppsPage() {
  var t = useTranslation();
  var router = useRoute('admin-oauth-apps');
  var context = useRouteParameter('context');
  var id = useRouteParameter('id');
  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('OAuth_Applications')
  }, context && /*#__PURE__*/React.createElement(Button, {
    alignSelf: "flex-end",
    onClick: function () {
      return router.push({});
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "back"
  }), t('Back')), !context && /*#__PURE__*/React.createElement(Button, {
    primary: true,
    alignSelf: "flex-end",
    onClick: function () {
      return router.push({
        context: 'new'
      });
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), t('New_Application'))), /*#__PURE__*/React.createElement(Page.Content, null, !context && /*#__PURE__*/React.createElement(OAuthAppsTable, null), context === 'edit' && /*#__PURE__*/React.createElement(EditOauthAppWithData, {
    _id: id
  }), context === 'new' && /*#__PURE__*/React.createElement(OAuthAddApp, null))));
}

module.exportDefault(OAuthAppsPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/oauthApps/ebf53fa900307f99d17c8ecacb2e7c2b7a48ad48.map
