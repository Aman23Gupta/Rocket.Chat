function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/DateRangePicker.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onChange"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Box, InputBox, Menu, Margins;
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

  Margins(v) {
    Margins = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
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

}, 2);
let useTranslation;
module.link("../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
const date = new Date();

const formatToDateInput = date => date.toISOString().slice(0, 10);

const todayDate = formatToDateInput(date);

const getMonthRange = monthsToSubtractFromToday => {
  const date = new Date();
  return {
    start: formatToDateInput(new Date(date.getFullYear(), date.getMonth() - monthsToSubtractFromToday, 1)),
    end: formatToDateInput(new Date(date.getFullYear(), date.getMonth() - monthsToSubtractFromToday + 1, 0))
  };
};

const getWeekRange = (daysToSubtractFromStart, daysToSubtractFromEnd) => {
  const date = new Date();
  return {
    start: formatToDateInput(new Date(date.getFullYear(), date.getMonth(), date.getDate() - daysToSubtractFromStart)),
    end: formatToDateInput(new Date(date.getFullYear(), date.getMonth(), date.getDate() - daysToSubtractFromEnd))
  };
};

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
//# sourceMappingURL=/dynamic/ee/client/audit/3db6e60e24fd188be14efb7514642acec1c1efcc.map
