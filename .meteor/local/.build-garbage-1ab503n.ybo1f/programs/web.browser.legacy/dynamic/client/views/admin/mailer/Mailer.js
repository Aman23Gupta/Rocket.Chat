function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/mailer/Mailer.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
module.export({
  Mailer: function () {
    return Mailer;
  }
});
var TextInput, TextAreaInput, Field, FieldGroup, CheckBox, Button, Icon, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  TextInput: function (v) {
    TextInput = v;
  },
  TextAreaInput: function (v) {
    TextAreaInput = v;
  },
  Field: function (v) {
    Field = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  CheckBox: function (v) {
    CheckBox = v;
  },
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  }
}, 0);
var React, useState, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var validateEmail;
module.link("../../../../lib/emailValidator", {
  validateEmail: function (v) {
    validateEmail = v;
  }
}, 2);
var isJSON;
module.link("../../../../lib/utils/isJSON", {
  isJSON: function (v) {
    isJSON = v;
  }
}, 3);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);

function Mailer(_ref) {
  var _ref$sendMail = _ref.sendMail,
      sendMail = _ref$sendMail === void 0 ? function () {} : _ref$sendMail;
  var t = useTranslation();

  var _useState = useState({
    value: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      fromEmail = _useState2[0],
      setFromEmail = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      dryRun = _useState4[0],
      setDryRun = _useState4[1];

  var _useState5 = useState({
    value: ''
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      query = _useState6[0],
      setQuery = _useState6[1];

  var _useState7 = useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      subject = _useState8[0],
      setSubject = _useState8[1];

  var _useState9 = useState(''),
      _useState10 = _slicedToArray(_useState9, 2),
      emailBody = _useState10[0],
      setEmailBody = _useState10[1];

  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Mailer')
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: function () {
      sendMail({
        fromEmail: fromEmail,
        dryRun: dryRun,
        query: query,
        subject: subject,
        emailBody: emailBody
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
    onSubmit: useCallback(function (e) {
      return e.preventDefault();
    }, []),
    method: "post"
  }, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('From')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    id: "fromEmail",
    placeholder: t('Type_your_email'),
    value: fromEmail.value,
    error: fromEmail.error,
    onChange: function (e) {
      setFromEmail({
        value: e.currentTarget.value,
        error: !validateEmail(e.currentTarget.value) ? t('Invalid_Email') : undefined
      });
    }
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    id: "dryRun",
    checked: dryRun,
    onChange: function () {
      return setDryRun(!dryRun);
    }
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: "dry-run"
  }, t('Dry_run'))), /*#__PURE__*/React.createElement(Field.Hint, null, t('Dry_run_description'))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Query')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    id: "query",
    value: query.value,
    error: query.error,
    onChange: function (e) {
      setQuery({
        value: e.currentTarget.value,
        error: e.currentTarget.value && !isJSON(e.currentTarget.value) ? t('Invalid_JSON') : undefined
      });
    }
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Query_description'))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Subject')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    id: "subject",
    value: subject.value,
    error: subject.error,
    onChange: function (e) {
      setSubject(e.currentTarget.value);
    }
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Email_body')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    id: "emailBody",
    rows: 10,
    value: emailBody,
    onChange: function (e) {
      return setEmailBody(e.currentTarget.value);
    }
  })), /*#__PURE__*/React.createElement(Field.Hint, {
    dangerouslySetInnerHTML: {
      __html: t('Mailer_body_tags')
    }
  })))));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/mailer/3aea6185f67431a2f228f884b0493ef62f0faafd.map
