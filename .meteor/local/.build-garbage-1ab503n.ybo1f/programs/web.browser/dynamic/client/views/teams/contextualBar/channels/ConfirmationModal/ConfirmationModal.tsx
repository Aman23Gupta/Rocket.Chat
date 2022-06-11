function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/channels/ConfirmationModal/ConfirmationModal.tsx                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, ButtonGroup, Button, Icon, Modal;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  },

  Modal(v) {
    Modal = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const ConfirmationModal = _ref => {
  let {
    onClose,
    onConfirmAction,
    labelButton,
    content
  } = _ref;
  const t = useTranslation();

  const handleConfirm = () => {
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
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/channels/ConfirmationModal/521e3b41662588aef8dbd1260c46fd92d8a8f733.map
