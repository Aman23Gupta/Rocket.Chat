function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/location/useAsyncImage.ts                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useAsyncImage: function () {
    return useAsyncImage;
  }
});
var useEffect;
module.link("react", {
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);
var useAsyncState;
module.link("../../hooks/useAsyncState", {
  useAsyncState: function (v) {
    useAsyncState = v;
  }
}, 1);

var useAsyncImage = function (src) {
  var _useAsyncState = useAsyncState(),
      value = _useAsyncState.value,
      resolve = _useAsyncState.resolve,
      reject = _useAsyncState.reject,
      reset = _useAsyncState.reset;

  useEffect(function () {
    reset();

    if (!src) {
      return;
    }

    var image = new Image();
    image.addEventListener('load', function () {
      resolve(image.src);
    });
    image.addEventListener('error', function (e) {
      reject(e.error);
    });
    image.src = src;
  }, [src, resolve, reject, reset]);
  return value;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/location/43f51bb1c99faabd9e353eb592fa873d7aacfd4f.map
