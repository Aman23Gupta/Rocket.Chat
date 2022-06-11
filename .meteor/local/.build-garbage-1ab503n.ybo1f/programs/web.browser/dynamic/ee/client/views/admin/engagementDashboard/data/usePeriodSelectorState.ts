function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/data/usePeriodSelectorState.ts                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  usePeriodSelectorState: () => usePeriodSelectorState
});
let useState;
module.link("react", {
  useState(v) {
    useState = v;
  }

}, 0);

const usePeriodSelectorState = function () {
  for (var _len = arguments.length, periods = new Array(_len), _key = 0; _key < _len; _key++) {
    periods[_key] = arguments[_key];
  }

  const [period, setPeriod] = useState(periods[0]);
  return [period, {
    periods,
    value: period,
    onChange: value => setPeriod(value)
  }];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/data/83fc1345af1d31e58da72e24a8abf01f997f1091.map
