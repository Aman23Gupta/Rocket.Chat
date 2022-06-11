function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/tokens/InfoModal.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["title", "content", "icon", "confirmText", "cancelText", "onConfirm", "onClose"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);
var Button, ButtonGroup, Modal;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Modal: function (v) {
    Modal = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var InfoModal = function (_ref) {
  var title = _ref.title,
      content = _ref.content,
      icon = _ref.icon,
      confirmText = _ref.confirmText,
      cancelText = _ref.cancelText,
      onConfirm = _ref.onConfirm,
      onClose = _ref.onClose,
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
//# sourceMappingURL=/dynamic/client/views/account/tokens/5899c09d3a07b0dbb3975d66874eb7d44f48c907.map
