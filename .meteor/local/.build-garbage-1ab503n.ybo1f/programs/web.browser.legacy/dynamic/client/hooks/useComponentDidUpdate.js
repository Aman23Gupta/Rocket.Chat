function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useComponentDidUpdate.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useComponentDidUpdate: function () {
    return useComponentDidUpdate;
  }
});
var useEffect, useRef;
module.link("react", {
  useEffect: function (v) {
    useEffect = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 0);

var useComponentDidUpdate = function (effect) {
  var dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var hasMounted = useRef(false);
  useEffect(function () {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    effect(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/2b5b0c67242d893a154854f960e6c187e3bcdb52.map
