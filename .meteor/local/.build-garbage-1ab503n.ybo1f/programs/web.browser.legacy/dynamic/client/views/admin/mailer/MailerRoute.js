function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/mailer/MailerRoute.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  "default": function () {
    return MailerRoute;
  }
});
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 1);
var usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 2);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 3);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var Mailer;
module.link("./Mailer", {
  Mailer: function (v) {
    Mailer = v;
  }
}, 6);

var useSendMail = function () {
  var meteorSendMail = useMethod('Mailer.sendMail');
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  return function (_ref) {
    var fromEmail = _ref.fromEmail,
        subject = _ref.subject,
        emailBody = _ref.emailBody,
        dryRun = _ref.dryRun,
        query = _ref.query;

    if (query.error) {
      dispatchToastMessage({
        type: 'error',
        message: t('Query_is_not_valid_JSON')
      });
      return;
    }

    if (fromEmail.error || fromEmail.length < 1) {
      dispatchToastMessage({
        type: 'error',
        message: t('error-invalid-from-address')
      });
      return;
    }

    if (emailBody.indexOf('[unsubscribe]') === -1) {
      dispatchToastMessage({
        type: 'error',
        message: t('error-missing-unsubscribe-link')
      });
      return;
    }

    meteorSendMail(fromEmail.value, subject, emailBody, dryRun, query.value);
    dispatchToastMessage({
      type: 'success',
      message: t('The_emails_are_being_sent')
    });
  };
};

function MailerRoute() {
  var canAccessMailer = usePermission('access-mailer');
  var sendMail = useSendMail();

  if (!canAccessMailer) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(Mailer, {
    sendMail: sendMail
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/mailer/434101ed45b6d6cacb17545ecdc346c0dac99bad.map
