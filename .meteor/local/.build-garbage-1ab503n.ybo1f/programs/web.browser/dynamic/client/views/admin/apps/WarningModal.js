function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/WarningModal.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["text", "confirmText", "close", "cancel", "cancelText", "confirm"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let Button, ButtonGroup, Icon, Modal;
module.link("@rocket.chat/fuselage", {
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

const WarningModal = _ref => {
  let {
    text,
    confirmText,
    close,
    cancel,
    cancelText,
    confirm
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Modal, props, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Icon, {
    color: "danger",
    name: "modal-warning",
    size: 20
  }), /*#__PURE__*/React.createElement(Modal.Title, null, t('Are_you_sure')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: close
  })), /*#__PURE__*/React.createElement(Modal.Content, {
    fontScale: "p2"
  }, text), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    ghost: true,
    onClick: cancel || close
  }, cancelText || t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    onClick: confirm
  }, confirmText))));
};

module.exportDefault(WarningModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/e71f47b019651a3db7b687bd5b43ff4beb6109e1.map
