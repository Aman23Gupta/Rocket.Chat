function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/CloudLoginModal.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 2);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);

var CloudLoginModal = function () {
  var t = useTranslation();
  var setModal = useSetModal();
  var cloudRoute = useRoute('cloud');

  var handleCloseButtonClick = function () {
    setModal(null);
  };

  var handleCancelButtonClick = function () {
    setModal(null);
  };

  var handleLoginButtonClick = function () {
    cloudRoute.push();
    setModal(null);
  };

  return /*#__PURE__*/React.createElement(Modal, null, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Icon, {
    color: "danger",
    name: "info-circled",
    size: 20
  }), /*#__PURE__*/React.createElement(Modal.Title, null, t('Apps_Marketplace_Login_Required_Title')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: handleCloseButtonClick
  })), /*#__PURE__*/React.createElement(Modal.Content, {
    fontScale: "p2"
  }, t('Apps_Marketplace_Login_Required_Description')), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    ghost: true,
    onClick: handleCancelButtonClick
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    onClick: handleLoginButtonClick
  }, t('Login')))));
};

module.exportDefault(CloudLoginModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/a6b01aa1e83ef5e969f78ecf5966a91ecb1e85a0.map
