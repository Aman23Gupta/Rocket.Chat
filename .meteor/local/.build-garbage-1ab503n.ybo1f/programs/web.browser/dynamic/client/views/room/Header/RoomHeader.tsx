function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/RoomHeader.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Header;
module.link("../../../components/Header", {
  default(v) {
    Header = v;
  }

}, 1);
let MarkdownText;
module.link("../../../components/MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 2);
let RoomAvatar;
module.link("../../../components/avatar/RoomAvatar", {
  default(v) {
    RoomAvatar = v;
  }

}, 3);
let ParentRoomWithData;
module.link("./ParentRoomWithData", {
  default(v) {
    ParentRoomWithData = v;
  }

}, 4);
let ParentTeam;
module.link("./ParentTeam", {
  default(v) {
    ParentTeam = v;
  }

}, 5);
let RoomTitle;
module.link("./RoomTitle", {
  default(v) {
    RoomTitle = v;
  }

}, 6);
let ToolBox;
module.link("./ToolBox", {
  default(v) {
    ToolBox = v;
  }

}, 7);
let Encrypted;
module.link("./icons/Encrypted", {
  default(v) {
    Encrypted = v;
  }

}, 8);
let Favorite;
module.link("./icons/Favorite", {
  default(v) {
    Favorite = v;
  }

}, 9);
let Translate;
module.link("./icons/Translate", {
  default(v) {
    Translate = v;
  }

}, 10);

const RoomHeader = _ref => {
  var _slots$toolbox, _slots$toolbox2, _slots$toolbox3;

  let {
    room,
    topic = '',
    slots = {}
  } = _ref;
  return /*#__PURE__*/React.createElement(Header, null, slots === null || slots === void 0 ? void 0 : slots.start, /*#__PURE__*/React.createElement(Header.Avatar, null, /*#__PURE__*/React.createElement(RoomAvatar, {
    room: room
  })), slots === null || slots === void 0 ? void 0 : slots.preContent, /*#__PURE__*/React.createElement(Header.Content, null, /*#__PURE__*/React.createElement(Header.Content.Row, null, /*#__PURE__*/React.createElement(RoomTitle, {
    room: room
  }), /*#__PURE__*/React.createElement(Favorite, {
    room: room
  }), room.prid && /*#__PURE__*/React.createElement(ParentRoomWithData, {
    room: room
  }), room.teamId && !room.teamMain && /*#__PURE__*/React.createElement(ParentTeam, {
    room: room
  }), /*#__PURE__*/React.createElement(Encrypted, {
    room: room
  }), /*#__PURE__*/React.createElement(Translate, {
    room: room
  }), slots === null || slots === void 0 ? void 0 : slots.insideContent), /*#__PURE__*/React.createElement(Header.Content.Row, null, /*#__PURE__*/React.createElement(Header.Subtitle, null, topic && /*#__PURE__*/React.createElement(MarkdownText, {
    parseEmoji: true,
    variant: "inlineWithoutBreaks",
    withTruncatedText: true,
    content: topic
  })))), slots === null || slots === void 0 ? void 0 : slots.posContent, /*#__PURE__*/React.createElement(Header.ToolBox, null, slots === null || slots === void 0 ? void 0 : (_slots$toolbox = slots.toolbox) === null || _slots$toolbox === void 0 ? void 0 : _slots$toolbox.pre, (slots === null || slots === void 0 ? void 0 : (_slots$toolbox2 = slots.toolbox) === null || _slots$toolbox2 === void 0 ? void 0 : _slots$toolbox2.content) || /*#__PURE__*/React.createElement(ToolBox, {
    room: room
  }), slots === null || slots === void 0 ? void 0 : (_slots$toolbox3 = slots.toolbox) === null || _slots$toolbox3 === void 0 ? void 0 : _slots$toolbox3.pos), slots === null || slots === void 0 ? void 0 : slots.end);
};

module.exportDefault(RoomHeader);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/5aa833bcb49358c9d9a703c0e8d6f212e6470390.map
