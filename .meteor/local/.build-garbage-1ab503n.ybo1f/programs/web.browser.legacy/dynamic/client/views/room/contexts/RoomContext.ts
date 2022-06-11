function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contexts/RoomContext.ts                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  RoomContext: function () {
    return RoomContext;
  },
  useRoom: function () {
    return useRoom;
  },
  useOmnichannelRoom: function () {
    return useOmnichannelRoom;
  }
});
var createContext, useContext;
module.link("react", {
  createContext: function (v) {
    createContext = v;
  },
  useContext: function (v) {
    useContext = v;
  }
}, 0);
var isOmnichannelRoom;
module.link("../../../../definition/IRoom", {
  isOmnichannelRoom: function (v) {
    isOmnichannelRoom = v;
  }
}, 1);
var RoomContext = /*#__PURE__*/createContext(null);

var useRoom = function () {
  var _ref = useContext(RoomContext) || {},
      room = _ref.room;

  if (!room) {
    throw new Error('use useRoom only inside opened rooms');
  }

  return room;
};

var useOmnichannelRoom = function () {
  var _ref2 = useContext(RoomContext) || {},
      room = _ref2.room;

  if (!room) {
    throw new Error('use useRoom only inside opened rooms');
  }

  if (!isOmnichannelRoom(room)) {
    throw new Error('invalid room type');
  }

  return room;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contexts/d593ad33d839ab7e8209d6de7fde60b981228faa.map
