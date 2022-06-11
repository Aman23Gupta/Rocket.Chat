function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/PruneMessages/DateTimeRow.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Field, InputBox, Box, Margins;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  InputBox: function (v) {
    InputBox = v;
  },
  Box: function (v) {
    Box = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var DateTimeRow = function (_ref) {
  var label = _ref.label,
      dateTime = _ref.dateTime,
      handleDateTime = _ref.handleDateTime;
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    flexGrow: 0
  }, label), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mi: "neg-x4"
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x4"
  }, /*#__PURE__*/React.createElement(InputBox, {
    type: "date",
    value: dateTime === null || dateTime === void 0 ? void 0 : dateTime.date,
    onChange: handleDateTime === null || handleDateTime === void 0 ? void 0 : handleDateTime.date,
    flexGrow: 1,
    h: "x20"
  }), /*#__PURE__*/React.createElement(InputBox, {
    type: "time",
    value: dateTime === null || dateTime === void 0 ? void 0 : dateTime.time,
    onChange: handleDateTime === null || handleDateTime === void 0 ? void 0 : handleDateTime.time,
    flexGrow: 1,
    h: "x20"
  }))));
};

module.exportDefault(DateTimeRow);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/PruneMessages/8b00ea32b586eff29fb84fc1679efb0dd4ba6675.map
