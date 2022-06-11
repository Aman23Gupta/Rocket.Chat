function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/hooks/useImperativeModal.ts                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);
module.export({
  useImperativeModal: function () {
    return useImperativeModal;
  }
});
var createElement, useEffect;
module.link("react", {
  createElement: function (v) {
    createElement = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);
var imperativeModal;
module.link("../../lib/imperativeModal", {
  imperativeModal: function (v) {
    imperativeModal = v;
  }
}, 1);

var useImperativeModal = function (setModal) {
  useEffect(function () {
    var unsub = imperativeModal.on('update', function (descriptor) {
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
//# sourceMappingURL=/dynamic/client/views/hooks/76944135f2d9936fb12a14f0d34def2296c5568a.map
