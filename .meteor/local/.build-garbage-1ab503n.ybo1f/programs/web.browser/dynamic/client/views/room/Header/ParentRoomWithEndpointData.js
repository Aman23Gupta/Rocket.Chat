function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/ParentRoomWithEndpointData.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 0);
let Header;
module.link("../../../components/Header", {
  default(v) {
    Header = v;
  }

}, 1);
let useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 2);
let AsyncStatePhase, useAsyncState;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  },

  useAsyncState(v) {
    useAsyncState = v;
  }

}, 3);
let ParentRoom;
module.link("./ParentRoom", {
  default(v) {
    ParentRoom = v;
  }

}, 4);

const ParentRoomWithEndpointData = _ref => {
  let {
    rid
  } = _ref;
  const {
    resolve,
    reject,
    reset,
    phase,
    value
  } = useAsyncState();
  const getData = useEndpoint('GET', 'rooms.info');
  useEffect(() => {
    (async () => {
      reset();
      getData({
        roomId: rid
      }).then(resolve).catch(error => {
        reject(error);
      });
    })();
  }, [reset, getData, rid, resolve, reject]);

  if (AsyncStatePhase.LOADING === phase) {
    return /*#__PURE__*/React.createElement(Header.Tag.Skeleton, null);
  }

  if (AsyncStatePhase.ERROR === phase || !(value !== null && value !== void 0 && value.room)) {
    return null;
  }

  return /*#__PURE__*/React.createElement(ParentRoom, {
    room: value.room
  });
};

module.exportDefault(ParentRoomWithEndpointData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/cdc50c6f6214289755d86e422facea5538637a8d.map
