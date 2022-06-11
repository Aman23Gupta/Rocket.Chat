function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useReactiveVar.ts                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
module.export({
  useReactiveVar: function () {
    return useReactiveVar;
  }
});
var Tracker;
module.link("meteor/tracker", {
  Tracker: function (v) {
    Tracker = v;
  }
}, 0);
var useEffect, useState;
module.link("react", {
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);

var useReactiveVar = function (variable) {
  var _useState = useState(function () {
    return Tracker.nonreactive(function () {
      return variable.get();
    });
  }),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  useEffect(function () {
    var computation = Tracker.autorun(function () {
      var value = variable.get();
      setValue(function () {
        return value;
      });
    });
    return function () {
      computation.stop();
    };
  }, [variable]);
  return value;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/1f5a99bc695fd996bf8809c27cb9765e3e5f2caa.map
