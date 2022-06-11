function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/Delete/StepOne.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  StepTwo: function () {
    return StepTwo;
  }
});
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
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
var ChannelDeletionTable;
module.link("./ChannelDeletionTable", {
  "default": function (v) {
    ChannelDeletionTable = v;
  }
}, 4);

var StepTwo = function (_ref) {
  var rooms = _ref.rooms,
      onToggleAllRooms = _ref.onToggleAllRooms,
      onChangeRoomSelection = _ref.onChangeRoomSelection,
      onConfirm = _ref.onConfirm,
      onCancel = _ref.onCancel,
      selectedRooms = _ref.selectedRooms;
  var t = useTranslation();
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
    onChangeParams: function () {},
    onChangeRoomSelection: onChangeRoomSelection,
    selectedRooms: selectedRooms
  }));
};

module.exportDefault(StepTwo);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/Delete/ab75f42949834f8995a67b9a510a75453e315f3a.map
