function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/emailInbox/EmailInboxPage.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  EmailInboxPage: () => EmailInboxPage
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
let useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  },

  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let EmailInboxEditWithData;
module.link("./EmailInboxEditWithData", {
  default(v) {
    EmailInboxEditWithData = v;
  }

}, 5);
let EmailInboxForm;
module.link("./EmailInboxForm", {
  default(v) {
    EmailInboxForm = v;
  }

}, 6);
let EmailInboxTable;
module.link("./EmailInboxTable", {
  default(v) {
    EmailInboxTable = v;
  }

}, 7);

function EmailInboxPage() {
  const t = useTranslation();
  const context = useRouteParameter('context');
  const id = useRouteParameter('_id');
  const emailInboxRoute = useRoute('admin-email-inboxes');

  const handleNewButtonClick = () => {
    emailInboxRoute.push({
      context: 'new'
    });
  };

  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Email_Inboxes')
  }, context && /*#__PURE__*/React.createElement(Button, {
    alignSelf: "flex-end",
    onClick: () => emailInboxRoute.push({})
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "back"
  }), t('Back')), !context && /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleNewButtonClick
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", t('New_Email_Inbox'))), /*#__PURE__*/React.createElement(Page.Content, null, !context && /*#__PURE__*/React.createElement(EmailInboxTable, null), context === 'new' && /*#__PURE__*/React.createElement(EmailInboxForm, null), context === 'edit' && /*#__PURE__*/React.createElement(EmailInboxEditWithData, {
    id: id
  }))));
}

module.exportDefault(EmailInboxPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/emailInbox/994d5b4c5710489d4a7e0a4c0558cefa6cd6cd85.map
