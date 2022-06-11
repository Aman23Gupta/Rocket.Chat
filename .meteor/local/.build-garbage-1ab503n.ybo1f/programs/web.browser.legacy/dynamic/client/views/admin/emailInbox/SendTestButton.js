function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/emailInbox/SendTestButton.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Button, Table, Icon;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Table: function (v) {
    Table = v;
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
var useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 2);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);

function SendTestButton(_ref) {
  var id = _ref.id;
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var sendTest = useEndpoint('POST', "email-inbox.send-test/" + id);
  return /*#__PURE__*/React.createElement(Table.Cell, {
    fontScale: "p2",
    color: "hint",
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(Button, {
    small: true,
    ghost: true,
    title: t('Send_Test_Email'),
    onClick: function (e) {
      return e.preventDefault() & e.stopPropagation() & sendTest() & dispatchToastMessage({
        type: 'success',
        message: t('Email_sent')
      });
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "send",
    size: "x20"
  })));
}

module.exportDefault(SendTestButton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/emailInbox/d93239f03dfc212c099551ac8f0d626ae8d53c1b.map
