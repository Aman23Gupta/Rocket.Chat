function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/InviteUsers.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["data"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
module.export({
  InviteUsers: () => InviteUsers
});
let Box, Button, Icon, TextAreaInput;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  },

  TextAreaInput(v) {
    TextAreaInput = v;
  }

}, 0);
let React, useCallback, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let validateEmail;
module.link("../../../../lib/emailValidator", {
  validateEmail(v) {
    validateEmail = v;
  }

}, 2);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 3);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 4);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 5);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);

function InviteUsers(_ref) {
  let {
    data
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const [text, setText] = useState('');
  const sendInvites = useMethod('sendInvitationEmail');
  const getEmails = useCallback(text => text.split(/[\ ,;]+/i).filter(val => validateEmail(val)), []);

  const handleClick = async () => {
    try {
      await sendInvites(getEmails(text));
      dispatchToastMessage({
        type: 'success',
        message: t('Emails_sent_successfully!')
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error.message
      });
    }
  };

  return /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, props, /*#__PURE__*/React.createElement(Box, {
    is: "h2",
    fontScale: "h2",
    mb: "x8"
  }, t('Send_invitation_email')), /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2",
    mb: "x8"
  }, t('Send_invitation_email_info')), /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 5,
    flexGrow: 0,
    onChange: e => setText(e.currentTarget.value)
  }), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleClick,
    disabled: !getEmails(text).length,
    alignItems: "stretch",
    mb: "x8"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "send",
    size: "x16"
  }), t('Send')));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/users/d504df07209c00943543456e730d5ed064610540.map
