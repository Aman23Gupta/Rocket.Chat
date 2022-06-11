function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/Delete/ChannelDeletionTable.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["key"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
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
module.link("../../../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let ChannelRow;
module.link("./ChannelRow", {
  default(v) {
    ChannelRow = v;
  }

}, 4);

const ChannelDeletionTable = _ref => {
  let {
    rooms,
    params,
    onChangeParams,
    onChangeRoomSelection,
    selectedRooms,
    onToggleAllRooms
  } = _ref;
  const t = useTranslation();
  const selectedRoomsLength = Object.values(selectedRooms).filter(Boolean).length;
  const checked = rooms.length === selectedRoomsLength;
  const indeterminate = rooms.length > selectedRoomsLength && selectedRoomsLength > 0;
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
      key: "usersCount",
      sort: "usersCount"
    }, /*#__PURE__*/React.createElement(Box, {
      width: "100%",
      textAlign: "end"
    }, t('Members')))),
    results: rooms,
    params: params,
    setParams: onChangeParams,
    fixed: false,
    pagination: false
  }, _ref2 => {
    let {
      key
    } = _ref2,
        room = _objectWithoutProperties(_ref2, _excluded);

    return /*#__PURE__*/React.createElement(ChannelRow, {
      room: room,
      key: key,
      onChange: onChangeRoomSelection,
      selected: !!selectedRooms[room._id]
    });
  }));
};

module.exportDefault(ChannelDeletionTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/Delete/e1f6b6b57d15f8a1f045d5d9347bbcb6307b55ee.map
