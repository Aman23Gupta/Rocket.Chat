function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/hooks/usePreventDefault.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  usePreventDefault: () => usePreventDefault
});
let useEffect;
module.link("react", {
  useEffect(v) {
    useEffect = v;
  }

}, 0);

const usePreventDefault = ref => {
  // Flowrouter uses an addEventListener on the document to capture any clink link, since the react synthetic event use an addEventListener on the document too,
  // it is impossible/hard to determine which one will happen before and prevent/stop propagation, so feel free to remove this effect after remove flow router :)
  useEffect(() => {
    const {
      current
    } = ref;

    const stopPropagation = e => {
      if ([e.target.nodeName, e.target.parentElement.nodeName].includes('BUTTON')) {
        e.preventDefault();
      }
    };

    current === null || current === void 0 ? void 0 : current.addEventListener('click', stopPropagation);
    return () => current === null || current === void 0 ? void 0 : current.addEventListener('click', stopPropagation);
  }, [ref]);
  return {
    ref
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/hooks/ca1b189dc108492ce734a0b114bcac61a72947e3.map
