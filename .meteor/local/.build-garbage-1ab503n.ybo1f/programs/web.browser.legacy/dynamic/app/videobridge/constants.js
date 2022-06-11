function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/videobridge/constants.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  TIMEOUT: function () {
    return TIMEOUT;
  },
  HEARTBEAT: function () {
    return HEARTBEAT;
  },
  DEBOUNCE: function () {
    return DEBOUNCE;
  }
});
var TIMEOUT = 30 * 1000;
var HEARTBEAT = TIMEOUT / 3;
var DEBOUNCE = HEARTBEAT / 2;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/videobridge/0326afebeb45869fd690c22f095708adafc2d181.map
