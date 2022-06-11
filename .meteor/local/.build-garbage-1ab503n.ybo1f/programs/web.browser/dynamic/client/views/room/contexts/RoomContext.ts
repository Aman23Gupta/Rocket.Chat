function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contexts/RoomContext.ts                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  RoomContext: () => RoomContext,
  useRoom: () => useRoom,
  useOmnichannelRoom: () => useOmnichannelRoom
});
let createContext, useContext;
module.link("react", {
  createContext(v) {
    createContext = v;
  },

  useContext(v) {
    useContext = v;
  }

}, 0);
let isOmnichannelRoom;
module.link("../../../../definition/IRoom", {
  isOmnichannelRoom(v) {
    isOmnichannelRoom = v;
  }

}, 1);
const RoomContext = /*#__PURE__*/createContext(null);

const useRoom = () => {
  const {
    room
  } = useContext(RoomContext) || {};

  if (!room) {
    throw new Error('use useRoom only inside opened rooms');
  }

  return room;
};

const useOmnichannelRoom = () => {
  const {
    room
  } = useContext(RoomContext) || {};

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
//# sourceMappingURL=/dynamic/client/views/room/contexts/04cf768d9be0ff575082e5f9baaccfd74665c636.map
