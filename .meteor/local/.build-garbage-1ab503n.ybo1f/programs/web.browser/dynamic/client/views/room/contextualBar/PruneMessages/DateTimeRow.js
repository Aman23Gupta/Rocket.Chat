function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/PruneMessages/DateTimeRow.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Field, InputBox, Box, Margins;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  InputBox(v) {
    InputBox = v;
  },

  Box(v) {
    Box = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const DateTimeRow = _ref => {
  let {
    label,
    dateTime,
    handleDateTime
  } = _ref;
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/PruneMessages/2c4bf843ae94ceba571c6566d7d80d6da7e4b8fb.map
