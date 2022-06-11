function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/location/useAsyncImage.ts                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useAsyncImage: () => useAsyncImage
});
let useEffect;
module.link("react", {
  useEffect(v) {
    useEffect = v;
  }

}, 0);
let useAsyncState;
module.link("../../hooks/useAsyncState", {
  useAsyncState(v) {
    useAsyncState = v;
  }

}, 1);

const useAsyncImage = src => {
  const {
    value,
    resolve,
    reject,
    reset
  } = useAsyncState();
  useEffect(() => {
    reset();

    if (!src) {
      return;
    }

    const image = new Image();
    image.addEventListener('load', () => {
      resolve(image.src);
    });
    image.addEventListener('error', e => {
      reject(e.error);
    });
    image.src = src;
  }, [src, resolve, reject, reset]);
  return value;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/location/880ce2a15166eb3582d91359752a5f375a95f7c0.map
