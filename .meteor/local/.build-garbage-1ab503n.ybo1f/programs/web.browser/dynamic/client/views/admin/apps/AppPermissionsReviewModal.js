function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppPermissionsReviewModal.js                                                                //
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
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const AppPermissionsReviewModal = _ref => {
  let {
    appPermissions,
    cancel,
    confirm,
    modalProps = {}
  } = _ref;
  const t = useTranslation();

  const handleCloseButtonClick = () => {
    cancel();
  };

  const handleCancelButtonClick = () => {
    cancel();
  };

  const handleConfirmButtonClick = () => {
    confirm(appPermissions);
  };

  return /*#__PURE__*/React.createElement(Modal, modalProps, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Icon, {
    color: "warning",
    name: "modal-warning",
    size: 25
  }), /*#__PURE__*/React.createElement(Modal.Title, null, t('Apps_Permissions_Review_Modal_Title')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: handleCloseButtonClick
  })), /*#__PURE__*/React.createElement(Modal.Content, {
    marginBlockEnd: 20,
    fontScale: "p2"
  }, t('Apps_Permissions_Review_Modal_Subtitle')), /*#__PURE__*/React.createElement(Modal.Content, {
    fontScale: "p2"
  }, /*#__PURE__*/React.createElement("ul", null, appPermissions.length ? appPermissions.map((permission, count) => /*#__PURE__*/React.createElement("li", {
    key: permission.name
  }, /*#__PURE__*/React.createElement("b", null, count + 1, " - "), t("Apps_Permissions_".concat(permission.name.replace('.', '_'))), permission.required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'red'
    }
  }, " (", t('required'), ")"))) : t('Apps_Permissions_No_Permissions_Required'))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    ghost: true,
    onClick: handleCancelButtonClick
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleConfirmButtonClick
  }, t('Agree')))));
};

module.exportDefault(AppPermissionsReviewModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/b7e4d7c58d400e0e2842e74ec90f679f3aca6d8d.map
