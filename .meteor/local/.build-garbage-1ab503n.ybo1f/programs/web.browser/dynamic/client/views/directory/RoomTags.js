function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/directory/RoomTags.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Margins, Tag;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Margins(v) {
    Margins = v;
  },

  Tag(v) {
    Tag = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

function RoomTags(_ref) {
  let {
    room
  } = _ref;
  const t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/directory/45a5f5f8dea5a82b481c72e75d8a6af9ba8a638b.map
