function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/providers/RoomProvider.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);
var React, useMemo, memo, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  memo: function (v) {
    memo = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);
var UserAction;
module.link("../../../../app/ui", {
  UserAction: function (v) {
    UserAction = v;
  }
}, 1);
var roomTypes;
module.link("../../../../app/utils/client", {
  roomTypes: function (v) {
    roomTypes = v;
  }
}, 2);
var useUserSubscription;
module.link("../../../contexts/UserContext", {
  useUserSubscription: function (v) {
    useUserSubscription = v;
  }
}, 3);
var RoomManager, useHandleRoom;
module.link("../../../lib/RoomManager", {
  RoomManager: function (v) {
    RoomManager = v;
  },
  useHandleRoom: function (v) {
    useHandleRoom = v;
  }
}, 4);
var AsyncStatePhase;
module.link("../../../lib/asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 5);
var Skeleton;
module.link("../Room/Skeleton", {
  "default": function (v) {
    Skeleton = v;
  }
}, 6);
var RoomContext;
module.link("../contexts/RoomContext", {
  RoomContext: function (v) {
    RoomContext = v;
  }
}, 7);
var ToolboxProvider;
module.link("./ToolboxProvider", {
  "default": function (v) {
    ToolboxProvider = v;
  }
}, 8);
var fields = {};

var RoomProvider = function (_ref) {
  var rid = _ref.rid,
      children = _ref.children;

  var _useHandleRoom = useHandleRoom(rid),
      phase = _useHandleRoom.phase,
      room = _useHandleRoom.value;

  var subscribed = Boolean(useUserSubscription(rid, fields));
  var context = useMemo(function () {
    if (!room) {
      return null;
    }

    room._id = rid;
    return {
      subscribed: subscribed,
      rid: rid,
      room: _objectSpread(_objectSpread({}, room), {}, {
        name: roomTypes.getRoomName(room.t, room)
      })
    };
  }, [room, rid, subscribed]);
  useEffect(function () {
    RoomManager.open(rid);
    return function () {
      RoomManager.back(rid);
    };
  }, [rid]);
  useEffect(function () {
    if (!subscribed) {
      return function () {
        return undefined;
      };
    }

    UserAction.addStream(rid);
    return function () {
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
//# sourceMappingURL=/dynamic/client/views/room/providers/1b39f76a175e0afc6b03c5db7a3403ab076c511e.map
