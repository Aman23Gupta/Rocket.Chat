function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/BusinessHoursTimeZone.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SelectFiltered, Field;
module.link("@rocket.chat/fuselage", {
  SelectFiltered: function (v) {
    SelectFiltered = v;
  },
  Field: function (v) {
    Field = v;
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
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var useForm;
module.link("../../../../client/hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 3);
var useTimezoneNameList;
module.link("../../../../client/hooks/useTimezoneNameList", {
  useTimezoneNameList: function (v) {
    useTimezoneNameList = v;
  }
}, 4);

var getInitialData = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    name: data !== null && data !== void 0 ? data : ''
  };
};

var BusinessHoursTimeZone = function (_ref) {
  var onChange = _ref.onChange,
      data = _ref.data,
      className = _ref.className,
      _ref$hasChanges = _ref.hasChanges,
      hasChanges = _ref$hasChanges === void 0 ? function () {} : _ref$hasChanges;
  var t = useTranslation();

  var _useForm = useForm(getInitialData(data)),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges;

  var name = values.name;
  var handleName = handlers.handleName;
  var timeZones = useTimezoneNameList();
  var timeZonesOptions = useMemo(function () {
    return timeZones.map(function (name) {
      return [name, t(name)];
    });
  }, [t, timeZones]);
  onChange && onChange({
    name: name
  });
  hasChanges(hasUnsavedChanges);
  return /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Timezone')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(SelectFiltered, {
    options: timeZonesOptions,
    value: name,
    onChange: handleName
  })));
};

module.exportDefault(BusinessHoursTimeZone);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/cfbd620b7b9f9332492bff930b8e630358344e5c.map
