function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppPermissionsReviewModal.js                                                                //
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
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var AppPermissionsReviewModal = function (_ref) {
  var appPermissions = _ref.appPermissions,
      cancel = _ref.cancel,
      confirm = _ref.confirm,
      _ref$modalProps = _ref.modalProps,
      modalProps = _ref$modalProps === void 0 ? {} : _ref$modalProps;
  var t = useTranslation();

  var handleCloseButtonClick = function () {
    cancel();
  };

  var handleCancelButtonClick = function () {
    cancel();
  };

  var handleConfirmButtonClick = function () {
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
  }, /*#__PURE__*/React.createElement("ul", null, appPermissions.length ? appPermissions.map(function (permission, count) {
    return /*#__PURE__*/React.createElement("li", {
      key: permission.name
    }, /*#__PURE__*/React.createElement("b", null, count + 1, " - "), t("Apps_Permissions_" + permission.name.replace('.', '_')), permission.required && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'red'
      }
    }, " (", t('required'), ")"));
  }) : t('Apps_Permissions_No_Permissions_Required'))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
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
//# sourceMappingURL=/dynamic/client/views/admin/apps/929ea31c4141a0391176e2a82351c089f193e82c.map
