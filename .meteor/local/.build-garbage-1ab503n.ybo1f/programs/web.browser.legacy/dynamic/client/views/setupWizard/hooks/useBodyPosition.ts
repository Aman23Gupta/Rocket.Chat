function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/hooks/useBodyPosition.ts                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useBodyPosition: function () {
    return useBodyPosition;
  }
});
var useEffect;
module.link("react", {
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);

var useBodyPosition = function (position) {
  var enabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  useEffect(function () {
    if (!enabled) {
      return;
    }

    var previous = document.body.style.position;
    document.body.style.position = position;
    return function () {
      document.body.style.position = previous;
    };
  }, [position, enabled]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/hooks/73da0f3471ca86363211e2110c7c49b78df8bee8.map
