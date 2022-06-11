function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomFiles/lib/getDifference.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  MILLISECONDS: () => MILLISECONDS,
  SECONDS: () => SECONDS,
  MINUTES: () => MINUTES,
  HOURS: () => HOURS,
  DAYS: () => DAYS,
  getDifference: () => getDifference
});
const MILLISECONDS = 1;
const SECONDS = 1000;
const MINUTES = 1000 * 60;
const HOURS = 1000 * 60 * 60;
const DAYS = 1000 * 60 * 60 * 24;

const getDifference = function (now, ts) {
  let scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MILLISECONDS;
  const diff = now - ts / scale;
  return diff;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomFiles/lib/38d33ca77fd7b98ee70973c4ee505056e2d58e8a.map
