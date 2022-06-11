function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/BusinessHoursMultipleContainer.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useForm;
module.link("../../../../client/hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 1);
var BusinessHoursMultiple;
module.link("./BusinessHoursMultiple", {
  "default": function (v) {
    BusinessHoursMultiple = v;
  }
}, 2);

var mapDepartments = function (departments) {
  return departments.map(function (_ref) {
    var _id = _ref._id,
        name = _ref.name;
    return {
      value: _id,
      label: name
    };
  });
};

var getInitialData = function () {
  var _data$active, _data$name;

  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    active: (_data$active = data.active) !== null && _data$active !== void 0 ? _data$active : true,
    name: (_data$name = data.name) !== null && _data$name !== void 0 ? _data$name : '',
    departments: mapDepartments(data.departments)
  };
};

var BusinessHoursMultipleContainer = function (_ref2) {
  var onChange = _ref2.onChange,
      initialData = _ref2.data,
      className = _ref2.className,
      _ref2$hasChangesAndIs = _ref2.hasChangesAndIsValid,
      hasChangesAndIsValid = _ref2$hasChangesAndIs === void 0 ? function () {} : _ref2$hasChangesAndIs;

  var _useForm = useForm(getInitialData(initialData)),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges;

  var name = values.name;
  onChange(values);
  hasChangesAndIsValid(hasUnsavedChanges && !!name);
  return /*#__PURE__*/React.createElement(BusinessHoursMultiple, {
    values: values,
    handlers: handlers,
    className: className
  });
};

module.exportDefault(BusinessHoursMultipleContainer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/0d6a712f93632ae0c3e1b67a81c6591548a5034e.map
