function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppUpdateModal.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["confirm", "cancel"];

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

const AppUpdateModal = _ref => {
  let {
    confirm,
    cancel
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();

  const handleCloseButtonClick = () => {
    cancel();
  };

  const handleCancelButtonClick = () => {
    cancel();
  };

  const handleConfirmButtonClick = () => {
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
//# sourceMappingURL=/dynamic/client/views/admin/apps/3095a031e895c7f6a85e0b7d8a85aff3e810ae24.map
