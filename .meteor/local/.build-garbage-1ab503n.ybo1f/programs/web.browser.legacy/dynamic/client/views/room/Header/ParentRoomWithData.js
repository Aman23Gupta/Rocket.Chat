function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/ParentRoomWithData.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useUserSubscription;
module.link("../../../contexts/UserContext", {
  useUserSubscription: function (v) {
    useUserSubscription = v;
  }
}, 1);
var ParentRoom;
module.link("./ParentRoom", {
  "default": function (v) {
    ParentRoom = v;
  }
}, 2);
var ParentRoomWithEndpointData;
module.link("./ParentRoomWithEndpointData", {
  "default": function (v) {
    ParentRoomWithEndpointData = v;
  }
}, 3);

var ParentRoomWithData = function (_ref) {
  var room = _ref.room;
  var subscription = useUserSubscription(room.prid);

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
//# sourceMappingURL=/dynamic/client/views/room/Header/d3dcb5bc87baf7cebc2dc7183a724de7d3ee5bcb.map
