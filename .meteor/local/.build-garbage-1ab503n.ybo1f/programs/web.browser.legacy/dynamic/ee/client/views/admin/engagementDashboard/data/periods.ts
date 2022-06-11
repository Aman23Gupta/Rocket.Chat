function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/data/periods.ts                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  periods: function () {
    return periods;
  },
  getPeriod: function () {
    return getPeriod;
  },
  getPeriodRange: function () {
    return getPeriodRange;
  }
});
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 0);

var label = function (translationKey) {
  for (var _len = arguments.length, replacements = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    replacements[_key - 1] = arguments[_key];
  }

  return [translationKey].concat(replacements);
};

var lastNDays = function (n) {
  return function (utc) {
    return {
      start: utc ? moment.utc().startOf('day').subtract(n, 'days').toDate() : moment().startOf('day').subtract(n + 1, 'days').toDate(),
      end: utc ? moment.utc().endOf('day').subtract(1, 'days').toDate() : moment().endOf('day').toDate()
    };
  };
};

var periods = [{
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

var getPeriod = function (key) {
  var period = periods.find(function (period) {
    return period.key === key;
  });

  if (!period) {
    throw new Error("\"" + key + "\" is not a valid period key");
  }

  return period;
};

var getPeriodRange = function (key) {
  var utc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var period = periods.find(function (period) {
    return period.key === key;
  });

  if (!period) {
    throw new Error("\"" + key + "\" is not a valid period key");
  }

  return period.range(utc);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/data/6e0136db5ba83d6a291ed2e6d685241c800e699a.map
