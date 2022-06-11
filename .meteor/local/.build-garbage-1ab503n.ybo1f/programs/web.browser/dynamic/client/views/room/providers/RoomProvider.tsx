function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/providers/RoomProvider.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let React, useMemo, memo, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  memo(v) {
    memo = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 0);
let UserAction;
module.link("../../../../app/ui", {
  UserAction(v) {
    UserAction = v;
  }

}, 1);
let roomTypes;
module.link("../../../../app/utils/client", {
  roomTypes(v) {
    roomTypes = v;
  }

}, 2);
let useUserSubscription;
module.link("../../../contexts/UserContext", {
  useUserSubscription(v) {
    useUserSubscription = v;
  }

}, 3);
let RoomManager, useHandleRoom;
module.link("../../../lib/RoomManager", {
  RoomManager(v) {
    RoomManager = v;
  },

  useHandleRoom(v) {
    useHandleRoom = v;
  }

}, 4);
let AsyncStatePhase;
module.link("../../../lib/asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 5);
let Skeleton;
module.link("../Room/Skeleton", {
  default(v) {
    Skeleton = v;
  }

}, 6);
let RoomContext;
module.link("../contexts/RoomContext", {
  RoomContext(v) {
    RoomContext = v;
  }

}, 7);
let ToolboxProvider;
module.link("./ToolboxProvider", {
  default(v) {
    ToolboxProvider = v;
  }

}, 8);
const fields = {};

const RoomProvider = _ref => {
  let {
    rid,
    children
  } = _ref;
  const {
    phase,
    value: room
  } = useHandleRoom(rid);
  const subscribed = Boolean(useUserSubscription(rid, fields));
  const context = useMemo(() => {
    if (!room) {
      return null;
    }

    room._id = rid;
    return {
      subscribed,
      rid,
      room: _objectSpread(_objectSpread({}, room), {}, {
        name: roomTypes.getRoomName(room.t, room)
      })
    };
  }, [room, rid, subscribed]);
  useEffect(() => {
    RoomManager.open(rid);
    return () => {
      RoomManager.back(rid);
    };
  }, [rid]);
  useEffect(() => {
    if (!subscribed) {
      return () => undefined;
    }

    UserAction.addStream(rid);
    return () => {
      UserAction.cancel(rid);
    };
  }, [rid, subscribed]);

  if (phase === AsyncStatePhase.LOADING || !room) {
    return /*#__PURE__*/React.createElement(Skeleton, null);
  }

  return /*#__PURE__*/React.createElement(RoomContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement(ToolboxProvider, {
    room: room
  }, children));
};

module.exportDefault( /*#__PURE__*/memo(RoomProvider));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/providers/affcdbb5b9d260b908cb66c8018716cf271ece34.map
