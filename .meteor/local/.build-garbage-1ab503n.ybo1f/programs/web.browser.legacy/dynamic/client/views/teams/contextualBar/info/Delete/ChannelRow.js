function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/info/Delete/ChannelRow.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var CheckBox, Table, Icon, Margins;
module.link("@rocket.chat/fuselage", {
  CheckBox: function (v) {
    CheckBox = v;
  },
  Table: function (v) {
    Table = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var useRoomIcon;
module.link("../../../../../hooks/useRoomIcon", {
  useRoomIcon: function (v) {
    useRoomIcon = v;
  }
}, 3);

var ChannelRow = function (_ref) {
  var onChange = _ref.onChange,
      selected = _ref.selected,
      room = _ref.room;
  var name = room.name,
      fname = room.fname,
      usersCount = room.usersCount;
  var handleChange = useMutableCallback(function () {
    return onChange(room);
  });
  return /*#__PURE__*/React.createElement(Table.Row, {
    action: true
  }, /*#__PURE__*/React.createElement(Table.Cell, {
    maxWidth: "x300",
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(CheckBox, {
    checked: selected,
    onChange: handleChange
  }), /*#__PURE__*/React.createElement(Margins, {
    inline: "x8"
  }, /*#__PURE__*/React.createElement(Icon, _extends({
    size: "x16"
  }, useRoomIcon(room))), fname !== null && fname !== void 0 ? fname : name)), /*#__PURE__*/React.createElement(Table.Cell, {
    align: "end",
    withTruncatedText: true
  }, usersCount));
};

module.exportDefault(ChannelRow);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/info/Delete/02538ddf4c245fbafef58377becdc978b1b95880.map
