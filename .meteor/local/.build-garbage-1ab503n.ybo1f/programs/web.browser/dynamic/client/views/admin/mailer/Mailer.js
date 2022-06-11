function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/mailer/Mailer.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  Mailer: () => Mailer
});
let TextInput, TextAreaInput, Field, FieldGroup, CheckBox, Button, Icon, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  TextInput(v) {
    TextInput = v;
  },

  TextAreaInput(v) {
    TextAreaInput = v;
  },

  Field(v) {
    Field = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  CheckBox(v) {
    CheckBox = v;
  },

  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  }

}, 0);
let React, useState, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let validateEmail;
module.link("../../../../lib/emailValidator", {
  validateEmail(v) {
    validateEmail = v;
  }

}, 2);
let isJSON;
module.link("../../../../lib/utils/isJSON", {
  isJSON(v) {
    isJSON = v;
  }

}, 3);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);

function Mailer(_ref) {
  let {
    sendMail = () => {}
  } = _ref;
  const t = useTranslation();
  const [fromEmail, setFromEmail] = useState({
    value: ''
  });
  const [dryRun, setDryRun] = useState(false);
  const [query, setQuery] = useState({
    value: ''
  });
  const [subject, setSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Mailer')
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: () => {
      sendMail({
        fromEmail,
        dryRun,
        query,
        subject,
        emailBody
      });
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "send",
    size: "x20",
    mie: "x8"
  }), t('Send_email')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, {
    alignSelf: "center",
    w: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(FieldGroup, {
    maxWidth: "x600",
    is: "form",
    onSubmit: useCallback(e => e.preventDefault(), []),
    method: "post"
  }, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('From')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    id: "fromEmail",
    placeholder: t('Type_your_email'),
    value: fromEmail.value,
    error: fromEmail.error,
    onChange: e => {
      setFromEmail({
        value: e.currentTarget.value,
        error: !validateEmail(e.currentTarget.value) ? t('Invalid_Email') : undefined
      });
    }
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    id: "dryRun",
    checked: dryRun,
    onChange: () => setDryRun(!dryRun)
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: "dry-run"
  }, t('Dry_run'))), /*#__PURE__*/React.createElement(Field.Hint, null, t('Dry_run_description'))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Query')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    id: "query",
    value: query.value,
    error: query.error,
    onChange: e => {
      setQuery({
        value: e.currentTarget.value,
        error: e.currentTarget.value && !isJSON(e.currentTarget.value) ? t('Invalid_JSON') : undefined
      });
    }
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Query_description'))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Subject')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    id: "subject",
    value: subject.value,
    error: subject.error,
    onChange: e => {
      setSubject(e.currentTarget.value);
    }
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Email_body')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    id: "emailBody",
    rows: 10,
    value: emailBody,
    onChange: e => setEmailBody(e.currentTarget.value)
  })), /*#__PURE__*/React.createElement(Field.Hint, {
    dangerouslySetInnerHTML: {
      __html: t('Mailer_body_tags')
    }
  })))));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/mailer/aa2204531075ef1321335723504d60f6a91bbf3c.map
