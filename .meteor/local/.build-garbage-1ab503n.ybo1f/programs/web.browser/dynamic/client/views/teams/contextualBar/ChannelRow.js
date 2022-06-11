function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/ChannelRow.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let CheckBox, Table, Icon, Margins;
module.link("@rocket.chat/fuselage", {
  CheckBox(v) {
    CheckBox = v;
  },

  Table(v) {
    Table = v;
  },

  Icon(v) {
    Icon = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let useRoomIcon;
module.link("../../../hooks/useRoomIcon", {
  useRoomIcon(v) {
    useRoomIcon = v;
  }

}, 3);

const ChannelRow = _ref => {
  let {
    onChange,
    selected,
    room,
    lastOwnerWarning,
    formatDate
  } = _ref;
  const {
    name,
    fname,
    ts,
    isLastOwner
  } = room;
  const handleChange = useMutableCallback(() => onChange(room));
  return /*#__PURE__*/React.createElement(Table.Row, {
    action: true
  }, /*#__PURE__*/React.createElement(Table.Cell, {
    maxWidth: "x300",
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(CheckBox, {
    checked: selected,
    onChange: handleChange,
    disabled: lastOwnerWarning && isLastOwner
  }), /*#__PURE__*/React.createElement(Margins, {
    inline: "x8"
  }, /*#__PURE__*/React.createElement(Icon, _extends({
    size: "x16"
  }, useRoomIcon(room))), fname !== null && fname !== void 0 ? fname : name, lastOwnerWarning && isLastOwner && /*#__PURE__*/React.createElement(Icon, {
    size: "x16",
    name: "info-circled",
    color: "danger",
    title: lastOwnerWarning
  }))), /*#__PURE__*/React.createElement(Table.Cell, {
    align: "end",
    withTruncatedText: true
  }, formatDate(ts)));
};

module.exportDefault(ChannelRow);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/59ec0f35033137fe8154ddd69923f7afbeeccaf2.map
