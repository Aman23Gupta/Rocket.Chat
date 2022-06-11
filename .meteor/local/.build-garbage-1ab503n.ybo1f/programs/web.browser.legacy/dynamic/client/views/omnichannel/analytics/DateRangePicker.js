function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/analytics/DateRangePicker.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onChange"];

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Box, InputBox, Menu, Field;
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
  Field: function (v) {
    Field = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 2);
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
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);

var formatToDateInput = function (date) {
  return date.format('YYYY-MM-DD');
};

var todayDate = formatToDateInput(moment());

var getMonthRange = function (monthsToSubtractFromToday) {
  return {
    start: formatToDateInput(moment().subtract(monthsToSubtractFromToday, 'month').date(1)),
    end: formatToDateInput(monthsToSubtractFromToday === 0 ? moment() : moment().subtract(monthsToSubtractFromToday).date(0))
  };
};

var getWeekRange = function (daysToSubtractFromStart, daysToSubtractFromEnd) {
  return {
    start: formatToDateInput(moment().subtract(daysToSubtractFromStart, 'day')),
    end: formatToDateInput(moment().subtract(daysToSubtractFromEnd, 'day'))
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
  return /*#__PURE__*/React.createElement(Box, props, /*#__PURE__*/React.createElement(Box, {
    mi: "neg-x4",
    height: "full",
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field, {
    mi: "x4",
    flexShrink: 1,
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Start')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    height: "x40",
    display: "flex",
    width: "full"
  }, /*#__PURE__*/React.createElement(InputBox, {
    type: "date",
    onChange: handleStart,
    max: todayDate,
    value: start
  })))), /*#__PURE__*/React.createElement(Field, {
    mi: "x4",
    flexShrink: 1,
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('End')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    height: "x40",
    display: "flex",
    width: "full"
  }, /*#__PURE__*/React.createElement(InputBox, {
    type: "date",
    onChange: handleEnd,
    min: start,
    max: todayDate,
    value: end
  })), /*#__PURE__*/React.createElement(Menu, {
    mis: "x8",
    options: options
  })))));
};

module.exportDefault(DateRangePicker);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/analytics/9316825e1d9ef73fbfc97131747dcc1725ef52ba.map
