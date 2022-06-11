function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/businessHours/TimeRangeFieldsAssembler.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);
var Field;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  }
}, 0);
var useStableArray;
module.link("@rocket.chat/fuselage-hooks", {
  useStableArray: function (v) {
    useStableArray = v;
  }
}, 1);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var DAYS_OF_WEEK;
module.link("./BusinessHoursForm", {
  DAYS_OF_WEEK: function (v) {
    DAYS_OF_WEEK = v;
  }
}, 4);
var TimeRangeInput;
module.link("./TimeRangeInput", {
  "default": function (v) {
    TimeRangeInput = v;
  }
}, 5);

var TimeRangeFieldsAssembler = function (_ref) {
  var onChange = _ref.onChange,
      daysOpen = _ref.daysOpen,
      daysTime = _ref.daysTime,
      className = _ref.className;
  var t = useTranslation();

  var handleChange = function (day) {
    return function (start, finish) {
      var _objectSpread2;

      return onChange(_objectSpread(_objectSpread({}, daysTime), {}, (_objectSpread2 = {}, _objectSpread2[day] = {
        start: start,
        finish: finish
      }, _objectSpread2)));
    };
  };

  var stableDaysOpen = useStableArray(daysOpen);
  var daysList = useMemo(function () {
    return DAYS_OF_WEEK.filter(function (day) {
      return stableDaysOpen.includes(day);
    });
  }, [stableDaysOpen]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, daysList.map(function (day) {
    var _daysTime$day, _daysTime$day2;

    return /*#__PURE__*/React.createElement(Field, {
      className: className,
      key: day
    }, /*#__PURE__*/React.createElement(Field.Label, null, t(day)), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TimeRangeInput, {
      onChange: handleChange(day),
      start: (_daysTime$day = daysTime[day]) === null || _daysTime$day === void 0 ? void 0 : _daysTime$day.start,
      finish: (_daysTime$day2 = daysTime[day]) === null || _daysTime$day2 === void 0 ? void 0 : _daysTime$day2.finish
    })));
  }));
};

module.exportDefault(TimeRangeFieldsAssembler);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/businessHours/d6b626b0f2cab81638c9ab21477f842313ff88d2.map
