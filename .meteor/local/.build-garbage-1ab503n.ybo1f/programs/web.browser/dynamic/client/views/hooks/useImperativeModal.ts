function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/hooks/useImperativeModal.ts                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
module.export({
  useImperativeModal: () => useImperativeModal
});
let createElement, useEffect;
module.link("react", {
  createElement(v) {
    createElement = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 0);
let imperativeModal;
module.link("../../lib/imperativeModal", {
  imperativeModal(v) {
    imperativeModal = v;
  }

}, 1);

const useImperativeModal = setModal => {
  useEffect(() => {
    const unsub = imperativeModal.on('update', descriptor => {
      if (descriptor === null) {
        return setModal(null);
      }

      if ('component' in descriptor) {
        setModal( /*#__PURE__*/createElement(descriptor.component, _objectSpread({
          key: Math.random()
        }, descriptor.props)));
      }
    });
    return unsub;
  }, [setModal]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/hooks/87482786c5f866d160ee1f0daaed71c7a16f11fe.map
