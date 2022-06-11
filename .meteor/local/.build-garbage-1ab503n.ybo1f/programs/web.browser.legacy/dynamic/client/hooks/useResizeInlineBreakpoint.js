function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useResizeInlineBreakpoint.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);
module.export({
  useResizeInlineBreakpoint: function () {
    return useResizeInlineBreakpoint;
  }
});
var useResizeObserver, useStableArray;
module.link("@rocket.chat/fuselage-hooks", {
  useResizeObserver: function (v) {
    useResizeObserver = v;
  },
  useStableArray: function (v) {
    useStableArray = v;
  }
}, 0);
var useMemo;
module.link("react", {
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);

var useResizeInlineBreakpoint = function () {
  var sizes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var debounceDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var _useResizeObserver = useResizeObserver({
    debounceDelay: debounceDelay
  }),
      ref = _useResizeObserver.ref,
      borderBoxSize = _useResizeObserver.borderBoxSize;

  var inlineSize = borderBoxSize ? borderBoxSize.inlineSize : 0;
  var stableSizes = useStableArray(sizes);
  var newSizes = useMemo(function () {
    return stableSizes.map(function (current) {
      return inlineSize ? inlineSize > current : true;
    });
  }, [inlineSize, stableSizes]);
  return [ref].concat(_toConsumableArray(newSizes));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/b0c11445a036a5582d53f58bfaed8648c610ce7f.map
