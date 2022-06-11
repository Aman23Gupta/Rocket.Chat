function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/utils/isJSON.ts                                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  isJSON: function () {
    return isJSON;
  }
});

var isJSON = function (value) {
  try {
    return !!JSON.parse(value);
  } catch (_unused) {
    return false;
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/lib/utils/3552fe4705257a6aaf4c37cfd0b5db70fa22f816.map
