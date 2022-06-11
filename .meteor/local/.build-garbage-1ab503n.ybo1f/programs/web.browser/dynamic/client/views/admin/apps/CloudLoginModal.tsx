function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/CloudLoginModal.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 2);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);

const CloudLoginModal = () => {
  const t = useTranslation();
  const setModal = useSetModal();
  const cloudRoute = useRoute('cloud');

  const handleCloseButtonClick = () => {
    setModal(null);
  };

  const handleCancelButtonClick = () => {
    setModal(null);
  };

  const handleLoginButtonClick = () => {
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
//# sourceMappingURL=/dynamic/client/views/admin/apps/01ee80d8fa87a5d9507fa769a924767cd089754e.map
