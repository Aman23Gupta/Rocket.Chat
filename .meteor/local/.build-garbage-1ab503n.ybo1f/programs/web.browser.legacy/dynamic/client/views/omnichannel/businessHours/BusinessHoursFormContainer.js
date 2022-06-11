function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/businessHours/BusinessHoursFormContainer.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);
var FieldGroup, Box;
module.link("@rocket.chat/fuselage", {
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  Box: function (v) {
    Box = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useEffect, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var useSubscription;
module.link("use-subscription", {
  useSubscription: function (v) {
    useSubscription = v;
  }
}, 3);
var businessHourManager;
module.link("../../../../app/livechat/client/views/app/business-hours/BusinessHours", {
  businessHourManager: function (v) {
    businessHourManager = v;
  }
}, 4);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 5);
var useReactiveValue;
module.link("../../../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 6);
var formsSubscription;
module.link("../additionalForms", {
  formsSubscription: function (v) {
    formsSubscription = v;
  }
}, 7);
var BusinessHourForm;
module.link("./BusinessHoursForm", {
  "default": function (v) {
    BusinessHourForm = v;
  }
}, 8);

var useChangeHandler = function (name, ref) {
  return useMutableCallback(function (val) {
    ref.current[name] = _objectSpread(_objectSpread({}, ref.current[name]), val);
  });
};

var getInitalData = function (_ref) {
  var workHours = _ref.workHours;
  return {
    daysOpen: workHours.filter(function (_ref2) {
      var open = _ref2.open;
      return !!open;
    }).map(function (_ref3) {
      var day = _ref3.day;
      return day;
    }),
    daysTime: workHours.reduce(function (acc, _ref4) {
      var _objectSpread2;

      var day = _ref4.day,
          start = _ref4.start.time,
          finish = _ref4.finish.time;
      acc = _objectSpread(_objectSpread({}, acc), {}, (_objectSpread2 = {}, _objectSpread2[day] = {
        start: start,
        finish: finish
      }, _objectSpread2));
      return acc;
    }, {})
  };
};

var cleanFunc = function () {};

var BusinessHoursFormContainer = function (_ref5) {
  var _data$timezone$name, _data$timezone;

  var data = _ref5.data,
      saveRef = _ref5.saveRef,
      _ref5$onChange = _ref5.onChange,
      onChange = _ref5$onChange === void 0 ? function () {} : _ref5$onChange;
  var forms = useSubscription(formsSubscription);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasChangesMultiple = _useState2[0],
      setHasChangesMultiple = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasChangesTimeZone = _useState4[0],
      setHasChangesTimeZone = _useState4[1];

  var _forms$useBusinessHou = forms.useBusinessHoursTimeZone,
      useBusinessHoursTimeZone = _forms$useBusinessHou === void 0 ? cleanFunc : _forms$useBusinessHou,
      _forms$useBusinessHou2 = forms.useBusinessHoursMultiple,
      useBusinessHoursMultiple = _forms$useBusinessHou2 === void 0 ? cleanFunc : _forms$useBusinessHou2;
  var TimezoneForm = useBusinessHoursTimeZone();
  var MultipleBHForm = useBusinessHoursMultiple();
  var showTimezone = useReactiveValue(useMutableCallback(function () {
    return businessHourManager.showTimezoneTemplate();
  }));
  var showMultipleBHForm = useReactiveValue(useMutableCallback(function () {
    return businessHourManager.showCustomTemplate(data);
  }));
  var onChangeTimezone = useChangeHandler('timezone', saveRef);
  var onChangeMultipleBHForm = useChangeHandler('multiple', saveRef);

  var _useForm = useForm(getInitalData(data)),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges;

  saveRef.current.form = values;
  useEffect(function () {
    onChange(hasUnsavedChanges || showMultipleBHForm && hasChangesMultiple || showTimezone && hasChangesTimeZone);
  });
  return /*#__PURE__*/React.createElement(Box, {
    maxWidth: "600px",
    w: "full",
    alignSelf: "center"
  }, /*#__PURE__*/React.createElement(FieldGroup, null, showMultipleBHForm && MultipleBHForm && /*#__PURE__*/React.createElement(MultipleBHForm, {
    onChange: onChangeMultipleBHForm,
    data: data,
    hasChangesAndIsValid: setHasChangesMultiple
  }), showTimezone && TimezoneForm && /*#__PURE__*/React.createElement(TimezoneForm, {
    onChange: onChangeTimezone,
    data: (_data$timezone$name = data === null || data === void 0 ? void 0 : (_data$timezone = data.timezone) === null || _data$timezone === void 0 ? void 0 : _data$timezone.name) !== null && _data$timezone$name !== void 0 ? _data$timezone$name : data === null || data === void 0 ? void 0 : data.timezoneName,
    hasChanges: setHasChangesTimeZone
  }), /*#__PURE__*/React.createElement(BusinessHourForm, {
    values: values,
    handlers: handlers
  })));
};

module.exportDefault(BusinessHoursFormContainer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/businessHours/bdfa2716dedc8fce9d837d45cf9e16d1b4cde222.map
