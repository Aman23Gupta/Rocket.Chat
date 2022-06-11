function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/users/CloseToSeatsCapModal.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Modal, ButtonGroup, Button, Box;
module.link("@rocket.chat/fuselage", {
  Modal(v) {
    Modal = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let ExternalLink;
module.link("../../../../../client/components/ExternalLink", {
  default(v) {
    ExternalLink = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let MemberCapUsage;
module.link("./SeatsCapUsage", {
  default(v) {
    MemberCapUsage = v;
  }

}, 4);

const CloseToSeatsCapModal = _ref => {
  let {
    members,
    limit,
    title,
    onConfirm,
    onClose,
    requestSeatsLink
  } = _ref;
  const t = useTranslation();
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/users/8b78d8d4191a729e9fbaccb147af7d18fe4e8e4a.map
