function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/directory/RoomTags.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Margins, Tag;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Tag: function (v) {
    Tag = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

function RoomTags(_ref) {
  var room = _ref.room;
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Box, {
    mi: "x4",
    alignItems: "center",
    display: "flex"
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x2"
  }, room.default && /*#__PURE__*/React.createElement(Tag, {
    variant: "primary"
  }, t('default')), room.featured && /*#__PURE__*/React.createElement(Tag, {
    variant: "primary"
  }, t('featured'))));
}

module.exportDefault(RoomTags);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/directory/6b3523d71fdf0e11bcac8d1809424d21ebd24150.map
