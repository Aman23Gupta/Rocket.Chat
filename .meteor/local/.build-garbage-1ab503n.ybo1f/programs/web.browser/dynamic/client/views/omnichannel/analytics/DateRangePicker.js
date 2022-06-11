function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/analytics/DateRangePicker.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onChange"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let Box, InputBox, Menu, Field;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  InputBox(v) {
    InputBox = v;
  },

  Menu(v) {
    Menu = v;
  },

  Field(v) {
    Field = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 2);
let React, useState, useMemo, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);

const formatToDateInput = date => date.format('YYYY-MM-DD');

const todayDate = formatToDateInput(moment());

const getMonthRange = monthsToSubtractFromToday => ({
  start: formatToDateInput(moment().subtract(monthsToSubtractFromToday, 'month').date(1)),
  end: formatToDateInput(monthsToSubtractFromToday === 0 ? moment() : moment().subtract(monthsToSubtractFromToday).date(0))
});

const getWeekRange = (daysToSubtractFromStart, daysToSubtractFromEnd) => ({
  start: formatToDateInput(moment().subtract(daysToSubtractFromStart, 'day')),
  end: formatToDateInput(moment().subtract(daysToSubtractFromEnd, 'day'))
});

const DateRangePicker = _ref => {
  let {
    onChange = () => {}
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const [range, setRange] = useState({
    start: '',
    end: ''
  });
  const {
    start,
    end
  } = range;
  const handleStart = useMutableCallback(_ref2 => {
    let {
      currentTarget
    } = _ref2;
    const rangeObj = {
      start: currentTarget.value,
      end: range.end
    };
    setRange(rangeObj);
    onChange(rangeObj);
  });
  const handleEnd = useMutableCallback(_ref3 => {
    let {
      currentTarget
    } = _ref3;
    const rangeObj = {
      end: currentTarget.value,
      start: range.start
    };
    setRange(rangeObj);
    onChange(rangeObj);
  });
  const handleRange = useMutableCallback(range => {
    setRange(range);
    onChange(range);
  });
  useEffect(() => {
    handleRange({
      start: todayDate,
      end: todayDate
    });
  }, [handleRange]);
  const options = useMemo(() => ({
    today: {
      icon: 'history',
      label: t('Today'),
      action: () => {
        handleRange(getWeekRange(0, 0));
      }
    },
    yesterday: {
      icon: 'history',
      label: t('Yesterday'),
      action: () => {
        handleRange(getWeekRange(1, 1));
      }
    },
    thisWeek: {
      icon: 'history',
      label: t('This_week'),
      action: () => {
        handleRange(getWeekRange(7, 0));
      }
    },
    previousWeek: {
      icon: 'history',
      label: t('Previous_week'),
      action: () => {
        handleRange(getWeekRange(14, 7));
      }
    },
    thisMonth: {
      icon: 'history',
      label: t('This_month'),
      action: () => {
        handleRange(getMonthRange(0));
      }
    },
    lastMonth: {
      icon: 'history',
      label: t('Previous_month'),
      action: () => {
        handleRange(getMonthRange(1));
      }
    }
  }), [handleRange, t]);
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/analytics/bfb4b7734d10c9dac871a849a14701063e03db66.map
