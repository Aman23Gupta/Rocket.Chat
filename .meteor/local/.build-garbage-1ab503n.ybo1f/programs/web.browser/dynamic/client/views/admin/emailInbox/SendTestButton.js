function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/emailInbox/SendTestButton.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, Table, Icon;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Table(v) {
    Table = v;
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
let useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 2);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);

function SendTestButton(_ref) {
  let {
    id
  } = _ref;
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const sendTest = useEndpoint('POST', "email-inbox.send-test/".concat(id));
  return /*#__PURE__*/React.createElement(Table.Cell, {
    fontScale: "p2",
    color: "hint",
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(Button, {
    small: true,
    ghost: true,
    title: t('Send_Test_Email'),
    onClick: e => e.preventDefault() & e.stopPropagation() & sendTest() & dispatchToastMessage({
      type: 'success',
      message: t('Email_sent')
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "send",
    size: "x20"
  })));
}

module.exportDefault(SendTestButton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/emailInbox/8cc8a1ed2097a23a4158d31b4a2638d103569cee.map
