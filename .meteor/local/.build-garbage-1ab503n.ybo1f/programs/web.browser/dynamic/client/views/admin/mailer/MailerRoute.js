function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/mailer/MailerRoute.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => MailerRoute
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 1);
let usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 2);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 3);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let Mailer;
module.link("./Mailer", {
  Mailer(v) {
    Mailer = v;
  }

}, 6);

const useSendMail = () => {
  const meteorSendMail = useMethod('Mailer.sendMail');
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  return _ref => {
    let {
      fromEmail,
      subject,
      emailBody,
      dryRun,
      query
    } = _ref;

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
  const canAccessMailer = usePermission('access-mailer');
  const sendMail = useSendMail();

  if (!canAccessMailer) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(Mailer, {
    sendMail: sendMail
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/mailer/e94601b44371d53478e7fce66741b5e558f1c3d5.map
