function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/Leave/StepOne.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  StepOne: function () {
    return StepOne;
  }
});
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var GenericModal;
module.link("../../../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 1);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var ChannelDesertionTable;
module.link("../../../ChannelDesertionTable", {
  "default": function (v) {
    ChannelDesertionTable = v;
  }
}, 3);

var StepOne = function (_ref) {
  var rooms = _ref.rooms,
      lastOwnerRooms = _ref.lastOwnerRooms,
      onToggleAllRooms = _ref.onToggleAllRooms,
      onChangeRoomSelection = _ref.onChangeRoomSelection,
      onConfirm = _ref.onConfirm,
      onCancel = _ref.onCancel,
      eligibleRoomsLength = _ref.eligibleRoomsLength,
      selectedRooms = _ref.selectedRooms;
  var t = useTranslation();
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
    onChangeParams: function () {},
    onChangeRoomSelection: onChangeRoomSelection,
    selectedRooms: selectedRooms
  }));
};

module.exportDefault(StepOne);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/Leave/d740fa87d0c94d6abb96289ce3ea0fc0c886cf46.map
