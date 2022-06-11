function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomFiles/lib/getDifference.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  MILLISECONDS: function () {
    return MILLISECONDS;
  },
  SECONDS: function () {
    return SECONDS;
  },
  MINUTES: function () {
    return MINUTES;
  },
  HOURS: function () {
    return HOURS;
  },
  DAYS: function () {
    return DAYS;
  },
  getDifference: function () {
    return getDifference;
  }
});
var MILLISECONDS = 1;
var SECONDS = 1000;
var MINUTES = 1000 * 60;
var HOURS = 1000 * 60 * 60;
var DAYS = 1000 * 60 * 60 * 24;

var getDifference = function (now, ts) {
  var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MILLISECONDS;
  var diff = now - ts / scale;
  return diff;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomFiles/lib/c810e20133309bc05bdbd060d5aa5006cb6be937.map
