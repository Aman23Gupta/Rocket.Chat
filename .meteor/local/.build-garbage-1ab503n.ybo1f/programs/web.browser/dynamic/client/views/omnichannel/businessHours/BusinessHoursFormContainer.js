function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/businessHours/BusinessHoursFormContainer.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let FieldGroup, Box;
module.link("@rocket.chat/fuselage", {
  FieldGroup(v) {
    FieldGroup = v;
  },

  Box(v) {
    Box = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useEffect, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let useSubscription;
module.link("use-subscription", {
  useSubscription(v) {
    useSubscription = v;
  }

}, 3);
let businessHourManager;
module.link("../../../../app/livechat/client/views/app/business-hours/BusinessHours", {
  businessHourManager(v) {
    businessHourManager = v;
  }

}, 4);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 5);
let useReactiveValue;
module.link("../../../hooks/useReactiveValue", {
  useReactiveValue(v) {
    useReactiveValue = v;
  }

}, 6);
let formsSubscription;
module.link("../additionalForms", {
  formsSubscription(v) {
    formsSubscription = v;
  }

}, 7);
let BusinessHourForm;
module.link("./BusinessHoursForm", {
  default(v) {
    BusinessHourForm = v;
  }

}, 8);

const useChangeHandler = (name, ref) => useMutableCallback(val => {
  ref.current[name] = _objectSpread(_objectSpread({}, ref.current[name]), val);
});

const getInitalData = _ref => {
  let {
    workHours
  } = _ref;
  return {
    daysOpen: workHours.filter(_ref2 => {
      let {
        open
      } = _ref2;
      return !!open;
    }).map(_ref3 => {
      let {
        day
      } = _ref3;
      return day;
    }),
    daysTime: workHours.reduce((acc, _ref4) => {
      let {
        day,
        start: {
          time: start
        },
        finish: {
          time: finish
        }
      } = _ref4;
      acc = _objectSpread(_objectSpread({}, acc), {}, {
        [day]: {
          start,
          finish
        }
      });
      return acc;
    }, {})
  };
};

const cleanFunc = () => {};

const BusinessHoursFormContainer = _ref5 => {
  var _data$timezone$name, _data$timezone;

  let {
    data,
    saveRef,
    onChange = () => {}
  } = _ref5;
  const forms = useSubscription(formsSubscription);
  const [hasChangesMultiple, setHasChangesMultiple] = useState(false);
  const [hasChangesTimeZone, setHasChangesTimeZone] = useState(false);
  const {
    useBusinessHoursTimeZone = cleanFunc,
    useBusinessHoursMultiple = cleanFunc
  } = forms;
  const TimezoneForm = useBusinessHoursTimeZone();
  const MultipleBHForm = useBusinessHoursMultiple();
  const showTimezone = useReactiveValue(useMutableCallback(() => businessHourManager.showTimezoneTemplate()));
  const showMultipleBHForm = useReactiveValue(useMutableCallback(() => businessHourManager.showCustomTemplate(data)));
  const onChangeTimezone = useChangeHandler('timezone', saveRef);
  const onChangeMultipleBHForm = useChangeHandler('multiple', saveRef);
  const {
    values,
    handlers,
    hasUnsavedChanges
  } = useForm(getInitalData(data));
  saveRef.current.form = values;
  useEffect(() => {
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/businessHours/96b214bc906891aa4d85b812e9fec9efe6d1ca67.map
