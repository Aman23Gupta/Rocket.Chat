function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/oauthApps/OAuthAppsPage.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  OAuthAppsPage: () => OAuthAppsPage
});
let Button, Icon;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 2);
let useRouteParameter, useRoute;
module.link("../../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  },

  useRoute(v) {
    useRoute = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let EditOauthAppWithData;
module.link("./EditOauthAppWithData", {
  default(v) {
    EditOauthAppWithData = v;
  }

}, 5);
let OAuthAddApp;
module.link("./OAuthAddApp", {
  default(v) {
    OAuthAddApp = v;
  }

}, 6);
let OAuthAppsTable;
module.link("./OAuthAppsTable", {
  default(v) {
    OAuthAppsTable = v;
  }

}, 7);

function OAuthAppsPage() {
  const t = useTranslation();
  const router = useRoute('admin-oauth-apps');
  const context = useRouteParameter('context');
  const id = useRouteParameter('id');
  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('OAuth_Applications')
  }, context && /*#__PURE__*/React.createElement(Button, {
    alignSelf: "flex-end",
    onClick: () => router.push({})
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "back"
  }), t('Back')), !context && /*#__PURE__*/React.createElement(Button, {
    primary: true,
    alignSelf: "flex-end",
    onClick: () => router.push({
      context: 'new'
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), t('New_Application'))), /*#__PURE__*/React.createElement(Page.Content, null, !context && /*#__PURE__*/React.createElement(OAuthAppsTable, null), context === 'edit' && /*#__PURE__*/React.createElement(EditOauthAppWithData, {
    _id: id
  }), context === 'new' && /*#__PURE__*/React.createElement(OAuthAddApp, null))));
}

module.exportDefault(OAuthAppsPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/oauthApps/7779861210b7e09d56d28d3f0f0007e9c1e96660.map
