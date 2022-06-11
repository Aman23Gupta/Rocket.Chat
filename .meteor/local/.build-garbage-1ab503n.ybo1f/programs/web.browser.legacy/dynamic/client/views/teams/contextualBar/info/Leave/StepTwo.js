function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/Leave/StepTwo.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  StepTwo: function () {
    return StepTwo;
  }
});
var Icon;
module.link("@rocket.chat/fuselage", {
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var GenericModal;
module.link("../../../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var StepTwo = function (_ref) {
  var onConfirm = _ref.onConfirm,
      onCancel = _ref.onCancel,
      onClose = _ref.onClose;
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(GenericModal, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "modal-warning",
      size: 24,
      color: "warning"
    }),
    variant: "danger",
    title: t('Confirmation'),
    onConfirm: onConfirm,
    onCancel: onCancel || onClose,
    onClose: onClose,
    confirmText: t('Leave'),
    cancelText: onCancel ? t('Back') : t('Cancel')
  }, t('Teams_leaving_team'));
};

module.exportDefault(StepTwo);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/Leave/47d8271d5fb18dd441c2f3f2cec8492209058db6.map
