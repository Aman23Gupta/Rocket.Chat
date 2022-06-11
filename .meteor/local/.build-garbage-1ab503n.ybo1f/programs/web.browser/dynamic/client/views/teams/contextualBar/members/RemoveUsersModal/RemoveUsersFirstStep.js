function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/members/RemoveUsersModal/RemoveUsersFirstStep.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onClose", "onCancel", "onConfirm", "username", "results", "rooms", "onToggleAllRooms", "onChangeRoomSelection", "selectedRooms", "eligibleRoomsLength"];

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
let ChannelDesertionTable;
module.link("../../../ChannelDesertionTable", {
  default(v) {
    ChannelDesertionTable = v;
  }

}, 4);

const RemoveUsersFirstStep = _ref => {
  let {
    onClose,
    onCancel,
    onConfirm,
    username,
    results,
    rooms,
    // params,
    // onChangeParams,
    onToggleAllRooms,
    onChangeRoomSelection,
    selectedRooms,
    // onChangeParams={(...args) => console.log(args)}
    eligibleRoomsLength
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
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
    onChangeParams: () => {},
    onChangeRoomSelection: onChangeRoomSelection,
    selectedRooms: selectedRooms,
    eligibleRoomsLength: eligibleRoomsLength
  }));
};

module.exportDefault(RemoveUsersFirstStep);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/members/RemoveUsersModal/07bcd049dc934d6e5c6204fdb836702026e1d5f0.map
