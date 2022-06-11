function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/data/PeriodSelector.tsx                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Select;
module.link("@rocket.chat/fuselage", {
  Select(v) {
    Select = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let getPeriod;
module.link("./periods", {
  getPeriod(v) {
    getPeriod = v;
  }

}, 3);

const PeriodSelector = _ref => {
  let {
    periods,
    value,
    onChange
  } = _ref;
  const t = useTranslation();
  const options = useMemo(() => periods.map(period => [period, t(...getPeriod(period).label)]), [periods, t]);
  return /*#__PURE__*/React.createElement(Select, {
    options: options,
    value: value,
    onChange: value => onChange(value)
  });
};

module.exportDefault(PeriodSelector);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/data/bc602b105c1f0c3e6a9af2a9cf9f63bccdbd7718.map
