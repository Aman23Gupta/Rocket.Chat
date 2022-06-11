function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/ConvertToChannelModal/ModalSteps/FirstStep.tsx                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onClose", "onCancel", "onConfirm", "rooms", "onToggleAllRooms", "onChangeRoomSelection", "selectedRooms", "eligibleRoomsLength"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
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
module.link("../../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 2);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let ChannelDesertionTable;
module.link("../../ChannelDesertionTable", {
  default(v) {
    ChannelDesertionTable = v;
  }

}, 4);

const FirstStep = _ref => {
  let {
    onClose,
    onCancel,
    onConfirm,
    rooms,
    onToggleAllRooms,
    onChangeRoomSelection,
    selectedRooms,
    eligibleRoomsLength
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/teams/ConvertToChannelModal/ModalSteps/40e508a616575654d17f616d1dc0499b38d6dd65.map
