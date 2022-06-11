function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/users/ReachedSeatsCapModal.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Icon, Modal, ButtonGroup, Button, Box;
module.link("@rocket.chat/fuselage", {
  Icon(v) {
    Icon = v;
  },

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
let SeatsCapUsage;
module.link("./SeatsCapUsage", {
  default(v) {
    SeatsCapUsage = v;
  }

}, 4);

const ReachedSeatsCapModal = _ref => {
  let {
    members,
    limit,
    onClose,
    requestSeatsLink
  } = _ref;
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Modal, null, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, t('Request_more_seats_title')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(Box, {
    is: "p",
    mbe: "x16"
  }, t('Request_more_seats_out_of_seats')), /*#__PURE__*/React.createElement(Box, {
    is: "p",
    mbe: "x24"
  }, t('Request_more_seats_sales_team')), /*#__PURE__*/React.createElement(SeatsCapUsage, {
    members: members,
    limit: limit
  })), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose
  }, t('Cancel')), /*#__PURE__*/React.createElement(ExternalLink, {
    to: requestSeatsLink
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose,
    primary: true
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "new-window",
    size: "x20",
    mie: "x4"
  }), t('Request'))))));
};

module.exportDefault(ReachedSeatsCapModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/users/0a6c2d0ab421858e632452c94ce450a093e0131a.map
