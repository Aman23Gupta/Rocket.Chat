function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/businessHours/BusinessHoursForm.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  DAYS_OF_WEEK: () => DAYS_OF_WEEK
});
let Field, MultiSelect;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  MultiSelect(v) {
    MultiSelect = v;
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
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let TimeRangeFieldsAssembler;
module.link("./TimeRangeFieldsAssembler", {
  default(v) {
    TimeRangeFieldsAssembler = v;
  }

}, 3);
const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const BusinessHoursForm = _ref => {
  let {
    values,
    handlers,
    className
  } = _ref;
  const t = useTranslation();
  const daysOptions = useMemo(() => DAYS_OF_WEEK.map(day => [day, t(day)]), [t]);
  const {
    daysOpen,
    daysTime
  } = values;
  const {
    handleDaysOpen,
    handleDaysTime
  } = handlers;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Open_days_of_the_week')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(MultiSelect, {
    options: daysOptions,
    onChange: handleDaysOpen,
    value: daysOpen,
    placeholder: t('Select_an_option'),
    w: "full"
  }))), /*#__PURE__*/React.createElement(TimeRangeFieldsAssembler, {
    onChange: handleDaysTime,
    daysOpen: daysOpen,
    daysTime: daysTime,
    className: className
  }));
};

module.exportDefault(BusinessHoursForm);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/businessHours/3b989d0cbb5915d2a1ba4d59ba8313b928163372.map
