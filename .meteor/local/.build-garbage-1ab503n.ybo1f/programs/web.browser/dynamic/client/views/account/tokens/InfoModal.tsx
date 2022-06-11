function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/tokens/InfoModal.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["title", "content", "icon", "confirmText", "cancelText", "onConfirm", "onClose"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let Button, ButtonGroup, Modal;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
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

const InfoModal = _ref => {
  let {
    title,
    content,
    icon,
    confirmText,
    cancelText,
    onConfirm,
    onClose
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Modal, props, /*#__PURE__*/React.createElement(Modal.Header, null, icon, /*#__PURE__*/React.createElement(Modal.Title, null, title), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, {
    fontScale: "p2"
  }, content), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, cancelText && /*#__PURE__*/React.createElement(Button, {
    onClick: onClose
  }, cancelText), confirmText && onConfirm && /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: onConfirm
  }, confirmText))));
};

module.exportDefault(InfoModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/tokens/f2bf5e487e1c4ddceab128f1b2737d7e72921a1b.map
