function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/ParentRoomWithData.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useUserSubscription;
module.link("../../../contexts/UserContext", {
  useUserSubscription(v) {
    useUserSubscription = v;
  }

}, 1);
let ParentRoom;
module.link("./ParentRoom", {
  default(v) {
    ParentRoom = v;
  }

}, 2);
let ParentRoomWithEndpointData;
module.link("./ParentRoomWithEndpointData", {
  default(v) {
    ParentRoomWithEndpointData = v;
  }

}, 3);

const ParentRoomWithData = _ref => {
  let {
    room
  } = _ref;
  const subscription = useUserSubscription(room.prid);

  if (subscription) {
    return /*#__PURE__*/React.createElement(ParentRoom, {
      room: subscription
    });
  }

  return /*#__PURE__*/React.createElement(ParentRoomWithEndpointData, {
    rid: room.prid
  });
};

module.exportDefault(ParentRoomWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/3b1db48ff7606de204caff53de36b2e867ecde5e.map
