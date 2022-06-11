function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/ChannelDesertionTable.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, CheckBox;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  CheckBox(v) {
    CheckBox = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let GenericTable;
module.link("../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 2);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useFormatDateAndTime;
module.link("../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime(v) {
    useFormatDateAndTime = v;
  }

}, 4);
let ChannelRow;
module.link("./contextualBar/ChannelRow", {
  default(v) {
    ChannelRow = v;
  }

}, 5);

const ChannelDesertionTable = _ref => {
  let {
    rooms,
    eligibleRoomsLength,
    params,
    onChangeParams,
    onChangeRoomSelection,
    selectedRooms,
    onToggleAllRooms,
    lastOwnerWarning
  } = _ref;
  const t = useTranslation();
  const selectedRoomsLength = Object.values(selectedRooms).filter(Boolean).length;
  const checked = eligibleRoomsLength === selectedRoomsLength;
  const indeterminate = eligibleRoomsLength && eligibleRoomsLength > selectedRoomsLength ? selectedRoomsLength > 0 : false;
  const formatDate = useFormatDateAndTime();
  return /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    height: "x200",
    mbs: "x24"
  }, /*#__PURE__*/React.createElement(GenericTable, {
    header: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: "name",
      sort: "name"
    }, /*#__PURE__*/React.createElement(CheckBox, {
      indeterminate: indeterminate,
      checked: checked,
      onChange: onToggleAllRooms
    }), /*#__PURE__*/React.createElement(Box, {
      mi: "x8"
    }, t('Channel_name'))), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: "joinedAt",
      sort: "joinedAt"
    }, /*#__PURE__*/React.createElement(Box, {
      width: "100%",
      textAlign: "end"
    }, t('Joined_at')))),
    results: rooms,
    params: params,
    setParams: onChangeParams,
    fixed: false,
    pagination: false
  }, (room, key) => /*#__PURE__*/React.createElement(ChannelRow, {
    key: key,
    formatDate: formatDate,
    room: room,
    onChange: onChangeRoomSelection,
    selected: !!selectedRooms[room._id],
    lastOwnerWarning: lastOwnerWarning
  })));
};

module.exportDefault(ChannelDesertionTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/67209a66aba740b1c678b1ab852016afbeab726e.map
