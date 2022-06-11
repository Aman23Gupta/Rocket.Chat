function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useFormatMemorySize.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useFormatMemorySize: function () {
    return useFormatMemorySize;
  }
});
var s;
module.link("underscore.string", {
  "default": function (v) {
    s = v;
  }
}, 0);

var formatMemorySize = function (memorySize) {
  if (typeof memorySize !== 'number') {
    return null;
  }

  var units = ['bytes', 'kB', 'MB', 'GB'];
  var order;

  for (order = 0; order < units.length - 1; ++order) {
    var upperLimit = Math.pow(1024, order + 1);

    if (memorySize < upperLimit) {
      break;
    }
  }

  var divider = Math.pow(1024, order);
  var decimalDigits = order === 0 ? 0 : 2;
  return s.numberFormat(memorySize / divider, decimalDigits) + " " + units[order];
};

var useFormatMemorySize = function () {
  return formatMemorySize;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/0cc572e18e12d95ae6434aa1c0866536ac36a19b.map
