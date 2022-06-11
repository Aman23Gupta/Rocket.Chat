function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Info/ChannelToTeamModal/StepTwo.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
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
    onClose,
    onCancel,
    onConfirm
  } = _ref;
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(GenericModal, {
    variant: "warning",
    icon: "warning",
    title: t('Confirmation'),
    confirmText: "Yes",
    onClose: onClose,
    onCancel: onCancel,
    onConfirm: onConfirm
  }, /*#__PURE__*/React.createElement(Box, null, t('Teams_move_channel_to_team_confirm_description')));
};

module.exportDefault(StepTwo);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Info/ChannelToTeamModal/e5c6982d35455e5285fd90c0ee710c09df975df3.map
