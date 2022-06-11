function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/data/periods.ts                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  periods: () => periods,
  getPeriod: () => getPeriod,
  getPeriodRange: () => getPeriodRange
});
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 0);

const label = function (translationKey) {
  for (var _len = arguments.length, replacements = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    replacements[_key - 1] = arguments[_key];
  }

  return [translationKey, ...replacements];
};

const lastNDays = n => utc => ({
  start: utc ? moment.utc().startOf('day').subtract(n, 'days').toDate() : moment().startOf('day').subtract(n + 1, 'days').toDate(),
  end: utc ? moment.utc().endOf('day').subtract(1, 'days').toDate() : moment().endOf('day').toDate()
});

const periods = [{
  key: 'last 7 days',
  label: label('Last_7_days'),
  range: lastNDays(7)
}, {
  key: 'last 30 days',
  label: label('Last_30_days'),
  range: lastNDays(30)
}, {
  key: 'last 90 days',
  label: label('Last_90_days'),
  range: lastNDays(90)
}];

const getPeriod = key => {
  const period = periods.find(period => period.key === key);

  if (!period) {
    throw new Error("\"".concat(key, "\" is not a valid period key"));
  }

  return period;
};

const getPeriodRange = function (key) {
  let utc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const period = periods.find(period => period.key === key);

  if (!period) {
    throw new Error("\"".concat(key, "\" is not a valid period key"));
  }

  return period.range(utc);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/data/e9b47621f3dea2c04d49f0c71a0ae3e02ec0a5f6.map
