function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/hooks/useBlockRendered.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useBlockRendered: () => useBlockRendered
});
let useRef, useEffect;
module.link("react", {
  useRef(v) {
    useRef = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 0);

const useBlockRendered = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current.dispatchEvent(new Event('rendered'));
  }, []);
  return {
    className: 'js-block-wrapper',
    ref
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/hooks/624c12dca8fd52bd6e0a8e06ef42a6d29fab1299.map
