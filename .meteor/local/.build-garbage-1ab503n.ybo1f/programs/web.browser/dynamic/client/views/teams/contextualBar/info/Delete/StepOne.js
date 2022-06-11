function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/Delete/StepOne.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  StepTwo: () => StepTwo
});
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
let ChannelDeletionTable;
module.link("./ChannelDeletionTable", {
  default(v) {
    ChannelDeletionTable = v;
  }

}, 4);

const StepTwo = _ref => {
  let {
    rooms,
    // params,
    // onChangeParams,
    onToggleAllRooms,
    onChangeRoomSelection,
    onConfirm,
    onCancel,
    selectedRooms
  } = _ref;
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(GenericModal, {
    variant: "warning",
    title: t('Teams_about_the_channels'),
    onConfirm: onConfirm,
    onCancel: onCancel,
    onClose: onCancel,
    confirmText: t('Continue')
  }, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    mbe: "x16"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "span",
    color: "danger",
    fontWeight: "bold"
  }, t('Team_Delete_Channel_modal_content_danger')), ' ', t('Teams_delete_team_Warning')), /*#__PURE__*/React.createElement(Box, null, t('Teams_delete_team_choose_channels'), " ", t('Teams_delete_team_public_notice')), /*#__PURE__*/React.createElement(ChannelDeletionTable, {
    onToggleAllRooms: onToggleAllRooms,
    rooms: rooms,
    params: {},
    onChangeParams: () => {},
    onChangeRoomSelection: onChangeRoomSelection,
    selectedRooms: selectedRooms
  }));
};

module.exportDefault(StepTwo);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/Delete/2fc3bfa3c3fc133043a7ceb3b58c140ccb2844ef.map
