function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/Chat.tsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 1);
var openRoom;
module.link("../../../../../app/ui-utils/client/lib/openRoom", {
  openRoom: function (v) {
    openRoom = v;
  }
}, 2);
var RoomWithData;
module.link("../../../room/Room", {
  "default": function (v) {
    RoomWithData = v;
  }
}, 3);

var Chat = function (_ref) {
  var rid = _ref.rid;
  useEffect(function () {
    // NewRoomManager.open(rid);
    // RoomManager.open(`l${rid}`);
    openRoom('l', rid, false);
  }, [rid]);
  return /*#__PURE__*/React.createElement(Box, {
    position: "absolute",
    backgroundColor: "surface",
    width: "full",
    height: "full"
  }, /*#__PURE__*/React.createElement(RoomWithData, null));
};

module.exportDefault(Chat);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/e5e770fe0c09c77b123185bdd32867a2a7327681.map
