function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/RoomHeader.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Header;
module.link("../../../components/Header", {
  "default": function (v) {
    Header = v;
  }
}, 1);
var MarkdownText;
module.link("../../../components/MarkdownText", {
  "default": function (v) {
    MarkdownText = v;
  }
}, 2);
var RoomAvatar;
module.link("../../../components/avatar/RoomAvatar", {
  "default": function (v) {
    RoomAvatar = v;
  }
}, 3);
var ParentRoomWithData;
module.link("./ParentRoomWithData", {
  "default": function (v) {
    ParentRoomWithData = v;
  }
}, 4);
var ParentTeam;
module.link("./ParentTeam", {
  "default": function (v) {
    ParentTeam = v;
  }
}, 5);
var RoomTitle;
module.link("./RoomTitle", {
  "default": function (v) {
    RoomTitle = v;
  }
}, 6);
var ToolBox;
module.link("./ToolBox", {
  "default": function (v) {
    ToolBox = v;
  }
}, 7);
var Encrypted;
module.link("./icons/Encrypted", {
  "default": function (v) {
    Encrypted = v;
  }
}, 8);
var Favorite;
module.link("./icons/Favorite", {
  "default": function (v) {
    Favorite = v;
  }
}, 9);
var Translate;
module.link("./icons/Translate", {
  "default": function (v) {
    Translate = v;
  }
}, 10);

var RoomHeader = function (_ref) {
  var _slots$toolbox, _slots$toolbox2, _slots$toolbox3;

  var room = _ref.room,
      _ref$topic = _ref.topic,
      topic = _ref$topic === void 0 ? '' : _ref$topic,
      _ref$slots = _ref.slots,
      slots = _ref$slots === void 0 ? {} : _ref$slots;
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
//# sourceMappingURL=/dynamic/client/views/room/Header/44d84eccd30a7747639f8afa3c2744909b72bc66.map
