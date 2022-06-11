function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/data/PeriodSelector.tsx                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);
var Select;
module.link("@rocket.chat/fuselage", {
  Select: function (v) {
    Select = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var getPeriod;
module.link("./periods", {
  getPeriod: function (v) {
    getPeriod = v;
  }
}, 3);

var PeriodSelector = function (_ref) {
  var periods = _ref.periods,
      value = _ref.value,
      onChange = _ref.onChange;
  var t = useTranslation();
  var options = useMemo(function () {
    return periods.map(function (period) {
      return [period, t.apply(void 0, _toConsumableArray(getPeriod(period).label))];
    });
  }, [periods, t]);
  return /*#__PURE__*/React.createElement(Select, {
    options: options,
    value: value,
    onChange: function (value) {
      return onChange(value);
    }
  });
};

module.exportDefault(PeriodSelector);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/data/304562c4d038f5fafdb43cbff42d3feaf12df756.map
