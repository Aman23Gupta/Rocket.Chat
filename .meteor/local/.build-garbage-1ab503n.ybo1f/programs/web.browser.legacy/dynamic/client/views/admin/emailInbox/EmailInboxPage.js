function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/emailInbox/EmailInboxPage.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  EmailInboxPage: function () {
    return EmailInboxPage;
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
var useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  },
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var EmailInboxEditWithData;
module.link("./EmailInboxEditWithData", {
  "default": function (v) {
    EmailInboxEditWithData = v;
  }
}, 5);
var EmailInboxForm;
module.link("./EmailInboxForm", {
  "default": function (v) {
    EmailInboxForm = v;
  }
}, 6);
var EmailInboxTable;
module.link("./EmailInboxTable", {
  "default": function (v) {
    EmailInboxTable = v;
  }
}, 7);

function EmailInboxPage() {
  var t = useTranslation();
  var context = useRouteParameter('context');
  var id = useRouteParameter('_id');
  var emailInboxRoute = useRoute('admin-email-inboxes');

  var handleNewButtonClick = function () {
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
    onClick: function () {
      return emailInboxRoute.push({});
    }
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
//# sourceMappingURL=/dynamic/client/views/admin/emailInbox/4e0aff58d5d6a3add81c262ecc6b9a074f0cca41.map
