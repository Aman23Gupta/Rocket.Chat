function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/WarningModal.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["text", "confirmText", "close", "cancel", "cancelText", "confirm"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);
var Button, ButtonGroup, Icon, Modal;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Icon: function (v) {
    Icon = v;
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
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var WarningModal = function (_ref) {
  var text = _ref.text,
      confirmText = _ref.confirmText,
      close = _ref.close,
      cancel = _ref.cancel,
      cancelText = _ref.cancelText,
      confirm = _ref.confirm,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/admin/apps/0450297be9a31ec2345ccbb0e19542965cefbfb7.map
