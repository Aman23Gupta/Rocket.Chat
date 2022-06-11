function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/data/usePeriodSelectorState.ts                                            //
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
  usePeriodSelectorState: function () {
    return usePeriodSelectorState;
  }
});
var useState;
module.link("react", {
  useState: function (v) {
    useState = v;
  }
}, 0);

var usePeriodSelectorState = function () {
  for (var _len = arguments.length, periods = new Array(_len), _key = 0; _key < _len; _key++) {
    periods[_key] = arguments[_key];
  }

  var _useState = useState(periods[0]),
      _useState2 = _slicedToArray(_useState, 2),
      period = _useState2[0],
      setPeriod = _useState2[1];

  return [period, {
    periods: periods,
    value: period,
    onChange: function (value) {
      return setPeriod(value);
    }
  }];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/data/86d7a21393db875ed590373625ac2495830bd030.map
