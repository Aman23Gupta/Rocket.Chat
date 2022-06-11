function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/Delete/ChannelDeletionTable.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["key"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);
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
module.link("../../../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var ChannelRow;
module.link("./ChannelRow", {
  "default": function (v) {
    ChannelRow = v;
  }
}, 4);

var ChannelDeletionTable = function (_ref) {
  var rooms = _ref.rooms,
      params = _ref.params,
      onChangeParams = _ref.onChangeParams,
      onChangeRoomSelection = _ref.onChangeRoomSelection,
      selectedRooms = _ref.selectedRooms,
      onToggleAllRooms = _ref.onToggleAllRooms;
  var t = useTranslation();
  var selectedRoomsLength = Object.values(selectedRooms).filter(Boolean).length;
  var checked = rooms.length === selectedRoomsLength;
  var indeterminate = rooms.length > selectedRoomsLength && selectedRoomsLength > 0;
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
  }, function (_ref2) {
    var key = _ref2.key,
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
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/Delete/f2f852813e91d1384a9c8bd96177f15611d27907.map
