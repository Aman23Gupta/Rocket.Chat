function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/businessHours/BusinessHoursForm.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  DAYS_OF_WEEK: function () {
    return DAYS_OF_WEEK;
  }
});
var Field, MultiSelect;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  MultiSelect: function (v) {
    MultiSelect = v;
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
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var TimeRangeFieldsAssembler;
module.link("./TimeRangeFieldsAssembler", {
  "default": function (v) {
    TimeRangeFieldsAssembler = v;
  }
}, 3);
var DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var BusinessHoursForm = function (_ref) {
  var values = _ref.values,
      handlers = _ref.handlers,
      className = _ref.className;
  var t = useTranslation();
  var daysOptions = useMemo(function () {
    return DAYS_OF_WEEK.map(function (day) {
      return [day, t(day)];
    });
  }, [t]);
  var daysOpen = values.daysOpen,
      daysTime = values.daysTime;
  var handleDaysOpen = handlers.handleDaysOpen,
      handleDaysTime = handlers.handleDaysTime;
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/businessHours/9bb21bf6f3d937bef4204636508888ad311dc339.map
