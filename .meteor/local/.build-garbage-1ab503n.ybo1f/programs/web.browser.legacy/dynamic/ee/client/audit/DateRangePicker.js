function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/DateRangePicker.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onChange"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var Box, InputBox, Menu, Margins;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  InputBox: function (v) {
    InputBox = v;
  },
  Menu: function (v) {
    Menu = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useState, useMemo, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 2);
var useTranslation;
module.link("../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var date = new Date();

var formatToDateInput = function (date) {
  return date.toISOString().slice(0, 10);
};

var todayDate = formatToDateInput(date);

var getMonthRange = function (monthsToSubtractFromToday) {
  var date = new Date();
  return {
    start: formatToDateInput(new Date(date.getFullYear(), date.getMonth() - monthsToSubtractFromToday, 1)),
    end: formatToDateInput(new Date(date.getFullYear(), date.getMonth() - monthsToSubtractFromToday + 1, 0))
  };
};

var getWeekRange = function (daysToSubtractFromStart, daysToSubtractFromEnd) {
  var date = new Date();
  return {
    start: formatToDateInput(new Date(date.getFullYear(), date.getMonth(), date.getDate() - daysToSubtractFromStart)),
    end: formatToDateInput(new Date(date.getFullYear(), date.getMonth(), date.getDate() - daysToSubtractFromEnd))
  };
};

var DateRangePicker = function (_ref) {
  var _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();

  var _useState = useState({
    start: '',
    end: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      range = _useState2[0],
      setRange = _useState2[1];

  var start = range.start,
      end = range.end;
  var handleStart = useMutableCallback(function (_ref2) {
    var currentTarget = _ref2.currentTarget;
    var rangeObj = {
      start: currentTarget.value,
      end: range.end
    };
    setRange(rangeObj);
    onChange(rangeObj);
  });
  var handleEnd = useMutableCallback(function (_ref3) {
    var currentTarget = _ref3.currentTarget;
    var rangeObj = {
      end: currentTarget.value,
      start: range.start
    };
    setRange(rangeObj);
    onChange(rangeObj);
  });
  var handleRange = useMutableCallback(function (range) {
    setRange(range);
    onChange(range);
  });
  useEffect(function () {
    handleRange({
      start: todayDate,
      end: todayDate
    });
  }, [handleRange]);
  var options = useMemo(function () {
    return {
      today: {
        icon: 'history',
        label: t('Today'),
        action: function () {
          handleRange(getWeekRange(0, 0));
        }
      },
      yesterday: {
        icon: 'history',
        label: t('Yesterday'),
        action: function () {
          handleRange(getWeekRange(1, 1));
        }
      },
      thisWeek: {
        icon: 'history',
        label: t('This_week'),
        action: function () {
          handleRange(getWeekRange(7, 0));
        }
      },
      previousWeek: {
        icon: 'history',
        label: t('Previous_week'),
        action: function () {
          handleRange(getWeekRange(14, 7));
        }
      },
      thisMonth: {
        icon: 'history',
        label: t('This_month'),
        action: function () {
          handleRange(getMonthRange(0));
        }
      },
      lastMonth: {
        icon: 'history',
        label: t('Previous_month'),
        action: function () {
          handleRange(getMonthRange(1));
        }
      }
    };
  }, [handleRange, t]);
  return /*#__PURE__*/React.createElement(Box, _extends({
    mi: "neg-x4"
  }, props), /*#__PURE__*/React.createElement(Margins, {
    inline: "x4"
  }, /*#__PURE__*/React.createElement(InputBox, {
    type: "date",
    onChange: handleStart,
    max: todayDate,
    value: start,
    flexGrow: 1,
    h: "x20"
  }), /*#__PURE__*/React.createElement(InputBox, {
    type: "date",
    onChange: handleEnd,
    max: todayDate,
    min: start,
    value: end,
    flexGrow: 1,
    h: "x20"
  }), /*#__PURE__*/React.createElement(Menu, {
    options: options,
    alignSelf: "center"
  })));
};

module.exportDefault(DateRangePicker);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/audit/df65588fee10b5da9cdefc24bb3b983bc07eaadc.map
