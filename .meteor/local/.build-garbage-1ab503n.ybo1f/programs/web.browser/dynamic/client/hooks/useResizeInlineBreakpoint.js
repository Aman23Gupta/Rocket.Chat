function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useResizeInlineBreakpoint.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useResizeInlineBreakpoint: () => useResizeInlineBreakpoint
});
let useResizeObserver, useStableArray;
module.link("@rocket.chat/fuselage-hooks", {
  useResizeObserver(v) {
    useResizeObserver = v;
  },

  useStableArray(v) {
    useStableArray = v;
  }

}, 0);
let useMemo;
module.link("react", {
  useMemo(v) {
    useMemo = v;
  }

}, 1);

const useResizeInlineBreakpoint = function () {
  let sizes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let debounceDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  const {
    ref,
    borderBoxSize
  } = useResizeObserver({
    debounceDelay
  });
  const inlineSize = borderBoxSize ? borderBoxSize.inlineSize : 0;
  const stableSizes = useStableArray(sizes);
  const newSizes = useMemo(() => stableSizes.map(current => inlineSize ? inlineSize > current : true), [inlineSize, stableSizes]);
  return [ref, ...newSizes];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/4c5242f932ae0d0f73daf81b69bd22c9d7c74742.map
