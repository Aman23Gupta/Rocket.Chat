function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/usePolledMethodData.ts                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["reload"];

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
module.export({
  usePolledMethodData: function () {
    return usePolledMethodData;
  }
});
var useEffect;
module.link("react", {
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);
var useMethodData;
module.link("./useMethodData", {
  useMethodData: function (v) {
    useMethodData = v;
  }
}, 1);

var usePolledMethodData = function (methodName) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var intervalMs = arguments.length > 2 ? arguments[2] : undefined;

  var _useMethodData = useMethodData(methodName, args),
      reload = _useMethodData.reload,
      state = _objectWithoutProperties(_useMethodData, _excluded);

  useEffect(function () {
    var timer = setInterval(function () {
      reload();
    }, intervalMs);
    return function () {
      clearInterval(timer);
    };
  }, [reload, intervalMs]);
  return _objectSpread(_objectSpread({}, state), {}, {
    reload: reload
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/206123c8cbdd4d4df686f1bd21107068f78157c3.map
