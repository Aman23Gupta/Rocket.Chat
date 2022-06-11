function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/BusinessHoursMultipleContainer.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useForm;
module.link("../../../../client/hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 1);
let BusinessHoursMultiple;
module.link("./BusinessHoursMultiple", {
  default(v) {
    BusinessHoursMultiple = v;
  }

}, 2);

const mapDepartments = departments => departments.map(_ref => {
  let {
    _id,
    name
  } = _ref;
  return {
    value: _id,
    label: name
  };
});

const getInitialData = function () {
  var _data$active, _data$name;

  let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    active: (_data$active = data.active) !== null && _data$active !== void 0 ? _data$active : true,
    name: (_data$name = data.name) !== null && _data$name !== void 0 ? _data$name : '',
    departments: mapDepartments(data.departments)
  };
};

const BusinessHoursMultipleContainer = _ref2 => {
  let {
    onChange,
    data: initialData,
    className,
    hasChangesAndIsValid = () => {}
  } = _ref2;
  const {
    values,
    handlers,
    hasUnsavedChanges
  } = useForm(getInitialData(initialData));
  const {
    name
  } = values;
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/73a9ffb9290df3f5e55ba852edd6728ad3ecb954.map
