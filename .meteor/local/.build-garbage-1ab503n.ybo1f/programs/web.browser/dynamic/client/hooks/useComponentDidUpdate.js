function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useComponentDidUpdate.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useComponentDidUpdate: () => useComponentDidUpdate
});
let useEffect, useRef;
module.link("react", {
  useEffect(v) {
    useEffect = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 0);

const useComponentDidUpdate = function (effect) {
  let dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const hasMounted = useRef(false);
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    effect(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/f0d828018e5a666df6e3e9c78508e556916a0ba2.map
