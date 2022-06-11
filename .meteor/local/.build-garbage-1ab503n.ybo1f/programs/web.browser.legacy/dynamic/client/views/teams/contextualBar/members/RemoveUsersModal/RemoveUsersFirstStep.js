function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/members/RemoveUsersModal/RemoveUsersFirstStep.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onClose", "onCancel", "onConfirm", "username", "results", "rooms", "onToggleAllRooms", "onChangeRoomSelection", "selectedRooms", "eligibleRoomsLength"];

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
var ChannelDesertionTable;
module.link("../../../ChannelDesertionTable", {
  "default": function (v) {
    ChannelDesertionTable = v;
  }
}, 4);

var RemoveUsersFirstStep = function (_ref) {
  var onClose = _ref.onClose,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm,
      username = _ref.username,
      results = _ref.results,
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
    title: t('Teams_removing_member'),
    cancelText: t('Cancel'),
    confirmText: t('Continue'),
    onClose: onClose,
    onCancel: onCancel,
    onConfirm: onConfirm
  }, props), /*#__PURE__*/React.createElement(Box, {
    mbe: "x24",
    fontScale: "p2"
  }, t('Select_the_channels_you_want_the_user_to_be_removed_from')), /*#__PURE__*/React.createElement(ChannelDesertionTable, {
    lastOwnerWarning: t('Teams_channels_last_owner_leave_channel_warning'),
    onToggleAllRooms: onToggleAllRooms,
    rooms: rooms,
    params: {},
    onChangeParams: function () {},
    onChangeRoomSelection: onChangeRoomSelection,
    selectedRooms: selectedRooms,
    eligibleRoomsLength: eligibleRoomsLength
  }));
};

module.exportDefault(RemoveUsersFirstStep);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/members/RemoveUsersModal/6902abd8f859cac24f720b6faa226d1d14fcf9a1.map
