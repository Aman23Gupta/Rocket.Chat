function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Omnichannel/modals/ReturnChatQueueModal.tsx                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onCancel", "onMoveChat"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let Box, Button, ButtonGroup, Icon, Modal;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Icon(v) {
    Icon = v;
  },

  Modal(v) {
    Modal = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const ReturnChatQueueModal = _ref => {
  let {
    onCancel,
    onMoveChat
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Modal, props, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Icon, {
    name: "burger-arrow-left",
    size: 20
  }), /*#__PURE__*/React.createElement(Modal.Title, null, t('Return_to_the_queue')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onCancel
  })), /*#__PURE__*/React.createElement(Modal.Content, {
    fontScale: "p2"
  }, t('Would_you_like_to_return_the_queue')), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onCancel
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: onMoveChat
  }, t('Confirm'))))));
};

module.exportDefault(ReturnChatQueueModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Omnichannel/modals/9a5c5af8547e17fd82052806fd1c0a52ffd2b47a.map
