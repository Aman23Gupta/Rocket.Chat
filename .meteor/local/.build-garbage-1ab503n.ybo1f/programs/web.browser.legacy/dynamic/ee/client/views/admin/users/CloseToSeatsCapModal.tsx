function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/users/CloseToSeatsCapModal.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Modal, ButtonGroup, Button, Box;
module.link("@rocket.chat/fuselage", {
  Modal: function (v) {
    Modal = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var ExternalLink;
module.link("../../../../../client/components/ExternalLink", {
  "default": function (v) {
    ExternalLink = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var MemberCapUsage;
module.link("./SeatsCapUsage", {
  "default": function (v) {
    MemberCapUsage = v;
  }
}, 4);

var CloseToSeatsCapModal = function (_ref) {
  var members = _ref.members,
      limit = _ref.limit,
      title = _ref.title,
      onConfirm = _ref.onConfirm,
      onClose = _ref.onClose,
      requestSeatsLink = _ref.requestSeatsLink;
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Modal, null, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, title), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(Box, {
    is: "p",
    mbe: "x24"
  }, t('Close_to_seat_limit_warning'), " ", /*#__PURE__*/React.createElement(ExternalLink, {
    to: requestSeatsLink
  }, t('Request_more_seats'))), /*#__PURE__*/React.createElement(MemberCapUsage, {
    members: members,
    limit: limit
  })), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    onClick: onConfirm,
    primary: true
  }, t('Continue')))));
};

module.exportDefault(CloseToSeatsCapModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/users/f8eb1fa7fb52b284efec986c1b7e89d53920d634.map
