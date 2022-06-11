function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/ChannelDesertionTable.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, CheckBox;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  CheckBox: function (v) {
    CheckBox = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var GenericTable;
module.link("../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 2);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useFormatDateAndTime;
module.link("../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime: function (v) {
    useFormatDateAndTime = v;
  }
}, 4);
var ChannelRow;
module.link("./contextualBar/ChannelRow", {
  "default": function (v) {
    ChannelRow = v;
  }
}, 5);

var ChannelDesertionTable = function (_ref) {
  var rooms = _ref.rooms,
      eligibleRoomsLength = _ref.eligibleRoomsLength,
      params = _ref.params,
      onChangeParams = _ref.onChangeParams,
      onChangeRoomSelection = _ref.onChangeRoomSelection,
      selectedRooms = _ref.selectedRooms,
      onToggleAllRooms = _ref.onToggleAllRooms,
      lastOwnerWarning = _ref.lastOwnerWarning;
  var t = useTranslation();
  var selectedRoomsLength = Object.values(selectedRooms).filter(Boolean).length;
  var checked = eligibleRoomsLength === selectedRoomsLength;
  var indeterminate = eligibleRoomsLength && eligibleRoomsLength > selectedRoomsLength ? selectedRoomsLength > 0 : false;
  var formatDate = useFormatDateAndTime();
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
  }, function (room, key) {
    return /*#__PURE__*/React.createElement(ChannelRow, {
      key: key,
      formatDate: formatDate,
      room: room,
      onChange: onChangeRoomSelection,
      selected: !!selectedRooms[room._id],
      lastOwnerWarning: lastOwnerWarning
    });
  }));
};

module.exportDefault(ChannelDesertionTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/2803ce90f512cec1ee448f354913068eb99f3f9f.map
