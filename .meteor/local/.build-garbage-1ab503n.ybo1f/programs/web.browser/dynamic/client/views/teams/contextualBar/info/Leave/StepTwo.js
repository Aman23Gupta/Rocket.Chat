function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/Leave/StepTwo.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  StepTwo: () => StepTwo
});
let Icon;
module.link("@rocket.chat/fuselage", {
  Icon(v) {
    Icon = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let GenericModal;
module.link("../../../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const StepTwo = _ref => {
  let {
    onConfirm,
    onCancel,
    onClose
  } = _ref;
  const t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/Leave/a2a40be372876e1ada90af43d37b4856bd1d01bf.map
