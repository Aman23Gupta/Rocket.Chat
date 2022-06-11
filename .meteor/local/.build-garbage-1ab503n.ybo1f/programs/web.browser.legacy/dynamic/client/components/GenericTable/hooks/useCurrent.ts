function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/hooks/useCurrent.ts                                                                  //
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
  useCurrent: function () {
    return useCurrent;
  }
});
var useState;
module.link("react", {
  useState: function (v) {
    useState = v;
  }
}, 0);

var useCurrent = function () {
  var currentInitialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var _useState = useState(currentInitialValue),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  return [current, setCurrent];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/hooks/23410893132ce0ce7d9e3d29dba8072f67a9e9f5.map
