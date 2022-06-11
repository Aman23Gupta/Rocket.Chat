function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/hooks/usePreventDefault.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  usePreventDefault: function () {
    return usePreventDefault;
  }
});
var useEffect;
module.link("react", {
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);

var usePreventDefault = function (ref) {
  // Flowrouter uses an addEventListener on the document to capture any clink link, since the react synthetic event use an addEventListener on the document too,
  // it is impossible/hard to determine which one will happen before and prevent/stop propagation, so feel free to remove this effect after remove flow router :)
  useEffect(function () {
    var current = ref.current;

    var stopPropagation = function (e) {
      if ([e.target.nodeName, e.target.parentElement.nodeName].includes('BUTTON')) {
        e.preventDefault();
      }
    };

    current === null || current === void 0 ? void 0 : current.addEventListener('click', stopPropagation);
    return function () {
      return current === null || current === void 0 ? void 0 : current.addEventListener('click', stopPropagation);
    };
  }, [ref]);
  return {
    ref: ref
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/hooks/97f018b77f0753f6c8677f44241fb19237fe4281.map
