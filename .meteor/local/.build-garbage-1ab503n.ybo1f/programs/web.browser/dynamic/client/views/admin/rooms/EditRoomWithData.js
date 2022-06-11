function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/rooms/EditRoomWithData.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Box, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Skeleton(v) {
    Skeleton = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 2);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 3);
let EditRoom;
module.link("./EditRoom", {
  default(v) {
    EditRoom = v;
  }

}, 4);

function EditRoomWithData(_ref) {
  let {
    rid
  } = _ref;
  const {
    value: data = {},
    phase: state,
    error,
    reload
  } = useEndpointData('rooms.adminRooms.getRoom', useMemo(() => ({
    rid
  }), [rid]));

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(Box, {
      w: "full",
      pb: "x24"
    }, /*#__PURE__*/React.createElement(Skeleton, {
      mbe: "x4"
    }), /*#__PURE__*/React.createElement(Skeleton, {
      mbe: "x8"
    }), /*#__PURE__*/React.createElement(Skeleton, {
      mbe: "x4"
    }), /*#__PURE__*/React.createElement(Skeleton, {
      mbe: "x8"
    }), /*#__PURE__*/React.createElement(Skeleton, {
      mbe: "x4"
    }), /*#__PURE__*/React.createElement(Skeleton, {
      mbe: "x8"
    }));
  }

  if (state === AsyncStatePhase.REJECTED) {
    return error.message;
  }

  return /*#__PURE__*/React.createElement(EditRoom, {
    room: _objectSpread({
      type: data.t
    }, data),
    onChange: reload
  });
}

module.exportDefault(EditRoomWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/rooms/b9cdbe9ead3885d07a444f2f405db73de91fd646.map
