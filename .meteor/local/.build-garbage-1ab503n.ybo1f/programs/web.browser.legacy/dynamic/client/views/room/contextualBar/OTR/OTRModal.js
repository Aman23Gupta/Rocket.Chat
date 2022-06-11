function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/OTR/OTRModal.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onCancel", "onConfirm", "confirmLabel"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);
var Button, Box, ButtonGroup, Icon, Modal;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Box: function (v) {
    Box = v;
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
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var OTRModal = function (_ref) {
  var onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm,
      _ref$confirmLabel = _ref.confirmLabel,
      confirmLabel = _ref$confirmLabel === void 0 ? 'Ok' : _ref$confirmLabel,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Modal, props, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, t('Timeout')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onCancel
  })), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(Box, {
    textAlign: "center",
    color: "danger-500"
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "x82",
    name: "circle-cross"
  }))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: onConfirm
  }, confirmLabel))));
};

module.exportDefault(OTRModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/OTR/d40ff225ea978f30fc2f674d25f12bc60939b2df.map
