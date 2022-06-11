function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/hooks/useUserRoom.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useUserRoom: () => useUserRoom
});
let useCallback;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  }

}, 0);
let Rooms;
module.link("../../../../app/models/client", {
  Rooms(v) {
    Rooms = v;
  }

}, 1);
let useReactiveValue;
module.link("../../../hooks/useReactiveValue", {
  useReactiveValue(v) {
    useReactiveValue = v;
  }

}, 2);

const useUserRoom = (rid, fields) => useReactiveValue(useCallback(() => Rooms.findOne({
  _id: rid
}, {
  fields
}), [rid, fields]));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/hooks/f8fff474d94143074e9b5f09258ac9722f3281cf.map
