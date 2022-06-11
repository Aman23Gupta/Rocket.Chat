function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppUpdateModal.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["confirm", "cancel"];

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

var AppUpdateModal = function (_ref) {
  var confirm = _ref.confirm,
      cancel = _ref.cancel,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();

  var handleCloseButtonClick = function () {
    cancel();
  };

  var handleCancelButtonClick = function () {
    cancel();
  };

  var handleConfirmButtonClick = function () {
    confirm();
  };

  return /*#__PURE__*/React.createElement(Modal, props, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Icon, {
    color: "danger",
    name: "info-circled",
    size: 20
  }), /*#__PURE__*/React.createElement(Modal.Title, null, t('Apps_Manual_Update_Modal_Title')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: handleCloseButtonClick
  })), /*#__PURE__*/React.createElement(Modal.Content, {
    fontScale: "p2"
  }, t('Apps_Manual_Update_Modal_Body')), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    ghost: true,
    onClick: handleCancelButtonClick
  }, t('No')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    onClick: handleConfirmButtonClick
  }, t('Yes')))));
};

module.exportDefault(AppUpdateModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/49268d5f9d0358380f8a3bbe6b2cea533f89d96e.map
