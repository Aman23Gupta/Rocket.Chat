function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/channels/ConfirmationModal/ConfirmationModal.tsx                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, ButtonGroup, Button, Icon, Modal;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Modal: function (v) {
    Modal = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var ConfirmationModal = function (_ref) {
  var onClose = _ref.onClose,
      onConfirmAction = _ref.onConfirmAction,
      labelButton = _ref.labelButton,
      content = _ref.content;
  var t = useTranslation();

  var handleConfirm = function () {
    onConfirmAction();
    onClose();
  };

  return /*#__PURE__*/React.createElement(Modal, null, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, {
    display: "flex"
  }, /*#__PURE__*/React.createElement(Box, {
    mie: "x12"
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "x20",
    name: "modal-warning",
    color: "warning-700"
  })), t('Confirmation')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, null, content), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    onClick: handleConfirm,
    primary: true,
    danger: true
  }, labelButton))));
};

module.exportDefault( /*#__PURE__*/memo(ConfirmationModal));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/channels/ConfirmationModal/0b01a83f6a785d6ee5c34014bad50ecf2f56d0e0.map
