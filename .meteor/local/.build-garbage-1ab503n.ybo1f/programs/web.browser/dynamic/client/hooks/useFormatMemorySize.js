function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useFormatMemorySize.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useFormatMemorySize: () => useFormatMemorySize
});
let s;
module.link("underscore.string", {
  default(v) {
    s = v;
  }

}, 0);

const formatMemorySize = memorySize => {
  if (typeof memorySize !== 'number') {
    return null;
  }

  const units = ['bytes', 'kB', 'MB', 'GB'];
  let order;

  for (order = 0; order < units.length - 1; ++order) {
    const upperLimit = Math.pow(1024, order + 1);

    if (memorySize < upperLimit) {
      break;
    }
  }

  const divider = Math.pow(1024, order);
  const decimalDigits = order === 0 ? 0 : 2;
  return "".concat(s.numberFormat(memorySize / divider, decimalDigits), " ").concat(units[order]);
};

const useFormatMemorySize = () => formatMemorySize;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/c324bed4d784b5b5191878829e6a90fc8aec2e5f.map
