function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/ConvertToChannelModal/ModalSteps/FirstStep.tsx                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onClose", "onCancel", "onConfirm", "rooms", "onToggleAllRooms", "onChangeRoomSelection", "selectedRooms", "eligibleRoomsLength"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
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
module.link("../../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 2);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var ChannelDesertionTable;
module.link("../../ChannelDesertionTable", {
  "default": function (v) {
    ChannelDesertionTable = v;
  }
}, 4);

var FirstStep = function (_ref) {
  var onClose = _ref.onClose,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm,
      rooms = _ref.rooms,
      onToggleAllRooms = _ref.onToggleAllRooms,
      onChangeRoomSelection = _ref.onChangeRoomSelection,
      selectedRooms = _ref.selectedRooms,
      eligibleRoomsLength = _ref.eligibleRoomsLength,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  return /*#__PURE__*/React.createElement(GenericModal, _extends({
    variant: "warning",
    icon: "warning",
    title: t('Converting_team_to_channel'),
    cancelText: t('Cancel'),
    confirmText: t('Continue'),
    onClose: onClose,
    onCancel: onCancel,
    onConfirm: onConfirm
  }, props), /*#__PURE__*/React.createElement(Box, {
    mbe: "x24",
    fontScale: "p2"
  }, t('Select_the_teams_channels_you_would_like_to_delete')), /*#__PURE__*/React.createElement(Box, {
    mbe: "x24",
    fontScale: "p2"
  }, t('Notice_that_public_channels_will_be_public_and_visible_to_everyone')), /*#__PURE__*/React.createElement(ChannelDesertionTable, {
    lastOwnerWarning: undefined,
    onToggleAllRooms: onToggleAllRooms,
    rooms: rooms,
    onChangeRoomSelection: onChangeRoomSelection,
    selectedRooms: selectedRooms,
    eligibleRoomsLength: eligibleRoomsLength
  }));
};

module.exportDefault(FirstStep);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/ConvertToChannelModal/ModalSteps/60c825d94f42a5be384cbdaa05b820145ffd26d3.map
