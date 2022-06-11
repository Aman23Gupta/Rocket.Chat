function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/hooks/useUserRoom.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useUserRoom: function () {
    return useUserRoom;
  }
});
var useCallback;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  }
}, 0);
var Rooms;
module.link("../../../../app/models/client", {
  Rooms: function (v) {
    Rooms = v;
  }
}, 1);
var useReactiveValue;
module.link("../../../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 2);

var useUserRoom = function (rid, fields) {
  return useReactiveValue(useCallback(function () {
    return Rooms.findOne({
      _id: rid
    }, {
      fields: fields
    });
  }, [rid, fields]));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/hooks/d493a0e7d73157d0ea117ab4e91d8844b541c6ca.map
