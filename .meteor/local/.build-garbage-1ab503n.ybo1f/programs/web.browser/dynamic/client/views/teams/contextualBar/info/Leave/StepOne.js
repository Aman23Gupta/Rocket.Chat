function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/Leave/StepOne.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  StepOne: () => StepOne
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let GenericModal;
module.link("../../../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 1);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let ChannelDesertionTable;
module.link("../../../ChannelDesertionTable", {
  default(v) {
    ChannelDesertionTable = v;
  }

}, 3);

const StepOne = _ref => {
  let {
    rooms,
    lastOwnerRooms,
    // params,
    // onChangeParams,
    onToggleAllRooms,
    onChangeRoomSelection,
    onConfirm,
    onCancel,
    eligibleRoomsLength,
    selectedRooms
  } = _ref;
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(GenericModal, {
    variant: "warning",
    title: t('Teams_leave'),
    onConfirm: onConfirm,
    onCancel: onCancel,
    onClose: onCancel,
    confirmText: t('Continue')
  }, t('Teams_leave_channels'), /*#__PURE__*/React.createElement(ChannelDesertionTable, {
    lastOwnerWarning: t('Teams_channels_last_owner_leave_channel_warning'),
    onToggleAllRooms: onToggleAllRooms,
    lastOwnerRooms: lastOwnerRooms,
    eligibleRoomsLength: eligibleRoomsLength,
    rooms: rooms,
    params: {},
    onChangeParams: () => {},
    onChangeRoomSelection: onChangeRoomSelection,
    selectedRooms: selectedRooms
  }));
};

module.exportDefault(StepOne);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/Leave/ca73b68343c039c1baf14dc6312802a898cbc854.map
