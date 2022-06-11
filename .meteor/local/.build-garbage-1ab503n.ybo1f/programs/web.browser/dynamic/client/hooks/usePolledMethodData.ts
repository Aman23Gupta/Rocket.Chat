function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/usePolledMethodData.ts                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["reload"];

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
module.export({
  usePolledMethodData: () => usePolledMethodData
});
let useEffect;
module.link("react", {
  useEffect(v) {
    useEffect = v;
  }

}, 0);
let useMethodData;
module.link("./useMethodData", {
  useMethodData(v) {
    useMethodData = v;
  }

}, 1);

const usePolledMethodData = function (methodName) {
  let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let intervalMs = arguments.length > 2 ? arguments[2] : undefined;

  const _useMethodData = useMethodData(methodName, args),
        {
    reload
  } = _useMethodData,
        state = _objectWithoutProperties(_useMethodData, _excluded);

  useEffect(() => {
    const timer = setInterval(() => {
      reload();
    }, intervalMs);
    return () => {
      clearInterval(timer);
    };
  }, [reload, intervalMs]);
  return _objectSpread(_objectSpread({}, state), {}, {
    reload
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/e66e040f3d468b82d9b178a6816faf7049e37251.map
