function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/hooks/useBlockRendered.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useBlockRendered: function () {
    return useBlockRendered;
  }
});
var useRef, useEffect;
module.link("react", {
  useRef: function (v) {
    useRef = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);

var useBlockRendered = function () {
  var ref = useRef();
  useEffect(function () {
    ref.current.dispatchEvent(new Event('rendered'));
  }, []);
  return {
    className: 'js-block-wrapper',
    ref: ref
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/hooks/4abc6fb3d879722f12d7f8aaf10f9b5eafd60050.map
