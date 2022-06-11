function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/businessHours/TimeRangeFieldsAssembler.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Field;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  }

}, 0);
let useStableArray;
module.link("@rocket.chat/fuselage-hooks", {
  useStableArray(v) {
    useStableArray = v;
  }

}, 1);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let DAYS_OF_WEEK;
module.link("./BusinessHoursForm", {
  DAYS_OF_WEEK(v) {
    DAYS_OF_WEEK = v;
  }

}, 4);
let TimeRangeInput;
module.link("./TimeRangeInput", {
  default(v) {
    TimeRangeInput = v;
  }

}, 5);

const TimeRangeFieldsAssembler = _ref => {
  let {
    onChange,
    daysOpen,
    daysTime,
    className
  } = _ref;
  const t = useTranslation();

  const handleChange = day => (start, finish) => onChange(_objectSpread(_objectSpread({}, daysTime), {}, {
    [day]: {
      start,
      finish
    }
  }));

  const stableDaysOpen = useStableArray(daysOpen);
  const daysList = useMemo(() => DAYS_OF_WEEK.filter(day => stableDaysOpen.includes(day)), [stableDaysOpen]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, daysList.map(day => {
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/businessHours/0e5e2ae1c42a2505b6a524f87d9e477b4b3c9a5c.map
