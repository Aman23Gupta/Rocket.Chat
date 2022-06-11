function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/users/ReachedSeatsCapModal.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Icon, Modal, ButtonGroup, Button, Box;
module.link("@rocket.chat/fuselage", {
  Icon: function (v) {
    Icon = v;
  },
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
var SeatsCapUsage;
module.link("./SeatsCapUsage", {
  "default": function (v) {
    SeatsCapUsage = v;
  }
}, 4);

var ReachedSeatsCapModal = function (_ref) {
  var members = _ref.members,
      limit = _ref.limit,
      onClose = _ref.onClose,
      requestSeatsLink = _ref.requestSeatsLink;
  var t = useTranslation();
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/users/2d4ad6a46f494e31bb8bffd2ad593fd668a6a4e1.map
